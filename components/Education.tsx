"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Education() {
  return (
    <section
      id="education"
      className="
        relative
        px-6
        py-5
        md:px-5
        md:py-10
        lg:px-6
        lg:py-10
      "
    >
      <div className="mx-auto max-w-[1800px]">

        {/* SECTION HEADER */}
        <div
          className="
            flex
            items-center
            justify-between
            gap-6
            border-b
            border-[var(--line)]
            pb-5
          "
        >
          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-[#8aa8d8]
            "
          >
            05 / Education
          </p>

          <p
            className="
              hidden
              text-[9px]
              uppercase
              tracking-[0.22em]
              text-[var(--muted)]
              sm:block
            "
          >
            2022 — 2026
          </p>
        </div>


        {/* MAIN EDUCATION ROW */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            grid
            gap-10
            border-b
            border-[var(--line)]
            py-12
            md:grid-cols-[120px_1fr]
            md:items-center
            lg:grid-cols-[140px_1fr_260px]
            lg:gap-14
            lg:py-16
          "
        >

          {/* LOGO */}
          <div
            className="
              relative
              h-[95px]
              w-[95px]
              md:h-[110px]
              md:w-[110px]
              lg:h-[125px]
              lg:w-[125px]
            "
          >
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative h-full w-full"
            >
              <Image
                src="/education/images-removebg-preview.png"
                alt="Tafila Technical University logo"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>


          {/* DEGREE */}
          <div>

            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-[var(--yellow)]
              "
            >
              Tafila Technical University
            </p>


            <h2
              className="
                mt-5
                max-w-4xl
                text-[clamp(2.2rem,3.6vw,4.4rem)]
                font-medium
                leading-[0.96]
                tracking-[-0.05em]
                text-white
              "
            >
              Artificial Intelligence
              <span className="block text-[#8190a4]">
                & Data Science
              </span>
            </h2>


            <div
              className="
                mt-7
                flex
                flex-wrap
                gap-x-6
                gap-y-3
                text-[9px]
                uppercase
                tracking-[0.16em]
                text-[#9ca9ba]
              "
            >
              <span>Artificial Intelligence</span>
              <span>Machine Learning</span>
              <span>Data Science</span>
              <span>Software Development</span>
            </div>

          </div>


          {/* META */}
          <div
            className="
              grid
              grid-cols-2
              gap-7
              border-t
              border-[var(--line)]
              pt-6
              md:col-start-2
              lg:col-start-auto
              lg:grid-cols-1
              lg:border-l
              lg:border-t-0
              lg:pl-8
              lg:pt-0
            "
          >

            <EducationMeta
              label="Degree"
              value="B.Sc."
            />

            <EducationMeta
              label="Period"
              value="2022 — 2026"
            />

            <EducationMeta
              label="Location"
              value="Tafila, Jordan"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}


function EducationMeta({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p
        className="
          text-[8px]
          uppercase
          tracking-[0.2em]
          text-[var(--muted)]
        "
      >
        {label}
      </p>

      <p
        className="
          mt-2
          text-sm
          text-white
        "
      >
        {value}
      </p>
    </div>
  );
}