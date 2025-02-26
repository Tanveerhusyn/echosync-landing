import React from "react";
import RelatedPost from "../../../../components/Blog/RelatedPost";
import SharePost from "../../../../components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";
import BlogData from "../../../../components/Blog/blogData";

export const metadata: Metadata = {
  title: "Blog Details Page - Solid SaaS Boilerplate",
  description: "This is Blog details page for Solid Pro",
  // other metadata
};

const SingleBlogPage = async ({ params }) => {
  console.log("Blog", params);

  return (
    <>
      {params.slug === "maximize-reviews-automated-software" ? (
        <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
          <div className="mx-auto max-w-4xl px-4 md:px-8 2xl:px-0">
            <div className="flex flex-col gap-7.5">
              {/* Blog Header */}
              <div className="animate_top">
                <h1 className="mb-5 text-3xl md:text-4xl font-bold text-black dark:text-white leading-tight">
                  Maximize Customer Reviews with Automated Review Management Software
                </h1>
                
                <ul className="mb-8 flex flex-wrap items-center gap-5 border-b border-stroke pb-5 dark:border-strokedark">
                  <li className="flex items-center">
                    <span className="mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </span>
                    <span className="text-sm text-black dark:text-white">
                      EchoSync Team
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </span>
                    <span className="text-sm text-black dark:text-white">
                      Feb 25, 2024
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                      </svg>
                    </span>
                    <span className="text-sm text-black dark:text-white">
                      Review Management
                    </span>
                  </li>
                </ul>
              </div>

              {/* Featured Image */}
              <div className="mb-10 w-full overflow-hidden rounded-lg">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={"/images/article.jpg"}
                    alt="Review Management Software"
                    fill
                    className="rounded-lg object-cover object-center"
                  />
                </div>
              </div>

              {/* Blog Content */}
              <div className="animate_top rounded-lg border border-stroke bg-white p-7.5 shadow-sm dark:border-strokedark dark:bg-blacksection md:p-10">
                <div
                  className="blog-details prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-black dark:prose-headings:text-white prose-p:text-body dark:prose-p:text-body-dark prose-p:leading-relaxed prose-li:text-body dark:prose-li:text-body-dark prose-img:rounded-lg"
                  dangerouslySetInnerHTML={{
                    __html: BlogData[0]?.metadata || "Blog content not found",
                  }}
                ></div>
              </div>

              {/* Author Bio */}
              <div className="animate_top mt-5 rounded-lg border border-stroke bg-white p-7.5 shadow-sm dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
                  <div className="relative h-20 w-20 overflow-hidden rounded-full">
                    <Image
                      src="/images/user/user-01.png"
                      alt="Author"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="mb-1 text-xl font-semibold text-black dark:text-white">
                      EchoSync Team
                    </h4>
                    <p className="text-body dark:text-body-dark">
                      The EchoSync team is dedicated to helping businesses improve their online reputation through innovative review management solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // Default view for invalid slug
        <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
          <div className="mx-auto max-w-4xl px-4 md:px-8 2xl:px-0">
            <div className="flex items-center justify-center">
              <h1 className="text-2xl font-semibold text-black dark:text-white">
                Blog post not found
              </h1>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SingleBlogPage;
