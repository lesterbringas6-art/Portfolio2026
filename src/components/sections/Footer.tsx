import { profile } from "@/data/portfolio";

const Footer = () => (
  <footer className="border-t border-border py-8 text-center">
    <p className="text-sm text-muted-foreground">
      © {new Date().getFullYear()} <span className="neon-text font-mono">{profile.brand}</span> — Built with React & Tailwind CSS
    </p>
  </footer>
);

export default Footer;
