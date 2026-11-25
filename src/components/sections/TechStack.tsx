import { motion } from "framer-motion";
import { techStack } from "@/data/portfolio";
import { Code, Server, Database, LayoutTemplate, Wrench } from "lucide-react";

const iconMap: Record<string, typeof Code> = {
  Frontend: Code,
  Backend: Server,
  Database: Database,
  "Web Practices": LayoutTemplate,
  Tools: Wrench,
};

const TechStack = () => (
  <section id="techstack" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title gradient-text">Tech Stack</h2>
      <p className="section-subtitle">Technologies I work with</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(techStack).map(([category, items], i) => {
          const Icon = iconMap[category] || Code;
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="glass p-6 hover:neon-border transition-shadow group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:neon-glow transition-shadow">
                  <Icon size={20} />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono px-3 py-1.5 rounded-full bg-secondary text-muted-foreground border border-border hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="mt-6 glass p-4 border-primary/20 text-center"
      >
        <p className="text-sm text-muted-foreground">
          🚀 <span className="text-primary font-medium">Currently learning:</span> React + TypeScript, advanced Tailwind CSS and web security
        </p>
      </motion.div>
    </motion.div>
  </section>
);

export default TechStack;
