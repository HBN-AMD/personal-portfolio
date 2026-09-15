# SIX PIXELS — Official Team Website

> **“Six Minds. One Pixel-Perfect Solution.”**  
> A complete, modern, dynamic, and responsive website for the student-led software development and freelancing team **SIX PIXELS**.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Architecture & Easy Editing Guide

All team information and projects are **centralized** in two single-source-of-truth files. You never need to modify JSX markup across multiple components to add or update content.

### 1. Updating Team Members & CV Links
Edit: [`src/data/team.js`](file:///c:/Users/Lenovo/Desktop/SixPixels/src/data/team.js)

```javascript
export const teamMembers = [
  {
    id: "member-1",
    name: "Muhammad Saeed",
    role: "Software Developer",
    description: "Student developer and member of Six Pixels...",
    email: "saeed@example.com",
    image: "", // Leave blank for automatic stylized initials avatar
    cv: "https://saeed-123-hash.github.io/saeed-cv/MuhammadSaeed_CV.pdf",
    github: "https://github.com/saeed-123-hash",
    linkedin: ""
  },
  // ... Members 2 to 6
];
```

- Every card features a **View CV** button.
- When clicked, it opens in a new tab (`target="_blank"` and `rel="noopener noreferrer"`).
- Long URLs are never shown directly in the UI.
- Use `"#"` if a member's CV is still being finalized (the button will smoothly alert the visitor).

### 2. Adding or Editing Projects
Edit: [`src/data/projects.js`](file:///c:/Users/Lenovo/Desktop/SixPixels/src/data/projects.js)

- Add new items to the `projects` array.
- Assign categories: `Web`, `Software`, `AI`, `UI/UX`, `University`, or `Client`.
- The category filter pills, count counters, cards, and modal detail views will update automatically.

---

## 🛠️ Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky glass navigation, 6-pixel mark, mobile drawer
│   ├── Hero.jsx            # Interactive pixel canvas, headline & dual CTAs
│   ├── About.jsx           # Narrative, stats cards, interconnected 6-pixel visualizer
│   ├── Services.jsx        # 6 core service cards with icons & tech tags
│   ├── TeamSection.jsx     # Meet The Team section layout
│   ├── TeamCard.jsx        # Glassmorphic card, View CV, email, & socials
│   ├── ProjectsSection.jsx # Portfolio catalog & category filter controller
│   ├── ProjectCard.jsx     # Card preview with status & tech badges
│   ├── ProjectFilter.jsx   # Filter pills with dynamic project counts
│   ├── ProjectDetails.jsx  # Rich modal dialog with problem, solution, & links
│   ├── WhyChooseUs.jsx     # 5 student-led advantage cards
│   ├── WorkProcess.jsx     # 4-step progressive execution timeline
│   ├── Contact.jsx         # Direct mailto launcher, email copy, & form
│   └── Footer.jsx          # Brand info, quick links, & copyright
│
├── data/
│   ├── team.js             # Centralized team data & exact CV links
│   └── projects.js         # Centralized portfolio projects data
│
├── assets/
│   └── images/             # Static image assets
│
├── App.jsx                 # Main application layout
├── index.css               # Tailwind CSS, custom glass effects & animations
└── main.jsx                # Application root entry
```

---

## 🎨 Design Highlights
- **Palette**: Deep dark space background (`#08090d`), electric cyan (`#00f0ff`), and emerald (`#10b981`).
- **Brand Motifs**: 6-pixel logo mark and interactive constellation representing the six founding members.
- **Glassmorphism**: Backdrop blurs, subtle border highlights, and hover glow effects.
- **Responsive & Accessible**: Semantic HTML, mobile drawer menu, keyboard accessibility, and `prefers-reduced-motion` support.
