import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { experiences } from "@/data/portfolio";

const Experience = () => (
  <section id="experience" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title gradient-text">Experience</h2>
      <p className="section-subtitle">My professional journey</p>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative flex flex-col md:flex-row gap-4 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary neon-glow z-10 mt-6" />

              <div className="md:w-1/2" />
              <div className="ml-10 md:ml-0 md:w-1/2 glass p-6 hover:neon-border transition-shadow">
                <div className="flex items-center gap-2 text-primary font-mono text-sm mb-1">
                  <Briefcase size={14} /> {exp.role}
                </div>
                <p className="text-foreground font-heading font-semibold">{exp.company}</p>
                <p className="text-muted-foreground text-sm flex items-center gap-1 mb-3">
                  <Calendar size={12} /> {exp.duration}
                </p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((r, j) => (
                    <li key={j} className="text-foreground/70 text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">▹</span> {r}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

export default Experience;
