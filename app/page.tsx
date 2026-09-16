import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import SelectedWork from "@/components/SelectedWork";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Feedback from "@/components/Feedback";

export default function Home() {
  return (
    <main className="site-grid">
      <Navbar />
      <Hero />
      <Feedback />
      <Expertise />
      <Experience />
      <SelectedWork />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
