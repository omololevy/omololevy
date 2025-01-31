
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: "🏠", label: "Home" },
    { href: "/about", icon: "👤", label: "About" },
    { href: "/projects", icon: "📂", label: "Projects" },
    { href: "/contact", icon: "📧", label: "Contact" }
  ];

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-foreground/10 px-6 py-3 z-50">
      <div className="flex justify-around items-center">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 ${
              pathname === item.href ? "text-primary" : "text-foreground/60"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}