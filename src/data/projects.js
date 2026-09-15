/**
 * ==============================================================================
 * SIX PIXELS — CENTRALIZED PROJECTS DATA
 * ==============================================================================
 * 
 * To add, edit, or remove projects, modify the array below.
 * Adding a project here automatically updates filter counts, cards, and modal details.
 */

export const projectCategories = [
  "All",
  "Web",
  "Software",
  "AI",
  "UI/UX",
  "Client"
];

export const projects = [
  {
    id: "proj-1",
    title: "Knowledge & Resource Hub",
    category: "Web",
    shortDescription: "A centralized web platform engineered to organize digital documentation, resources, and shared project assets with instant search.",
    image: "/images/projects/project-web.svg",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express"],
    status: "Completed",
    problem: "Teams often struggle with scattered documents across multiple drive folders, messaging apps, and fragmented bookmarks.",
    solution: "Built a structured, lightning-fast searchable catalog with tagging, document previews, and secure role-based sharing.",
    features: [
      "Instant full-text search across documentation libraries",
      "Sleek dark-mode interface designed for all-day usability",
      "Direct file preview and multi-format download capabilities",
      "Fully responsive layout optimized for mobile, tablet, and desktop"
    ],
    liveUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/resource-hub"
  },
  {
    id: "proj-2",
    title: "Intelligent Schedule Planner",
    category: "Software",
    shortDescription: "A high-performance desktop and web scheduling utility for conflict-free timetable generation and milestone management.",
    image: "/images/projects/project-software.svg",
    technologies: ["JavaScript", "Electron", "SQLite", "Tailwind CSS"],
    status: "Completed",
    problem: "Complex schedules across departments frequently lead to double bookings, overlapping rooms, and missed operational milestones.",
    solution: "Engineered an offline-first scheduling engine that automatically calculates clashes and renders interactive visual timelines.",
    features: [
      "Visual conflict detection across overlapping schedules",
      "Offline SQLite storage for zero latency and private local data",
      "Automated calendar sync (.ics export) for Google & Outlook",
      "Custom alerts and notification triggers for milestone deliverables"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/example/schedule-planner"
  },
  {
    id: "proj-3",
    title: "AI Document Summarizer & Analysis Platform",
    category: "AI",
    shortDescription: "An intelligent natural language platform that extracts key takeaways, action items, and data tables from dense reports.",
    image: "/images/projects/project-ai.svg",
    technologies: ["Python", "FastAPI", "OpenAI API", "React"],
    status: "In Development",
    problem: "Skimming through 50+ page technical briefs and proposals drains valuable engineering and executive time.",
    solution: "Developed an automated summarization and Q&A pipeline that indexes documents and provides instant conversational insights.",
    features: [
      "PDF and DOCX extraction with layout preservation",
      "Context-aware executive summarization and key question generation",
      "Interactive chat interface for querying uploaded document contents",
      "Lightweight web interface built for high-speed analysis"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/example/ai-summarizer"
  },
  {
    id: "proj-4",
    title: "Brand System & Modern UI Component Kit",
    category: "UI/UX",
    shortDescription: "A comprehensive design system, accessibility tokens, and interactive component library created for tech startups.",
    image: "/images/projects/project-uiux.svg",
    technologies: ["Figma", "Tailwind CSS", "Design Systems"],
    status: "Completed",
    problem: "Early-stage products often suffer from inconsistent typography, broken visual hierarchy, and slow development velocity.",
    solution: "Designed an atomic component library with high contrast standards, accessible patterns, and direct Tailwind code tokens.",
    features: [
      "Over 40 production-ready UI component variants",
      "Consistent 8pt grid layout, spacing tokens, and color scales",
      "Interactive Figma micro-interaction prototypes",
      "Developer-ready CSS variables and component documentation"
    ],
    liveUrl: "https://example.com/figma-preview",
    githubUrl: ""
  },
  {
    id: "proj-5",
    title: "Creative Studio Portfolio & Lead Platform",
    category: "Client",
    shortDescription: "A custom web application built for a boutique creative agency featuring interactive galleries and rapid lead capture.",
    image: "/images/projects/project-client.svg",
    technologies: ["React", "Vite", "Tailwind CSS"],
    status: "Completed",
    problem: "The client required a distinctive, high-end digital identity that loaded instantaneously without the bloat of template builders.",
    solution: "Crafted a custom, responsive single-page experience boasting 99+ Lighthouse performance and smooth interactive showcase cards.",
    features: [
      "Sub-second load times with optimized asset streaming",
      "Dynamic interactive media gallery with filterable project categories",
      "Integrated inquiry pipeline for immediate client consultation",
      "Fully responsive and touch-optimized across all modern devices"
    ],
    liveUrl: "https://example.com/client-site",
    githubUrl: ""
  }
,
  {
    id: "proj-6",
    title: "Impact of AI on Job Analysis",
    category: "AI",
    shortDescription: "A Python project analyzing job market trends using data cleaning, preprocessing, and exploratory data analysis.",
    image: "/images/projects/project-ai.svg",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    status: "Completed",
    problem: "The need to understand complex job market trends and the impact of AI across various industries.",
    solution: "Performed data cleaning, preprocessing, and EDA to build classification models and an interactive visualization dashboard.",
    features: [
      "Exploratory Data Analysis (EDA) with Pandas and NumPy",
      "Data cleaning and preprocessing of job market datasets",
      "Classification models built with Scikit-learn",
      "Interactive dashboard for visualizing job market trends"
    ],
    liveUrl: "",
    githubUrl: ""
  },
  {
    id: "proj-7",
    title: "Interactive Map Application",
    category: "Web",
    shortDescription: "A full-stack web application featuring an interactive map with real-time data rendering and location search.",
    image: "/images/projects/project-web.svg",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Leaflet"],
    status: "Completed",
    problem: "Users needed a dynamic, responsive way to search, discover, and explore locations on an interactive map.",
    solution: "Developed a full-stack MERN application integrating Leaflet/React-Leaflet for interactive visualization and a RESTful backend for real-time data.",
    features: [
      "Interactive map visualization with zooming, panning, and custom location markers",
      "Location search functionality to find and explore places",
      "RESTful APIs built with Node.js and Express.js",
      "Responsive, modern UI styling with custom popups and search controls"
    ],
    liveUrl: "",
    githubUrl: ""
  },
  {
    id: "proj-8",
    title: "PromoTrack - Activation Management Portal",
    category: "Web",
    shortDescription: "A full-stack portal managing campaigns, activations, tasks, and reporting to streamline client operations.",
    image: "/images/projects/project-software.svg",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    status: "Completed",
    problem: "Client teams faced manual status-checking effort and fragmented management of campaigns, tasks, and reporting.",
    solution: "Built a comprehensive management portal with a 15+ endpoint RESTful API and responsive real-time React interfaces to reduce manual effort.",
    features: [
      "6+ core modules covering campaigns, activations, tasks, and reporting",
      "RESTful API backend with 15+ endpoints in Express and Node.js",
      "MongoDB database schema with full CRUD operations across 4 core collections",
      "Responsive, interactive React.js interfaces for real-time activation tracking"
    ],
    liveUrl: "",
    githubUrl: ""
  }
];

export default projects;
