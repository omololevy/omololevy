interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`w-full py-5 px-4 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 text-gray-400 flex justify-center items-center border-t border-foreground/5 ${className}`}>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} <span className="footer-brand font-semibold">Levy Omolo</span>. All rights reserved.
      </p>
    </footer>
  );
}
