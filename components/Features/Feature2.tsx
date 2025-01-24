"use client";
import React from "react";
import featuresData from "./featuresData";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../Common/SectionHeader";

const Feature2 = () => {
  return (
    <section id="features" className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* Section Title Start */}
        <SectionHeader
          headerInfo={{
            title: "FEATURES",
            subtitle: "",
            description: ``,
          }}
        />
        {/* Section Title End */}

        <div className="mt-12.5 space-y-20">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`flex flex-col items-center gap-8 border-b border-gray-500 pb-10 md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Feature Image */}
              <div className="relative flex items-center justify-center">
                <Image
                  src={feature.icon}
                  width={1000}
                  height={1000}
                  alt={feature.title}
                  className=""
                />
              </div>

              {/* Feature Content */}
              <div className="text-center md:w-1/2 md:text-left">
                <h3 className="mb-5 text-2xl font-semibold text-black dark:text-white xl:text-3xl">
                  {feature.title}
                </h3>
                <ul className="list-disc space-y-2 pl-5 text-lg leading-relaxed">
                  {feature.description.split("\n").map(
                    (point, i) =>
                      point.trim() && (
                        <li className="text-gray-300" key={i}>
                          {point.startsWith("-")
                            ? point.substring(1).trim()
                            : point}
                        </li>
                      ),
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature2;
