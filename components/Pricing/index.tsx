"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState("starter");
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  
  const handleClick = () => {
    window.location.href = "https://admin.echosync.ai/";
  };

  const togglePricing = () => {
    setIsAnnual(!isAnnual);
  };

  // Calculate annual savings
  const getAnnualSavings = (monthlyPrice, discountedPrice, savingsAmount) => {
    return {
      annualPrice: (discountedPrice * 12).toString(),
      yearlySavings: savingsAmount.toString()
    };
  };
  
  const starterSavings = getAnnualSavings(29, 17, 144);
  const smbSavings = getAnnualSavings(79, 47, 384);
  const enterpriseSavings = getAnnualSavings(199, 119, 960);
  
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section
        id="pricing"
        className="overflow-hidden pb-16 pt-12 lg:pb-20 xl:pb-24"
      >
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 relative">
              <span className="relative z-10">Pricing that makes sense for Small Businesses</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl rounded-full -z-10"></span>
            </h2>
            <p className="text-base md:text-lg opacity-60 max-w-2xl mx-auto">
              We keep our overheads low so you can get the best prices.
            </p>
          </div>
          {/* <!-- Section Title End --> */}
          
          {/* <!-- Pricing Toggle Start --> */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center p-1 rounded-lg bg-gray-800 border border-gray-700">
              <button
                onClick={togglePricing}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  !isAnnual
                    ? "bg-gradient-to-r from-[#4479f4] to-[#873dec] text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Monthly
              </button>
              
              <button
                onClick={togglePricing}
                className={`flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  isAnnual
                    ? "bg-gradient-to-r from-[#4479f4] to-[#873dec] text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Annual
                <span className="ml-1.5 inline-flex items-center justify-center rounded-md bg-emerald-600 px-1.5 py-0.5 text-xs font-bold text-white">
                  Save 40%
                </span>
              </button>
            </div>
          </div>
          {/* <!-- Pricing Toggle End --> */}
        </div>

        <div className="relative mx-auto mt-12 max-w-[1207px] px-4 md:px-8 xl:mt-16 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-6 lg:flex-nowrap xl:gap-8">
            {/* <!-- Starter Plan --> */}
            <div className="animate_top group relative flex flex-col rounded-xl border border-stroke bg-white p-6 shadow-solid-10 hover:shadow-solid-20 transition-all duration-300 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-10">
              <div className="absolute -top-4 left-0 right-0 mx-auto w-max rounded-full bg-white px-4 py-1 text-center shadow-solid-3 dark:bg-blacksection">
                <span className="text-sm font-medium text-black dark:text-white">Starter</span>
              </div>
              <div>
                <h3 className="mb-2 text-3xl font-bold text-black dark:text-white xl:text-5xl">
                  {isAnnual ? (
                    <>
                      <span className="text-base line-through text-gray-400 dark:text-gray-500">$29</span>{" "}
                      <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent font-extrabold">$17</span>
                    </>
                  ) : (
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent font-extrabold">$29</span>
                  )}{" "}
                  <span className="text-regular text-waterloo dark:text-manatee">
                    /mo
                  </span>
                </h3>
                {isAnnual && (
                  <p className="text-xs text-gray-600 dark:text-gray-400 opacity-75 mb-4">
                    Annual billing (${starterSavings.annualPrice}/year) <span className="text-emerald-600 dark:text-emerald-500">saves you ${starterSavings.yearlySavings}</span>
                  </p>
                )}
                <h4 className="mb-1 text-xl font-bold text-black dark:text-white">
                  Starter Plan
                </h4>
                <p className="text-xs italic text-gray-500 dark:text-gray-400 mb-2">
                  ~4 review requests a day
                </p>
                <div className="mt-6 border-t border-stroke pb-8 pt-6 dark:border-strokedark">
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <svg className="mr-2 h-4 w-4 text-emerald-600 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      100 review requests/month
                    </li>
                    <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <svg className="mr-2 h-4 w-4 text-emerald-600 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      10 AI responses
                    </li>
                    <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <svg className="mr-2 h-4 w-4 text-emerald-600 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Zapier automation
                    </li>
                    <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <svg className="mr-2 h-4 w-4 text-emerald-600 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      24/7 email support
                    </li>
                    <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <svg className="mr-2 h-4 w-4 text-emerald-600 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Free setup call
                    </li>
                  </ul>
                </div>
              </div>

              <button
                aria-label="Start 7-day Free Trial button"
                onClick={handleClick}
                className="group/btn relative mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#4479f4] to-[#873dec] px-5 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#6057e8]/20 overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#6057e8]/50 focus:ring-offset-2"
              >
                <span className="relative z-10">Start 7-day Free Trial</span>
                <svg
                  className="relative z-10"
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
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover/btn:animate-shine" />
              </button>
            </div>

            {/* <!-- SMB Plan --> */}
            <div className="animate_top group relative flex flex-col rounded-xl border-2 border-[#873dec] bg-white p-6 shadow-solid-10 hover:shadow-solid-20 transition-all duration-300 dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-10">
              <div className="absolute -right-3 top-6 -rotate-90 rounded-bl-full rounded-tl-full bg-gradient-to-r from-[#873dec] via-[#9d4dff] to-[#873dec] px-4 py-1 text-metatitle font-medium uppercase text-white overflow-hidden recommended-badge">
                <span className="relative z-10">Recommended</span>
              </div>
              <div className="absolute -top-4 left-0 right-0 mx-auto w-max rounded-full bg-white px-4 py-1 text-center shadow-solid-3 dark:bg-blacksection">
                <span className="text-sm font-medium text-black dark:text-white">SMB</span>
              </div>
              <div>
                <h3 className="mb-2 text-3xl font-bold text-black dark:text-white xl:text-5xl">
                  {isAnnual ? (
                    <>
                      <span className="text-base line-through text-gray-400 dark:text-gray-500">$79</span>{" "}
                      <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent font-extrabold">$47</span>
                    </>
                  ) : (
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent font-extrabold">$79</span>
                  )}{" "}
                  <span className="text-regular text-waterloo dark:text-manatee">
                    /mo
                  </span>
                </h3>
                {isAnnual && (
                  <p className="text-xs text-gray-600 dark:text-gray-400 opacity-75 mb-4">
                    Annual billing (${smbSavings.annualPrice}/year) <span className="text-emerald-600 dark:text-emerald-500">saves you ${smbSavings.yearlySavings}</span>
                  </p>
                )}
                <h4 className="mb-1 text-xl font-bold text-black dark:text-white">
                  SMB Plan
                </h4>
                <p className="text-xs italic text-gray-500 dark:text-gray-400 mb-2">
                  ~25 review requests a day
                </p>

                <div className="mt-6 border-t border-stroke pb-8 pt-6 dark:border-strokedark">
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <svg className="mr-2 h-4 w-4 text-emerald-600 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      750 review requests/month
                    </li>
                    <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <svg className="mr-2 h-4 w-4 text-emerald-600 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Unlimited AI responses
                    </li>
                    <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <svg className="mr-2 h-4 w-4 text-emerald-600 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="flex items-center">
                        Zapier automation
                        <span className="inline-block ml-1.5 relative">
                          <svg className="h-3.5 w-3.5 text-gray-400 cursor-pointer hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd"></path>
                          </svg>
                          <div className="tooltip-content absolute hidden w-44 rounded-lg bg-gray-900 p-2 text-xs text-white z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2">
                            Zapier Pro Plan required (+$19/mo in additional cost)
                            <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-900"></div>
                          </div>
                        </span>
                      </span>
                    </li>
                    <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <svg className="mr-2 h-4 w-4 text-emerald-600 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      24/7 email support
                    </li>
                    <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <svg className="mr-2 h-4 w-4 text-emerald-600 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Free setup call
                    </li>
                  </ul>
                </div>
              </div>

              <button
                aria-label="Start 7-day Free Trial button"
                onClick={handleClick}
                className="group/btn relative mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#4479f4] to-[#873dec] px-5 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#6057e8]/20 overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#6057e8]/50 focus:ring-offset-2"
              >
                <span className="relative z-10">Start 7-day Free Trial</span>
                <svg
                  className="relative z-10"
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
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover/btn:animate-shine" />
              </button>
            </div>

            {/* <!-- Enterprise Plan --> */}
            <div className="animate_top group relative flex flex-col rounded-xl border border-stroke bg-white p-6 shadow-solid-10 hover:shadow-solid-20 transition-all duration-300 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-10">
              <div className="absolute -top-4 left-0 right-0 mx-auto w-max rounded-full bg-white px-4 py-1 text-center shadow-solid-3 dark:bg-blacksection">
                <span className="text-sm font-medium text-black dark:text-white">Enterprise</span>
              </div>
              <div>
                <h3 className="mb-2 text-3xl font-bold text-black dark:text-white xl:text-5xl">
                  {isAnnual ? (
                    <>
                      <span className="text-base line-through text-gray-400 dark:text-gray-500">$199</span>{" "}
                      <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent font-extrabold">$119</span>
                    </>
                  ) : (
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent font-extrabold">$199</span>
                  )}{" "}
                  <span className="text-regular text-waterloo dark:text-manatee">
                    /mo
                  </span>
                </h3>
                {isAnnual && (
                  <p className="text-xs text-gray-600 dark:text-gray-400 opacity-75 mb-4">
                    Annual billing (${enterpriseSavings.annualPrice}/year) <span className="text-emerald-600 dark:text-emerald-500">saves you ${enterpriseSavings.yearlySavings}</span>
                  </p>
                )}
                <h4 className="mb-1 text-xl font-bold text-black dark:text-white">
                  Enterprise Plan
                </h4>
                <p className="text-xs italic text-gray-500 dark:text-gray-400 mb-2">
                  Ideal for high customer volume
                </p>

                <div className="mt-6 border-t border-stroke pb-8 pt-6 dark:border-strokedark">
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <svg className="mr-2 h-4 w-4 text-emerald-600 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      3000 review requests/month
                    </li>
                    <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <svg className="mr-2 h-4 w-4 text-emerald-600 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Everything in SMB Plan
                    </li>
                    <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <svg className="mr-2 h-4 w-4 text-emerald-600 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Priority support
                    </li>
                  </ul>
                </div>
              </div>

              <button
                aria-label="Start 7-day Free Trial button"
                onClick={handleClick}
                className="group/btn relative mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#4479f4] to-[#873dec] px-5 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#6057e8]/20 overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#6057e8]/50 focus:ring-offset-2"
              >
                <span className="relative z-10">Start 7-day Free Trial</span>
                <svg
                  className="relative z-10"
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
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover/btn:animate-shine" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
      <style jsx global>{`
        .recommended-badge::before {
          content: '';
          position: absolute;
          top: 0;
          left: -150%;
          width: 150%;
          height: 100%;
          background: linear-gradient(
            90deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0) 20%,
            rgba(255, 255, 255, 0.4) 50%, 
            rgba(255, 255, 255, 0) 80%,
            transparent 100%
          );
          animation: badge-shine 3s infinite;
          z-index: 2;
        }
        
        @keyframes badge-shine {
          0% {
            left: -150%;
          }
          100% {
            left: 150%;
          }
        }
        
        /* Fix for tooltip hover behavior */
        .tooltip-content {
          display: none;
        }
        
        svg:hover + .tooltip-content {
          display: block;
        }
      `}</style>
    </>
  );
};

export default Pricing;
