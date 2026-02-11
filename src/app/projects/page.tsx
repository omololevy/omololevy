"use client";
import { useState, useMemo } from "react";
import ProjectCard from "../../components/ProjectCard";
import ProjectFilter from "../../components/ProjectFilter";
import AnimatedBackground from "../../components/AnimatedBackground";

export default function Projects() {
  const projects = useMemo(() => [
    {
      title: "Kiungor",
      description:
        "AI-powered immigration platform that helps newcomers navigate migration processes seamlessly — from visa applications to job listings and real-time language translation.",
      imageUrl: "/images/projects/kiungor/kiungor.png",
      projectUrl: "https://kiungor.com",
      tags: ["Next.js", "TypeScript", "Python", "Django", "PostgreSQL", "Azure", "AI"],
    },
    {
      title: "CIRIS",
      description:
        "Document validation infrastructure that reduces processing errors by 40-60% before submission — catching inconsistencies and missing documentation through AI-driven file analysis.",
      imageUrl: "/images/projects/ciris/ciris.png",
      projectUrl: "https://ciris.vercel.app",
      tags: ["Next.js", "FastAPI", "Python", "Azure", "AI", "Vercel"],
    },
    {
      title: "GatePass",
      description:
        "Comprehensive exam preparation system for students with analytics dashboards, question banks by category, and multiple test session formats including MCQ, SATA, and NGN.",
      imageUrl: "/images/projects/gatepass/gatepass.png",
      projectUrl: "https://gatepass.vercel.app",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Vercel"],
    },
    {
      title: "Utawala Church Management",
      description:
        "Full-featured church management system handling member check-in, attendance tracking, budgeting, events management, and demographic accountability groups.",
      imageUrl: "/images/projects/church_lms/church_lms.png",
      projectUrl: "https://utawala.onrender.com",
      tags: ["Python", "Django", "Render"],
    },
    {
      title: "Cotechie",
      description:
        "Company profile portfolio showcasing completed projects, tech stack expertise, and service offerings — built for speed and modern aesthetics.",
      imageUrl: "/images/projects/cotechie/cotechie.png",
      projectUrl: "https://cotechie.vercel.app",
      tags: ["Next.js", "TypeScript", "Vercel"],
    },
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, secure checkout, and an admin dashboard for product and order tracking.",
      imageUrl: "/images/project1.jpg",
      projectUrl: "https://example.com/project1",
      tags: ["React", "Node.js", "MongoDB", "Docker"],
    },
  ], []);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return projects;
    return projects.filter((project) =>
      selectedTags.some((tag) => project.tags.includes(tag))
    );
  }, [projects, selectedTags]);

  const handleTagSelect = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <div className="min-h-screen p-8 sm:p-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 glow-heading leading-tight">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-foreground/60 mb-10 text-lg max-w-2xl">
            A selection of products I&apos;ve built — from AI-powered platforms to full-stack web applications.
          </p>

          <ProjectFilter
            tags={allTags}
            selectedTags={selectedTags}
            onTagSelect={handleTagSelect}
          />

          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 text-foreground/70">
              No projects found with the selected filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  projectUrl={project.projectUrl}
                  tags={project.tags}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
