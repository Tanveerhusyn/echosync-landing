"use client";
import { motion } from "framer-motion";

type HeaderInfo = {
  title: string;
  subtitle: string;
  description: string;
  customClasses?: {
    subtitle?: string;
    description?: string;
  };
};

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, subtitle, description, customClasses } = headerInfo;

  return (
    <>
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
        className="animate_top mx-auto text-center mb-10 md:mb-14 lg:mb-16"
      >
        <div className="mb-4 inline-block rounded-full bg-zumthor px-4 py-1.5 dark:border dark:border-strokedark dark:bg-blacksection">
          <span className="text-sm md:text-base font-medium text-black dark:text-white">
            {title}
          </span>
        </div>
        <h2 className={`mx-auto mb-4 text-2xl md:text-3xl font-bold text-black dark:text-white md:w-4/5 lg:w-3/5 xl:w-1/2 ${customClasses?.subtitle || ''}`}>
          {subtitle}
        </h2>
        <p className={`mx-auto text-base md:text-lg text-body-color dark:text-body-color-dark md:w-4/5 lg:w-3/5 xl:w-1/2 ${customClasses?.description || ''}`}>
          {description}
        </p>
      </motion.div>
      {/* <!-- Section Title End --> */}
    </>
  );
};

export default SectionHeader;
