import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { currentFocus } from "@/data/portfolio";

const CurrentFocus = () => (
  <section className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title flex items-center gap-3">
        <Target className="text-primary shrink-0" size={32} />
        <span className="gradient-text">Current Focus</span>
      </h2>
      <p className="section-subtitle">What I'm working on right now</p>

      <div className="grid md:grid-cols-2 gap-6">
        {currentFocus.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="glass p-5"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-heading font-medium text-foreground">{item.label}</span>
              <span className="text-primary font-mono text-sm">{item.progress}%</span>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden mb-2">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-neon-purple"
                initial={{ width: 0 }}
                whileInView={{ width: `${item.progress}%` }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
              />
            </div>
            <p className="text-xs text-muted-foreground">{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default CurrentFocus;