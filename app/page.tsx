import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import SelectedWork from "@/components/SelectedWork";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="site-grid">
      <Navbar />
      <Hero />
      <Expertise />
      <Experience />
      <SelectedWork />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
