import Image from "next/image";
import Link from "next/link";

interface FooterLink {
  title: string;
  href: string;
}

interface SocialLink extends FooterLink {
  icon: string;
}

const legalLinks: FooterLink[] = [
  { title: "Terms & Conditions", href: "/terms" },
  { title: "Privacy Policy", href: "/privacy_policy" },
];

const quickLinks: FooterLink[] = [
  { title: "FAQs", href: "/faqs" },
  { title: "Join Waitlist", href: "#join-waitlist" },
  { title: "Contact Us", href: "mailto:service@kiungor.com" },
];

const socialLinks: SocialLink[] = [
  {
    title: "Crunchbase",
    href: "https://www.crunchbase.com/organization/kiungor",
    icon: "/img/social/crunchbase.svg",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/kiungor/",
    icon: "/img/social/linkedin.svg",
  },
  {
    title: "X",
    href: "https://twitter.com/kiungorOrg",
    icon: "/img/social/x.svg",
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/kiungor",
    icon: "/img/social/facebook.svg",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/kiungororg/",
    icon: "/img/social/instagram.svg",
  },
  {
    title: "TikTok",
    href: "https://www.tiktok.com/@kiungororg",
    icon: "/img/social/tiktok.svg",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#ffbd59] dark:bg-[#05347e] mt-auto">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/img/logo.png"
                alt="Kiungor"
                width={56}
                height={56}
                className="rounded-full bg-white"
              />
              <span className="text-2xl font-bold text-[#05347e] dark:text-white">
                KIUNGOR
              </span>
            </Link>
            <p className="text-[#05347e] dark:text-gray-300 mb-4 max-w-md">
              Connecting immigrants worldwide, providing resources, and building
              communities for a better transition abroad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-[#05347e] dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-[#05347e] dark:text-gray-300 hover:opacity-80 transition-opacity"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold text-[#05347e] dark:text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-[#05347e] dark:text-gray-300 hover:opacity-80 transition-opacity"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold text-[#05347e] dark:text-white mb-4">
              Connect With Us
            </h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.title}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#05347e] dark:text-gray-300 hover:opacity-80 transition-opacity"
                  aria-label={social.title}
                >
                  <Image
                    src={social.icon}
                    alt={social.title}
                    width={24}
                    height={24}
                    className="dark:invert"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#05347e]/10 dark:border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#05347e] dark:text-gray-300">
              © {new Date().getFullYear()} Kiungor, Inc. All rights reserved.
            </p>
            <p className="text-sm text-[#05347e] dark:text-gray-300 text-center md:text-right">
              Your data is our priority. KIUNGOR uses encryption and secure
              systems to protect your personal information.
            </p>
          </div>
        </div>

        {/* Zendesk Widget Script */}
        <script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=86ba26ac-d8ac-4eae-8530-16fc6ef87316"
          async
        />
      </div>
    </footer>
  );
}
