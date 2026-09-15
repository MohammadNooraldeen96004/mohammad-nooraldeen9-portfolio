"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type Mode = {
  number: string;
  title: string;
};

const modes: Mode[] = [
  {
    number: "01",
    title: "URL Signal",
  },
  {
    number: "02",
    title: "Hybrid Engine",
  },
  {
    number: "03",
    title: "Detection",
  },
];

const signals = [
  {
    label: "URL Length",
    value: "41",
    description:
      "Measures the overall length of the normalized URL.",
  },
  {
    label: "URL Entropy",
    value: "4.28",
    description:
      "Captures character randomness and irregular structure.",
  },
  {
    label: "Digits",
    value: "3",
    description:
      "Counts numeric characters appearing inside the URL.",
  },
  {
    label: "Special Chars",
    value: "4",
    description:
      "Measures characters such as -, _, @, %, and dots.",
  },
  {
    label: "IP Address",
    value: "NO",
    description:
      "Flags URLs that use a raw IPv4 address as the domain.",
  },
  {
    label: "Path Length",
    value: "12",
    description:
      "Captures how deep or unusual the URL path structure is.",
  },
];

export default function MaliciousURLStory() {
  const [activeMode, setActiveMode] = useState(0);

  return (
    <section
      className="
        relative
        w-full
        min-w-0
        overflow-x-hidden
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

        {/* ================================================= */}
        {/* INTRO                                             */}
        {/* ================================================= */}

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
                tracking-[0.22em]
                text-[var(--yellow)]
              "
            >
              03
            </span>

            <span className="h-px w-10 bg-[var(--line)]" />

            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.26em]
                text-[#8aa8d8]
              "
            >
              Cybersecurity / Deep Learning
            </p>

          </div>


          <div
            className="
              flex
              flex-wrap
              gap-x-7
              gap-y-2
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-[var(--muted)]
            "
          >
            <span>CNN + Bi-GRU</span>
            <span>~690K URLs</span>
            <span>Streamlit Demo</span>
          </div>

        </div>


        {/* ================================================= */}
        {/* PROJECT COVER                                     */}
        {/* ================================================= */}

        <div
          className="
            grid
            gap-12
            py-14
            lg:grid-cols-12
            lg:items-center
            lg:py-20
          "
        >

          {/* TITLE */}

          <div className="lg:col-span-7">

            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.28em]
                text-[var(--yellow)]
              "
            >
              Malicious URL Intelligence
            </p>


            <motion.h1
              initial={{
                opacity: 0,
                y: 28,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-7
                max-w-[1000px]
                text-[clamp(3rem,5.6vw,6.3rem)]
                font-medium
                leading-[0.9]
                tracking-[-0.06em]
                text-white
              "
            >
              Detect structure.
              <span className="block text-[#8190a4]">
                Not just known threats
                <span className="text-[var(--yellow)]">.</span>
              </span>
            </motion.h1>


            <p
              className="
                mt-8
                max-w-2xl
                text-base
                leading-8
                text-[var(--muted)]
                md:text-lg
              "
            >
              A hybrid deep-learning pipeline that analyzes URL
              structure using character-level patterns, sequential
              context, and engineered numerical features.
            </p>

          </div>


          {/* URL SPECIMEN */}

          <div className="min-w-0 lg:col-span-5">

            <div
              className="
                min-w-0
                overflow-hidden
                border
                border-white/[0.07]
                bg-[#07101c]
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[var(--line)]
                  px-5
                  py-4
                "
              >
                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-[var(--muted)]
                  "
                >
                  URL Specimen
                </p>

                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-[var(--yellow)]
                  "
                >
                  Character Level
                </p>
              </div>


              <div className="p-5 md:p-7">

                <p
                  className="
                    break-all
                    font-mono
                    text-lg
                    leading-8
                    tracking-[0.03em]
                    text-[#aeb9c8]
                    md:text-xl
                  "
                >
                  secure-paypal-
                  <span
                    className="
                      border-b
                      border-[var(--yellow)]
                      text-white
                    "
                  >
                    login
                  </span>
                  -account247.com/verify
                </p>


                <div
                  className="
                    mt-8
                    grid
                    grid-cols-2
                    border-l
                    border-t
                    border-[var(--line)]
                  "
                >
                  <MiniFact
                    label="Sequence"
                    value="200 chars"
                  />

                  <MiniFact
                    label="Features"
                    value="10 numeric"
                  />

                  <MiniFact
                    label="Split"
                    value="By domain"
                  />

                  <MiniFact
                    label="Output"
                    value="Binary"
                  />
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ================================================= */}
        {/* INTERACTIVE EXPLORER                              */}
        {/* ================================================= */}

        <section
          className="
            relative
            min-h-[calc(100svh-80px)]
            border-t
            border-[var(--line)]
          "
        >

          {/* MODE NAV */}

          <div
            className="
              sticky
              top-[64px]
              z-30
              grid
              grid-cols-3
              border-b
              border-[var(--line)]
              bg-[var(--background)]/95
              backdrop-blur-xl
              lg:top-[72px]
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
                    min-h-[82px]
                    border-r
                    border-[var(--line)]
                    px-3
                    py-4
                    text-left
                    last:border-r-0
                    sm:min-h-[92px]
                    sm:px-5
                    md:min-h-[105px]
                    md:px-6
                    ${
                      active
                        ? "bg-white/[0.025]"
                        : "hover:bg-white/[0.015]"
                    }
                  `}
                >

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                    "
                  >
                    <span
                      className={`
                        text-[8px]
                        tracking-[0.2em]
                        sm:text-[9px]
                        ${
                          active
                            ? "text-[var(--yellow)]"
                            : "text-white/25"
                        }
                      `}
                    >
                      {mode.number}
                    </span>

                    <span
                      className={`
                        text-sm
                        transition-transform
                        duration-500
                        ${
                          active
                            ? "rotate-45 text-[var(--yellow)]"
                            : "text-white/20"
                        }
                      `}
                    >
                      +
                    </span>
                  </div>


                  <p
                    className={`
                      mt-4
                      text-[9px]
                      uppercase
                      leading-4
                      tracking-[0.08em]
                      sm:text-[10px]
                      md:text-sm
                      ${
                        active
                          ? "text-white"
                          : "text-[#68768a]"
                      }
                    `}
                  >
                    {mode.title}
                  </p>


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


          {/* ACTIVE SCREEN */}

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
            <div className="w-full min-w-0">

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
                  {activeMode === 0 && <URLSignal />}
                  {activeMode === 1 && <HybridEngine />}
                  {activeMode === 2 && <Detection />}
                </motion.div>

              </AnimatePresence>

            </div>
          </div>

        </section>


        {/* END */}

        <div
          className="
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
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-[var(--muted)]
            "
          >
            TensorFlow · CNN · Bi-GRU · Scikit-learn · Streamlit
          </p>


          <a
            href="/#work"
            className="
              group
              inline-flex
              items-center
              gap-3
              text-[9px]
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
/* 01 — URL SIGNAL                                   */
/* ================================================= */

function URLSignal() {
  const [activeSignal, setActiveSignal] = useState(0);

  return (
    <div
      className="
        grid
        min-w-0
        gap-12
        lg:grid-cols-12
        lg:gap-16
      "
    >

      {/* URL ANALYSIS */}

      <div className="min-w-0 lg:col-span-7">

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-[var(--line)]
            pb-5
          "
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-[#8aa8d8]
            "
          >
            URL Representation
          </p>

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-[var(--yellow)]
            "
          >
            Normalized Input
          </span>
        </div>


        <div
          className="
            relative
            mt-8
            overflow-hidden
            border
            border-white/[0.07]
            bg-[#07101c]
            p-5
            md:p-8
          "
        >

          <p
            className="
              break-all
              font-mono
              text-[clamp(1.3rem,2.5vw,2.6rem)]
              leading-[1.6]
              tracking-[0.02em]
              text-white
            "
          >
            secure-paypal-login-account247.com/verify
          </p>


          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-3
            "
          >
            <SignalBadge label="CHARACTER SEQUENCE" />
            <SignalBadge label="MAX 200" />
            <SignalBadge label="DOMAIN GROUP" />
            <SignalBadge label="10 FEATURES" />
          </div>


          <div
            className="
              mt-10
              border-t
              border-[var(--line)]
              pt-6
            "
          >
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-[var(--muted)]
              "
            >
              Processing
            </p>

            <div
              className="
                mt-5
                flex
                flex-wrap
                items-center
                gap-x-4
                gap-y-3
                text-[9px]
                uppercase
                tracking-[0.13em]
                text-[#9ba8b9]
              "
            >
              <span>Normalize</span>
              <span className="text-[var(--yellow)]">→</span>

              <span>Encode</span>
              <span className="text-[var(--yellow)]">→</span>

              <span>Extract Features</span>
              <span className="text-[var(--yellow)]">→</span>

              <span>Scale</span>
            </div>
          </div>

        </div>

      </div>


      {/* SIGNALS */}

      <div className="min-w-0 lg:col-span-5">

        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.24em]
            text-[#8aa8d8]
          "
        >
          Engineered Signals
        </p>


        <div className="mt-7 border-t border-[var(--line)]">

          {signals.map((signal, index) => {
            const active = activeSignal === index;

            return (
              <button
                key={signal.label}
                type="button"
                onClick={() => setActiveSignal(index)}
                onMouseEnter={() => setActiveSignal(index)}
                className="
                  grid
                  w-full
                  grid-cols-[1fr_auto]
                  items-center
                  gap-5
                  border-b
                  border-[var(--line)]
                  py-4
                  text-left
                "
              >
                <span
                  className={`
                    text-xs
                    uppercase
                    tracking-[0.1em]
                    transition-colors
                    duration-400
                    ${
                      active
                        ? "text-white"
                        : "text-[#738196]"
                    }
                  `}
                >
                  {signal.label}
                </span>

                <span
                  className={`
                    font-mono
                    text-sm
                    ${
                      active
                        ? "text-[var(--yellow)]"
                        : "text-[#78869a]"
                    }
                  `}
                >
                  {signal.value}
                </span>

              </button>
            );
          })}

        </div>


        <AnimatePresence mode="wait">

          <motion.div
            key={activeSignal}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              mt-6
              border-l
              border-[var(--yellow)]
              pl-5
            "
          >
            <p
              className="
                text-sm
                leading-7
                text-[var(--muted)]
              "
            >
              {signals[activeSignal].description}
            </p>

          </motion.div>

        </AnimatePresence>

      </div>

    </div>
  );
}


/* ================================================= */
/* 02 — HYBRID ENGINE                                */
/* ================================================= */

function HybridEngine() {
  return (
    <div>

      <div
        className="
          flex
          flex-col
          gap-5
          md:flex-row
          md:items-end
          md:justify-between
        "
      >

        <div>

          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-[#8aa8d8]
            "
          >
            Dual-Branch Intelligence
          </p>

          <p
            className="
              mt-4
              max-w-2xl
              text-2xl
              font-medium
              leading-9
              tracking-[-0.03em]
              text-white
              md:text-3xl
            "
          >
            Learned URL patterns meet
            engineered structural signals.
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
          The two representations are fused before the
          final binary classifier.
        </p>

      </div>


      <div
        className="
          mt-12
          grid
          gap-8
          lg:grid-cols-[1fr_90px_1fr]
          lg:items-center
        "
      >

        {/* CHARACTER BRANCH */}

        <EngineBranch
          number="01"
          label="Character Branch"
          title="CNN + Bi-GRU"
          nodes={[
            "URL Sequence",
            "Embedding",
            "Conv1D",
            "Bi-GRU",
          ]}
        />


        {/* FUSION */}

        <div
          className="
            flex
            items-center
            justify-center
          "
        >

          <motion.div
            initial={{
              scale: 0.85,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              border
              border-[var(--yellow)]/35
              text-[9px]
              uppercase
              tracking-[0.16em]
              text-[var(--yellow)]
              lg:h-20
              lg:w-20
            "
          >
            Fusion
          </motion.div>

        </div>


        {/* NUMERIC BRANCH */}

        <EngineBranch
          number="02"
          label="Numeric Branch"
          title="Manual Features"
          nodes={[
            "10 Features",
            "StandardScaler",
            "Dense",
            "Feature Vector",
          ]}
        />

      </div>


      {/* OUTPUT */}

      <div
        className="
          mt-10
          flex
          flex-col
          items-center
        "
      >

        <span className="text-[var(--yellow)]">
          ↓
        </span>

        <div
          className="
            mt-5
            w-full
            max-w-xl
            border
            border-white/[0.07]
            p-6
            text-center
          "
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.2em]
              text-[var(--muted)]
            "
          >
            Classification Head
          </p>

          <p
            className="
              mt-4
              text-2xl
              font-medium
              tracking-[-0.03em]
              text-white
            "
          >
            Malicious / Benign
          </p>

        </div>

      </div>

    </div>
  );
}


/* ================================================= */
/* 03 — DETECTION                                    */
/* ================================================= */

function Detection() {
  return (
    <div
      className="
        grid
        min-w-0
        gap-10
        lg:grid-cols-12
        lg:gap-14
      "
    >

      {/* DEMO FLOW */}

      <div className="min-w-0 lg:col-span-5">

        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-[#8aa8d8]
          "
        >
          Streamlit Application
        </p>


        <div
          className="
            mt-7
            overflow-hidden
            border
            border-white/[0.07]
            bg-[#07101c]
          "
        >

          <div
            className="
              border-b
              border-[var(--line)]
              px-5
              py-4
            "
          >
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-[var(--muted)]
              "
            >
              Analyze URL
            </p>
          </div>


          <div className="p-5 md:p-7">

            <div
              className="
                overflow-hidden
                border
                border-white/[0.08]
                px-4
                py-4
              "
            >
              <p
                className="
                  break-all
                  font-mono
                  text-sm
                  text-[#aeb9c8]
                "
              >
                http://example-bank-login.com
              </p>
            </div>


            <div
              className="
                mt-6
                flex
                items-center
                justify-between
                border-y
                border-[var(--line)]
                py-4
              "
            >
              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-[var(--muted)]
                "
              >
                Pipeline
              </span>

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-[var(--yellow)]
                "
              >
                Model Prediction
              </span>
            </div>


            <div
              className="
                mt-7
                grid
                grid-cols-2
                gap-4
              "
            >

              <DemoStage
                number="01"
                value="Encode"
              />

              <DemoStage
                number="02"
                value="Scale"
              />

              <DemoStage
                number="03"
                value="Predict"
              />

              <DemoStage
                number="04"
                value="Risk"
              />

            </div>


            <p
              className="
                mt-7
                text-[8px]
                leading-5
                tracking-[0.13em]
                text-[var(--muted)]
              "
            >
              Architecture animations are educational visualizations.
              The final classification is generated by the loaded model.
            </p>

          </div>

        </div>

      </div>


      {/* METRICS */}

      <div className="min-w-0 lg:col-span-7">

        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-[#8aa8d8]
          "
        >
          Test Performance
        </p>


        <div
          className="
            mt-7
            grid
            grid-cols-2
            border-l
            border-t
            border-[var(--line)]
          "
        >

          <MetricBlock
            value="95.5%"
            label="Accuracy"
          />

          <MetricBlock
            value="98.4%"
            label="Precision"
            accent
          />

          <MetricBlock
            value="92.5%"
            label="Recall"
          />

          <MetricBlock
            value="95.4%"
            label="F1 Score"
          />

        </div>


        <div
          className="
            mt-7
            flex
            flex-wrap
            gap-x-8
            gap-y-4
            border-t
            border-[var(--line)]
            pt-6
            text-[8px]
            uppercase
            tracking-[0.18em]
            text-[var(--muted)]
          "
        >
          <span>639,999 Train URLs</span>
          <span>50,000 Test URLs</span>
          <span>GroupShuffleSplit</span>
          <span>Early Stopping</span>
        </div>

      </div>

    </div>
  );
}


/* ================================================= */
/* HELPERS                                           */
/* ================================================= */

function MiniFact({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        border-b
        border-r
        border-[var(--line)]
        p-4
      "
    >
      <p
        className="
          text-[7px]
          uppercase
          tracking-[0.15em]
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


function SignalBadge({
  label,
}: {
  label: string;
}) {
  return (
    <span
      className="
        border
        border-white/[0.08]
        px-3
        py-2
        text-[8px]
        uppercase
        tracking-[0.15em]
        text-[#8f9db0]
      "
    >
      {label}
    </span>
  );
}


function EngineBranch({
  number,
  label,
  title,
  nodes,
}: {
  number: string;
  label: string;
  title: string;
  nodes: string[];
}) {
  return (
    <div
      className="
        min-w-0
        border
        border-white/[0.07]
        p-5
        md:p-7
      "
    >

      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-[9px]
            tracking-[0.2em]
            text-[var(--yellow)]
          "
        >
          {number}
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
          mt-8
          text-3xl
          font-medium
          tracking-[-0.04em]
          text-white
        "
      >
        {title}
      </p>


      <div className="mt-8">

        {nodes.map((node, index) => (
          <motion.div
            key={node}
            initial={{
              opacity: 0,
              x: -12,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.08,
              duration: 0.5,
            }}
            className="
              flex
              items-center
              justify-between
              border-t
              border-[var(--line)]
              py-4
            "
          >
            <span
              className="
                text-xs
                uppercase
                tracking-[0.1em]
                text-[#a5b0bf]
              "
            >
              {node}
            </span>

            {index !== nodes.length - 1 && (
              <span className="text-[var(--yellow)]">
                ↓
              </span>
            )}
          </motion.div>
        ))}

      </div>

    </div>
  );
}


function DemoStage({
  number,
  value,
}: {
  number: string;
  value: string;
}) {
  return (
    <div
      className="
        border
        border-white/[0.07]
        p-4
      "
    >
      <p
        className="
          text-[8px]
          text-[var(--yellow)]
        "
      >
        {number}
      </p>

      <p
        className="
          mt-5
          text-xs
          uppercase
          tracking-[0.1em]
          text-white
        "
      >
        {value}
      </p>
    </div>
  );
}


function MetricBlock({
  value,
  label,
  accent = false,
}: {
  value: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 16,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className={`
        min-h-[145px]
        border-b
        border-r
        border-[var(--line)]
        p-5
        md:min-h-[180px]
        md:p-7
        ${
          accent
            ? "bg-[var(--yellow)]/[0.025]"
            : ""
        }
      `}
    >
      <p
        className={`
          text-[clamp(2.2rem,4vw,4.8rem)]
          font-medium
          tracking-[-0.055em]
          ${
            accent
              ? "text-[var(--yellow)]"
              : "text-white"
          }
        `}
      >
        {value}
      </p>

      <p
        className="
          mt-7
          text-[8px]
          uppercase
          tracking-[0.18em]
          text-[var(--muted)]
        "
      >
        {label}
      </p>
    </motion.div>
  );
}