"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata, slug } = blog;
  
  // Calculate reading time (approximately 200 words per minute)
  const getReadingTime = () => {
    if (!metadata) return "3 min read";
    const wordCount = metadata.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);
    return `${readingTime} min read`;
  };

  return (
    <>
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
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-xl overflow-hidden bg-white dark:bg-blacksection shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      >
        <Link href={`/blog/${slug}`} className="relative block aspect-[16/9] overflow-hidden">
          <Image 
            src={mainImage} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2.5 py-0.5 rounded-full">
              Article
            </span>
            <span className="mx-2">•</span>
            <span>{getReadingTime()}</span>
          </div>
          
          <h3 className="text-xl font-semibold text-black dark:text-white mb-3 hover:text-primary dark:hover:text-primary transition-colors">
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h3>
          
          <div className="mt-auto pt-4">
            <Link 
              href={`/blog/${slug}`}
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              Read More
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;
