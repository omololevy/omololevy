import SkillBadge from "@/components/SkillBadge";
import AnimatedBackground from '@/components/AnimatedBackground';

const skills = [
  { name: "Python", icon: "/icons/python-svgrepo-com.svg", color: "bg-cyan-100 text-cyan-800" },
  { name: "React", icon: "/icons/react-svgrepo-com.svg", color: "bg-cyan-100 text-cyan-800" },
  { name: "TypeScript", icon: "/icons/typescript-svgrepo-com.svg", color: "bg-purple-100 text-purple-800" },
  { name: "Node.js", icon: "/icons/node-js-svgrepo-com.svg", color: "bg-cyan-100 text-cyan-800" },
  { name: "Django", icon: "/icons/django-icon-svgrepo-com.svg", color: "bg-purple-100 text-purple-800" },
  { name: "GraphQL", icon: "/icons/graphql-svgrepo-com.svg", color: "bg-purple-100 text-purple-800" },
  { name: "Docker", icon: "/icons/docker-svgrepo-com.svg", color: "bg-cyan-100 text-cyan-800" },
  { name: "Kubernetes", icon: "/icons/kubernetes-svgrepo-com.svg", color: "bg-purple-100 text-purple-800" },
  { name: "PostgreSQL", icon: "/icons/postgresql-svgrepo-com.svg", color: "bg-cyan-100 text-cyan-800" },
  { name: "Angular", icon: "/icons/angular-svgrepo-com.svg", color: "bg-purple-100 text-purple-800" },
  { name: "Next.js", icon: "/icons/nextjs-svgrepo-com.svg", color: "bg-cyan-100 text-cyan-800" },
  { name: "Firebase", icon: "/icons/firebase-svgrepo-com.svg", color: "bg-purple-100 text-purple-800" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <section className="py-20 px-8 sm:px-20 bg-gradient-to-br from-background to-background/50">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight glow-heading leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Levy Omolo
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/70 leading-relaxed max-w-2xl">
            Senior Software Engineer specializing in full-stack development with expertise in Python, Django, React, and cloud technologies. I build scalable, secure, and high-performing applications that make a difference.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/contact"
              className="px-8 py-3.5 btn-brand rounded-xl font-semibold text-lg"
            >
              Get in touch
            </a>
            <a
              href="/projects"
              className="px-8 py-3.5 btn-outline rounded-xl font-semibold text-lg"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-8 sm:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 glow-heading">Technical Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <SkillBadge
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
