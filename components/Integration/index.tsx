"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Integration = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: `Harness the power of AI`,
              subtitle: `Respond to reviews with one click`,
              description: `AI-powered review responses that sound authentically human`,
            }}
          />

          {/* <!-- Section Title End --> */}
        </div>

        <div className="pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10 relative z-50 mx-auto mt-15 max-w-c-1154 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -top-3/4 left-0 right-0 -z-1 mx-auto h-full w-full">
            <Image
              width={1200}
              height={400}
              sizes="(max-width: 768px) 100vw"
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              style={{ position: "static" }}
            />
            <Image
              fill
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>
          <div className="flex flex-wrap justify-around gap-y-10">
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
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFE082"
                    d="M24,29C6.9,29-3.1,23.7,3.2,18C8.7,13,16,10,24,10c7.2,0,13.8,2.4,19,6.5C50.3,22.2,41.1,29,24,29z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M23,26c0,6.1-4.9,11-11,11S1,32.1,1,26s4.9-11,11-11S23,19.9,23,26z M36,15c-6.1,0-11,4.9-11,11s4.9,11,11,11s11-4.9,11-11S42.1,15,36,15z"
                  ></path>
                  <path
                    fill="#F44336"
                    d="M12 24A2 2 0 1 0 12 28A2 2 0 1 0 12 24Z"
                  ></path>
                  <path
                    fill="#00C853"
                    d="M36 24A2 2 0 1 0 36 28A2 2 0 1 0 36 24Z"
                  ></path>
                  <path
                    fill="#37474F"
                    d="M12,17c5,0,9,4,9,9s-4,9-9,9s-9-4-9-9S7,17,12,17 M12,14C5.4,14,0,19.4,0,26c0,6.6,5.4,12,12,12c6.6,0,12-5.4,12-12C24,19.4,18.6,14,12,14L12,14z"
                  ></path>
                  <path
                    fill="#37474F"
                    d="M12 22c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4S9.8 22 12 22M12 20c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6S15.3 20 12 20L12 20zM36 17c5 0 9 4 9 9s-4 9-9 9-9-4-9-9S31 17 36 17M36 14c-6.6 0-12 5.4-12 12 0 6.6 5.4 12 12 12 6.6 0 12-5.4 12-12C48 19.4 42.6 14 36 14L36 14z"
                  ></path>
                  <path
                    fill="#37474F"
                    d="M36 22c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4S33.8 22 36 22M36 20c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6S39.3 20 36 20L36 20zM24 26L21 33 24 37zM24 26L27 33 24 37zM36 14h12c0 0-3.1 3.8-3 7C42.1 16 36 14 36 14zM12 14H0c0 0 3.1 3.8 3 7C5.9 16 12 14 12 14z"
                  ></path>
                  <path
                    fill="#37474F"
                    d="M24,10c-6.3,0-12.2,1.9-17.1,5.2C8.4,14.4,10.2,14,12,14c0.4,0,0.8,0,1.3,0.1c3.4-1.4,7-2.1,10.7-2.1c3.7,0,7.4,0.7,10.7,2.1c0.4,0,0.8-0.1,1.3-0.1c1.8,0,3.6,0.4,5.1,1.2C36.2,11.9,30.3,10,24,10z"
                  ></path>
                </svg>
              </div>
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
              className="animate_top w-1/6"
            ></motion.div>

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
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
              </div>
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
              className="animate_top w-1/6"
            >
              <div className="h-[11px] w-[11px] rounded-full bg-[#FFDB26]"></div>
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
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#DD2C00"
                    d="M10.7,32.7c-0.5,0-0.9-0.3-1.2-0.8c-0.2-0.4-0.3-1-0.4-1.7c-0.2-2.2,0-5.5,0.7-6.5c0.3-0.5,0.8-0.7,1.2-0.7c0.3,0,0.6,0.1,7.1,2.8c0,0,1.9,0.8,1.9,0.8c0.7,0.3,1.1,1,1.1,1.8c0,0.8-0.5,1.4-1.2,1.6c0,0-2.7,0.9-2.7,0.9C11.2,32.7,11,32.7,10.7,32.7z M24,36.3c0,6.3,0,6.5-0.1,6.8c-0.2,0.5-0.6,0.8-1.1,0.9c-1.6,0.3-6.6-1.6-7.7-2.8c-0.2-0.3-0.3-0.5-0.4-0.8c0-0.2,0-0.4,0.1-0.6c0.1-0.3,0.3-0.6,4.8-5.9c0,0,1.3-1.6,1.3-1.6c0.4-0.6,1.3-0.7,2-0.5c0.7,0.3,1.2,0.9,1.1,1.6C24,33.5,24,36.3,24,36.3z M22.8,22.9c-0.3,0.1-1.3,0.4-2.5-1.6c0,0-8.1-12.9-8.3-13.3c-0.1-0.4,0-1,0.4-1.4c1.2-1.3,7.7-3.1,9.4-2.7c0.6,0.1,0.9,0.5,1.1,1c0.1,0.6,0.9,12.5,1,15.2C24.1,22.5,23.1,22.8,22.8,22.9z M27.2,25.9c-0.4-0.6-0.4-1.4,0-1.9c0,0,1.7-2.3,1.7-2.3c3.6-5,3.8-5.3,4.1-5.4c0.4-0.3,0.9-0.3,1.4-0.1c1.4,0.7,4.4,5.1,4.6,6.7c0,0,0,0,0,0.1c0,0.6-0.2,1-0.6,1.3c-0.3,0.2-0.5,0.3-7.4,1.9c-1.1,0.3-1.7,0.4-2,0.5c0,0,0-0.1,0-0.1C28.4,26.9,27.6,26.5,27.2,25.9z M38.9,34.4c-0.2,1.6-3.5,5.8-5.1,6.4c-0.5,0.2-1,0.2-1.4-0.2c-0.3-0.2-0.5-0.6-4.1-6.4l-1.1-1.7c-0.4-0.6-0.3-1.4,0.2-2.1c0.5-0.6,1.2-0.8,1.9-0.6c0,0,2.7,0.9,2.7,0.9c6,2,6.2,2,6.4,2.2C38.8,33.4,39,33.9,38.9,34.4z"
                  ></path>
                </svg>
              </div>
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
              className="animate_top w-1/6"
            ></motion.div>

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
              className="animate_top w-1/6"
            >
              <div className="h-[15px] w-[15px] rounded-full bg-[#62E888]"></div>
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
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  height="50"
                  stroke-linejoin="round"
                  stroke-miterlimit="1.414"
                  viewBox="-.092 .015 2732.125 2671.996"
                  width="50"
                >
                  <path
                    d="m2732.032 513.03c0-283.141-229.978-513.015-513.118-513.015h-1705.89c-283.138 0-513.116 229.874-513.116 513.015v1645.965c0 283.066 229.978 513.016 513.118 513.016h1705.889c283.14 0 513.118-229.95 513.118-513.016z"
                    fill="#0c3b7c"
                  />
                  <path
                    d="m.001 1659.991h1364.531v1012.019h-1364.53z"
                    fill="#0c3b7c"
                  />
                  <g fill-rule="nonzero">
                    <path
                      d="m1241.6 1768.638-220.052-.22v-263.12c0-56.22 21.808-85.48 69.917-92.165h150.136c107.068 0 176.328 67.507 176.328 176.766 0 112.219-67.507 178.63-176.328 178.739zm-220.052-709.694v-69.26c0-60.602 25.643-89.424 81.862-93.15h112.657c96.547 0 154.41 57.753 154.41 154.52 0 73.643-39.671 159.67-150.903 159.67h-198.026zm501.037 262.574-39.78-22.356 34.74-29.699c40.437-34.74 108.163-112.876 108.163-247.67 0-206.464-160.109-339.614-407.888-339.614h-282.738v-.11h-32.219c-73.424 2.74-132.273 62.466-133.04 136.329v1171.499h453.586c275.396 0 453.148-149.917 453.148-382.135 0-125.04-57.424-231.889-153.972-286.244"
                      fill="#fff"
                    />
                    <path
                      d="m1794.688 1828.066c0-89.492 72.178-161.894 161.107-161.894 89.154 0 161.669 72.402 161.669 161.894 0 89.379-72.515 161.894-161.67 161.894-88.928 0-161.106-72.515-161.106-161.894"
                      fill="#00bafc"
                    />
                  </g>
                </svg>
              </div>
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
              className="animate_top w-1/6"
            >
              <div className="h-[23px] w-[23px] rounded-full bg-[#EF5C00]"></div>
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
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#212844"
                    d="M44,24c0,11.05-8.95,20-20,20c-7.12,0-13.36-3.71-16.89-9.31c-0.29-0.44-0.56-0.89-0.8-1.36	C4.83,30.55,4,27.37,4,24C4,12.95,12.95,4,24,4c7.06,0,13.26,3.65,16.81,9.18c0.35,0.52,0.66,1.07,0.95,1.63	C43.19,17.56,44,20.69,44,24z"
                  ></path>
                  <path
                    fill="#ffb74d"
                    d="M41.76,14.81c-0.29-0.56-0.6-1.11-0.95-1.63C38,14.3,35.3,15.62,32.63,17	c-0.89,0.453-1.77,0.927-2.644,1.41L16.75,11.25l-1.5,1L24,19l1.23,2.153c-0.714,0.422-1.426,0.846-2.14,1.267	c-3.14,1.88-6.25,3.82-9.32,5.81c-2.52,1.66-5.02,3.33-7.46,5.1c0.24,0.47,0.51,0.92,0.8,1.36c2.75-1.24,5.44-2.57,8.12-3.92	c3.26-1.68,6.49-3.41,9.68-5.19c0.718-0.407,1.436-0.813,2.153-1.219L28,26l1.75,11.25l1.5-0.5l0.661-15.209	c0.827-0.501,1.648-1.012,2.459-1.541C36.9,18.37,39.39,16.69,41.76,14.81z"
                  ></path>
                </svg>
              </div>
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
              className="animate_top w-1/6"
            >
              <div className="h-[15px] w-[15px] rounded-full bg-[#016BFF]"></div>
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
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  height="50px"
                  width="50"
                >
                  <g clip-path="url(#clip0_2640_228735)">
                    <path
                      d="M29.9969 42.4741H7.7604C3.48223 42.4741 0 38.9919 0 34.6971V12.4606C0 8.18243 3.48223 4.7002 7.7604 4.7002H29.9969C34.2917 4.7002 37.7573 8.18243 37.7573 12.4606V34.6971C37.7739 38.9919 34.2917 42.4741 29.9969 42.4741Z"
                      fill="#EF3346"
                    />
                    <path
                      d="M13.4651 21.4315C13.4651 21.1164 13.2496 20.9009 12.9345 20.9009H9.25328C8.93822 20.9009 8.72266 21.1164 8.72266 21.4315V25.0961C8.72266 25.4112 8.93822 25.6268 9.25328 25.6268H12.9179C13.233 25.6268 13.4485 25.4112 13.4485 25.0961V21.4315H13.4651Z"
                      fill="#191E3B"
                    />
                    <path
                      d="M21.5735 29.5565C21.5735 29.2414 21.3414 29.0259 21.0429 29.0259H17.3783C17.0632 29.0259 16.8477 29.2414 16.8477 29.5565V33.2211C16.8477 33.5362 17.0632 33.7518 17.3783 33.7518H21.0429C21.358 33.7518 21.5735 33.5362 21.5735 33.2211V29.5565V29.5565Z"
                      fill="#191E3B"
                    />
                    <path
                      d="M21.5735 21.4315C21.5735 21.1164 21.358 20.9009 21.0429 20.9009H17.3783C17.0632 20.9009 16.8477 21.1164 16.8477 21.4315V25.0961C16.8477 25.4112 17.0632 25.6268 17.3783 25.6268H21.0429C21.358 25.6268 21.5735 25.4112 21.5735 25.0961V21.4315V21.4315Z"
                      fill="#FDDB32"
                    />
                  </g>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Integration;
