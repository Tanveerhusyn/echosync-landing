"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const heroSvgRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [startTyping, setStartTyping] = useState(false);
  const fullText = "Never worry about asking for reviews again.";

  useEffect(() => {
    // Animation for hero text when page loads
    const heroText = heroTextRef.current;
    const tagline = taglineRef.current;
    const heroSvg = heroSvgRef.current;
    const stars = starsRef.current;
    
    if (heroText) {
      heroText.style.opacity = "0";
      heroText.style.transform = "translateY(20px)";
      
      setTimeout(() => {
        heroText.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0)";
        
        // Start typing animation after hero animation completes (0.8s transition + 0.3s delay + 0.5s buffer)
        setTimeout(() => {
          setStartTyping(true);
        }, 1600);
      }, 300);
    }
    
    if (tagline) {
      tagline.style.opacity = "0";
      tagline.style.transform = "translateY(20px)";
      
      setTimeout(() => {
        tagline.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        tagline.style.opacity = "1";
        tagline.style.transform = "translateY(0)";
      }, 100); // Start slightly before the main headline
    }
    
    if (heroSvg) {
      heroSvg.style.opacity = "0";
      heroSvg.style.transform = "translateY(30px)";
      
      setTimeout(() => {
        heroSvg.style.transition = "opacity 1.2s ease-out, transform 1.2s ease-out";
        heroSvg.style.opacity = "1";
        heroSvg.style.transform = "translateY(0)";
      }, 600); // Start after the main headline animation begins
    }
    
    if (stars) {
      stars.style.opacity = "0";
      stars.style.transform = "translateX(-50px)";
      
      setTimeout(() => {
        stars.style.transition = "opacity 1s ease-out, transform 2s ease-out";
        stars.style.opacity = "1";
        stars.style.transform = "translateX(0)";
      }, 50); // Start before everything else
    }
  }, []);

  useEffect(() => {
    // Only start typing when startTyping is true
    if (!startTyping) return;
    
    // Typing animation for subheading
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 30); // Adjust typing speed here
      return () => clearTimeout(timeout);
    } else {
      // Hide cursor after typing is complete
      const timeout = setTimeout(() => {
        setShowCursor(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [typedText, fullText, startTyping]);

  return (
    <section className="overflow-hidden pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 2xl:px-0">
        <div className="flex flex-col items-center justify-center text-center max-w-[1200px] mx-auto">
          {/* Tagline with inline stars */}
          <h4 
            ref={taglineRef}
            className="mb-4 sm:mb-5 md:mb-6 text-base sm:text-lg md:text-xl font-semibold text-[#4479f4] drop-shadow-[0_0_8px_rgba(68,121,244,0.4)] opacity-80 flex items-center justify-center"
          >
            🚀 &nbsp;Grow Your Reviews By 500%
            <div 
              ref={starsRef}
              className="ml-2 flex items-center justify-center"
            >
              <div className="flex stars-container">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="star-wrapper mx-0.5">
                    <svg 
                      className="star" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      <path 
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                        fill="#FFD700" 
                        stroke="#FFC700" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </h4>
          
          {/* Main Headline */}
          <div className="relative mb-6 sm:mb-7 md:mb-8 w-full" ref={heroTextRef}>
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.15] sm:leading-[1.2] md:leading-[1.25] tracking-tight mx-auto"
            >
              <div className="bg-clip-text bg-gradient-to-r from-white to-gray-100">
                <div className="sm:whitespace-nowrap">Collect Customer Reviews on Autopilot</div>
                <div className="sm:whitespace-nowrap mt-1 sm:mt-1.5 md:mt-2">for your Small Business</div>
              </div>
            </h1>
          </div>
          
          {/* Subheading with Typing Animation */}
          <div className="mb-8 sm:mb-9 md:mb-10 w-full max-w-full overflow-hidden whitespace-nowrap text-base sm:text-lg md:text-xl font-medium text-gray-300 opacity-50">
            <span>{typedText}</span>
            {showCursor && <span className="inline-block w-[2px] h-[1.2em] bg-gray-300 ml-1 animate-pulse"></span>}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto animate-fadeIn" style={{ animationDelay: "0.9s", animationFillMode: "both" }}>
            <Link
              href="https://admin.echosync.ai"
              className="group relative w-full sm:w-auto inline-flex justify-center items-center rounded-full px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-white transition-all duration-300 hover:shadow-xl hover:shadow-[#873dec]/30 hover:translate-y-[-2px] overflow-hidden bg-gradient-to-r from-[#4479f4] to-[#873dec]"
            >
              <span className="relative z-10">Get Started for Free</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shine" />
            </Link>
            <Link
              href="https://calendly.com/faizanmd/30min"
              className="group relative metal-btn green-metal-btn w-full sm:w-auto inline-flex justify-center items-center rounded-full px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-white transition-all duration-300 hover:shadow-xl hover:shadow-[#22c55e]/30 hover:translate-y-[-2px] overflow-hidden"
            >
              <span className="relative z-10">Book Free Demo</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shine" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section SVG Image */}
      <div 
        ref={heroSvgRef}
        className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 2xl:px-0 mt-2 sm:mt-4 md:mt-6"
      >
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
          <Image
            src="/images/Hero Section.svg"
            alt="EchoSync Hero Illustration"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
          />
        </div>
        
        {/* Customer Testimonial Quote */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center">
          <div className="relative max-w-3xl mx-auto px-6 py-4 bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/20 dark:from-indigo-900/40 dark:via-purple-800/30 dark:to-pink-900/40 rounded-xl shadow-lg shadow-purple-500/10 dark:shadow-purple-900/20 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/50 animate-fadeIn" style={{ animationDelay: "1.2s", animationFillMode: "both" }}>
            <div className="absolute -top-3 -left-2">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.25 7.5H3.75V15H7.5V22.5H15V7.5H11.25ZM26.25 7.5H18.75V15H22.5V22.5H30V7.5H26.25Z" fill="url(#quote-gradient-1)"/>
                <defs>
                  <linearGradient id="quote-gradient-1" x1="3.75" y1="7.5" x2="30" y2="22.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4479f4"/>
                    <stop offset="0.5" stopColor="#873dec"/>
                    <stop offset="1" stopColor="#f472b6"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300 text-base sm:text-lg md:text-xl italic font-medium">
              "They help set it up and every customer gets a review request like clockwork!"
            </p>
            <p className="text-center text-indigo-600 dark:text-indigo-300 text-sm sm:text-base mt-2 font-semibold">
              - BB, Small Business Owner
            </p>
            <div className="absolute -bottom-3 -right-2 rotate-180">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.25 7.5H3.75V15H7.5V22.5H15V7.5H11.25ZM26.25 7.5H18.75V15H22.5V22.5H30V7.5H26.25Z" fill="url(#quote-gradient-2)"/>
                <defs>
                  <linearGradient id="quote-gradient-2" x1="3.75" y1="7.5" x2="30" y2="22.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f472b6"/>
                    <stop offset="0.5" stopColor="#873dec"/>
                    <stop offset="1" stopColor="#4479f4"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Add keyframes and styles */}
      <style jsx global>{`
        /* Star animation styles */
        .stars-container {
          position: relative;
        }
        
        .star-wrapper {
          position: relative;
          display: inline-block;
          opacity: 0;
          transform: translateX(-20px);
          animation: star-appear 0.5s forwards;
        }
        
        .star-wrapper:nth-child(1) { animation-delay: 0.1s; }
        .star-wrapper:nth-child(2) { animation-delay: 0.25s; }
        .star-wrapper:nth-child(3) { animation-delay: 0.4s; }
        .star-wrapper:nth-child(4) { animation-delay: 0.55s; }
        .star-wrapper:nth-child(5) { animation-delay: 0.7s; }
        
        @keyframes star-appear {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .star {
          animation: star-pulse 3s infinite;
          filter: drop-shadow(0 0 6px rgba(255, 215, 0, 0.7));
        }
        
        @keyframes star-pulse {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 6px rgba(255, 215, 0, 0.7));
          }
          50% {
            transform: scale(1.1);
            filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.9));
          }
        }
        
        /* Metallic button base styles */
        .metal-btn {
          position: relative;
          background-size: 200% 100%;
          background-position: 0 0;
          overflow: hidden;
        }
        
        /* Shine effect - only for blue-magenta-btn */
        .blue-magenta-btn::before {
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
            rgba(255, 255, 255, 0.25) 50%, 
            rgba(255, 255, 255, 0) 80%,
            transparent 100%
          );
          transition: left 0s ease;
          border-radius: 9999px;
          z-index: 2;
          pointer-events: none;
          animation: shine-effect 8s infinite;
          animation-delay: 2s;
        }
        
        .blue-magenta-btn:hover::before {
          animation: shine-effect 3s infinite;
          animation-delay: 0s;
        }
        
        /* Green metallic button with reflection */
        .green-metal-btn {
          background-image: linear-gradient(
            to right,
            #047857 0%,
            #059669 25%,
            #10b981 50%,
            #059669 75%,
            #047857 100%
          );
          box-shadow: 
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            inset 0 -1px 0 rgba(0, 0, 0, 0.2),
            0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .green-metal-btn::before {
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
            rgba(255, 255, 255, 0.2) 50%, 
            rgba(255, 255, 255, 0) 80%,
            transparent 100%
          );
          transition: left 0s ease;
          border-radius: 9999px;
          z-index: 2;
          pointer-events: none;
          animation: shine-effect 10s infinite;
          animation-delay: 1s;
        }
        
        .green-metal-btn:hover::before {
          animation: shine-effect 3s infinite;
          animation-delay: 0s;
        }
        
        .metal-btn::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 30%;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0) 100%
          );
          border-radius: 9999px 9999px 0 0;
          z-index: 1;
        }
        
        /* Blue metallic button */
        .blue-metal-btn {
          background-image: linear-gradient(
            to right,
            #2a4c9e 0%,
            #3a6cd8 25%,
            #4479f4 50%,
            #3a6cd8 75%,
            #2a4c9e 100%
          );
          box-shadow: 
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            inset 0 -1px 0 rgba(0, 0, 0, 0.2),
            0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        /* Blue-to-Magenta gradient button */
        .blue-magenta-btn {
          background-image: linear-gradient(
            to right,
            #5a25a4 0%,
            #7a35d4 15%,
            #873dec 30%,
            #7a35d4 45%,
            #6057e8 60%,
            #4479f4 75%,
            #3a6cd8 85%,
            #2a4c9e 100%
          );
          background-size: 200% 100%;
          box-shadow: 
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            inset 0 -1px 0 rgba(0, 0, 0, 0.2),
            0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        /* Shine animation */
        @keyframes shine-effect {
          0% {
            left: -150%;
          }
          100% {
            left: 150%;
          }
        }
        
        /* Pulse glow animation */
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.03);
          }
        }
        
        /* Fade in animation for quote */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        /* Pulsing glow for testimonial */
        .testimonial-glow {
          animation: testimonial-pulse 4s ease-in-out infinite;
        }
        
        @keyframes testimonial-pulse {
          0%, 100% {
            box-shadow: 0 0 15px rgba(139, 92, 246, 0.3), 0 0 30px rgba(139, 92, 246, 0.1);
          }
          50% {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.2);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
