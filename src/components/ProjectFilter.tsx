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
            className={`filter-tag px-4 py-1.5 rounded-full text-sm font-medium ${
              selectedTags.includes(tag)
                ? "selected"
                : "bg-foreground/10"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
