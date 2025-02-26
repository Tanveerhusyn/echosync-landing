"use client";
import React from "react";
import featuresData from "./featuresData";
import Image from "next/image";
import { motion } from "framer-motion";

const Feature2 = () => {
  return (
    <section id="features" className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto text-center flex flex-col items-center justify-center"
        >
          <div className="mb-3 inline-block rounded-full bg-zumthor px-4 py-1.5 dark:border dark:border-strokedark dark:bg-blacksection">
            <span className="text-sm font-medium text-black dark:text-white">
              FEATURES
            </span>
          </div>
        </motion.div>
        {/* <!-- Section Title End --> */}

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
                <ul className="list-none space-y-4 text-base">
                  {feature.description.split("\n").map(
                    (point, i) =>
                      point.trim() && (
                        <li className="flex items-start group" key={i}>
                          <svg className="h-7 w-7 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-400 text-sm leading-relaxed pt-1.5 font-light tracking-wide">
                            {point.startsWith("-") ? point.substring(1).trim() : point}
                          </span>
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
