
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#ffbd59] dark:bg-[#05347e] mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Image 
              src="/img/logo.png" 
              alt="Kiungor" 
              width={40} 
              height={40} 
              className="rounded-full bg-white mb-4"
            />
            <h3 className="text-xl font-bold text-[#05347e] dark:text-white">KIUNGOR</h3>
          </div>
          {/* Footer links... */}
        </div>
        <div className="mt-8 pt-8 border-t border-[#05347e]/10 dark:border-white/10 text-center">
          <p className="text-sm text-[#05347e] dark:text-white/80">
            © 2025 Kiungor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}