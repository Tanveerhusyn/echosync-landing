"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-16 md:py-20 lg:py-24">
        <div className="container">
          <SectionHeader
            headerInfo={{
              title: "FEATURES",
              subtitle: "Respond to Reviews Quickly",
              description: `Engaging with customer feedback is one of the most important things you can do for your business. EchoSync makes it easy to respond to all your reviews in seconds.`,
            }}
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4 md:gap-x-6 lg:gap-x-8 xl:gap-x-10">
            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
