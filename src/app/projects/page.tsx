"use client";
import { useState, useMemo } from "react";
import ProjectCard from "../../components/ProjectCard";
import ProjectFilter from "../../components/ProjectFilter";
import AnimatedBackground from "../../components/AnimatedBackground";

export default function Projects() {
  const projects = useMemo(() => [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management.",
      imageUrl: "/images/project1.jpg",
      projectUrl: "https://example.com/project1",
      tags: ["React", "Node.js", "MongoDB", "Docker"],
    },
    {
      title: "Church Management System",
      description:
        "Comprehensive church management system with member tracking and event management.",
      imageUrl: "/images/project2.png",
      projectUrl: "https://utawala.onrender.com",
      tags: ["Python", "Django", "PostgreSQL", "Docker"],
    },
    // Add more projects with relevant tags
  ], []);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Extract unique tags from all projects
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [projects]);

  // Filter projects based on selected tags
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return projects;
    return projects.filter((project) =>
      selectedTags.some((tag) => project.tags.includes(tag))
    );
  }, [projects, selectedTags]);

  // Handle tag selection
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
          <h1 className="text-4xl font-bold mb-8">Projects</h1>

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
