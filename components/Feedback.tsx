"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";

export default function Feedback() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!message.trim()) return;

    setStatus("sending");

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send feedback");
      }

      setMessage("");
      setStatus("success");

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      className="
        relative
        border-y
        border-[var(--line)]
        px-6
        md:px-10
        lg:px-16
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-[1800px]
          gap-8
          py-10
          md:grid-cols-[280px_1fr]
          md:items-center
          md:py-12
          lg:grid-cols-[360px_1fr]
        "
      >

        {/* TEXT */}

        <motion.div
          initial={{
            opacity: 0,
            y: 14,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-[var(--yellow)]
            "
          >
            Open to feedback
          </p>

          <h3
            className="
              mt-3
              max-w-[300px]
              text-lg
              font-medium
              leading-snug
              tracking-[-0.02em]
              text-white
              md:text-xl
            "
          >
            Spotted something I could improve?
          </h3>
        </motion.div>


        {/* FORM */}

        <motion.form
          onSubmit={handleSubmit}
          initial={{
            opacity: 0,
            y: 14,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            delay: 0.08,
          }}
          className="
            group
            relative
            flex
            items-end
            gap-4
            border-b
            border-[#263246]
            pb-3
            transition-colors
            duration-500
            focus-within:border-[var(--yellow)]
          "
        >
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={2}
            maxLength={1000}
            required
            placeholder="Share a suggestion, correction, or feedback..."
            className="
              min-h-[58px]
              flex-1
              resize-none
              bg-transparent
              text-sm
              leading-6
              text-white
              outline-none
              placeholder:text-[#66748a]
              md:text-base
            "
          />

          <button
            type="submit"
            disabled={status === "sending" || !message.trim()}
            className="
              mb-1
              shrink-0
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-[var(--yellow)]
              transition-all
              duration-500
              hover:translate-x-1
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            {status === "sending" ? "Sending..." : "Send ↗"}
          </button>

          {status === "success" && (
            <p
              className="
                absolute
                -bottom-7
                left-0
                text-[9px]
                uppercase
                tracking-[0.16em]
                text-[#9baac0]
              "
            >
              Feedback received. Thank you.
            </p>
          )}

          {status === "error" && (
            <p
              className="
                absolute
                -bottom-7
                left-0
                text-[9px]
                uppercase
                tracking-[0.16em]
                text-red-400
              "
            >
              Something went wrong. Try again.
            </p>
          )}
        </motion.form>

      </div>
    </section>
  );
}