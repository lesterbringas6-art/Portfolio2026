import { motion } from "framer-motion";
import { Github, FolderGit2, Layers, Server } from "lucide-react";
import { projects, techStack, socialLinks } from "@/data/portfolio";

const stats = [
  { icon: FolderGit2, label: "Web Projects", value: String(projects.length) },
  { icon: Layers, label: "Technologies", value: String(Object.values(techStack).flat().length) },
  { icon: Server, label: "Back-end Frameworks", value: "2" },
];

const GitHubStats = () => (
  <section className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title flex items-center gap-3">
        <Github className="text-primary shrink-0" size={32} />
        <span className="gradient-text">At a Glance</span>
      </h2>
      <p className="section-subtitle">A quick snapshot of my web development work</p>

      <div className="grid sm:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="glass p-6 text-center hover:neon-border transition-shadow"
          >
            <stat.icon className="mx-auto text-primary mb-3" size={28} />
            <p className="text-3xl font-heading font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="glass p-6 text-center">
        <p className="text-muted-foreground text-sm mb-3">
          Browse my code, side projects and contributions on GitHub.
        </p>
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-mono"
        >
          <Github size={16} /> View GitHub Profile
        </a>
      </div>
    </motion.div>
  </section>
);

export default GitHubStats;