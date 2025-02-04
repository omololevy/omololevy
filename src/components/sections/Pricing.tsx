import { PricingPlan, pricingPlans } from "@/data/pricing";

export default function Pricing() {
  const renderPricingPlan = (plan: PricingPlan) => (
    <div
      key={plan.name}
      className={`bg-white dark:bg-[#051633] rounded-lg shadow-lg p-8 
        ${
          plan.isPopular
            ? "border-2 border-[#ffbd59] dark:border-[#05347e]"
            : "border border-gray-100 dark:border-gray-800"
        } 
        hover:scale-105 transition-transform duration-300 relative`}
    >
      {plan.isPopular && (
        <div className="absolute top-0 right-0 bg-[#ffbd59] dark:bg-[#05347e] text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm">
          Popular
        </div>
      )}

      <h3 className="text-2xl font-bold text-center mb-4">{plan.name}</h3>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
        {plan.description}
      </p>

      <div className="text-center mb-8">
        <span className="text-4xl font-bold">${plan.price}</span>
        <span className="text-gray-600 dark:text-gray-300">/month</span>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center text-gray-600 dark:text-gray-300"
          >
            <svg
              className="w-4 h-4 mr-3 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button className="w-full primary-button">
        {plan.price === 0 ? "Get Started" : "Subscribe Now"}
      </button>
    </div>
  );

  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50 dark:bg-[#041328]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Pricing
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Choose the plan that best fits your needs
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map(renderPricingPlan)}
        </div>
      </div>
    </section>
  );
}
