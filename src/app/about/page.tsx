import AnimatedBackground from '../../components/AnimatedBackground';

export default function About() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <div className="min-h-screen p-8 sm:p-20 relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-10 glow-heading leading-tight">
          About{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Me
          </span>
        </h1>
        <div className="space-y-10 text-lg">
          <p className="leading-relaxed text-foreground/80 max-w-2xl">
            I am a passionate and results-driven software engineer with extensive experience in building scalable, secure, and high-performing applications. With expertise in Python, Django, Flask, and REST APIs, I specialize in creating backend systems that efficiently handle complex data and processes.
          </p>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-accent">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="about-skill-card space-y-2">
                <h3 className="font-semibold text-primary">Backend Development</h3>
                <p className="text-foreground/70 text-base">Python, Django, Flask, REST APIs, GraphQL</p>
              </div>
              <div className="about-skill-card space-y-2">
                <h3 className="font-semibold text-primary">Frontend Development</h3>
                <p className="text-foreground/70 text-base">JavaScript, TypeScript, Angular, React, Next.js</p>
              </div>
              <div className="about-skill-card space-y-2">
                <h3 className="font-semibold text-primary">Database Management</h3>
                <p className="text-foreground/70 text-base">MySQL, PostgreSQL, SQLite, Firebase</p>
              </div>
              <div className="about-skill-card space-y-2">
                <h3 className="font-semibold text-primary">DevOps & Deployment</h3>
                <p className="text-foreground/70 text-base">Docker, Kubernetes, CI/CD, Bash scripting</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-accent">Experience Highlights</h2>
            <ul className="list-disc list-inside space-y-3 text-foreground/70">
              <li>Designed and implemented scalable backend systems handling high-volume data processing</li>
              <li>Built dynamic user interfaces for progressive web applications using React and Angular</li>
              <li>Developed flexible APIs using REST and GraphQL, empowering clients with tailored data access</li>
              <li>Streamlined deployment pipelines with Docker, Kubernetes, and CI/CD automation tools</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
