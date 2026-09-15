import Link from "next/link";
import PathologyStory from "@/components/case-study/PathologyStory";

export default function PathologyAIPage() {
  return (
    <main className="site-grid min-h-screen text-white">

      {/* NAVIGATION */}
      <nav
        className="
          fixed
          left-0
          top-0
          z-50
          w-full
          px-6
          py-5
          md:px-10
          lg:px-16
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[1800px]
            items-center
            justify-between
          "
        >

          <Link
            href="/"
            className="
              text-lg
              font-semibold
              tracking-[-0.04em]
              text-white
            "
          >
            MN<span className="text-[var(--yellow)]">.</span>
          </Link>


          <Link
            href="/#work"
            className="
              group
              flex
              items-center
              gap-3
              text-[9px]
              uppercase
              tracking-[0.23em]
              text-[var(--muted)]
              transition-colors
              duration-500
              hover:text-white
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

          </Link>

        </div>
      </nav>


      {/* COMPLETE CASE STUDY */}
      <PathologyStory />

    </main>
  );
}