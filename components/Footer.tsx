import { siteData } from "@/data/site";

export default function Footer() {
  return (
    <footer
      className="
        relative
        px-6
        pb-8
        pt-10
        md:px-10
        lg:px-16
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-[1800px]
          flex-col
          gap-6
          border-t
          border-[var(--line)]
          pt-7
          text-[10px]
          uppercase
          tracking-[0.2em]
          text-[var(--muted)]
          md:flex-row
          md:items-center
          md:justify-between
        "
      >

        <div>
          <p className="text-white">
            MN<span className="text-[var(--yellow)]">.</span>
          </p>

          <p className="mt-2">
            {siteData.role}
          </p>
        </div>


        <div
          className="
            flex
            flex-wrap
            gap-x-7
            gap-y-3
          "
        >

          <a
            href={siteData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-300 hover:text-white"
          >
            LinkedIn ↗
          </a>

          <a
            href={siteData.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-300 hover:text-white"
          >
            GitHub ↗
          </a>

          <a
            href={siteData.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-300 hover:text-white"
          >
            WhatsApp ↗
          </a>

        </div>


        <p>
          © 2026 {siteData.name}
        </p>

      </div>
    </footer>
  );
}