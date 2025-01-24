"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  const handleClick = () => {
    window.location.href = "https://admin.echosync.ai/";
  };
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section
        id="pricing"
        className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30"
      >
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `PRICING PLANS`,
                subtitle: `Choose the Best Plan for You`,
                description: `Simple, transparent pricing to help grow your business.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* <!-- Starter Plan --> */}
            <div className="animate_top group relative flex flex-col rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div>
                <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                  $29{" "}
                  <span className="text-regular text-waterloo dark:text-manatee">
                    /month
                  </span>
                </h3>
                <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                  Starter Plan
                </h4>
                <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                  <ul>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      100 review requests/month
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      10 AI responses
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Zapier automation
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Analytics
                    </li>
                  </ul>
                </div>
              </div>

              <button
                aria-label="Start Free Trial button"
                onClick={handleClick}
                className="group/btn mt-auto inline-flex items-center justify-center gap-2.5 rounded-lg bg-primary px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-opacity-90"
              >
                <span className="duration-300">Start Free Trial</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- SMB Plan --> */}
            <div className="animate_top group relative flex flex-col rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                Recommended
              </div>
              <div>
                <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                  $79{" "}
                  <span className="text-regular text-waterloo dark:text-manatee">
                    /month
                  </span>
                </h3>
                <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                  SMB Plan
                </h4>

                <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                  <ul>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      750 review requests/month
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Unlimited AI responses
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Zapier automation
                      <span className="text-xs text-gray-500">
                        {" "}
                        (Pro Plan required)
                      </span>
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Advanced analytics
                    </li>
                  </ul>
                </div>
              </div>

              <button
                aria-label="Start Free Trial button"
                onClick={handleClick}
                className="group/btn mt-auto inline-flex items-center justify-center gap-2.5 rounded-lg bg-primary px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-opacity-90"
              >
                <span className="duration-300">Start Free Trial</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Enterprise Plan --> */}
            <div className="animate_top group relative flex flex-col rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div>
                <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                  $199{" "}
                  <span className="text-regular text-waterloo dark:text-manatee">
                    /month
                  </span>
                </h3>
                <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                  Enterprise Plan
                </h4>

                <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                  <ul>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      3000 review requests/month
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Everything in SMB Plan
                    </li>
                  </ul>
                </div>
              </div>

              <button
                aria-label="Start Free Trial button"
                onClick={handleClick}
                className="group/btn mt-auto inline-flex items-center justify-center gap-2.5 rounded-lg bg-primary px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-opacity-90"
              >
                <span className="duration-300">Start Free Trial</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
