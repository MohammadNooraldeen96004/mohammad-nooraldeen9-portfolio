"use client";

import { motion } from "motion/react";
import { siteData } from "@/data/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        scroll-mt-24
        px-6
        pb-24
        pt-24
        md:px-10
        md:pb-28
        md:pt-28
        lg:px-16
        lg:pb-32
        lg:pt-32
      "
    >
      <div className="mx-auto max-w-[1800px]">

        {/* Label */}
        <p className="text-xs uppercase tracking-[0.3em] text-[#8aa8d8]">
          06 / Contact
        </p>


        {/* Main statement */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16"
        >

          <p className="text-xs uppercase tracking-[0.25em] text-[var(--yellow)]">
            Have an opportunity or a project?
          </p>

          <h2
            className="
              mt-6
              max-w-[1500px]
              text-[clamp(3.5rem,8vw,9rem)]
              font-medium
              uppercase
              leading-[0.82]
              tracking-[-0.065em]
            "
          >
            Let&apos;s build
            <span className="block text-[var(--yellow)]">
              something meaningful.
            </span>
          </h2>

        </motion.div>


        {/* Contact links */}
        <div
          className="
            mt-20
            grid
            gap-10
            border-t
            border-[var(--line)]
            pt-8
            md:grid-cols-2
            lg:grid-cols-4
          "
        >

          <ContactLink
            label="Email"
            value="Send a message"
            href={`mailto:${siteData.email}`}
          />

          <ContactLink
            label="LinkedIn"
            value="Connect"
            href={siteData.linkedin}
          />

          <ContactLink
            label="GitHub"
            value="View my code"
            href={siteData.github}
          />

          <ContactLink
            label="WhatsApp"
            value="Start a conversation"
            href={siteData.whatsapp}
          />

        </div>

      </div>
    </section>
  );
}


function ContactLink({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group"
    >

      <div className="flex items-center justify-between">

        <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
          {label}
        </p>

        <span
          className="
            text-[var(--yellow)]
            transition-transform
            duration-500
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        >
          ↗
        </span>

      </div>

      <p
        className="
          mt-5
          text-xl
          font-medium
          tracking-[-0.03em]
          text-white
          transition-colors
          duration-500
          group-hover:text-[var(--yellow)]
          md:text-2xl
        "
      >
        {value}
      </p>

    </a>
  );
}