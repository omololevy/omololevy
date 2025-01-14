from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
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
