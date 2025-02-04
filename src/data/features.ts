export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    title: "Guide Book",
    description:
      "An all-in-one guidebook with step-by-step resources to navigate the migration process. From visa applications to housing, we simplify your transition.",
    icon: "/img/book.png",
  },
  {
    title: "Job Listings",
    description:
      "Discover curated job listings tailored to immigrants and students. Powered by AI, KIUNGOR matches your skills with opportunities from trusted businesses.",
    icon: "/img/job_listing.svg",
  },
  {
    title: "Language Translation",
    description:
      "Break language barriers with real-time AI-powered translation for conversations, documents, and forms, enabling seamless communication.",
    icon: "/img/translation.svg",
  },
  {
    title: "Community",
    description:
      "Connect with locals and fellow immigrants to share experiences, find mentorship, and build strong relationships.",
    icon: "/img/connection.svg",
  },
  {
    title: "Events",
    description:
      "Stay updated with events for immigrants, such as networking workshops, celebrations, or social gatherings. Host or suggest events for deeper engagement.",
    icon: "/img/cultural_event.svg",
  },
  {
    title: "Support Network",
    description:
      "Access a trusted support network for guidance, advice, and resources to navigate challenges.",
    icon: "/img/support_network.svg",
  },
];
