from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_mail import Mail, Message
import os

app = Flask(__name__)
CORS(app)

# Email configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.environ.get('EMAIL_USER')  # Your Gmail address
app.config['MAIL_PASSWORD'] = os.environ.get('EMAIL_PASS')  # Your Gmail app password
app.config['MAIL_DEFAULT_SENDER'] = os.environ.get('EMAIL_USER')

mail = Mail(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///projects.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(200), nullable=False)
    imageUrl = db.Column(db.String(200), nullable=False)
    projectUrl = db.Column(db.String(200), nullable=False)
    tags = db.Column(db.String(200), nullable=False)  # Store tags as comma-separated string

    def to_dict(self):
        return {
            "title": self.title,
            "description": self.description,
            "imageUrl": self.imageUrl,
            "projectUrl": self.projectUrl,
            "tags": self.tags.split(',')
        }

@app.route('/projects', methods=['GET'])
def get_projects():
    tag = request.args.get('tag')
    if tag:
        projects = Project.query.filter(Project.tags.like(f'%{tag}%')).all()
    else:
        projects = Project.query.all()
    return jsonify([project.to_dict() for project in projects])

@app.route('/contact', methods=['POST'])
def handle_contact():
    try:
        data = request.json
        name = data.get('name')
        email = data.get('email')
        subject = data.get('subject')
        message = data.get('message')

        # Create email message
        msg = Message(
            subject=f"Portfolio Contact: {subject}",
            recipients=[os.environ.get('EMAIL_USER')],  # Your email address
            body=f"""
            New contact form submission:
            
            From: {name} ({email})
            Subject: {subject}
            
            Message:
            {message}
            """
        )

        # Send email
        mail.send(msg)

        return jsonify({"message": "Message sent successfully"}), 200
    except Exception as e:
        print(e)  # For debugging
        return jsonify({"error": "Failed to send message"}), 500

@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Not found"}), 404

@app.errorhandler(500)
def server_error(error):
    return jsonify({"error": "Server error"}), 500

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
