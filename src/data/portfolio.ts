// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to personalise the portfolio.
// Everything shown on the site comes from here.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Lester Bringas",
  brand: "<WebDev />",
  role: "Full-Stack Web Developer",
  tagline: "& Problem Solver for the Modern Web",
  intro:
    "I design and build fast, responsive and maintainable web applications — from clean React front-ends to secure PHP and Flask back-ends backed by well-structured MySQL databases.",
  location: "Philippines",
  availability: "Open for freelance projects and collaborations",
};

export const skills = [
  "React",
  "CodeIgniter (PHP)",
  "Flask (Python)",
  "REST APIs",
  "Tailwind CSS",
  "Responsive Design",
];

export const experiences = [
  {
    role: "Full-Stack Web Developer",
    company: "Personal & Freelance Projects",
    duration: "Ongoing",
    responsibilities: [
      "Built complete web apps with CodeIgniter and Flask, including authentication, dashboards and CRUD modules",
      "Designed and optimized MySQL schemas for song, student and activity records",
      "Developed responsive, mobile-friendly interfaces with Bootstrap and Tailwind CSS",
    ],
  },
  {
    role: "Capstone & Hackathon Developer",
    company: "University of Abra — BSIT",
    duration: "Academic",
    responsibilities: [
      "Developing SmartProcure, a Flask web app that digitises procurement records for local governance",
      "Implemented document scanning, QR-code lookup, searchable archives and activity logging",
      "Added secure login with multi-factor authentication and monthly reporting dashboards",
      "Collaborating in a team using Git and GitHub; competing in the CORDI INSPIRE Innovation Challenge",
    ],
  },
];

export const techStack = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Tailwind CSS"],
  Backend: ["PHP (CodeIgniter)", "Python (Flask)"],
  Database: ["MySQL", "Postgres"],
};

export const projects = [
  {
    title: "Electrum: Chords and Song Management System",
    description:
      "A digital platform designed to organize, store, and manage song lyrics, chords, and musical arrangements while also supporting learning.",
    tags: ["CodeIgniter", "MySQL", "Bootstrap", "REST API"],
    category: "php",
    github: "https://github.com/lesterbringas6-art/elect.git",
    demo: "",
  },
  {
    title: "Student Activity Tracker System",
    description:
      "A digital platform designed to monitor, record, and manage students' academic and extracurricular activities.",
    tags: ["Flask", "MySQL", "Bootstrap"],
    category: "flask",
    github: "https://github.com/lesterbringas6-art/Strack.git",
    demo: "",
  },
  {
    title: "Student Management System",
    description:
      "A software application designed to manage and organize student-related information such as enrollment, attendance, grades, and personal records.",
    tags: ["Flask", "MySQL", "Bootstrap"],
    category: "flask",
    github: "https://github.com/lesterbringas6-art/SMS.git",
    demo: "",
  },
  {
    title: "SmartProcure: Procurement Records Digitisation",
    description:
      "A Flask web app that digitises procurement records with document scanning, QR-code lookup, a searchable archive, PR–PO verification, monthly reports and MFA login.",
    tags: ["Flask", "MySQL", "Bootstrap", "OCR", "QR Code"],
    category: "flask",
    github: "",
    demo: "",
  },
  {
    title: "LafAI: AI-Powered Lost and Found System",
    description:
      "An AI-powered lost and found platform that helps users report, search and match lost items with found ones.",
    tags: ["AI", "Web App", "Database"],
    category: "ai",
    github: "",
    demo: "",
  },
];

export const currentFocus = [
  { label: "React & TypeScript", progress: 65, detail: "Typed components and clean architecture" },
  { label: "Tailwind CSS", progress: 70, detail: "Utility-first, responsive design systems" },
  { label: "Flask Back-ends", progress: 60, detail: "Auth, REST APIs and larger app structure" },
  { label: "Web Performance & Security", progress: 45, detail: "Optimised queries, safe auth, best practices" },
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/lester-bringas-993aa93a0",
  email: "lesterbringas6@gmail.com",
  github: "https://github.com/lesterbringas6-art",
};