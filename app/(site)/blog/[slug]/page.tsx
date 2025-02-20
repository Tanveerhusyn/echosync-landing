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
          <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
            <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
              <div className="lg:w-3/3">
                <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                  <div className="mb-10 w-full overflow-hidden ">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src={"/images/img-one.webp"}
                        alt="Review Management Software"
                        fill
                        className="rounded-md object-cover object-center"
                      />
                    </div>
                  </div>

                  <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                    <li>
                      <span className="text-black dark:text-white">
                        Author:{" "}
                      </span>{" "}
                      EchoSync Team
                    </li>
                    <li>
                      <span className="text-black dark:text-white">
                        Published On: March 15, 2024
                      </span>
                    </li>
                    <li>
                      <span className="text-black dark:text-white">
                        Category:{" "}
                      </span>
                      Review Management
                    </li>
                  </ul>

                  <div
                    className="blog-details text-body dark:text-body-dark text-base"
                    dangerouslySetInnerHTML={{
                      __html: BlogData[0]?.metadata || "Blog content not found",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // Default view for invalid slug
        <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
          <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
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
