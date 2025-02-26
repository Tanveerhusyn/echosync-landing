import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  // Split the description by newlines to separate bullet points
  const descriptionParts = description.split('\n\n');
  const mainBullet = descriptionParts[0]; // First bullet point
  const otherBullets = descriptionParts.slice(1); // Remaining bullet points

  // Function to format bullet points - remove the dash if it exists
  const formatBulletText = (text: string) => {
    return text.startsWith('- ') ? text.substring(2) : text;
  };

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-lg border border-white bg-white p-6 sm:p-7 md:p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-10"
      >
        <div className="relative flex h-16 sm:h-20 w-16 sm:w-20 items-center justify-center rounded-[4px] bg-primary overflow-hidden">
          <Image 
            src={icon} 
            width={48} 
            height={48} 
            alt={title}
            className="object-contain"
          />
        </div>
        <h3 className="mb-3 sm:mb-4 mt-5 sm:mt-6 text-lg sm:text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
          {title}
        </h3>
        <div className="space-y-2.5">
          <div className="flex">
            <span className="text-[#4479f4] mr-2 text-xl">•</span>
            <p className="text-sm sm:text-base">{formatBulletText(mainBullet)}</p>
          </div>
          {otherBullets.map((bullet, index) => (
            <div key={index} className="flex opacity-10">
              <span className="text-[#4479f4] mr-2 text-xl">•</span>
              <p className="text-sm sm:text-base">{formatBulletText(bullet)}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SingleFeature;
