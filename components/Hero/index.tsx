"use client";
import Link from "next/link";
import HeroScrollDemo from "../HeroDemo/HeroDemo";
import { CardDemo } from "../ui/card-demo";

const Hero = () => {
  return (
    <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
          <div className="md:w-1/2">
            <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
              🔥 5X Your Review Count
            </h4>
            <h1 className="mb-5 text-3xl font-bold text-black dark:text-white md:text-5xl xl:text-hero">
              Collect Reviews on Autopilot
            </h1>
            <p className="mb-8 max-w-[600px] text-lg text-gray-600 dark:text-gray-300">
              Generate up to ~20% revenue growth with increased
              presence on Google
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://admin.echosync.ai"
                className="inline-flex rounded-full bg-primary px-8 py-4 text-white transition-colors hover:bg-primary/90"
              >
                Get Started for Free
              </Link>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2">
            <CardDemo />
          </div>
        </div>
      </div>
      <HeroScrollDemo />
    </section>
  );
};

export default Hero;
