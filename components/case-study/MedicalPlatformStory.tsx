"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const modes = [
  {
    number: "01",
    title: "Clinical Flow",
  },
  {
    number: "02",
    title: "Access & Data",
  },
  {
    number: "03",
    title: "AI + Human",
  },
];

const workflow = [
  "Login",
  "Patient",
  "Case",
  "TIFF Upload",
  "WSI Viewer",
  "Run AI",
  "Doctor Review",
  "Diagnosis",
  "Read Only",
];

export default function MedicalPlatformStory() {
  const [activeMode, setActiveMode] = useState(0);

  // أضف الرابط لاحقاً
  const liveUrl: string | null = null;

  return (
    <section
      className="
        relative
        px-6
        pb-24
        pt-28
        md:px-10
        md:pt-32
        lg:px-16
        lg:pb-32
        lg:pt-36
      "
    >
      <div className="mx-auto max-w-[1800px]">
        {/* ====================================== */}
        {/* PROJECT INTRO                          */}
        {/* ====================================== */}

        <div
          className="
            flex
            flex-wrap
            items-center
            justify-between
            gap-5
            border-b
            border-[var(--line)]
            pb-5
          "
        >
          <div className="flex items-center gap-5">
            <span
              className="
                text-xs
                tracking-[0.24em]
                text-[var(--yellow)]
              "
            >
              02
            </span>

            <span className="h-px w-10 bg-[var(--line)]" />

            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.27em]
                text-[#8aa8d8]
              "
            >
              Full-Stack / AI Integration
            </p>
          </div>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-7
              gap-y-2
              text-[9px]
              uppercase
              tracking-[0.22em]
              text-[var(--muted)]
            "
          >
            <span>Solo Project</span>
            <span>Laravel + FastAPI</span>

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  text-white
                  transition-colors
                  duration-500
                  hover:text-[var(--yellow)]
                "
              >
                Live Site ↗
              </a>
            )}
          </div>
        </div>

        {/* ====================================== */}
        {/* EDITORIAL HERO                         */}
        {/* ====================================== */}

        <div
          className="
            grid
            gap-12
            py-14
            lg:grid-cols-12
            lg:items-end
            lg:py-20
          "
        >
          <div className="lg:col-span-8">
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.27em]
                text-[var(--yellow)]
              "
            >
              AI-Assisted Digital Pathology System
            </p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-7
                max-w-[1150px]
                text-[clamp(3rem,5.6vw,6.5rem)]
                font-medium
                leading-[0.91]
                tracking-[-0.06em]
                text-white
              "
            >
              From uploaded slide
              <span className="block text-[#8795a8]">
                to signed-off diagnosis
                <span className="text-[var(--yellow)]">.</span>
              </span>
            </motion.h1>
          </div>

          <div className="lg:col-span-4">
            <p
              className="
                max-w-lg
                text-base
                leading-8
                text-[var(--muted)]
                md:text-lg
              "
            >
              A secure clinical workflow for managing pathology cases, viewing
              whole-slide images, running AI analysis, and recording the
              doctor&apos;s final decision.
            </p>

            <div
              className="
                mt-8
                grid
                grid-cols-3
                border-y
                border-[var(--line)]
              "
            >
              <IntroFact value="01" label="Developer" />

              <IntroFact value="03" label="Access Gates" />

              <IntroFact value="01" label="Final Decision" />
            </div>
          </div>
        </div>

        {/* ====================================== */}
        {/* INTERACTIVE SYSTEM EXPLORER            */}
        {/* ====================================== */}

        <section
          className="
    relative
    mt-12
    min-h-[calc(100svh-80px)]
    border-t
    border-[var(--line)]
    lg:mt-16
  "
        >
          {/* ==================================== */}
          {/* STICKY MODE NAV                      */}
          {/* ==================================== */}

          <div
            className="
      sticky
      top-[64px]
      z-30
      border-b
      border-[var(--line)]
      bg-[var(--background)]/95
      backdrop-blur-xl
      lg:top-[72px]
    "
          >
            <div
              className="
        grid
        grid-cols-3
      "
            >
              {modes.map((mode, index) => {
                const active = activeMode === index;

                return (
                  <button
                    key={mode.number}
                    type="button"
                    onClick={() => setActiveMode(index)}
                    className={`
              group
              relative
              min-h-[92px]
              border-r
              border-[var(--line)]
              px-4
              py-5
              text-left
              transition-colors
              duration-500
              last:border-r-0
              md:min-h-[105px]
              md:px-6
              ${active ? "bg-white/[0.025]" : "hover:bg-white/[0.015]"}
            `}
                  >
                    <div
                      className="
                flex
                items-start
                justify-between
                gap-4
              "
                    >
                      <span
                        className={`
                  text-[9px]
                  tracking-[0.2em]
                  transition-colors
                  duration-500
                  md:text-[10px]
                  ${active ? "text-[var(--yellow)]" : "text-white/25"}
                `}
                      >
                        {mode.number}
                      </span>

                      <span
                        className={`
                  text-sm
                  transition-transform
                  duration-500
                  ${active ? "rotate-45 text-[var(--yellow)]" : "text-white/20"}
                `}
                      >
                        +
                      </span>
                    </div>

                    <p
                      className={`
                mt-5
                text-[10px]
                uppercase
                tracking-[0.12em]
                transition-colors
                duration-500
                sm:text-xs
                md:text-sm
                ${
                  active
                    ? "text-white"
                    : "text-[#68768a] group-hover:text-white"
                }
              `}
                    >
                      {mode.title}
                    </p>

                    {/* ACTIVE LINE */}
                    <motion.div
                      animate={{
                        scaleX: active ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                absolute
                bottom-[-1px]
                left-0
                h-px
                w-full
                origin-left
                bg-[var(--yellow)]
              "
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* ==================================== */}
          {/* ACTIVE SCREEN                        */}
          {/* ==================================== */}

          <div
            className="
      flex
      min-h-[calc(100svh-180px)]
      items-center
      py-10
      md:min-h-[calc(100svh-190px)]
      md:py-12
      lg:min-h-[calc(100svh-200px)]
      lg:py-14
    "
          >
            <div className="w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMode}
                  initial={{
                    opacity: 0,
                    y: 24,
                    filter: "blur(5px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -18,
                    filter: "blur(4px)",
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {activeMode === 0 && <ClinicalFlow />}
                  {activeMode === 1 && <AccessAndData />}
                  {activeMode === 2 && <AIHuman />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ====================================== */}
        {/* SMALL END LINE                         */}
        {/* ====================================== */}

        <div
          className="
            mt-20
            flex
            flex-col
            gap-5
            border-t
            border-[var(--line)]
            pt-7
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.22em]
              text-[var(--muted)]
            "
          >
            Laravel · MySQL · FastAPI · OpenSlide · MIL
          </p>

          <a
            href="/#work"
            className="
              group
              inline-flex
              items-center
              gap-3
              text-[10px]
              uppercase
              tracking-[0.22em]
              text-white
              transition-colors
              duration-500
              hover:text-[var(--yellow)]
            "
          >
            <span
              className="
                transition-transform
                duration-500
                group-hover:-translate-x-1
              "
            >
              ←
            </span>
            Selected Work
          </a>
        </div>
      </div>
    </section>
  );
}

/* ================================================= */
/* 01 — CLINICAL FLOW                                */
/* ================================================= */

function ClinicalFlow() {
  return (
    <div
      className="
        grid
        w-full
        min-w-0
        gap-10
        lg:grid-cols-12
        lg:gap-16
      "
    >
      {/* ================================= */}
      {/* CASE LIFECYCLE                    */}
      {/* ================================= */}

      <div
        className="
          min-w-0
          w-full
          lg:col-span-7
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            gap-4
            border-b
            border-[var(--line)]
            pb-4
          "
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.22em]
              text-[#8aa8d8]
            "
          >
            Case Lifecycle
          </p>

          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-[var(--yellow)]
              sm:text-[9px]
            "
          >
            Start → Complete
          </p>
        </div>

        {/* MOBILE: 2 columns */}
        {/* DESKTOP: 3 columns */}

        <div
          className="
            grid
            grid-cols-2
            border-l
            border-[var(--line)]
            sm:grid-cols-3
          "
        >
          {workflow.map((step, index) => (
            <motion.div
              key={step}
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.045,
                duration: 0.5,
              }}
              className="
                group
                relative
                min-h-[105px]
                min-w-0
                border-b
                border-r
                border-[var(--line)]
                p-4
                sm:min-h-[115px]
                sm:p-5
              "
            >
              <span
                className="
                  text-[8px]
                  tracking-[0.18em]
                  text-[var(--yellow)]
                  sm:text-[9px]
                "
              >
                0{index + 1}
              </span>

              <p
                className="
                  absolute
                  bottom-4
                  left-4
                  right-3
                  text-[10px]
                  uppercase
                  leading-5
                  tracking-[0.08em]
                  text-[#a8b4c4]
                  transition-colors
                  duration-500
                  group-hover:text-white
                  sm:bottom-5
                  sm:left-5
                  sm:text-xs
                "
              >
                {step}
              </p>

              {step === "Run AI" && (
                <motion.span
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.85, 1.15, 0.85],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    right-4
                    top-4
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[var(--yellow)]
                  "
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================================= */}
      {/* CLINICAL CASE                     */}
      {/* ================================= */}

      <div
        className="
          w-full
          min-w-0
          lg:col-span-5
        "
      >
        <div
          className="
            relative
            w-full
            min-w-0
            overflow-hidden
            border
            border-white/[0.07]
            bg-[#07101c]
          "
        >
          {/* HEADER */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-5
              border-b
              border-[var(--line)]
              px-4
              py-4
              sm:px-5
            "
          >
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.18em]
                text-[var(--muted)]
                sm:text-[9px]
              "
            >
              Clinical Case
            </p>

            <div className="flex items-center gap-2">
              <motion.span
                animate={{
                  opacity: [0.25, 1, 0.25],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[var(--yellow)]
                "
              />

              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.15em]
                  text-[var(--yellow)]
                  sm:text-[8px]
                "
              >
                Active
              </span>
            </div>
          </div>

          {/* BODY */}

          <div className="p-5 sm:p-7 md:p-8">
            <p
              className="
                break-words
                text-[clamp(2.8rem,15vw,5rem)]
                font-medium
                leading-none
                tracking-[-0.06em]
                text-white
              "
            >
              CASE
              <span className="text-[#59687c]">/184</span>
            </p>

            <div className="mt-8 sm:mt-10">
              <SystemRow label="Slide" value="WSI_0184.TIFF" />

              <SystemRow label="Viewer" value="Ready" />

              <SystemRow label="AI" value="Available" accent />

              <SystemRow label="Review" value="Pending" />

              <SystemRow label="Status" value="Open" />
            </div>

            <div
              className="
                mt-7
                flex
                items-center
                justify-between
                gap-5
                border-t
                border-[var(--line)]
                pt-5
              "
            >
              <p
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.14em]
                  text-[var(--muted)]
                  sm:text-[8px]
                "
              >
                Doctor Controlled Workflow
              </p>

              <span className="shrink-0 text-[var(--yellow)]">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
/* ================================================= */
/* 02 — ACCESS & DATA                                */
/* ================================================= */

function AccessAndData() {
  const gates = [
    {
      number: "01",
      title: "Authentication",
      detail: "Is the user signed in?",
      tech: "Laravel Breeze",
    },
    {
      number: "02",
      title: "Role Check",
      detail: "Is the authenticated user a doctor?",
      tech: "role:doctor",
    },
    {
      number: "03",
      title: "Case Ownership",
      detail: "Does this case belong to this doctor?",
      tech: "CasePolicy",
    },
  ];

  return (
    <div
      className="
        grid
        gap-14
        lg:grid-cols-12
        lg:gap-20
      "
    >
      {/* Gates */}
      <div className="lg:col-span-6">
        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.27em]
            text-[#8aa8d8]
          "
        >
          Three Access Gates
        </p>

        <div className="mt-8 border-t border-[var(--line)]">
          {gates.map((gate, index) => (
            <motion.div
              key={gate.number}
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.65,
              }}
              className="
                grid
                gap-6
                border-b
                border-[var(--line)]
                py-7
                md:grid-cols-[55px_1fr_auto]
                md:items-center
              "
            >
              <span
                className="
                  text-xs
                  tracking-[0.2em]
                  text-[var(--yellow)]
                "
              >
                {gate.number}
              </span>

              <div>
                <p
                  className="
                    text-xl
                    font-medium
                    tracking-[-0.025em]
                    text-white
                  "
                >
                  {gate.title}
                </p>

                <p
                  className="
                    mt-2
                    text-sm
                    text-[var(--muted)]
                  "
                >
                  {gate.detail}
                </p>
              </div>

              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.16em]
                  text-[#93a1b5]
                "
              >
                {gate.tech}
              </p>
            </motion.div>
          ))}
        </div>

        <div
          className="
            mt-7
            flex
            items-center
            gap-4
          "
        >
          <span
            className="
              h-2
              w-2
              bg-[var(--yellow)]
            "
          />

          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-white
            "
          >
            Access Granted → Clinical Case
          </p>
        </div>
      </div>

      {/* File security */}
      <div className="lg:col-span-6">
        <div
          className="
            relative
            overflow-hidden
            border
            border-white/[0.07]
            p-6
            md:p-8
          "
        >
          <div
            className="
              absolute
              right-[-40px]
              top-[-50px]
              h-40
              w-40
              rounded-full
              bg-[var(--yellow)]/[0.03]
              blur-3xl
            "
          />

          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-[var(--yellow)]
              "
            >
              Private WSI Storage
            </p>

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-[var(--muted)]
              "
            >
              TIFF
            </span>
          </div>

          <p
            className="
              mt-9
              text-[clamp(2.3rem,4vw,4.5rem)]
              font-medium
              leading-[0.95]
              tracking-[-0.05em]
              text-white
            "
          >
            No public
            <span className="block text-[#6e7d91]">file URL.</span>
          </p>

          <div className="mt-10">
            <SystemRow label="Duplicate Guard" value="SHA-256" />

            <SystemRow label="Internal Name" value="UUID" />

            <SystemRow label="Storage" value="Private" accent />

            <SystemRow label="Archive" value="SoftDeletes" />

            <SystemRow label="Completed Case" value="Read Only" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================= */
/* 03 — AI + HUMAN                                   */
/* ================================================= */

function AIHuman() {
  return (
    <div>
      <div
        className="
          grid
          gap-8
          lg:grid-cols-[1fr_auto_1fr_auto_1fr]
          lg:items-stretch
        "
      >
        <FlowColumn
          index="01"
          label="Clinical System"
          title="Laravel"
          items={["Case", "TIFF", "Run AI"]}
        />

        <FlowArrow />

        <FlowColumn
          index="02"
          label="AI Service"
          title="FastAPI"
          items={["OpenSlide", "MIL Model", "Prediction + Score"]}
          accent
        />

        <FlowArrow />

        <FlowColumn
          index="03"
          label="Human Decision"
          title="Doctor"
          items={["Review Slide", "Diagnosis", "Conclusion"]}
        />
      </div>

      {/* Responsibility boundary */}
      <div
        className="
          mt-12
          grid
          gap-8
          border-t
          border-[var(--line)]
          pt-9
          lg:grid-cols-12
          lg:items-end
        "
      >
        <div className="lg:col-span-8">
          <p
            className="
              max-w-5xl
              text-[clamp(2.4rem,4.8vw,5.5rem)]
              font-medium
              leading-[0.95]
              tracking-[-0.055em]
              text-white
            "
          >
            Model assessment
            <span
              className="
                mx-3
                text-[var(--yellow)]
              "
            >
              ≠
            </span>
            final diagnosis.
          </p>
        </div>

        <div className="lg:col-span-4">
          <p
            className="
              max-w-md
              text-base
              leading-8
              text-[var(--muted)]
              md:text-lg
            "
          >
            The AI supports the workflow with an assessment. The doctor reviews
            the slide and owns the final clinical decision.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ================================================= */
/* HELPERS                                           */
/* ================================================= */

function IntroFact({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="
        border-r
        border-[var(--line)]
        py-4
        pr-4
        last:border-r-0
        last:pl-4
        [&:nth-child(2)]:px-4
      "
    >
      <p
        className="
          text-2xl
          font-medium
          tracking-[-0.045em]
          text-white
        "
      >
        {value}
      </p>

      <p
        className="
          mt-1
          text-[7px]
          uppercase
          tracking-[0.15em]
          text-[var(--muted)]
          sm:text-[8px]
        "
      >
        {label}
      </p>
    </div>
  );
}

function SystemRow({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className="
        grid
        min-w-0
        grid-cols-[90px_minmax(0,1fr)]
        items-center
        gap-4
        border-t
        border-[var(--line)]
        py-4
        last:border-b
        sm:grid-cols-[120px_minmax(0,1fr)]
      "
    >
      <p
        className="
          text-[8px]
          uppercase
          tracking-[0.15em]
          text-[var(--muted)]
          sm:text-[9px]
        "
      >
        {label}
      </p>

      <p
        className={`
          min-w-0
          break-all
          text-right
          text-sm
          sm:break-normal
          ${accent ? "text-[var(--yellow)]" : "text-white"}
        `}
      >
        {value}
      </p>
    </div>
  );
}
function FlowColumn({
  index,
  label,
  title,
  items,
  accent = false,
}: {
  index: string;
  label: string;
  title: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      className={`
        relative
        min-h-[310px]
        border
        p-6
        md:p-8
        ${
          accent
            ? "border-[var(--yellow)]/30 bg-[var(--yellow)]/[0.025]"
            : "border-white/[0.07]"
        }
      `}
    >
      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <span
          className={`
            text-xs
            tracking-[0.2em]
            ${accent ? "text-[var(--yellow)]" : "text-[var(--muted)]"}
          `}
        >
          {index}
        </span>

        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.18em]
            text-[var(--muted)]
          "
        >
          {label}
        </span>
      </div>

      <p
        className="
          mt-12
          text-3xl
          font-medium
          tracking-[-0.04em]
          text-white
          md:text-4xl
        "
      >
        {title}
      </p>

      <div className="mt-10">
        {items.map((item) => (
          <div
            key={item}
            className="
              border-t
              border-[var(--line)]
              py-3
              text-[10px]
              uppercase
              tracking-[0.15em]
              text-[#9ba8b9]
            "
          >
            {item}
          </div>
        ))}
      </div>

      {accent && (
        <motion.div
          animate={{
            opacity: [0.15, 0.65, 0.15],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-0
            left-0
            h-px
            w-full
            bg-[var(--yellow)]
          "
        />
      )}
    </motion.div>
  );
}

function FlowArrow() {
  return (
    <div
      className="
        flex
        items-center
        justify-center
        py-2
        text-[var(--yellow)]
        lg:py-0
      "
    >
      <motion.span
        animate={{
          x: [0, 6, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          rotate-90
          text-xl
          lg:rotate-0
        "
      >
        →
      </motion.span>
    </div>
  );
}
