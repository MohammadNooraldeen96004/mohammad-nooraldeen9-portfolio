import { siteData } from "@/data/site";
export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-40 w-full">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 md:px-10 lg:px-16">
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-semibold tracking-[-0.04em] text-white"
        >
          MN<span className="text-[var(--yellow)]">.</span>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 text-sm text-[var(--muted)] md:flex">
          <a
            href="#expertise"
            className="transition-colors duration-300 hover:text-white"
          >
            Expertise
          </a>

          <a
            href="#experience"
            className="transition-colors duration-300 hover:text-white"
          >
            Experience
          </a>

          <a
            href="#work"
            className="transition-colors duration-300 hover:text-white"
          >
            Work
          </a>

          <a
            href="#education"
            className="transition-colors duration-300 hover:text-white"
          >
            Education
          </a>

          <a
            href="#contact"
            className="transition-colors duration-300 hover:text-white"
          >
            Contact
          </a>
        </nav>

        {/* Social */}
        <div className="flex items-center gap-5 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
          <a
            href={siteData.github}
            target="_blank"
            rel="noreferrer"
            className="hidden transition-colors duration-300 hover:text-[var(--yellow)] sm:block"
          >
            GitHub ↗
          </a>

          <a
            href={siteData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-300 hover:text-[var(--yellow)]"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </header>
  );
}
