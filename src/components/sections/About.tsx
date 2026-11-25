import { motion } from "framer-motion";
import { Code2, Database, LayoutDashboard, BookOpen } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const highlights = [
  { icon: Code2, text: "Full-stack web developer building complete applications with React, PHP and Flask" },
  { icon: Database, text: "Comfortable designing MySQL schemas and writing clean, efficient back-end logic" },
  { icon: LayoutDashboard, text: "Passionate about intuitive dashboards, responsive layouts and polished user experiences" },
  { icon: BookOpen, text: "Currently deepening my skills in React, TypeScript, Tailwind CSS and web security" },
];

const About = () => (
  <section id="about" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title gradient-text">About Me</h2>
      <p className="section-subtitle">Get to know the developer behind the code</p>

      <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
        <div className="flex justify-center md:justify-start">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/50 to-neon-purple/50 blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
            <img
              src={profileImg}
              alt="Web developer profile"
              loading="lazy"
              width={280}
              height={280}
              className="relative rounded-2xl w-60 h-60 md:w-full md:h-auto object-cover border-2 border-primary/30"
            />
          </div>
        </div>

        <div className="space-y-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass p-4 flex items-start gap-4 hover:neon-border transition-shadow"
            >
              <item.icon className="text-primary shrink-0 mt-0.5" size={22} />
              <p className="text-foreground/80">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

export default About;
