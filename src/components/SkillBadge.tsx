import Image from "next/image";

interface SkillBadgeProps {
  name: string;
  icon: string;
  color: string;
}

export default function SkillBadge({ name, icon, color }: SkillBadgeProps) {
  return (
    <div
      className={`skill-badge flex items-center gap-2.5 px-4 py-2.5 rounded-full ${color}`}
    >
      <Image src={icon} alt={name} width={24} height={24} className="w-5 h-5" />
      <span className="text-sm font-semibold">{name}</span>
    </div>
  );
}
