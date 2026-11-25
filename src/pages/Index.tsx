import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import GitHubStats from "@/components/sections/GitHubStats";
import CurrentFocus from "@/components/sections/CurrentFocus";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <TechStack />
    <Projects />
    <GitHubStats />
    <CurrentFocus />
    <Contact />
    <Footer />
  </div>
);

export default Index;
