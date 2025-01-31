import SkillBadge from "@/components/SkillBadge";
import AnimatedBackground from '@/components/AnimatedBackground';

const skills = [
  { name: "Python", icon: "/icons/python-svgrepo-com.svg", color: "bg-yellow-100 text-yellow-800" },
  { name: "React", icon: "/icons/react-svgrepo-com.svg", color: "bg-blue-100 text-blue-800" },
  { name: "TypeScript", icon: "/icons/typescript-svgrepo-com.svg", color: "bg-blue-100 text-blue-800" },
  { name: "Node.js", icon: "/icons/node-js-svgrepo-com.svg", color: "bg-green-100 text-green-800" },
  { name: "Django", icon: "/icons/django-svgrepo-com.svg", color: "bg-green-100 text-green-800" },
  { name: "GraphQL", icon: "/icons/graphql-svgrepo-com.svg", color: "bg-pink-100 text-pink-800" },
  { name: "Docker", icon: "/icons/docker-svgrepo-com.svg", color: "bg-blue-100 text-blue-800" },
  { name: "Kubernetes", icon: "/icons/kubernetes-svgrepo-com.svg", color: "bg-blue-100 text-blue-800" },
  { name: "PostgreSQL", icon: "/icons/postgresql-svgrepo-com.svg", color: "bg-blue-100 text-blue-800" },
  { name: "Angular", icon: "/icons/angular-svgrepo-com.svg", color: "bg-red-100 text-red-800" },
  { name: "Next.js", icon: "/icons/nextjs-svgrepo-com.svg", color: "bg-gray-100 text-gray-800" },
  { name: "Firebase", icon: "/icons/firebase-svgrepo-com.svg", color: "bg-yellow-100 text-yellow-800" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <section className="py-20 px-8 sm:px-20 bg-gradient-to-br from-background to-background/50">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Hi, I&apos;m <span className="text-primary">Levy Omolo</span> 👋
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Senior Software Engineer specializing in full-stack development with expertise in Python, Django, React, and cloud technologies. I build scalable, secure, and high-performing applications that make a difference.
          </p>
          <div className="flex gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors"
            >
              Get in touch
            </a>
            <a
              href="/projects"
              className="px-6 py-3 border border-foreground/20 rounded-lg hover:bg-foreground/5 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-8 sm:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
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
