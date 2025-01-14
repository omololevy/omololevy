import Image from "next/image";

interface SkillBadgeProps {
  name: string;
  icon: string;
  color: string;
}

export default function SkillBadge({ name, icon, color }: SkillBadgeProps) {
  return (
    <div 
      className={`flex items-center gap-2 px-4 py-2 rounded-full ${color} transition-transform hover:scale-110`}
    >
      <Image src={icon} alt={name} width={24} height={24} className="w-5 h-5" />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
