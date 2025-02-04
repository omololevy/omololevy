import Image from "next/image";
import { Feature, features } from "@/data/features";

export default function Features() {
  const renderFeature = (feature: Feature, index: number) => (
    <div key={index} className="feature-card">
      <div className="flex justify-center mb-6">
        <Image
          src={feature.icon}
          alt={feature.title}
          width={100}
          height={100}
          className="w-24 h-24 object-contain"
          priority={index < 3} // Load first 3 features immediately
        />
      </div>
      <h3 className="text-xl font-bold mb-4 text-[#05347e] dark:text-[#ffbd59] text-center">
        {feature.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-center">
        {feature.description}
      </p>
    </div>
  );

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(renderFeature)}
        </div>
      </div>
    </section>
  );
}
