"use client";

import { motion } from "motion/react";
import WordSphere from "@/components/WordSphere";

export default function Hero() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden">
      {/* Left decorative line */}
      <div
        className="
          absolute
          bottom-0
          left-6
          top-0
          hidden
          w-px
          bg-[var(--line)]
          lg:block
        "
      />

      <div
        className="
          mx-auto
          flex
          min-h-[92svh]
          max-w-[1800px]
          flex-col
          px-6
          pb-8
          pt-22
          md:px-10
          lg:px-16
          lg:pb-10
          lg:pt-22
        "
      >
        {/* Hero top */}
        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="flex items-center justify-between"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--yellow)]">
            Mohammad Nooraldeen
          </p>

          <p className="hidden text-xs uppercase tracking-[0.3em] text-[var(--muted)] sm:block">
            AI & Software Engineer
          </p>
        </motion.div>

        {/* Main layout */}
        <div
          className="
            grid
            flex-1
            items-center
            gap-14
            py-16
            lg:grid-cols-12
            lg:gap-8
            lg:py-10
          "
        >
          {/* Left content */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.1,
                duration: 0.7,
              }}
              className="
                mb-7
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-[#8aa8d8]
                md:text-xs
              "
            >
              AI / SOFTWARE / DATA
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
                duration: 0.9,
                ease: "easeOut",
              }}
              className="
                max-w-[950px]
                text-[clamp(3.6rem,6.7vw,7.7rem)]
                font-medium
                uppercase
                leading-[0.88]
                tracking-[-0.06em]
              "
            >
              AI & Software
              <span className="block text-[var(--yellow)]">Engineer.</span>
            </motion.h1>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
                duration: 0.8,
              }}
              className="mt-10 max-w-xl md:mt-12"
            >
              <p
                className="
                  text-base
                  leading-[1.8]
                  text-[var(--muted)]
                  md:text-lg
                "
              >
                I build intelligent, end-to-end systems that connect{" "}
                <span className="text-white">AI, data,</span> and{" "}
                <span className="text-white">production-ready software.</span>
              </p>

              {/* Links */}
              <div className="mt-8 flex flex-wrap gap-x-9 gap-y-5">
                <a
                  href="#expertise"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-white
                    md:text-xs
                  "
                >
                  Explore Portfolio
                  <span
                    className="
                      text-[var(--yellow)]
                      transition-transform
                      duration-300
                      group-hover:translate-y-1
                    "
                  >
                    ↓
                  </span>
                </a>

                <a
                  href="/cv/Mohammad Nooraldeen ---- CV.pdf"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-[var(--muted)]
                    transition-colors
                    hover:text-white
                    md:text-xs
                  "
                >
                  Download CV
                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    ↗
                  </span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right interactive visual */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.35,
              duration: 1,
              ease: "easeOut",
            }}
            className="
              relative
              hidden
              lg:col-span-5
              lg:block
            "
          >
            <WordSphere />
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}
