"use client";

import { useState } from "react";
import type { MouseEvent } from "react";
import { motion } from "motion/react";

type Rotation = {
  x: number;
  y: number;
};

const words = [
  {
    label: "AI",
    top: "8%",
    left: "47%",
    size: "text-xl md:text-2xl",
    accent: true,
  },
  {
    label: "MACHINE LEARNING",
    top: "21%",
    left: "6%",
    size: "text-[10px] md:text-xs",
  },
  {
    label: "PYTHON",
    top: "18%",
    left: "70%",
    size: "text-sm md:text-base",
  },
  {
    label: "DATA",
    top: "41%",
    left: "1%",
    size: "text-sm md:text-lg",
  },
  {
    label: "COMPUTER VISION",
    top: "40%",
    left: "64%",
    size: "text-xs md:text-sm",
    accent: true,
  },
  {
    label: "PYTORCH",
    top: "61%",
    left: "7%",
    size: "text-xs md:text-sm",
  },
  {
    label: "REST APIs",
    top: "67%",
    left: "72%",
    size: "text-xs md:text-sm",
  },
  {
    label: "FULL-STACK",
    top: "79%",
    left: "35%",
    size: "text-sm md:text-base",
    accent: true,
  },
  {
    label: "DEEP LEARNING",
    top: "51%",
    left: "35%",
    size: "text-[10px] md:text-xs",
  },
  {
    label: "LARAVEL",
    top: "30%",
    left: "40%",
    size: "text-[10px] md:text-xs",
  },
  {
    label: "SQL",
    top: "71%",
    left: "48%",
    size: "text-[10px] md:text-xs",
  },
  {
    label: "SOFTWARE",
    top: "87%",
    left: "55%",
    size: "text-[10px] md:text-xs",
  },
];
export default function WordSphere() {
  const [rotation, setRotation] = useState<Rotation>({
    x: 0,
    y: 0,
  });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const container = event.currentTarget;

    const rect = container.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((mouseX - centerX) / centerX) * 10;
    const rotateX = -((mouseY - centerY) / centerY) * 8;

    setRotation({
      x: rotateX,
      y: rotateY,
    });
  }

  function handleMouseLeave() {
    setRotation({
      x: 0,
      y: 0,
    });
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        mx-auto
        aspect-square
        w-full
        max-w-[560px]
        [perspective:1200px]
      "
    >
      {/* Outer glow */}
      <div
        className="
          absolute
          inset-[10%]
          rounded-full
          bg-[radial-gradient(circle,rgba(58,199,255,0.08),transparent_68%)]
          blur-2xl
        "
      />

      {/* Sphere */}
      <motion.div
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 18,
        }}
        className="
          absolute
          inset-[7%]
          [transform-style:preserve-3d]
        "
      >
        {/* Main circle */}
        <div
          className="
            absolute
            inset-0
            rounded-full
            border
            border-white/[0.10]
          "
        />

        {/* Horizontal orbit */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            left-[3%]
            top-[38%]
            h-[24%]
            w-[94%]
            rounded-[50%]
            border
            border-white/[0.08]
          "
        />

        {/* Diagonal orbit */}
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 34,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            inset-[6%]
            rounded-[50%]
            border
            border-[var(--yellow)]/15
            [transform:rotate(58deg)]
          "
        />

        {/* Second orbit */}
        <div
          className="
            absolute
            inset-[14%]
            rounded-full
            border
            border-white/[0.05]
          "
        />

        {/* Center point */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-2
            w-2
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[var(--yellow)]
            shadow-[0_0_30px_rgba(245,200,76,0.6)]
          "
        />

        {/* Words */}
        {words.map((word) => (
          <motion.span
            key={word.label}
            whileHover={{
              scale: 1.18,
              z: 40,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 18,
            }}
            style={{
              top: word.top,
              left: word.left,
            }}
            className={`
              absolute
              cursor-default
              whitespace-nowrap
              uppercase
              tracking-[0.18em]
              transition-colors
              [transform:translateZ(20px)]
              duration-300
              ${word.size}
              ${
                word.accent
                  ? "text-[var(--yellow)]"
                  : "text-[#9baac0] hover:text-white"
              }
            `}
          >
            {word.label}
          </motion.span>
        ))}
      </motion.div>

      {/* Small information */}
      <div className="absolute bottom-[3%] right-[3%] text-right">
        <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--muted)]">
          Interactive System
        </p>

        <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/60">
          Move to explore
        </p>
      </div>
    </div>
  );
}
