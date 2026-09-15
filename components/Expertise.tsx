"use client";

import { useState } from "react";
import { motion } from "motion/react";

type ExpertiseItem = {
  number: string;
  title: string;
  description: string;
  skills: string[];
};

const expertise: ExpertiseItem[] = [
  {
    number: "01",
    title: "Artificial Intelligence",
    description:
      "Building and evaluating intelligent systems across computer vision, machine learning, deep learning, and NLP.",
    skills: [
      "Computer Vision",
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "PyTorch",
      "Scikit-learn",
      "YOLOv8",
      "Model Evaluation",
      "Feature Engineering",
    ],
  },
  {
    number: "02",
    title: "Software Engineering",
    description:
      "Turning ideas and AI workflows into practical software through backend development, APIs, and full-stack systems.",
    skills: [
      "Python",
      "C++",
      "Laravel",
      "SQL",
      "Full-Stack Development",
      "API Integration",
      "REST APIs",
    ],
  },
  {
    number: "03",
    title: "Data & Systems",
    description:
      "Working with data pipelines, large-scale image processing, automation, and compute workflows for AI systems.",
    skills: [
      "OpenSlide",
      "Web Scraping",
      "Git",
      "Hugging Face",
      "GPU Workflows",
      "TPU Workflows",
    ],
  },
];
export default function Expertise() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = expertise[activeIndex];

  return (
    <section
      id="expertise"
      className="
    relative
    px-6
    pb-28
    pt-10
    md:px-10
    md:pb-36
    md:pt-14
    lg:px-16
    lg:pb-40
    lg:pt-16
  "
    >
      <div className="mx-auto max-w-[1800px]">
        {/* Section heading */}
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8aa8d8]">
              02 / Expertise
            </p>
          </div>

          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="
                text-[clamp(2.5rem,4.5vw,5rem)]
                font-medium
                leading-[0.95]
                tracking-[-0.05em]
              "
            >
              Expertise across
              <span className="text-[var(--yellow)]"> AI and software.</span>
            </motion.h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
              My work sits at the intersection of intelligent systems, software
              engineering, and data-driven development.
            </p>
          </div>
        </div>

        {/* Interactive expertise */}
        <div className="mt-24 grid gap-16 lg:grid-cols-12 lg:mt-32">
          {/* Left side */}
          <div className="lg:col-span-7">
            {expertise.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={item.title}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className="
                    group
                    grid
                    w-full
                    grid-cols-[50px_1fr_auto]
                    items-center
                    gap-5
                    border-t
                    border-[var(--line)]
                    py-8
                    text-left
                    last:border-b
                    md:grid-cols-[80px_1fr_auto]
                    lg:py-10
                  "
                >
                  <span
                    className={`
                      text-xs
                      tracking-[0.2em]
                      transition-colors
                      duration-300
                      ${
                        isActive
                          ? "text-[var(--yellow)]"
                          : "text-[var(--muted)]"
                      }
                    `}
                  >
                    {item.number}
                  </span>

                  <span
                    className={`
                      text-[clamp(1.8rem,3vw,3.5rem)]
                      font-medium
                      uppercase
                      leading-none
                      tracking-[-0.045em]
                      transition-colors
                      duration-300
                      ${
                        isActive
                          ? "text-white"
                          : "text-[#66758a] group-hover:text-white"
                      }
                    `}
                  >
                    {item.title}
                  </span>

                  <span
                    className={`
                      text-lg
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "translate-x-0 text-[var(--yellow)]"
                          : "-translate-x-2 text-[var(--muted)]"
                      }
                    `}
                  >
                    ↗
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right side */}
          <div className="lg:col-span-5 lg:pl-10">
            <motion.div
              key={activeItem.title}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              className="lg:sticky lg:top-32"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--yellow)]">
                Current Focus
              </p>

              <h3 className="mt-6 text-3xl font-medium tracking-[-0.04em] text-white md:text-4xl">
                {activeItem.title}
              </h3>

              <p className="mt-6 max-w-lg text-base leading-8 text-[var(--muted)]">
                {activeItem.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-4">
                {activeItem.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      text-xs
                      uppercase
                      tracking-[0.18em]
                      text-[#aab6c8]
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
