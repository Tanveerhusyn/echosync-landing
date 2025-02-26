import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import HeroTwo from "@/components/HeroTwo";
import Feature2 from "@/components/Features/Feature2";

export const metadata: Metadata = {
  title: "EchoSync - Grow Your Reviews By 500% | Automated Review Management",
  description: "Collect customer reviews on autopilot for your small business. Boost local SEO, respond instantly with AI, and increase revenue with EchoSync's review management platform.",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <HeroTwo /> */}
      {/* <Brands /> */}
      {/* <Feature /> */}
      <Feature2 />
      {/* <About /> */}
      {/* <FeaturesTab /> */}
      {/* <FunFact /> */}
      {/* <Integration /> */}
      {/* <CTA /> */}
      {/* <FAQ /> */}
      {/* <Testimonial /> */}
      <Pricing />
      {/* <Contact /> */}
      <Blog />
    </main>
  );
}
