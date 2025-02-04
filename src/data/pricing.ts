export interface PricingPlan {
  name: string;
  description: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    description: "Get started with basic features",
    price: 0,
    features: [
      "Access to migration resources",
      "Language Translation Services",
      "Join Social Groups",
      "RSVP for events",
    ],
  },
  {
    name: "Premium",
    description: "Advanced features for serious users",
    price: 7.99,
    features: [
      "All Free plan features",
      "Access to job listings",
      "Create and join social groups",
      "Create and organize events",
    ],
    isPopular: true,
  },
];
