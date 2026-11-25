import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import { skills, profile } from "@/data/portfolio";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const skill = skills[currentSkill];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(skill.slice(0, displayText.length + 1));
          if (displayText.length === skill.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setDisplayText(skill.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentSkill((prev) => (prev + 1) % skills.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentSkill]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase">
            Hello, I'm {profile.name} — a
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            <span className="gradient-text">{profile.role}</span>
            <br />
            <span className="text-foreground text-2xl sm:text-3xl md:text-4xl font-light">
              {profile.tagline}
            </span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-6">
            {profile.intro}
          </p>

          <div className="h-10 flex items-center justify-center mb-10">
            <span className="font-mono text-primary text-lg">
              {displayText}
              <span className="border-r-2 border-primary ml-0.5 animate-typing-cursor">&nbsp;</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollTo("#projects")}
              className="glass neon-border px-8 py-3 rounded-lg font-medium text-primary hover:bg-primary/10 transition-colors flex items-center gap-2"
            >
              <ExternalLink size={18} /> View Projects
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="text-muted-foreground" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;