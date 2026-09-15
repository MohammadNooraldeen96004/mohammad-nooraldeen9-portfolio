"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

import { useRef, useState, type ReactNode } from "react";

const chapters = [
  {
    number: "01",
    label: "Challenge",
  },
  {
    number: "02",
    label: "System",
  },
  {
    number: "03",
    label: "Results",
  },
  {
    number: "04",
    label: "Limitation",
  },
];

/* ================================================= */
/* MAIN                                              */
/* ================================================= */

export default function PathologyStory() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block">
        <DesktopStory />
      </div>

      {/* Mobile + Tablet */}
      <div className="lg:hidden">
        <MobileStory />
      </div>
    </>
  );
}

/* ================================================= */
/* DESKTOP STORY                                     */
/* ================================================= */

function DesktopStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeChapter, setActiveChapter] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) {
      setActiveChapter(0);
    } else if (latest < 0.5) {
      setActiveChapter(1);
    } else if (latest < 0.75) {
      setActiveChapter(2);
    } else {
      setActiveChapter(3);
    }
  });

  return (
    <section ref={containerRef} className="relative h-[240vh]">
      <div
        className="
          sticky
    top-[65px]
    flex
    h-[calc(100svh-65px)]
    items-start
    overflow-hidden
    px-16
    pt-0
    pb-4
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1800px]
          "
        >
          {/* TOP RAIL */}
          <div
            className="
              mb-10
              flex
              justify-between
              border-b
              border-[var(--line)]
              pb-5
            "
          >
            <div>
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-[var(--yellow)]
                "
              ></p>

              <p
                className="
                  mt-2
                  text-sm
                  uppercase
                  tracking-[0.16em]
                  text-white
                "
              >
                Pathology AI
              </p>
            </div>

            <div className="flex  gap-8">
              {chapters.map((chapter, index) => {
                const active = activeChapter === index;

                return (
                  <div key={chapter.number} className="flex  gap-3">
                    <span
                      className={`
                        text-[10px]
                        tracking-[0.2em]
                        transition-colors
                        duration-700
                        ${active ? "text-[var(--yellow)]" : "text-white/20"}
                      `}
                    >
                      {chapter.number}
                    </span>

                    <span
                      className={`
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        transition-all
                        duration-700
                        ${active ? "translate-x-1 text-white" : "text-white/20"}
                      `}
                    >
                      {chapter.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ACTIVE CHAPTER */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChapter}
              initial={{
                opacity: 0,
                y: 32,
                filter: "blur(5px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -25,
                filter: "blur(5px)",
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {activeChapter === 0 && <Challenge />}
              {activeChapter === 1 && <System />}
              {activeChapter === 2 && <Results />}
              {activeChapter === 3 && <Limitation />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* PROGRESS */}
        <motion.div
          style={{
            scaleX: scrollYProgress,
            transformOrigin: "left",
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
      </div>
    </section>
  );
}

/* ================================================= */
/* 01 — CHALLENGE                                    */
/* ================================================= */

function Challenge() {
  return (
    <div
      className="
        grid
        min-h-[610px]
        grid-cols-12
        
        gap-16
      "
    >
      {/* LEFT */}
      <div className="col-span-5">
        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.3em]
            text-[#8aa8d8]
          "
        >
          The Challenge
        </p>

        <motion.p
          initial={{
            opacity: 0,
            x: -35,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
          }}
          className="
            mt-10
            text-[clamp(6rem,8vw,10rem)]
            font-medium
            leading-[0.75]
            tracking-[-0.08em]
            text-white
          "
        >
          100K
        </motion.p>

        <p
          className="
            mt-5
            text-[10px]
            uppercase
            tracking-[0.22em]
            text-[var(--muted)]
          "
        >
          Pixels per dimension
        </p>

        <div
          className="
            mt-14
            border-l
            border-[var(--yellow)]
            pl-7
          "
        >
          <p
            className="
              max-w-md
              text-2xl
              leading-9
              text-[#aeb9c9]
            "
          >
            The diagnosis exists.
            <span className="text-white"> The tumor location does not.</span>
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="col-span-7">
        <div
          className="
            relative
            aspect-[16/9]
            overflow-hidden
            border
            border-white/[0.07]
            bg-[#07101c]
          "
        >
          {/* GRID */}
          <div
            className="
              absolute
              inset-0
              opacity-40
              [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)]
              [background-size:52px_52px]
            "
          />

          {/* REGION SHAPES */}
          <div
            className="
              absolute
              left-[11%]
              top-[18%]
              h-[28%]
              w-[21%]
              bg-white/[0.025]
            "
          />

          <div
            className="
              absolute
              left-[39%]
              top-[43%]
              h-[23%]
              w-[18%]
              bg-white/[0.035]
            "
          />

          <div
            className="
              absolute
              right-[13%]
              top-[25%]
              h-[38%]
              w-[23%]
              bg-white/[0.02]
            "
          />

          {/* SCANNER */}
          <motion.div
            animate={{
              x: ["0%", "420%", "0%"],
              y: ["0%", "120%", "0%"],
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[10%]
              top-[17%]
              h-24
              w-24
              border
              border-[var(--yellow)]
              bg-[var(--yellow)]/[0.025]
              shadow-[0_0_50px_rgba(245,200,76,0.12)]
            "
          >
            <div
              className="
                absolute
                -right-1.5
                -top-1.5
                h-3
                w-3
                bg-[var(--yellow)]
              "
            />
          </motion.div>

          <p
            className="
              absolute
              bottom-7
              left-7
              text-[9px]
              uppercase
              tracking-[0.24em]
              text-[var(--muted)]
            "
          >
            Gigapixel Search Space
          </p>

          <p
            className="
              absolute
              right-7
              top-7
              text-[9px]
              uppercase
              tracking-[0.24em]
              text-[var(--yellow)]
            "
          >
            Weak Supervision
          </p>
        </div>

        {/* STATS */}
        <div
          className="
            grid
            grid-cols-3
            border-x
            border-b
            border-[var(--line)]
          "
        >
          <DataCell value="460" label="WSIs Audited" />

          <DataCell value="4.08M" label="Candidates" />

          <DataCell value="184" label="GI Slides" />
        </div>
      </div>
    </div>
  );
}

/* ================================================= */
/* 02 — SYSTEM                                       */
/* ================================================= */

function System() {
  const nodes = [
    {
      label: "Clinical Reports",
      code: "01",
    },
    {
      label: "Ground Truth",
      code: "02",
    },
    {
      label: "HSV Filtering",
      code: "03",
    },
    {
      label: "Virtual Patching",
      code: "04",
    },
    {
      label: "EfficientNet-B0",
      code: "05",
    },
    {
      label: "MIL + Max Pool",
      code: "06",
    },
    {
      label: "Prediction",
      code: "07",
    },
  ];

  return (
    <div className="min-h-[610px]">
      <div
        className="
          flex
          items-end
          justify-between
          gap-14
        "
      >
        <div>
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-[#8aa8d8]
            "
          >
            The System
          </p>

          <p
            className="
              mt-5
              max-w-2xl
              text-4xl
              font-medium
              leading-[1.05]
              tracking-[-0.035em]
              text-white
            "
          >
            Built around the constraints, not around the model.
          </p>
        </div>

        <p
          className="
            max-w-sm
            text-sm
            leading-7
            text-[var(--muted)]
          "
        >
          Virtual patching stores coordinates instead of millions of physical
          image files.
        </p>
      </div>

      {/* PIPELINE */}
      <div
        className="
          relative
          mt-16
          min-h-[390px]
          border-y
          border-[var(--line)]
          py-14
        "
      >
        {/* BASE LINE */}
        <div
          className="
            absolute
            left-[4%]
            right-[4%]
            top-1/2
            h-px
            bg-white/[0.07]
          "
        />

        {/* ANIMATED LINE */}
        <motion.div
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: 2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            left-[4%]
            top-1/2
            h-px
            w-[92%]
            origin-left
            bg-[var(--yellow)]/55
          "
        />

        <div className="grid grid-cols-7 gap-4">
          {nodes.map((node, index) => (
            <motion.div
              key={node.code}
              initial={{
                opacity: 0,
                y: index % 2 === 0 ? -30 : 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.75,
              }}
              className={`
                relative
                z-10
                flex
                min-h-[165px]
                flex-col
                justify-between
                border
                border-white/[0.07]
                bg-[var(--background)]
                p-5
                ${index % 2 === 0 ? "-translate-y-9" : "translate-y-9"}
              `}
            >
              <span
                className="
                  text-[9px]
                  tracking-[0.2em]
                  text-[var(--yellow)]
                "
              >
                {node.code}
              </span>

              <p
                className="
                  text-sm
                  uppercase
                  tracking-[0.08em]
                  text-white
                "
              >
                {node.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================================================= */
/* 03 — RESULTS                                      */
/* ================================================= */

function Results() {
  return (
    <div className="min-h-[610px]">
      <div className="grid grid-cols-12 gap-6">
        {/* MAIN METRIC */}
        <div
          className="
            relative
            col-span-7
            min-h-[500px]
            overflow-hidden
            border
            border-white/[0.07]
            p-10
          "
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-[#8aa8d8]
            "
          >
            Hold-Out Performance
          </p>

          <motion.p
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
            }}
            className="
              mt-20
              text-[clamp(8rem,12vw,14rem)]
              font-medium
              leading-[0.7]
              tracking-[-0.09em]
              text-white
            "
          >
            .8912
          </motion.p>

          <p
            className="
              mt-10
              text-xs
              uppercase
              tracking-[0.3em]
              text-[var(--yellow)]
            "
          >
            AUC-ROC
          </p>

          <div
            className="
              absolute
              bottom-9
              right-9
              text-right
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
              Test Set
            </p>

            <p className="mt-2 text-2xl text-white">28 Slides</p>
          </div>
        </div>

        {/* GRID METRICS */}
        <div
          className="
            col-span-5
            grid
            grid-cols-2
            border
            border-white/[0.07]
          "
        >
          <MetricCell value="89.29%" label="Accuracy" />

          <MetricCell value="100%" label="Specificity" />

          <MetricCell value="57.14%" label="Sensitivity" />

          <MetricCell value=".7273" label="F1" />
        </div>
      </div>

      {/* FOOT META */}
      <div
        className="
          mt-7
          flex
          flex-wrap
          gap-x-9
          gap-y-4
          border-t
          border-[var(--line)]
          pt-6
          text-[9px]
          uppercase
          tracking-[0.2em]
          text-[var(--muted)]
        "
      >
        <span>Focal Loss</span>
        <span>Threshold 0.5814</span>
        <span>Multi-Bag Inference</span>
        <span>EfficientNet-B0</span>
        <span>TPU</span>
      </div>
    </div>
  );
}

/* ================================================= */
/* 04 — LIMITATION                                   */
/* ================================================= */

function Limitation() {
  return (
    <div
      className="
        grid
        min-h-[610px]
        grid-cols-12
        
        gap-16
      "
    >
      {/* MATRIX */}
      <div className="col-span-6">
        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.3em]
            text-[#8aa8d8]
          "
        >
          The Limitation
        </p>

        <div
          className="
            mt-9
            grid
            aspect-square
            max-w-[540px]
            grid-cols-2
            grid-rows-2
            border
            border-white/[0.08]
          "
        >
          <MatrixCell value="21" label="True Negative" positive />

          <MatrixCell value="0" label="False Positive" />

          <MatrixCell value="3" label="False Negative" warning />

          <MatrixCell value="4" label="True Positive" positive />
        </div>
      </div>

      {/* TEXT */}
      <div className="col-span-6 pl-8">
        <p
          className="
            max-w-xl
            text-[clamp(3rem,4vw,5rem)]
            font-medium
            leading-[0.96]
            tracking-[-0.05em]
            text-white
          "
        >
          High precision.
          <span
            className="
              block
              text-[#7d8b9f]
            "
          >
            Lower sensitivity.
          </span>
        </p>

        <p
          className="
            mt-9
            max-w-xl
            text-lg
            leading-8
            text-[var(--muted)]
          "
        >
          Three malignant cases were missed. Small tumor regions can fall
          outside a randomly sampled bag.
        </p>

        <div
          className="
            mt-12
            border-l
            border-[var(--yellow)]
            pl-7
          "
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.23em]
              text-[var(--muted)]
            "
          >
            Next Iteration
          </p>

          <p
            className="
              mt-4
              text-2xl
              text-white
            "
          >
            Attention MIL + Explainable Heatmaps
          </p>
        </div>
      </div>
    </div>
  );
}

/* ================================================= */
/* MOBILE STORY                                      */
/* ================================================= */

function MobileStory() {
  return (
    <section
      className="
        px-6
        pb-16
        pt-28
        md:px-10
      "
    >
      {/* MOBILE INTRO */}
      <div className="pb-16">
        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.28em]
            text-[var(--yellow)]
          "
        >
          Case 01 / Pathology AI
        </p>

        <h1
          className="
            mt-6
            text-[clamp(3rem,13vw,5.2rem)]
            font-medium
            uppercase
            leading-[0.87]
            tracking-[-0.06em]
            text-white
          "
        >
          Weakly Supervised
          <span className="block">
            Pathology AI<span className="text-[var(--yellow)]">.</span>
          </span>
        </h1>

        <p
          className="
            mt-7
            max-w-lg
            text-base
            leading-7
            text-[var(--muted)]
          "
        >
          Malignancy screening in gigapixel pathology slides using Multiple
          Instance Learning.
        </p>
      </div>

      <MobileChapter number="01" label="Challenge">
        <MobileChallenge />
      </MobileChapter>

      <MobileChapter number="02" label="System">
        <MobileSystem />
      </MobileChapter>

      <MobileChapter number="03" label="Results">
        <MobileResults />
      </MobileChapter>

      <MobileChapter number="04" label="Limitation">
        <MobileLimitation />
      </MobileChapter>
    </section>
  );
}

/* ================================================= */
/* MOBILE CHAPTER                                    */
/* ================================================= */

function MobileChapter({
  number,
  label,
  children,
}: {
  number: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        border-t
        border-[var(--line)]
        py-16
      "
    >
      <div
        className="
          mb-10
          flex
          
          justify-between
        "
      >
        <span
          className="
            text-xs
            tracking-[0.22em]
            text-[var(--yellow)]
          "
        >
          {number}
        </span>

        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.23em]
            text-[#8aa8d8]
          "
        >
          {label}
        </span>
      </div>

      {children}
    </motion.article>
  );
}

/* ================================================= */
/* MOBILE — CHALLENGE                                */
/* ================================================= */

function MobileChallenge() {
  return (
    <div>
      <p
        className="
          text-[clamp(4.5rem,22vw,6rem)]
          font-medium
          leading-[0.78]
          tracking-[-0.075em]
          text-white
        "
      >
        100K
      </p>

      <p
        className="
          mt-4
          text-[9px]
          uppercase
          tracking-[0.22em]
          text-[var(--muted)]
        "
      >
        Pixels per dimension
      </p>

      <p
        className="
          mt-10
          border-l
          border-[var(--yellow)]
          pl-5
          text-xl
          leading-8
          text-[#afbac9]
        "
      >
        The diagnosis exists.
        <span className="text-white"> The tumor location does not.</span>
      </p>

      <div
        className="
          mt-10
          grid
          grid-cols-3
          border-y
          border-[var(--line)]
        "
      >
        <DataCell value="460" label="WSIs" />

        <DataCell value="4.08M" label="Patches" />

        <DataCell value="184" label="GI Slides" />
      </div>
    </div>
  );
}

/* ================================================= */
/* MOBILE — SYSTEM                                   */
/* ================================================= */

function MobileSystem() {
  const pipeline = [
    "Clinical Reports",
    "Ground Truth",
    "HSV Filter",
    "Virtual Patches",
    "EfficientNet",
    "MIL Pool",
    "Prediction",
  ];

  return (
    <div>
      <p
        className="
          max-w-md
          text-2xl
          font-medium
          leading-8
          tracking-[-0.03em]
          text-white
        "
      >
        Clinical report to slide prediction.
      </p>

      <div
        className="
          mt-10
          grid
          grid-cols-2
          border-l
          border-t
          border-[var(--line)]
        "
      >
        {pipeline.map((item, index) => (
          <motion.div
            key={item}
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.05,
              duration: 0.5,
            }}
            className="
              min-h-[110px]
              border-b
              border-r
              border-[var(--line)]
              p-4
            "
          >
            <p
              className="
                text-[9px]
                text-[var(--yellow)]
              "
            >
              0{index + 1}
            </p>

            <p
              className="
                mt-7
                text-xs
                uppercase
                leading-5
                tracking-[0.08em]
                text-white
              "
            >
              {item}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ================================================= */
/* MOBILE — RESULTS                                  */
/* ================================================= */

function MobileResults() {
  return (
    <div>
      <div
        className="
          border
          border-[var(--line)]
          p-6
        "
      >
        <p
          className="
            text-[clamp(4rem,21vw,6.5rem)]
            font-medium
            leading-none
            tracking-[-0.075em]
            text-white
          "
        >
          .8912
        </p>

        <p
          className="
            mt-5
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-[var(--yellow)]
          "
        >
          AUC-ROC
        </p>

        <p
          className="
            mt-3
            text-xs
            text-[var(--muted)]
          "
        >
          Hold-out test / 28 slides
        </p>
      </div>

      <div
        className="
          grid
          grid-cols-2
          border-x
          border-b
          border-[var(--line)]
        "
      >
        <MobileMetric value="89.29%" label="Accuracy" />

        <MobileMetric value="100%" label="Specificity" />

        <MobileMetric value="57.14%" label="Sensitivity" />

        <MobileMetric value=".7273" label="F1" />
      </div>
    </div>
  );
}

/* ================================================= */
/* MOBILE — LIMITATION                               */
/* ================================================= */

function MobileLimitation() {
  return (
    <div>
      <div
        className="
          grid
          grid-cols-2
          border-l
          border-t
          border-[var(--line)]
        "
      >
        <MatrixCell value="21" label="TN" positive />

        <MatrixCell value="0" label="FP" />

        <MatrixCell value="3" label="FN" warning />

        <MatrixCell value="4" label="TP" positive />
      </div>

      <p
        className="
          mt-10
          text-2xl
          font-medium
          leading-8
          tracking-[-0.03em]
          text-white
        "
      >
        Three malignant cases were missed.
      </p>

      <p
        className="
          mt-5
          text-base
          leading-7
          text-[var(--muted)]
        "
      >
        Small tumor regions can fall outside a randomly sampled bag, reducing
        sensitivity.
      </p>

      <div
        className="
          mt-9
          border-l
          border-[var(--yellow)]
          pl-5
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
          Next Iteration
        </p>

        <p
          className="
            mt-3
            text-lg
            leading-7
            text-white
          "
        >
          Attention MIL + Explainable Heatmaps
        </p>
      </div>
    </div>
  );
}

/* ================================================= */
/* HELPERS                                           */
/* ================================================= */

function DataCell({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="
        border-r
        border-[var(--line)]
        p-4
        last:border-r-0
        lg:p-6
      "
    >
      <p
        className="
          text-2xl
          font-medium
          tracking-[-0.05em]
          text-white
          lg:text-4xl
        "
      >
        {value}
      </p>

      <p
        className="
          mt-2
          text-[7px]
          uppercase
          tracking-[0.14em]
          text-[var(--muted)]
          lg:text-[9px]
        "
      >
        {label}
      </p>
    </div>
  );
}

function MetricCell({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="
        flex
        min-h-[210px]
        flex-col
        justify-between
        border-b
        border-r
        border-white/[0.07]
        p-6
        even:border-r-0
      "
    >
      <p
        className="
          text-[clamp(2rem,3.5vw,4rem)]
          font-medium
          tracking-[-0.05em]
          text-white
        "
      >
        {value}
      </p>

      <p
        className="
          text-[9px]
          uppercase
          tracking-[0.22em]
          text-[var(--yellow)]
        "
      >
        {label}
      </p>
    </div>
  );
}

function MobileMetric({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="
        min-h-[120px]
        border-b
        border-r
        border-[var(--line)]
        p-4
      "
    >
      <p
        className="
          text-2xl
          font-medium
          tracking-[-0.04em]
          text-white
        "
      >
        {value}
      </p>

      <p
        className="
          mt-7
          text-[8px]
          uppercase
          tracking-[0.15em]
          text-[var(--yellow)]
        "
      >
        {label}
      </p>
    </div>
  );
}

function MatrixCell({
  value,
  label,
  positive = false,
  warning = false,
}: {
  value: string;
  label: string;
  positive?: boolean;
  warning?: boolean;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className={`
        flex
        min-h-[150px]
        flex-col
        justify-between
        border-b
        border-r
        border-white/[0.07]
        p-5
        lg:min-h-0
        lg:p-6
        ${warning ? "bg-[var(--yellow)]/[0.06]" : ""}
      `}
    >
      <p
        className={`
          text-[clamp(2.8rem,6vw,6rem)]
          font-medium
          tracking-[-0.06em]
          ${
            warning
              ? "text-[var(--yellow)]"
              : positive
                ? "text-white"
                : "text-[#78869a]"
          }
        `}
      >
        {value}
      </p>

      <p
        className="
          text-[8px]
          uppercase
          tracking-[0.16em]
          text-[var(--muted)]
          lg:text-[9px]
        "
      >
        {label}
      </p>
    </motion.div>
  );
}
