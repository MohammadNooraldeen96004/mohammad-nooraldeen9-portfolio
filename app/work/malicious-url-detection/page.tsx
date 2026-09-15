import Link from "next/link";
import MaliciousURLStory from "@/components/case-study/MaliciousURLStory";

export default function MaliciousURLDetectionPage() {
  return (
    <main className="site-grid min-h-screen text-white">

      <nav
        className="
          fixed
          left-0
          top-0
          z-50
          w-full
          bg-[var(--background)]/85
          px-6
          py-5
          backdrop-blur-md
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
              inline-flex
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


      <MaliciousURLStory />

    </main>
  );
}