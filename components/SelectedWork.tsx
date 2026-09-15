"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

type Project = {
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  result?: string;
  href: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Pathology AI",
    category: "AI / Computer Vision / MIL",
    year: "2026",
    description:
      "An end-to-end Multiple Instance Learning system for malignancy detection in gigapixel pathology whole-slide images.",
    technologies: ["Python", "PyTorch", "OpenSlide", "EfficientNet", "Laravel"],
    result: "Diagnostic AUC 0.89",
    href: "/work/pathology-ai",
  },

  {
    number: "02",
    title: "Medical Case Platform",
    category: "Full-Stack / Laravel",
    year: "2026",
    description:
      "A full-stack medical case management system with secure private storage for large pathology slide files.",
    technologies: ["Laravel", "Tailwind CSS", "Alpine.js", "Private Storage"],
    href: "/work/medical-platform",
  },

  {
    number: "03",
    title: "Malicious URL Intelligence",
    category: "Cybersecurity / Deep Learning",
    year: "2025",
    description:
      "A hybrid CNN + Bi-GRU system for malicious URL detection using character-level sequences and engineered structural features.",
    technologies: ["TensorFlow", "CNN", "Bi-GRU", "Scikit-learn", "Streamlit"],
    href: "/work/malicious-url-detection",
  },
];

export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState<number | null>(0);

  function toggleProject(index: number) {
    setActiveProject((current) => (current === index ? null : index));
  }

  return (
    <section
      id="work"
      className="
        relative
        px-6
        pb-36
        pt-24
        md:px-10
        md:pb-40
        md:pt-28
        lg:px-16
        lg:pb-44
        lg:pt-32
      "
    >
      <div className="mx-auto max-w-[1800px]">
        {/* SECTION INTRO */}
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8aa8d8]">
              04 / Selected Work
            </p>
          </div>

          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-[clamp(2.8rem,4.8vw,5.4rem)]
                font-medium
                leading-[0.96]
                tracking-[-0.05em]
              "
            >
              Work that turns ideas into
              <span className="text-[var(--yellow)]"> working systems.</span>
            </motion.h2>
          </div>
        </div>

        {/* PROJECT ACCORDION */}
        <div className="mt-24 border-t border-[var(--line)] lg:mt-28">
          {projects.map((project, index) => {
            const isActive = activeProject === index;

            return (
              <article
                key={project.number}
                className="border-b border-[var(--line)]"
              >
                {/* CLOSED / HEADER STATE */}
                <button
                  type="button"
                  onClick={() => toggleProject(index)}
                  className="
                    group
                    grid
                    w-full
                    items-center
                    gap-5
                    py-9
                    text-left
                    md:grid-cols-[90px_1fr_260px_60px]
                    lg:py-11
                  "
                >
                  {/* Number */}
                  <span
                    className={`
                      text-sm
                      tracking-[0.22em]
                      transition-colors
                      duration-500
                      ${
                        isActive
                          ? "text-[var(--yellow)]"
                          : "text-[var(--muted)]"
                      }
                    `}
                  >
                    {project.number}
                  </span>

                  {/* Title */}
                  <h3
                    className={`
                      text-[clamp(2rem,3.6vw,4.2rem)]
                      font-medium
                      uppercase
                      leading-[0.94]
                      tracking-[-0.05em]
                      transition-all
                      duration-500
                      ${
                        isActive
                          ? "translate-x-2 text-white"
                          : "text-[#8290a3] group-hover:translate-x-2 group-hover:text-white"
                      }
                    `}
                  >
                    {project.title}
                  </h3>

                  {/* Category */}
                  <span
                    className="
                      hidden
                      text-xs
                      uppercase
                      tracking-[0.18em]
                      text-[var(--muted)]
                      md:block
                    "
                  >
                    {project.category}
                  </span>

                  {/* Toggle */}
                  <span
                    className={`
                      justify-self-end
                      text-2xl
                      transition-all
                      duration-700
                      ${
                        isActive
                          ? "rotate-45 text-[var(--yellow)]"
                          : "text-[var(--muted)] group-hover:text-white"
                      }
                    `}
                  >
                    +
                  </span>
                </button>

                {/* EXPANDED CASE PREVIEW */}
                {/* EXPANDED PROJECT DETAILS */}
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
                          duration: 0.7,
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
          gap-10
          pb-12
          pt-2
          md:grid-cols-12
          md:gap-12
          lg:pb-14
        "
                      >
                        {/* DESCRIPTION */}
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 18,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 0.12,
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="
            md:col-start-2
            md:col-span-6
          "
                        >
                          <p
                            className="
              max-w-2xl
              text-base
              leading-8
              text-[var(--muted)]
              md:text-lg
            "
                          >
                            {project.description}
                          </p>

                          {/* TECHNOLOGIES */}
                          <div
                            className="
              mt-7
              flex
              flex-wrap
              gap-x-5
              gap-y-3
            "
                          >
                            {project.technologies.map((technology) => (
                              <span
                                key={technology}
                                className="
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-[#9baac0]
                "
                              >
                                {technology}
                              </span>
                            ))}
                          </div>
                        </motion.div>

                        {/* META + LINK */}
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 18,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 0.2,
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="
            flex
            flex-col
            justify-between
            gap-10
            md:col-span-4
            md:col-start-9
          "
                        >
                          <div>
                            <div
                              className="
                flex
                items-center
                justify-between
                border-b
                border-[var(--line)]
                pb-4
              "
                            >
                              <p
                                className="
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-[var(--muted)]
                "
                              >
                                Year
                              </p>

                              <p className="text-sm text-white">
                                {project.year}
                              </p>
                            </div>

                            {project.result && (
                              <div
                                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[var(--line)]
                  py-4
                "
                              >
                                <p
                                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-[var(--muted)]
                  "
                                >
                                  Result
                                </p>

                                <p className="text-sm text-white">
                                  {project.result}
                                </p>
                              </div>
                            )}
                          </div>

                          <Link
                            href={project.href}
                            className="
              group/link
              inline-flex
              w-fit
              items-center
              gap-4
              text-xs
              uppercase
              tracking-[0.22em]
              text-white
              transition-colors
              duration-500
              hover:text-[var(--yellow)]
            "
                          >
                            Open Case Study
                            <span
                              className="
                text-[var(--yellow)]
                transition-transform
                duration-500
                group-hover/link:translate-x-1
                group-hover/link:-translate-y-1
              "
                            >
                              ↗
                            </span>
                          </Link>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================================================= */
/* PROJECT VISUAL                                    */
/* ================================================= */

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className="
        group
        relative
        aspect-[16/10]
        overflow-hidden
        bg-[#07101c]
      "
    >
      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-45
          [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_65%_35%,rgba(245,200,76,0.08),transparent_38%)]
        "
      />

      {/* Large project number */}
      <p
        className="
          absolute
          bottom-2
          right-6
          text-[clamp(8rem,16vw,16rem)]
          font-medium
          leading-none
          tracking-[-0.08em]
          text-white/[0.035]
        "
      >
        {project.number}
      </p>

      {/* Current placeholder */}
      <div className="absolute bottom-8 left-8">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--yellow)]">
          Project Media
        </p>

        <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#a8b4c6]">
          {project.title}
        </p>
      </div>
    </div>
  );
}
