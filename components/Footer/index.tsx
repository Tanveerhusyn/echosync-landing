"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
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
                className="animate_top w-1/2 lg:w-1/4"
              >
                <a href="index.html" className="relative">
                  <div className="flex items-center justify-start gap-1">
                    <svg
                      width="48px"
                      height="48px"
                      viewBox="0 -43.5 1111 1111"
                      className="icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M479.817143 780.434286l-158.72 54.857143c-1.462857 0.731429-2.194286 0.731429-2.194286 0.731428 1.462857 0 2.925714 0.731429 4.388572 1.462857 1.462857 1.462857 2.194286 2.194286 2.925714 3.657143v-2.925714l4.388571-160.182857c1.462857-42.422857-17.554286-99.474286-43.885714-133.12l-101.668571-128c-0.731429-1.462857-1.462857-2.194286-1.462858-2.194286 0 1.462857 0 3.657143-0.731428 5.851429-0.731429 2.194286-1.462857 3.657143-2.925714 4.388571 0 0 0.731429 0 2.194285-0.731429l161.645715-46.08c40.96-11.702857 89.234286-46.08 114.102857-81.188571l93.622857-133.12c0.731429-1.462857 1.462857-2.194286 1.462857-2.194286-0.731429 0.731429-2.194286 0.731429-3.657143 0.731429s-2.925714-0.731429-3.657143-0.731429c0 0 0.731429 0.731429 1.462857 2.194286l93.622858 133.12c24.137143 34.377143 73.142857 69.485714 114.102857 81.188571l161.645714 46.08c1.462857 0.731429 2.194286 0.731429 2.194286 0.731429-0.731429-0.731429-2.194286-2.925714-2.925715-4.388571-0.731429-2.194286-0.731429-4.388571-0.731428-5.851429 0 0 0 0.731429-1.462857 2.194286l-101.668572 128c-26.331429 33.645714-45.348571 89.965714-43.885714 133.12l2.194286 80.457143 2.194285 80.457142v2.925715c0.731429-0.731429 1.462857-2.194286 2.925715-3.657143 1.462857-0.731429 2.925714-1.462857 4.388571-1.462857 0 0-0.731429 0-2.194286-0.731429l-158.72-54.857143c-39.497143-14.628571-99.474286-14.628571-138.971428-0.731428z m269.165714 137.508571c59.245714 20.48 113.371429-19.017143 111.908572-81.92l-2.194286-80.457143-2.194286-80.457143c-0.731429-21.942857 11.702857-58.514286 24.868572-76.068571l101.668571-128c39.497143-49.737143 19.017143-114.102857-42.422857-131.657143l-161.645714-46.08c-21.211429-5.851429-53.394286-28.525714-66.56-46.811428l-93.622858-133.12c-35.84-51.2-103.131429-51.2-138.971428 0l-93.622857 133.12c-13.165714 18.285714-44.617143 40.96-66.56 46.811428l-161.645715 46.08c-61.44 17.554286-81.92 81.92-42.422857 131.657143l101.668572 128c13.897143 17.554286 25.6 54.125714 24.868571 76.068571l-4.388571 160.182858c-1.462857 62.902857 51.931429 102.4 111.908571 81.92l158.72-54.857143c21.211429-7.314286 60.708571-7.314286 81.92 0l158.72 55.588571z"
                          fill="#0C92F2"
                        ></path>
                        <path
                          d="M548.571429 678.765714c-58.514286 0-125.074286 27.794286-125.074286 27.794286s10.971429-64.365714-6.582857-122.148571-65.828571-111.177143-65.828572-111.177143 76.8-20.48 124.342857-56.32 73.142857-87.771429 73.142858-87.771429 34.377143 51.931429 80.457142 87.771429c46.811429 35.108571 117.028571 56.32 117.028572 56.32s-40.228571 44.617143-58.514286 103.862857-13.897143 129.462857-13.897143 129.462857-66.56-27.794286-125.074286-27.794286z"
                          fill="#873dec"
                        ></path>
                        <path
                          d="M548.571429 678.765714c-56.32-5.12-125.074286 27.794286-125.074286 27.794286s10.971429-64.365714-6.582857-122.148571-65.828571-111.177143-65.828572-111.177143l198.217143 40.228571c3.657143 145.554286 1.462857 112.64-0.731428 165.302857z"
                          fill="#181c31"
                        ></path>
                        <path
                          d="M551.497143 678.765714c56.32-5.12 125.074286 27.794286 125.074286 27.794286s-10.971429-64.365714 6.582857-122.148571 65.828571-111.177143 65.828571-111.177143l-198.217143 40.228571c-3.657143 145.554286-1.462857 112.64 0.731429 165.302857z"
                          fill="#181c31"
                        ></path>
                      </g>
                    </svg>
                    <h2 className="text-xl font-bold text-[#4479f4]">
                      Echo<span className="">Sync</span>
                    </h2>
                  </div>
                </a>

                <p className="mb-10 mt-5 text-left">
                  Experience the future of Review Management
                </p>

                <p className="mb-1.5 text-sectiontitle uppercase tracking-[5px] text-left">
                  contact
                </p>
                <a
                  href="mailto:faizan@echosync.ai"
                  className="text-itemtitle font-medium text-black dark:text-white block mb-2"
                >
                  faizan@echosync.ai
                </a>
                <a
                  href="tel:+12152059732"
                  className="text-itemtitle font-medium text-black dark:text-white"
                >
                  (215) 205-9732
                </a>
              </motion.div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
            {/* <motion.div
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
              className="animate_top"
            >
              <ul className="flex items-center gap-8">
                <li>
                  <a href="#" className="hover:text-primary">
                    English
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Support
                  </a>
                </li>
              </ul>
            </motion.div> */}

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
              className="animate_top"
            >
              <p>
                &copy; {new Date().getFullYear()} Echosync. All rights reserved
              </p>
            </motion.div>

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
              className="animate_top"
            >
              <ul className="flex items-center gap-5">
                <li>
                  <a
                    href="https://twitter.com/echosyncc"
                    aria-label="X (Twitter)"
                  >
                    <svg
                      className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61573168538691"
                    aria-label="Facebook"
                  >
                    <svg
                      className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/echosync/?viewAsMember=true"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1505)">
                        <path
                          d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1505">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
