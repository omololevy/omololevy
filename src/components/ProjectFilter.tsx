interface ProjectFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagSelect: (tag: string) => void;
}

export default function ProjectFilter({
  tags,
  selectedTags,
  onTagSelect,
}: ProjectFilterProps) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4">Filter by technology:</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagSelect(tag)}
            className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
              selectedTags.includes(tag)
                ? "bg-foreground text-background"
                : "bg-foreground/10 hover:bg-foreground/20"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
