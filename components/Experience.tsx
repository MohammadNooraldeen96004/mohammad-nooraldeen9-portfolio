"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type ExperienceItem = {
  year: string;
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];

  credentials?: {
    label: string;
    href: string;
  }[];
};

const experiences: ExperienceItem[] = [
  {
    year: "2026",
    period: "May 2026 — Sep 2026",
    title: "Full-Stack Web Development",
    company: "Robotna",
    location: "Amman, Jordan",

    description:
      "Built an end-to-end CRUD system for managing medical cases with secure private storage for gigapixel pathology slides and a responsive user interface.",

    technologies: [
      "Laravel",
      "Tailwind CSS",
      "Alpine.js",
      "Private Storage",
      "CRUD",
    ],
  },

  {
    year: "2026",
    period: "Feb 2026 — Mar 2026",
    title: "AI & Robotics Training",
    company: "Robotna",
    location: "Amman, Jordan",

    description:
      "Training focused on robotics programming, logic, hardware automation, and working with LEGO SPIKE Prime.",

    technologies: [
      "LEGO SPIKE Prime",
      "Robotics",
      "Programming Logic",
      "Automation",
    ],

    credentials: [
      {
        label: "Robotics Certificate",
        href: "/certificates/Robotics.jpg",
      },
    ],
  },

  {
    year: "2025",
    period: "Sep 2025 — Jan 2026",
    title: "Artificial Intelligence Trainee",
    company: "Green Circle",
    location: "Amman, Jordan",

    description:
      "Worked on computer vision for intelligent ICU monitoring, including YOLOv8-based patient and staff detection.",

    technologies: [
      "Computer Vision",
      "YOLOv8",
      "AI",
      "Model Optimization",
    ],

    credentials: [
      {
        label: "AI Training Certificate",
        href: "/certificates/AI.png",
      },
    ],
  },

  {
    year: "2025",
    period: "Oct 2025 — Present",
    title: "Freelance Web Developer",
    company: "Social Media Agency",
    location: "Amman, Jordan",

    description:
      "Developed a real-time task management system with an asynchronous notification workflow to support internal operations.",

    technologies: [
      "Web Development",
      "APIs",
      "Real-Time Systems",
      "Backend",
    ],
  },

  {
    year: "2025",
    period: "Jul 2025 — Sep 2025",
    title: "Web Development & AI Intern",
    company: "Paratune",
    location: "Amman, Jordan",

    description:
      "Built a Python web scraping pipeline for marketing data collection and worked with NLP-based content classification.",

    technologies: [
      "Python",
      "Web Scraping",
      "API Development",
      "NLP",
    ],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="experience"
      className="
        relative
        px-6
        pb-32
        pt-20
        md:px-10
        md:pb-36
        md:pt-24
        lg:px-16
        lg:pb-40
        lg:pt-28
      "
    >
      <div className="mx-auto max-w-[1800px]">

        {/* ================================================= */}
        {/* HEADING                                           */}
        {/* ================================================= */}

        <div className="grid gap-10 lg:grid-cols-12">

          <div className="lg:col-span-3">

            <p
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-[#8aa8d8]
              "
            >
              03 / Experience & Training
            </p>

          </div>


          <div className="lg:col-span-7">

            <motion.h2
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                text-[clamp(2.4rem,4.2vw,4.8rem)]
                font-medium
                leading-[0.96]
                tracking-[-0.05em]
              "
            >
              Experience shaped through

              <span className="text-[var(--yellow)]">
                {" "}
                building and learning.
              </span>

            </motion.h2>

          </div>

        </div>


        {/* ================================================= */}
        {/* TIMELINE                                          */}
        {/* ================================================= */}

        <div
          className="
            mt-20
            border-t
            border-[var(--line)]
            lg:mt-24
          "
        >

          {experiences.map((experience, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.article
                key={`${experience.company}-${experience.title}`}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                }}
                className="
                  border-b
                  border-[var(--line)]
                "
              >

                {/* ========================================= */}
                {/* MAIN ROW                                  */}
                {/* ========================================= */}

                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(isActive ? -1 : index)
                  }
                  onMouseEnter={() =>
                    setActiveIndex(index)
                  }
                  className="
                    group
                    grid
                    w-full
                    items-center
                    gap-4
                    py-9
                    text-left
                    md:grid-cols-[80px_170px_1fr_auto]
                    md:gap-7
                    lg:py-10
                  "
                >

                  {/* YEAR */}

                  <span
                    className={`
                      text-xs
                      tracking-[0.2em]
                      transition-colors
                      duration-500
                      ${
                        isActive
                          ? "text-[var(--yellow)]"
                          : "text-[var(--muted)]"
                      }
                    `}
                  >
                    {experience.year}
                  </span>


                  {/* COMPANY */}

                  <div>

                    <p
                      className={`
                        text-sm
                        uppercase
                        tracking-[0.2em]
                        transition-colors
                        duration-500
                        ${
                          isActive
                            ? "text-[var(--yellow)]"
                            : "text-[#9baac0]"
                        }
                      `}
                    >
                      {experience.company}
                    </p>


                    <p
                      className="
                        mt-1
                        text-[10px]
                        uppercase
                        tracking-[0.16em]
                        text-[var(--muted)]
                      "
                    >
                      {experience.period}
                    </p>

                  </div>


                  {/* TITLE */}

                  <h3
                    className={`
                      text-2xl
                      font-medium
                      tracking-[-0.03em]
                      transition-all
                      duration-500
                      md:text-3xl
                      lg:text-[2.15rem]
                      ${
                        isActive
                          ? "translate-x-1 text-white"
                          : "text-[#b7c0ce] group-hover:text-white"
                      }
                    `}
                  >
                    {experience.title}
                  </h3>


                  {/* RIGHT SIDE */}

                  <div
                    className="
                      flex
                      items-center
                      justify-end
                      gap-5
                    "
                  >

                    {/* CREDENTIAL INDICATOR */}

                    {experience.credentials &&
                      experience.credentials.length > 0 && (
                        <span
                          className="
                            hidden
                            text-[8px]
                            uppercase
                            tracking-[0.18em]
                            text-[var(--muted)]
                            lg:block
                          "
                        >
                          {experience.credentials.length === 1
                            ? "Certificate"
                            : `${experience.credentials.length} Certificates`}
                        </span>
                      )}


                    {/* TOGGLE */}

                    <span
                      className={`
                        text-2xl
                        transition-all
                        duration-500
                        ${
                          isActive
                            ? "rotate-45 text-[var(--yellow)]"
                            : "text-[var(--muted)]"
                        }
                      `}
                    >
                      +
                    </span>

                  </div>

                </button>


                {/* ========================================= */}
                {/* EXPANDED DETAILS                          */}
                {/* ========================================= */}

                <AnimatePresence initial={false}>

                  {isActive && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        height: {
                          duration: 0.8,
                          ease: [0.22, 1, 0.36, 1],
                        },

                        opacity: {
                          duration: 0.45,
                        },
                      }}
                      className="overflow-hidden"
                    >

                      <div
                        className="
                          grid
                          gap-8
                          pb-9
                          md:grid-cols-[80px_170px_1fr_auto]
                          md:gap-7
                          lg:pb-10
                        "
                      >

                        {/* EMPTY COLUMNS */}

                        <div className="hidden md:block" />
                        <div className="hidden md:block" />


                        {/* ================================= */}
                        {/* DETAILS                           */}
                        {/* ================================= */}

                        <div className="max-w-3xl">

                          <p
                            className="
                              text-sm
                              leading-7
                              text-[var(--muted)]
                              md:text-base
                            "
                          >
                            {experience.description}
                          </p>


                          {/* TECHNOLOGIES */}

                          <div
                            className="
                              mt-6
                              flex
                              flex-wrap
                              gap-x-5
                              gap-y-3
                            "
                          >

                            {experience.technologies.map(
                              (technology) => (
                                <span
                                  key={technology}
                                  className="
                                    text-[10px]
                                    uppercase
                                    tracking-[0.18em]
                                    text-[#9baac0]
                                  "
                                >
                                  {technology}
                                </span>
                              )
                            )}

                          </div>


                          {/* =============================== */}
                          {/* CREDENTIALS                     */}
                          {/* =============================== */}

                          {experience.credentials &&
                            experience.credentials.length > 0 && (
                              <div
                                className="
                                  mt-8
                                  border-t
                                  border-[var(--line)]
                                  pt-6
                                "
                              >

                                <div
                                  className="
                                    flex
                                    flex-col
                                    gap-5
                                    sm:flex-row
                                    sm:items-center
                                  "
                                >

                                  <p
                                    className="
                                      text-[9px]
                                      uppercase
                                      tracking-[0.22em]
                                      text-[var(--muted)]
                                    "
                                  >
                                    Credentials
                                  </p>


                                  <div
                                    className="
                                      flex
                                      flex-wrap
                                      gap-x-7
                                      gap-y-4
                                    "
                                  >

                                    {experience.credentials.map(
                                      (credential, credentialIndex) => (
                                        <a
                                          key={credential.href}
                                          href={credential.href}
                                          target="_blank"
                                          rel="noreferrer"
                                          className="
                                            group/credential
                                            inline-flex
                                            items-center
                                            gap-3
                                            text-[10px]
                                            uppercase
                                            tracking-[0.17em]
                                            text-white
                                            transition-colors
                                            duration-500
                                            hover:text-[var(--yellow)]
                                          "
                                        >

                                          <span
                                            className="
                                              text-[var(--yellow)]
                                            "
                                          >
                                            0{credentialIndex + 1}
                                          </span>


                                          <span>
                                            {credential.label}
                                          </span>


                                          <span
                                            className="
                                              text-[var(--yellow)]
                                              transition-transform
                                              duration-500
                                              group-hover/credential:translate-x-1
                                              group-hover/credential:-translate-y-1
                                            "
                                          >
                                            ↗
                                          </span>

                                        </a>
                                      )
                                    )}

                                  </div>

                                </div>

                              </div>
                            )}

                        </div>


                        {/* EMPTY END COLUMN */}

                        <div className="hidden md:block" />

                      </div>

                    </motion.div>
                  )}

                </AnimatePresence>

              </motion.article>
            );
          })}

        </div>

      </div>
    </section>
  );
}