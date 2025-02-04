import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-24 px-4 md:pt-32">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Embracing New Beginnings, Together!
          </h1>
          <p className="text-lg mb-8 opacity-90">
            Connect with fellow immigrants, access resources, and build your new
            life abroad.
          </p>
          <button className="primary-button">Join the Waitlist</button>
        </div>
        <div className="flex-1">
          <Image
            src="/img/home.svg"
            alt="Hero"
            width={600}
            height={400}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
