import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[]; // Required prop now
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
  tags,
}: ProjectCardProps) {
  return (
    <div className="group relative bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
      <div className="relative h-48 md:h-64">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
      </div>

      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-foreground/10 text-foreground/80"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-foreground/70 text-sm leading-relaxed">
          {description}
        </p>

        <div className="pt-4 flex items-center gap-4">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background transition-colors hover:bg-foreground/90"
          >
            View Project
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>

          <a
            href={`${projectUrl}#details`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Learn more →
          </a>
        </div>
      </div>
    </div>
  );
}
