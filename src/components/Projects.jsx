import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft, ChevronRight, Search, LayoutGrid, List, AlignJustify,
  Wifi, Battery, ExternalLink, Github, Download,
  Globe, Database, Music, BookOpen, ShoppingCart, Coffee,
  GraduationCap, FileText, CheckSquare, Map, Zap, Users,
  Terminal, Building2, Layers, Brain, Rocket, Package, Shield,
  Calendar, Linkedin, Mail, Info, SlidersHorizontal, Tag,
  Monitor, Code2, Folder,
} from "lucide-react";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ DATA */

const FOLDER_META = {
  fullstack: { c1: "#3b82f6", c2: "#7c3aed", label: "Blue" },
  small:     { c1: "#10b981", c2: "#0d9488", label: "Green" },
  company:   { c1: "#f59e0b", c2: "#f97316", label: "Orange" },
  future:    { c1: "#ec4899", c2: "#e11d48", label: "Pink" },
};

const TYPE_STYLE = {
  "Official Website":  "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "Client Frontend":  "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  "Full-Stack Product":"bg-violet-500/20 text-violet-300 border-violet-500/30",
};

const FOLDERS = [
  {
    id: "fullstack", name: "Big Projects", subtitle: "Full Stack Applications",
    count: 4,
    projects: [
      { id:"connectvista", title:"ConnectVista", kind:"Full Stack",
        shortDesc:"Service marketplace with real-time chat & booking",
        description:"Full-stack service marketplace connecting customers with verified service providers. JWT auth & RBAC for multi-user types. Real-time messaging via Socket.io, provider onboarding, booking lifecycle, subscription management, and a trust-driven rating engine.",
        tech:["React.js (Vite)","Node.js","Express.js","MongoDB","Socket.io","Tailwind CSS","JWT","RBAC"],
        duration:"Nov 2025 – Mar 2026", github:"https://github.com/DHRUV-SHERE/ConnectVista", live:null,
        features:["JWT auth & RBAC (customers, providers, admins)","Real-time messaging via Socket.io","Provider onboarding & booking lifecycle","Subscription management","Rating & review engine","Service-oriented architecture"],
        icon: Users },
      { id:"pashumitra", title:"PashuMitra", kind:"Full Stack",
        shortDesc:"Veterinary healthcare platform for farmers & doctors",
        description:"Comprehensive veterinary platform connecting farmers, doctors, medical stores, and transport providers. Role-based architecture, real-time consultations, medicine ordering, and livestock awareness portal.",
        tech:["React.js","Node.js","Express.js","MongoDB","Socket.io","Tailwind CSS","JWT"],
        duration:"Jul 2025 – Nov 2025", github:"https://github.com/ProjectSGH/PashuMitra", live:null,
        features:["Multi-role architecture (Farmers, Doctors, Stores, Admin)","Medicine ordering & inventory","Transport request management","Real-time consultations","RBAC authentication","Livestock awareness portal"],
        icon: Zap, isOrg:true, org:"ProjectSGH" },
      { id:"agrosense", title:"AgroSense", kind:"Full Stack",
        shortDesc:"Farmer-to-buyer marketplace with AI farming assistant",
        description:"Agriculture digital ecosystem eliminating middlemen. AI chatbot for farming assistance, government scheme awareness, MongoDB Atlas backend with modular architecture. Led full-stack development end-to-end.",
        tech:["React.js","Node.js","Express.js","MongoDB","Cloudinary","Bootstrap","JWT"],
        duration:"Jan 2025 – May 2025", github:"https://github.com/AgroSence/AgroSence", live:"https://agrosence.vercel.app/",
        features:["Farmer-to-Buyer marketplace","AI farming assistant chatbot","Government scheme awareness","Cloudinary media management","Seller dashboard","JWT authentication"],
        icon: Globe, isOrg:true, org:"AgroSence" },
      { id:"promptstudio", title:"PromptStudio", kind:"Full Stack",
        shortDesc:"AI prompt generation & optimization platform",
        description:"AI-powered platform to generate, optimize, and customize prompts for multiple AI tools. Category-based templates, prompt optimization engine, and modern responsive interface with reusable components.",
        tech:["React.js","Node.js","JavaScript","Tailwind CSS"],
        duration:"2024 – Present", github:"https://github.com/DHRUV-SHERE/PromptStudio", live:"https://thepromptstudio.vercel.app/",
        features:["Prompt generation for AI tools","Optimization engine","Category-based templates","Responsive interface","Reusable component architecture"],
        icon: Brain },
    ],
  },
  {
    id: "small", name: "Small Projects", subtitle: "Normal & UI Projects",
    count: 8,
    projects: [
      { id:"spotify", title:"Spotify Clone", kind:"UI / Frontend",
        shortDesc:"Music streaming with Spotify Web API",
        description:"Full-featured Spotify clone integrating the Spotify Web API. Playlist management, music discovery, user authentication, and responsive audio playback controls.",
        tech:["React","Node.js","Spotify API","Tailwind CSS","Express.js"],
        duration:"Sep 2024", github:"https://github.com/DHRUV-SHERE/Spotify", live:"https://spotify-clone-dhruv.vercel.app/",
        features:["Spotify API integration","Playlist management","Music discovery","Audio controls","Responsive design"], icon: Music },
      { id:"knowbase", title:"KnowBase", kind:"UI / Frontend",
        shortDesc:"Knowledge management with advanced search",
        description:"Knowledge management system with advanced search, categorization, tagging, markdown support, user roles, and efficient information retrieval.",
        tech:["MERN Stack","React","MongoDB","Tailwind CSS","JWT"],
        duration:"Oct 2024", github:"https://github.com/DHRUV-SHERE/knowBase", live:"https://knowbase-dhruv.vercel.app/",
        features:["Advanced search","Markdown support","User roles","Content categorization","Tagging system"], icon: BookOpen },
      { id:"amazon", title:"Amazon Clone", kind:"UI / Frontend",
        shortDesc:"E-commerce replica with Stripe payments",
        description:"E-commerce platform replica with product listings, shopping cart, authentication, Stripe payment integration, product search/filters, and admin dashboard.",
        tech:["React","Node.js","MongoDB","Stripe API","Tailwind CSS","Redux"],
        duration:"Jul 2024", github:"https://github.com/DHRUV-SHERE/Amazon", live:"https://amazon-clone-dhruv.vercel.app/",
        features:["Product search & filters","Shopping cart","Stripe integration","User auth","Admin dashboard"], icon: ShoppingCart },
      { id:"oracle", title:"Oracle Website Clone", kind:"UI / Frontend",
        shortDesc:"Pixel-perfect Oracle.com recreation",
        description:"Faithful recreation of Oracle's official website with responsive design, database product showcases, complex SQL demonstrations, and stored procedure examples.",
        tech:["HTML","CSS","JavaScript","SQL","PL/SQL"],
        duration:"Aug 2024", github:"https://github.com/DHRUV-SHERE/Oracle", live:null,
        features:["Pixel-perfect UI recreation","Database product showcase","SQL query demos","Stored procedures","Responsive design"], icon: Database },
      { id:"rejoiuce", title:"Rejoiuce Animated Clone", kind:"UI / Frontend",
        shortDesc:"Animated food website with GSAP scroll effects",
        description:"Animated food and beverage website clone with stunning GSAP scroll animations, modern design patterns, and fully responsive layout. Focus on UI/UX and animation quality.",
        tech:["React","GSAP","CSS Animations","Express.js","MongoDB"],
        duration:"Jun 2024", github:"https://github.com/DHRUV-SHERE/RejoiuceClone", live:"https://rejoiuce-clone.vercel.app/",
        features:["GSAP scroll animations","Smooth transitions","Product browsing","Responsive design","Modern visual design"], icon: Coffee },
      { id:"lms", title:"Learning Management System", kind:"Full Stack",
        shortDesc:"Online education with courses & video streaming",
        description:"Complete online education platform with course creation, enrollment, progress tracking, video streaming, quiz system, and certificate generation.",
        tech:["MERN Stack","React","Node.js","MongoDB","Tailwind CSS","JWT"],
        duration:"May 2024", github:"https://github.com/DHRUV-SHERE/Online_Learning_Management_System", live:null,
        features:["Course creation & management","Student enrollment","Progress tracking","Video streaming","Quiz system","Certificate generation"], icon: GraduationCap },
      { id:"textsite", title:"Text Processing Tool", kind:"Utility",
        shortDesc:"React text utility — word count, formatting, conversion",
        description:"React text manipulation app with word/character count, text formatting, case conversion, and text analysis tools.",
        tech:["React","JavaScript","CSS","Local Storage"],
        duration:"Apr 2024", github:"https://github.com/DHRUV-SHERE/React_Text_Site", live:null,
        features:["Word & character count","Text formatting","Case conversion","Text analysis","Local storage"], icon: FileText },
      { id:"todolist", title:"Task Management App", kind:"Utility",
        shortDesc:"Todo list with priorities & drag-and-drop",
        description:"Advanced todo app with task prioritization, deadlines, reminders, progress tracking, drag-and-drop, categories, and data persistence.",
        tech:["React","Local Storage","CSS","Date-fns"],
        duration:"Mar 2024", github:"https://github.com/DHRUV-SHERE/ToDoList", live:null,
        features:["Task prioritization","Deadlines & reminders","Drag & drop","Progress tracking","Data persistence"], icon: CheckSquare },
    ],
  },
  {
    id: "company", name: "Company Projects", subtitle: "Lumos Logic India LLP",
    count: 9,
    projects: [
      { id:"lumoslogic", title:"Lumos Logic", kind:"Official Website",
        shortDesc:"Web Development, App Development & Cloud Solutions",
        description:"Official website for Lumos Logic India LLP — a tech firm specializing in Web, App & Cloud Solutions. Professional showcase of services, portfolio, team, and contacts. Fully responsive and SEO optimized.",
        tech:["React.js","Tailwind CSS","Node.js","Firebase"],
        duration:"2026", github:null, live:"https://lumoslogic.com/",
        features:["Company services showcase","Portfolio display","Team section","Inquiry system","SEO optimized","Performance tuned"],
        icon: Building2, projectType:"Official Website", badge:"QA Tested" },
      { id:"truholidays", title:"TruHolidays", kind:"Client Frontend",
        shortDesc:"Trusted Travel Partner Since 2009",
        description:"Modern travel booking platform for TruHolidays. Destination browsing, holiday packages, booking management, and a UI optimized for desktop and mobile travelers.",
        tech:["React.js","Tailwind CSS","Firebase"],
        duration:"2026", github:null, live:"https://truholidaysv3.web.app/",
        features:["Destination browsing","Holiday package listings","Booking management","Mobile-first design","Firebase hosting"],
        icon: Globe, projectType:"Client Frontend", badge:"QA Tested" },
      { id:"washcure", title:"WashCure", kind:"Client Frontend",
        shortDesc:"Professional Care for Every Fabric — Gujarat's laundry service",
        description:"Premium laundry & dry cleaning service website for WashCure across Gujarat. 'Professional Care for Every Fabric' — service listing, garment care details, express options, eco-friendly cleaning, and online inquiries.",
        tech:["React.js","Tailwind CSS","Firebase"],
        duration:"2026", github:null, live:"https://washcure.in/",
        features:["Service listing & pricing","Expert garment care","Express service options","Eco-friendly cleaning info","Online inquiries"],
        icon: Package, projectType:"Client Frontend", badge:"QA Tested" },
      { id:"sglite", title:"Shree Ganesh Polymers", kind:"Client Frontend",
        shortDesc:"Premium Polycarbonate Sheets Manufacturer",
        description:"Business website for Shree Ganesh Polymers — 'Premium Polycarbonate Sheets Manufacturer'. Product catalog, manufacturing capability showcase, quality standards, and client inquiry system.",
        tech:["React.js","Tailwind CSS","Firebase"],
        duration:"2026", github:null, live:"https://www.sglite.net/",
        features:["Product catalog","Manufacturing showcase","Quality standards","Company overview","Inquiry system"],
        icon: Layers, projectType:"Client Frontend", badge:"QA Tested" },
      { id:"recruitx", title:"RecruitX", kind:"Client Frontend",
        shortDesc:"Close Your Open Roles Faster with AI",
        description:"AI-powered recruitment platform — 'Close Your Open Roles Faster with AI'. Intelligent candidate matching, job posting management, and HR workflow automation.",
        tech:["React.js","Tailwind CSS","Firebase","AI/ML"],
        duration:"2026", github:null, live:"https://recruitx.web.app/",
        features:["AI candidate matching","Job posting management","HR workflow automation","Applicant tracking","Dashboard & analytics"],
        icon: Users, projectType:"Client Frontend", badge:"QA Tested" },
      { id:"orvix", title:"Orvix Digital", kind:"Client Frontend",
        shortDesc:"Digital Marketing Agency website",
        description:"Professional website for a digital marketing agency. Service showcase, portfolio display, and lead generation. Built with performance and SEO in mind.",
        tech:["React.js","Tailwind CSS","Firebase"],
        duration:"2026", github:null, live:"https://orvix-e3c9e.web.app/",
        features:["Service showcase","Portfolio display","Lead generation forms","SEO optimized","Performance tuned"],
        icon: Rocket, projectType:"Client Frontend", badge:"QA Tested" },
      { id:"leavetracker", title:"Leave Tracker", kind:"Full-Stack Product",
        shortDesc:"HR Leave & Attendance Tracker — solo built",
        description:"Production HR Leave & Attendance Tracker — official Lumos Logic product. Real-time leave tracking, manager approval workflows, leave balance management, team calendar, HR admin dashboard. Solo built from concept to deployment.",
        tech:["React.js","Node.js","Express.js","MongoDB","Firebase","Tailwind CSS","JWT"],
        duration:"2026", github:null, live:"https://leavetrackerbylumos.web.app/",
        features:["Real-time leave tracking","Manager approval workflows","Leave balance management","Team calendar","HR admin dashboard","Role-based access"],
        icon: Calendar, projectType:"Full-Stack Product", badge:"QA Tested", solo:true },
      { id:"devtracker", title:"DevTracker", kind:"Full-Stack Product",
        shortDesc:"QA & developer tracking tool — solo built",
        description:"Production Quality Assurance & developer tracking tool — official Lumos Logic product. QA workflows, bug tracking, sprint management, task assignment, team collaboration. Solo built.",
        tech:["React.js","Node.js","Express.js","MongoDB","Firebase","Tailwind CSS","JWT"],
        duration:"2026", github:null, live:"https://devtrackrbylumos.web.app/",
        features:["QA workflow management","Bug tracking","Sprint management","Task assignment","Team collaboration","Progress reporting"],
        icon: Shield, projectType:"Full-Stack Product", badge:"QA Tested", solo:true },
      { id:"docuflowai", title:"DocuFlow AI", kind:"Full-Stack Product",
        shortDesc:"Document Automation System — solo built AI product",
        description:"Production AI-powered Document Automation System — official Lumos Logic product. Intelligent document processing, automated workflows, classification, and secure storage. Solo built.",
        tech:["React.js","Node.js","Express.js","MongoDB","Firebase","AI/ML APIs","Tailwind CSS"],
        duration:"2026", github:null, live:"https://aidocs-lumoslogic.web.app/",
        features:["AI document processing","Automated workflows","Document classification","Secure storage","Admin dashboard","Multi-format support"],
        icon: Brain, projectType:"Full-Stack Product", badge:"QA Tested", solo:true },
    ],
  },
  {
    id: "future", name: "Future Coming", subtitle: "In Development",
    count: 1,
    projects: [
      { id:"aryapath", title:"AryaPath", kind:"Planning",
        shortDesc:"Tourism platform for international travelers in India",
        description:"Tourism platform for international travelers exploring India. Itinerary planning, cultural insights, local guide connections, Maps API, payment gateway, and curated experiences across India's diverse destinations.",
        tech:["MERN Stack","Tailwind CSS","Cloudinary","Socket.io","Maps API","Payment Gateway"],
        duration:"Planning", github:"https://github.com/DHRUV-SHERE/AryaPath", live:null,
        features:["Itinerary planning","Cultural insights & guides","Real-time booking","Local guide connections","Maps API","Payment gateway"],
        icon: Map, status:"planning" },
    ],
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ MAC FOLDER SVG */
const FolderSVG = ({ folderId, w = 56, className = "" }) => {
  const { c1, c2 } = FOLDER_META[folderId] || { c1:"#6366f1", c2:"#8b5cf6" };
  const h = Math.round(w * 0.82);
  const uid = `mfg-${folderId}-${w}`;
  return (
    <svg width={w} height={h} viewBox="0 0 56 46" fill="none" className={`flex-shrink-0 ${className}`}>
      <defs>
        <linearGradient id={uid} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="22" height="13" rx="3" fill={`url(#${uid})`} opacity="0.72" />
      <rect x="0" y="9" width="56" height="37" rx="7" fill={`url(#${uid})`} />
      <rect x="4" y="18" width="48" height="2" rx="1" fill="white" opacity="0.08" />
    </svg>
  );
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ DOCK ITEM */
const DockItem = ({ icon: Icon, label, color, action, img }) => (
  <motion.button
    onClick={action}
    className="flex flex-col items-center gap-1 group relative"
    whileHover={{ y: -14, scale: 1.35 }}
    transition={{ type: "spring", stiffness: 380, damping: 22 }}
    title={label}
  >
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
      style={{ background: color || "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.15)" }}
    >
      {img ? (
        <img src={img} alt={label} className="w-8 h-8 object-contain" />
      ) : (
        <Icon className="w-6 h-6 text-white" />
      )}
    </div>
    {/* Tooltip */}
    <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md text-[11px] font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
      style={{ background: "rgba(30,30,35,0.95)", border: "1px solid rgba(255,255,255,0.12)" }}>
      {label}
    </span>
    {/* Dot */}
    <div className="w-1 h-1 rounded-full bg-white/40" />
  </motion.button>
);

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ MAIN COMPONENT */
const ProjectsSection = () => {
  const [folder, setFolder] = useState(null);
  const [project, setProject] = useState(null);
  const [view, setView] = useState("grid"); // "grid" | "list"
  const [time, setTime] = useState(new Date());
  const [mobileFolder, setMobileFolder] = useState(null);
  const [mobileProject, setMobileProject] = useState(null);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 30000);
    return () => clearInterval(t);
  }, []);

  const timeStr = time.toLocaleString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
  const dateStr = time.toLocaleString("en-US", { weekday: "short", month: "short", day: "numeric" });

  const openFolder = (f) => { setFolder(f); setProject(f.projects[0]); };
  const goHome = () => { setFolder(null); setProject(null); };
  const canGoBack = !!folder;

  const currentMeta = folder ? FOLDER_META[folder.id] : null;

  /* ── Fullscreen state ── */
  const [isFs, setIsFs]           = useState(false);
  const [hasExited, setHasExited] = useState(false);
  const [macRect, setMacRect]     = useState(null);
  const sectionRef = useRef(null);
  const macWrapRef = useRef(null);

  const enterFs = useCallback(() => {
    if (isFs || hasExited || !macWrapRef.current) return;
    const r = macWrapRef.current.getBoundingClientRect();
    setMacRect({ top: r.top, left: r.left, width: r.width, height: r.height });
    setIsFs(true);
    document.body.style.overflow = "hidden";
  }, [isFs, hasExited]);

  const exitFs = useCallback(() => {
    setIsFs(false);
    setHasExited(true);
    document.body.style.overflow = "";
  }, []);

  // Trigger fullscreen when 30 % of the section is visible
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) enterFs(); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, [enterFs]);

  // Scroll ↓ or Esc exits fullscreen
  useEffect(() => {
    if (!isFs) return;
    const onWheel = (e) => { if (e.deltaY > 10) exitFs(); };
    const onKey   = (e) => { if (e.key === "Escape") exitFs(); };
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
    };
  }, [isFs, exitFs]);

  /* ━━━━━━━━━━━━━━━━━━━━━━━━ RENDER */
  return (
    <section ref={sectionRef} id="projects" className="py-24 px-4 md:px-6 relative overflow-hidden">
      {/* bg blobs */}
      <div className="absolute top-1/3 left-1/5 w-80 h-80 bg-primary/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-secondary/6 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="text-center mb-10">
          <p className="text-secondary font-mono text-sm mb-2">{"/* Projects */"}</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">My Projects</h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Explore my work inside a full macOS experience.
          </p>
        </motion.div>

        {/* ════════════════════════════ MOBILE (< md) */}
        <div className="md:hidden space-y-3">
          {!mobileFolder && (
            <div className="grid grid-cols-2 gap-3">
              {FOLDERS.map(f => (
                <motion.button key={f.id} initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}}
                  onClick={() => setMobileFolder(f)}
                  className="glass p-5 rounded-2xl border border-white/10 flex flex-col items-center gap-3 hover:border-white/25 transition-all text-center">
                  <FolderSVG folderId={f.id} w={52} />
                  <div>
                    <p className="font-semibold text-white/90 text-sm">{f.name}</p>
                    <p className="text-[11px] mt-0.5" style={{ color: FOLDER_META[f.id].c1 }}>{f.count} projects</p>
                  </div>
                </motion.button>
              ))}
            </div>
          )}
          {mobileFolder && !mobileProject && (
            <div className="space-y-2">
              <button onClick={() => setMobileFolder(null)} className="flex items-center gap-1.5 text-primary text-sm mb-3">
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
              <p className="text-xs text-gray-500 font-mono px-1 mb-3">{mobileFolder.name}</p>
              {mobileFolder.projects.map((p,i) => {
                const I = p.icon;
                return (
                  <motion.button key={p.id} initial={{opacity:0,x:-10}} animate={{opacity:1,x:0}} transition={{delay:i*0.04}}
                    onClick={() => setMobileProject(p)}
                    className="w-full glass p-4 rounded-xl border border-white/10 flex items-center gap-3 hover:border-white/25 transition-all text-left">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${FOLDER_META[mobileFolder.id].c1}, ${FOLDER_META[mobileFolder.id].c2})` }}>
                      <I className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white/90 text-sm truncate">{p.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{p.duration}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  </motion.button>
                );
              })}
            </div>
          )}
          {mobileFolder && mobileProject && (
            <motion.div initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} className="space-y-3">
              <button onClick={() => setMobileProject(null)} className="flex items-center gap-1.5 text-primary text-sm mb-3">
                <ChevronLeft className="w-4 h-4" /> {mobileFolder.name}
              </button>
              {(() => { const I = mobileProject.icon; return (
                <div className="glass p-5 rounded-2xl border border-white/10 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background:`linear-gradient(135deg, ${FOLDER_META[mobileFolder.id].c1}, ${FOLDER_META[mobileFolder.id].c2})` }}>
                      <I className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">{mobileProject.title}</h3>
                      <p className="text-xs text-gray-500">{mobileProject.duration}</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {mobileProject.badge && <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">✓ {mobileProject.badge}</span>}
                        {mobileProject.solo && <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Solo Built</span>}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{mobileProject.description}</p>
                  <div className="flex gap-2">
                    {mobileProject.github && <a href={mobileProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-white/15 text-gray-300 text-sm hover:bg-white/8 transition-all"><Github className="w-4 h-4" />GitHub</a>}
                    {mobileProject.live && <a href={mobileProject.live} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-white text-sm" style={{background:`linear-gradient(135deg,${FOLDER_META[mobileFolder.id].c1},${FOLDER_META[mobileFolder.id].c2})`}}><ExternalLink className="w-4 h-4" />Live</a>}
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Features</p>
                    <ul className="space-y-1.5">{mobileProject.features.map((f,i)=><li key={i} className="flex items-start gap-2 text-xs text-gray-300"><div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{background:FOLDER_META[mobileFolder.id].c1}} />{f}</li>)}</ul>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {mobileProject.tech.map(t=><span key={t} className="text-[11px] px-2 py-0.5 rounded font-mono text-gray-300 border border-white/10" style={{background:"rgba(255,255,255,0.06)"}}>{t}</span>)}
                  </div>
                </div>
              ); })()}
            </motion.div>
          )}
        </div>

        {/* ════════════════════════ DESKTOP — Full macOS UI */}
        {/* ref wrapper: invisible when portal is live, keeps layout space */}
        <div ref={macWrapRef} className="hidden md:block"
          style={{ transition:"opacity 0.25s", opacity: isFs ? 0 : 1, pointerEvents: isFs ? "none" : "auto" }}>
        <motion.div initial={{opacity:0,y:30,scale:0.985}} whileInView={{opacity:1,y:0,scale:1}}
          viewport={{once:true}} transition={{duration:0.7}}
          className="relative rounded-[18px] overflow-hidden"
          style={{
            height: 760,
            boxShadow:"0 60px 120px rgba(0,0,0,0.85), 0 0 0 1.5px rgba(255,255,255,0.12)",
            background:"#0a0a14",
          }}>

          {/* ── Wallpaper ── */}
          <div className="absolute inset-0" style={{
            background:"radial-gradient(ellipse at 20% 80%, rgba(88,28,220,0.28) 0%, transparent 45%), radial-gradient(ellipse at 80% 20%, rgba(20,80,200,0.32) 0%, transparent 45%), radial-gradient(ellipse at 50% 50%, rgba(12,20,60,0.6) 0%, transparent 80%), linear-gradient(145deg, #080818 0%, #120a2e 40%, #0a1830 70%, #050510 100%)",
          }} />
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage:"linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize:"60px 60px",
          }} />

          {/* ── Menu Bar ── */}
          <div className="absolute top-0 left-0 right-0 flex items-center px-4 gap-4 select-none z-40"
            style={{ height:27, background:"rgba(18,18,26,0.82)", backdropFilter:"blur(24px) saturate(180%)", borderBottom:"1px solid rgba(255,255,255,0.08)", fontFamily:'-apple-system,BlinkMacSystemFont,"SF Pro Text",Helvetica,sans-serif', fontSize:13 }}>
            {/* Apple / app name */}
            <span className="text-white text-base leading-none">⌘</span>
            <span className="text-white font-semibold">Finder</span>
            {["File","Edit","View","Go","Window","Help"].map(m=>(
              <span key={m} className="text-white/70 hover:text-white cursor-default transition-colors">{m}</span>
            ))}
            {/* Right side */}
            <div className="ml-auto flex items-center gap-3 text-white/75">
              <Wifi className="w-3.5 h-3.5" />
              <Battery className="w-4 h-4" />
              <span className="text-[12px]">{dateStr}</span>
              <span className="text-[13px] font-medium text-white">{timeStr}</span>
              <Search className="w-3.5 h-3.5 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>

          {/* ── Finder Window ── */}
          <div className="absolute rounded-[12px] overflow-hidden flex flex-col"
            style={{
              top:47, left:28, right:28, bottom:86,
              background:"rgba(30,30,38,0.92)",
              backdropFilter:"blur(40px) saturate(160%)",
              border:"1px solid rgba(255,255,255,0.12)",
              boxShadow:"0 24px 48px rgba(0,0,0,0.6)",
            }}>

            {/* Title bar */}
            <div className="flex items-center px-3 gap-2 flex-shrink-0"
              style={{ height:40, background:"rgba(45,45,55,0.95)", borderBottom:"1px solid rgba(255,255,255,0.08)" }}>
              {/* Traffic lights */}
              <div className="flex gap-2 mr-2">
                <button onClick={goHome} className="w-3 h-3 rounded-full transition-opacity hover:opacity-80" style={{background:"#ff5f57"}} title="Home" />
                <div className="w-3 h-3 rounded-full" style={{background:"#febc2e"}} />
                <div className="w-3 h-3 rounded-full" style={{background:"#28c840"}} />
              </div>
              {/* Nav */}
              <div className="flex gap-0.5">
                <button onClick={goHome} disabled={!canGoBack}
                  className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-white/10 disabled:opacity-30 transition-all">
                  <ChevronLeft className="w-4 h-4 text-white/70" />
                </button>
                <button disabled className="w-7 h-7 rounded-md flex items-center justify-center opacity-25">
                  <ChevronRight className="w-4 h-4 text-white/70" />
                </button>
              </div>
              {/* Breadcrumb */}
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-1.5" style={{ fontSize:13, fontFamily:'-apple-system,BlinkMacSystemFont,sans-serif', color:"rgba(255,255,255,0.6)" }}>
                  <button onClick={goHome} className="hover:text-white transition-colors">Projects</button>
                  {folder && <><ChevronRight className="w-3 h-3 opacity-40" /><span style={{color:"rgba(255,255,255,0.9)"}}>{folder.name}</span></>}
                  {project && <><ChevronRight className="w-3 h-3 opacity-40" /><span className="max-w-[140px] truncate" style={{color:"rgba(255,255,255,0.6)"}}>{project.title}</span></>}
                </div>
              </div>
              {/* View toggles */}
              <div className="flex items-center gap-1 mr-1">
                <button onClick={()=>setView("grid")}
                  className={`w-7 h-7 rounded-md flex items-center justify-center transition-all ${view==="grid"?"bg-white/15":"hover:bg-white/8"}`}>
                  <LayoutGrid className="w-3.5 h-3.5 text-white/70" />
                </button>
                <button onClick={()=>setView("list")}
                  className={`w-7 h-7 rounded-md flex items-center justify-center transition-all ${view==="list"?"bg-white/15":"hover:bg-white/8"}`}>
                  <List className="w-3.5 h-3.5 text-white/70" />
                </button>
              </div>
              {/* Search */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md" style={{ background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.1)" }}>
                <Search className="w-3 h-3 text-white/50" />
                <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)", fontFamily:'-apple-system,BlinkMacSystemFont,sans-serif' }}>Search</span>
              </div>
            </div>

            {/* Content area */}
            <div className="flex flex-1 overflow-hidden">

              {/* ── Sidebar ── */}
              <div className="flex-shrink-0 flex flex-col py-3 overflow-y-auto"
                style={{ width:176, background:"rgba(28,28,36,0.95)", borderRight:"1px solid rgba(255,255,255,0.07)", fontFamily:'-apple-system,BlinkMacSystemFont,"SF Pro Text",sans-serif' }}>
                <p className="px-4 mb-1.5 font-semibold tracking-widest uppercase" style={{ fontSize:10, color:"rgba(255,255,255,0.35)" }}>Favorites</p>
                {FOLDERS.map(f => {
                  const active = folder?.id === f.id;
                  const { c1 } = FOLDER_META[f.id];
                  return (
                    <button key={f.id} onClick={() => openFolder(f)}
                      className="flex items-center gap-2 mx-2 px-2 py-1.5 rounded-md transition-all text-left"
                      style={{ background: active ? "rgba(99,102,241,0.25)" : "transparent" }}
                      onMouseEnter={e => { if(!active) e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
                      onMouseLeave={e => { if(!active) e.currentTarget.style.background = "transparent"; }}>
                      <FolderSVG folderId={f.id} w={20} />
                      <span style={{ fontSize:13, color: active ? "#fff" : "rgba(255,255,255,0.65)" }}>{f.name}</span>
                    </button>
                  );
                })}

                <div className="mx-3 my-3" style={{ height:1, background:"rgba(255,255,255,0.07)" }} />
                <p className="px-4 mb-1.5 font-semibold tracking-widest uppercase" style={{ fontSize:10, color:"rgba(255,255,255,0.35)" }}>Tags</p>
                {[{label:"React",c:"#61dafb"},{label:"Node.js",c:"#68a063"},{label:"MongoDB",c:"#47a248"},{label:"Company",c:"#f59e0b"}].map(t=>(
                  <button key={t.label} className="flex items-center gap-2.5 mx-2 px-2 py-1.5 rounded-md hover:bg-white/5 transition-all text-left">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{background:t.c}} />
                    <span style={{ fontSize:13, color:"rgba(255,255,255,0.55)" }}>{t.label}</span>
                  </button>
                ))}

                <div className="mt-auto px-3 pt-3" style={{ borderTop:"1px solid rgba(255,255,255,0.07)", marginTop:16 }}>
                  <p style={{ fontSize:10, color:"rgba(255,255,255,0.25)", fontFamily:'-apple-system,sans-serif' }}>Dhruv Shere · Portfolio 2026</p>
                </div>
              </div>

              {/* ── Main Panel ── */}
              <div className="flex-1 flex overflow-hidden">
                <AnimatePresence mode="wait">

                  {/* HOME — 2×2 folder grid */}
                  {!folder && (
                    <motion.div key="home" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.18}}
                      className="flex-1 p-8 overflow-auto">
                      <p style={{ fontSize:11, color:"rgba(255,255,255,0.25)", fontFamily:'-apple-system,sans-serif', marginBottom:28 }}>
                        22 projects across 4 folders — double-click to open
                      </p>
                      <div className="grid grid-cols-2 gap-6 max-w-lg">
                        {FOLDERS.map((f,i) => (
                          <motion.button key={f.id} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:i*0.07}}
                            onClick={()=>openFolder(f)}
                            className="flex flex-col items-center gap-4 p-8 rounded-2xl transition-all duration-200 text-center group"
                            style={{ background:"rgba(255,255,255,0.025)", border:"1px solid rgba(255,255,255,0.07)" }}
                            onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.05)";e.currentTarget.style.borderColor="rgba(255,255,255,0.14)";}}
                            onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.025)";e.currentTarget.style.borderColor="rgba(255,255,255,0.07)";}}>
                            <motion.div whileHover={{y:-6,scale:1.08}} transition={{type:"spring",stiffness:350}}>
                              <FolderSVG folderId={f.id} w={76} />
                            </motion.div>
                            <div>
                              <p className="font-semibold text-white/90" style={{fontSize:14,fontFamily:'-apple-system,sans-serif'}}>{f.name}</p>
                              <p style={{fontSize:11,color:"rgba(255,255,255,0.4)",marginTop:2,fontFamily:'-apple-system,sans-serif'}}>{f.subtitle}</p>
                              <p className="font-mono mt-2" style={{fontSize:11,color:FOLDER_META[f.id].c1}}>{f.count} items</p>
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* FOLDER OPEN */}
                  {folder && (
                    <motion.div key={folder.id} initial={{opacity:0,x:18}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-18}} transition={{duration:0.22}}
                      className="flex-1 flex overflow-hidden">

                      {/* File list / grid */}
                      <div className="overflow-y-auto flex-shrink-0" style={{ width: project ? 256 : "100%", background:"rgba(22,22,30,0.98)", borderRight: project ? "1px solid rgba(255,255,255,0.07)" : "none" }}>

                        {/* List header (list view only) */}
                        {view === "list" && (
                          <div className="flex items-center px-3 py-2 sticky top-0" style={{ background:"rgba(30,30,40,0.98)", borderBottom:"1px solid rgba(255,255,255,0.07)", fontSize:11, color:"rgba(255,255,255,0.35)", fontFamily:'-apple-system,sans-serif' }}>
                            <span className="flex-1">Name</span>
                            <span className="w-28 text-right">Date</span>
                            <span className="w-20 text-right">Kind</span>
                          </div>
                        )}

                        {/* Grid view */}
                        {view === "grid" && (
                          <div className="p-4 grid gap-3" style={{ gridTemplateColumns: project ? "repeat(2,1fr)" : "repeat(auto-fill,minmax(110px,1fr))" }}>
                            {folder.projects.map((p,i) => {
                              const I = p.icon;
                              const sel = project?.id === p.id;
                              const { c1, c2 } = FOLDER_META[folder.id];
                              return (
                                <motion.button key={p.id} initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{delay:i*0.04}}
                                  onClick={()=>setProject(p)}
                                  className="flex flex-col items-center gap-2 p-3 rounded-xl transition-all"
                                  style={{ background: sel ? "rgba(59,130,246,0.25)" : "transparent", border: sel ? "1px solid rgba(59,130,246,0.5)" : "1px solid transparent" }}
                                  onMouseEnter={e=>{ if(!sel){ e.currentTarget.style.background="rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.1)"; }}}
                                  onMouseLeave={e=>{ if(!sel){ e.currentTarget.style.background="transparent"; e.currentTarget.style.borderColor="transparent"; }}}>
                                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                                    style={{ background:`linear-gradient(135deg,${c1},${c2})` }}>
                                    <I className="w-6 h-6 text-white" />
                                  </div>
                                  <span className="text-center leading-tight" style={{ fontSize:11, color: sel?"#fff":"rgba(255,255,255,0.75)", fontFamily:'-apple-system,sans-serif', maxWidth:"100%", wordBreak:"break-word" }}>{p.title}</span>
                                </motion.button>
                              );
                            })}
                          </div>
                        )}

                        {/* List view */}
                        {view === "list" && folder.projects.map((p,i) => {
                          const I = p.icon;
                          const sel = project?.id === p.id;
                          const { c1, c2 } = FOLDER_META[folder.id];
                          return (
                            <motion.button key={p.id} initial={{opacity:0,x:-8}} animate={{opacity:1,x:0}} transition={{delay:i*0.03}}
                              onClick={()=>setProject(p)}
                              className="w-full flex items-center gap-2.5 px-3 py-2 transition-all border-b"
                              style={{ background: sel ? "rgba(59,130,246,0.2)" : "transparent", borderColor:"rgba(255,255,255,0.05)", fontSize:13, fontFamily:'-apple-system,sans-serif' }}
                              onMouseEnter={e=>{ if(!sel) e.currentTarget.style.background="rgba(255,255,255,0.04)"; }}
                              onMouseLeave={e=>{ if(!sel) e.currentTarget.style.background="transparent"; }}>
                              <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                                style={{ background:`linear-gradient(135deg,${c1},${c2})` }}>
                                <I className="w-3.5 h-3.5 text-white" />
                              </div>
                              <span className="flex-1 text-left truncate" style={{ color: sel?"#fff":"rgba(255,255,255,0.75)" }}>{p.title}</span>
                              <span className="w-28 text-right flex-shrink-0" style={{ color:"rgba(255,255,255,0.3)", fontSize:12 }}>{p.duration}</span>
                              <span className="w-20 text-right flex-shrink-0" style={{ color:"rgba(255,255,255,0.3)", fontSize:12 }}>{p.kind}</span>
                            </motion.button>
                          );
                        })}
                      </div>

                      {/* Preview / Detail Panel */}
                      <AnimatePresence>
                        {project && (
                          <motion.div key={project.id} initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:20}} transition={{duration:0.2}}
                            className="flex-1 flex flex-col overflow-y-auto"
                            style={{ background:"rgba(26,26,35,0.98)", fontFamily:'-apple-system,BlinkMacSystemFont,"SF Pro Text",sans-serif' }}>

                            {/* Preview header */}
                            <div className="flex-shrink-0 flex flex-col items-center py-7 px-5"
                              style={{ borderBottom:"1px solid rgba(255,255,255,0.07)", background:"rgba(30,30,40,0.6)" }}>
                              {(() => { const { c1, c2 } = FOLDER_META[folder.id]; const I = project.icon; return (
                                <div className="w-20 h-20 rounded-[22px] flex items-center justify-center shadow-2xl mb-4"
                                  style={{ background:`linear-gradient(135deg,${c1},${c2})`, boxShadow:`0 16px 40px ${c1}40` }}>
                                  <I className="w-10 h-10 text-white" />
                                </div>
                              ); })()}
                              <h3 className="font-bold text-white text-center mb-1" style={{fontSize:16}}>{project.title}</h3>
                              <p className="text-center" style={{fontSize:12,color:"rgba(255,255,255,0.4)"}}>{project.duration}</p>
                              <div className="flex flex-wrap justify-center gap-1.5 mt-2.5">
                                {project.projectType && <span className={`text-[10px] px-2 py-0.5 rounded-full border ${TYPE_STYLE[project.projectType]}`}>{project.projectType}</span>}
                                {project.badge && <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">✓ {project.badge}</span>}
                                {project.solo && <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Solo Built</span>}
                                {project.isOrg && <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">{project.org}</span>}
                                {project.status==="planning" && <span className="text-[10px] px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">In Planning</span>}
                              </div>
                              {/* Action buttons */}
                              <div className="flex gap-2 mt-4 w-full px-2">
                                {project.github && (
                                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg transition-all"
                                    style={{ background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.12)", fontSize:12, color:"rgba(255,255,255,0.8)" }}>
                                    <Github className="w-3.5 h-3.5" /> GitHub
                                  </a>
                                )}
                                {project.live && (
                                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-white transition-all hover:opacity-90"
                                    style={{ background:`linear-gradient(135deg,${FOLDER_META[folder.id].c1},${FOLDER_META[folder.id].c2})`, fontSize:12 }}>
                                    <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                                  </a>
                                )}
                              </div>
                            </div>

                            {/* Info sections */}
                            <div className="p-4 space-y-4 flex-1">
                              {/* Description */}
                              <div className="rounded-xl p-3.5" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)" }}>
                                <p className="font-semibold mb-2 uppercase tracking-widest" style={{fontSize:10,color:"rgba(255,255,255,0.35)"}}>Overview</p>
                                <p style={{fontSize:12,color:"rgba(255,255,255,0.7)",lineHeight:1.7}}>{project.description}</p>
                              </div>
                              {/* Features */}
                              <div className="rounded-xl p-3.5" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)" }}>
                                <p className="font-semibold mb-2.5 uppercase tracking-widest" style={{fontSize:10,color:"rgba(255,255,255,0.35)"}}>Key Features</p>
                                <ul className="space-y-2">
                                  {project.features.map((f,i)=>(
                                    <li key={i} className="flex items-start gap-2" style={{fontSize:12,color:"rgba(255,255,255,0.65)"}}>
                                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[5px]" style={{background:FOLDER_META[folder.id].c1}} />
                                      {f}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              {/* Tech */}
                              <div className="rounded-xl p-3.5" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)" }}>
                                <p className="font-semibold mb-2.5 uppercase tracking-widest" style={{fontSize:10,color:"rgba(255,255,255,0.35)"}}>Tech Stack</p>
                                <div className="flex flex-wrap gap-1.5">
                                  {project.tech.map(t=>(
                                    <span key={t} className="font-mono" style={{ fontSize:11, padding:"3px 8px", borderRadius:5, background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.1)", color:"rgba(255,255,255,0.65)" }}>{t}</span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between px-4 flex-shrink-0"
              style={{ height:24, background:"rgba(28,28,36,0.97)", borderTop:"1px solid rgba(255,255,255,0.07)", fontSize:11, color:"rgba(255,255,255,0.35)", fontFamily:'-apple-system,BlinkMacSystemFont,sans-serif' }}>
              <span>{folder ? `${folder.projects.length} items` : "4 folders · 22 projects"}</span>
              {project && <span style={{color:FOLDER_META[folder?.id]?.c1}}>{project.title}</span>}
              <span className="font-mono">dhruv@portfolio</span>
            </div>
          </div>

          {/* ── Dock ── */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-end gap-2 px-4 pb-2 pt-3 rounded-2xl"
            style={{ bottom:10, background:"rgba(255,255,255,0.1)", backdropFilter:"blur(40px) saturate(180%)", border:"1px solid rgba(255,255,255,0.18)", boxShadow:"0 8px 32px rgba(0,0,0,0.4)" }}>
            <DockItem icon={Folder} label="Projects" color="linear-gradient(135deg,#3b82f6,#7c3aed)" action={goHome} />
            <DockItem icon={Code2} label="Big Projects" color="linear-gradient(135deg,#3b82f6,#7c3aed)" action={()=>openFolder(FOLDERS[0])} />
            <DockItem icon={Monitor} label="Small Projects" color="linear-gradient(135deg,#10b981,#0d9488)" action={()=>openFolder(FOLDERS[1])} />
            <DockItem icon={Building2} label="Company Projects" color="linear-gradient(135deg,#f59e0b,#f97316)" action={()=>openFolder(FOLDERS[2])} />
            <DockItem icon={Rocket} label="Future Coming" color="linear-gradient(135deg,#ec4899,#e11d48)" action={()=>openFolder(FOLDERS[3])} />
            {/* Separator */}
            <div className="w-px self-stretch mx-1" style={{background:"rgba(255,255,255,0.2)"}} />
            <DockItem icon={Github} label="GitHub" color="linear-gradient(135deg,#333,#555)" action={()=>window.open("https://github.com/DHRUV-SHERE","_blank")} />
            <DockItem icon={Linkedin} label="LinkedIn" color="linear-gradient(135deg,#0077b5,#0ea5e9)" action={()=>window.open("https://www.linkedin.com/in/dhruv-shere/","_blank")} />
            <DockItem icon={Mail} label="Contact" color="linear-gradient(135deg,#6366f1,#8b5cf6)" action={()=>document.querySelector("#contact")?.scrollIntoView({behavior:"smooth"})} />
          </div>

        </motion.div>
        </div>{/* /macWrapRef */}

        {/* ════════ FULLSCREEN PORTAL ════════ */}
        <AnimatePresence>
          {isFs && macRect && (
            <motion.div
              className="fixed z-[200] overflow-hidden"
              style={{ willChange:"top,left,width,height,border-radius", background:"#0a0a14" }}
              initial={{ top:macRect.top, left:macRect.left, width:macRect.width, height:macRect.height, borderRadius:18 }}
              animate={{ top:0, left:0, width:"100vw", height:"100dvh", borderRadius:0 }}
              exit={{ opacity:0, scale:0.96, transition:{ duration:0.38, ease:[0.22,0,0.36,1] } }}
              transition={{ type:"spring", stiffness:220, damping:28, mass:0.9 }}
            >
              {/* ── Wallpaper (same as section) ── */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background:"radial-gradient(ellipse at 20% 80%,rgba(88,28,220,0.28) 0%,transparent 45%),radial-gradient(ellipse at 80% 20%,rgba(20,80,200,0.32) 0%,transparent 45%),radial-gradient(ellipse at 50% 50%,rgba(12,20,60,0.6) 0%,transparent 80%),linear-gradient(145deg,#080818 0%,#120a2e 40%,#0a1830 70%,#050510 100%)",
              }}/>
              <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
                backgroundImage:"linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
                backgroundSize:"60px 60px",
              }}/>

              {/* ── Menu Bar (re-used from section, same markup) ── */}
              <div className="absolute top-0 left-0 right-0 flex items-center px-4 gap-4 select-none z-40"
                style={{ height:27, background:"rgba(18,18,26,0.82)", backdropFilter:"blur(24px) saturate(180%)", borderBottom:"1px solid rgba(255,255,255,0.08)", fontFamily:'-apple-system,BlinkMacSystemFont,"SF Pro Text",Helvetica,sans-serif', fontSize:13 }}>
                <span className="text-white text-base leading-none">⌘</span>
                <span className="text-white font-semibold">Finder</span>
                {["File","Edit","View","Go","Window","Help"].map(m=>(
                  <span key={m} className="text-white/70 hover:text-white cursor-default transition-colors">{m}</span>
                ))}
                <div className="ml-auto flex items-center gap-3 text-white/75">
                  <Wifi className="w-3.5 h-3.5" />
                  <Battery className="w-4 h-4" />
                  <span className="text-[12px]">{dateStr}</span>
                  <span className="text-[13px] font-medium text-white">{timeStr}</span>
                </div>
              </div>

              {/* ── Finder Window (fills remaining area) ── */}
              <div className="absolute rounded-[12px] overflow-hidden flex flex-col"
                style={{ top:47, left:28, right:28, bottom:86, background:"rgba(30,30,38,0.92)", backdropFilter:"blur(40px) saturate(160%)", border:"1px solid rgba(255,255,255,0.12)", boxShadow:"0 24px 48px rgba(0,0,0,0.6)" }}>
                {/* Title bar */}
                <div className="flex items-center px-3 gap-2 flex-shrink-0"
                  style={{ height:40, background:"rgba(45,45,55,0.95)", borderBottom:"1px solid rgba(255,255,255,0.08)" }}>
                  <div className="flex gap-2 mr-2">
                    <button onClick={exitFs} className="w-3 h-3 rounded-full hover:opacity-80 transition-opacity" style={{background:"#ff5f57"}} title="Exit Fullscreen"/>
                    <div className="w-3 h-3 rounded-full" style={{background:"#febc2e"}}/>
                    <div className="w-3 h-3 rounded-full" style={{background:"#28c840"}}/>
                  </div>
                  <div className="flex gap-0.5">
                    <button onClick={goHome} disabled={!canGoBack} className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-white/10 disabled:opacity-30 transition-all">
                      <ChevronLeft className="w-4 h-4 text-white/70"/>
                    </button>
                    <button disabled className="w-7 h-7 rounded-md flex items-center justify-center opacity-25">
                      <ChevronRight className="w-4 h-4 text-white/70"/>
                    </button>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-1.5" style={{ fontSize:13, fontFamily:'-apple-system,sans-serif', color:"rgba(255,255,255,0.6)" }}>
                      <button onClick={goHome} className="hover:text-white transition-colors">Projects</button>
                      {folder && <><ChevronRight className="w-3 h-3 opacity-40"/><span style={{color:"rgba(255,255,255,0.9)"}}>{folder.name}</span></>}
                      {project && <><ChevronRight className="w-3 h-3 opacity-40"/><span className="max-w-[140px] truncate" style={{color:"rgba(255,255,255,0.6)"}}>{project.title}</span></>}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mr-1">
                    <button onClick={()=>setView("grid")} className={`w-7 h-7 rounded-md flex items-center justify-center transition-all ${view==="grid"?"bg-white/15":"hover:bg-white/8"}`}>
                      <LayoutGrid className="w-3.5 h-3.5 text-white/70"/>
                    </button>
                    <button onClick={()=>setView("list")} className={`w-7 h-7 rounded-md flex items-center justify-center transition-all ${view==="list"?"bg-white/15":"hover:bg-white/8"}`}>
                      <List className="w-3.5 h-3.5 text-white/70"/>
                    </button>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md" style={{ background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.1)" }}>
                    <Search className="w-3 h-3 text-white/50"/>
                    <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)", fontFamily:'-apple-system,sans-serif' }}>Search</span>
                  </div>
                </div>

                {/* Body — identical to section Finder (sidebar + main) */}
                <div className="flex flex-1 overflow-hidden">
                  {/* Sidebar */}
                  <div className="flex-shrink-0 flex flex-col py-3 overflow-y-auto"
                    style={{ width:176, background:"rgba(28,28,36,0.95)", borderRight:"1px solid rgba(255,255,255,0.07)", fontFamily:'-apple-system,sans-serif' }}>
                    <p className="px-4 mb-1.5 font-semibold tracking-widest uppercase" style={{ fontSize:10, color:"rgba(255,255,255,0.35)" }}>Favorites</p>
                    {FOLDERS.map(f=>{
                      const active = folder?.id===f.id;
                      return (
                        <button key={f.id} onClick={()=>{ setFolder(f); setProject(f.projects[0]); }}
                          className="flex items-center gap-2 mx-2 px-2 py-1.5 rounded-md transition-all text-left"
                          style={{ background: active?"rgba(99,102,241,0.25)":"transparent" }}
                          onMouseEnter={e=>{ if(!active) e.currentTarget.style.background="rgba(255,255,255,0.05)"; }}
                          onMouseLeave={e=>{ if(!active) e.currentTarget.style.background="transparent"; }}>
                          <FolderSVG folderId={f.id} w={20}/>
                          <span style={{ fontSize:13, color:active?"#fff":"rgba(255,255,255,0.65)" }}>{f.name}</span>
                        </button>
                      );
                    })}
                    <div className="mx-3 my-3" style={{ height:1, background:"rgba(255,255,255,0.07)" }}/>
                    <p className="px-4 mb-1.5 font-semibold tracking-widest uppercase" style={{ fontSize:10, color:"rgba(255,255,255,0.35)" }}>Tags</p>
                    {[{label:"React",c:"#61dafb"},{label:"Node.js",c:"#68a063"},{label:"MongoDB",c:"#47a248"},{label:"Company",c:"#f59e0b"}].map(t=>(
                      <button key={t.label} className="flex items-center gap-2.5 mx-2 px-2 py-1.5 rounded-md hover:bg-white/5 transition-all text-left">
                        <div className="w-2.5 h-2.5 rounded-full" style={{background:t.c}}/>
                        <span style={{ fontSize:13, color:"rgba(255,255,255,0.55)" }}>{t.label}</span>
                      </button>
                    ))}
                    <div className="mt-auto px-3 pt-3" style={{ borderTop:"1px solid rgba(255,255,255,0.07)", marginTop:16 }}>
                      <p style={{ fontSize:10, color:"rgba(255,255,255,0.25)" }}>Dhruv Shere · Portfolio 2026</p>
                    </div>
                  </div>

                  {/* Main panel — same logic as section */}
                  <div className="flex-1 flex overflow-hidden">
                    <AnimatePresence mode="wait">
                      {!folder && (
                        <motion.div key="fs-home" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.15}}
                          className="flex-1 p-8 overflow-auto">
                          <p style={{ fontSize:11, color:"rgba(255,255,255,0.25)", marginBottom:28 }}>22 projects across 4 folders</p>
                          <div className="grid grid-cols-2 gap-6 max-w-lg">
                            {FOLDERS.map((f,i)=>(
                              <motion.button key={f.id} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:i*0.07}}
                                onClick={()=>{ setFolder(f); setProject(f.projects[0]); }}
                                className="flex flex-col items-center gap-4 p-8 rounded-2xl text-center group"
                                style={{ background:"rgba(255,255,255,0.025)", border:"1px solid rgba(255,255,255,0.07)" }}
                                onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.05)";e.currentTarget.style.borderColor="rgba(255,255,255,0.14)";}}
                                onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.025)";e.currentTarget.style.borderColor="rgba(255,255,255,0.07)";}}>
                                <motion.div whileHover={{y:-6,scale:1.08}} transition={{type:"spring",stiffness:350}}>
                                  <FolderSVG folderId={f.id} w={76}/>
                                </motion.div>
                                <div>
                                  <p className="font-semibold text-white/90" style={{fontSize:14}}>{f.name}</p>
                                  <p style={{fontSize:11,color:"rgba(255,255,255,0.4)",marginTop:2}}>{f.subtitle}</p>
                                  <p className="font-mono mt-2" style={{fontSize:11,color:FOLDER_META[f.id].c1}}>{f.count} items</p>
                                </div>
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                      {folder && (
                        <motion.div key={`fs-${folder.id}`} initial={{opacity:0,x:18}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-18}} transition={{duration:0.2}}
                          className="flex-1 flex overflow-hidden">
                          {/* File list */}
                          <div className="overflow-y-auto flex-shrink-0" style={{ width:project?256:"100%", background:"rgba(22,22,30,0.98)", borderRight:project?"1px solid rgba(255,255,255,0.07)":"none" }}>
                            {view==="list" && (
                              <div className="flex items-center px-3 py-2 sticky top-0" style={{ background:"rgba(30,30,40,0.98)", borderBottom:"1px solid rgba(255,255,255,0.07)", fontSize:11, color:"rgba(255,255,255,0.35)" }}>
                                <span className="flex-1">Name</span><span className="w-28 text-right">Date</span><span className="w-20 text-right">Kind</span>
                              </div>
                            )}
                            {view==="grid" && (
                              <div className="p-4 grid gap-3" style={{ gridTemplateColumns:project?"repeat(2,1fr)":"repeat(auto-fill,minmax(110px,1fr))" }}>
                                {folder.projects.map((p,i)=>{
                                  const I=p.icon; const sel=project?.id===p.id; const {c1,c2}=FOLDER_META[folder.id];
                                  return (
                                    <motion.button key={p.id} initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{delay:i*0.04}}
                                      onClick={()=>setProject(p)}
                                      className="flex flex-col items-center gap-2 p-3 rounded-xl transition-all"
                                      style={{ background:sel?"rgba(59,130,246,0.25)":"transparent", border:sel?"1px solid rgba(59,130,246,0.5)":"1px solid transparent" }}
                                      onMouseEnter={e=>{ if(!sel){e.currentTarget.style.background="rgba(255,255,255,0.05)";e.currentTarget.style.borderColor="rgba(255,255,255,0.1)";} }}
                                      onMouseLeave={e=>{ if(!sel){e.currentTarget.style.background="transparent";e.currentTarget.style.borderColor="transparent";} }}>
                                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background:`linear-gradient(135deg,${c1},${c2})` }}>
                                        <I className="w-6 h-6 text-white"/>
                                      </div>
                                      <span className="text-center leading-tight" style={{ fontSize:11, color:sel?"#fff":"rgba(255,255,255,0.75)", maxWidth:"100%", wordBreak:"break-word" }}>{p.title}</span>
                                    </motion.button>
                                  );
                                })}
                              </div>
                            )}
                            {view==="list" && folder.projects.map((p,i)=>{
                              const I=p.icon; const sel=project?.id===p.id; const {c1,c2}=FOLDER_META[folder.id];
                              return (
                                <motion.button key={p.id} initial={{opacity:0,x:-8}} animate={{opacity:1,x:0}} transition={{delay:i*0.03}}
                                  onClick={()=>setProject(p)}
                                  className="w-full flex items-center gap-2.5 px-3 py-2 transition-all border-b"
                                  style={{ background:sel?"rgba(59,130,246,0.2)":"transparent", borderColor:"rgba(255,255,255,0.05)", fontSize:13 }}
                                  onMouseEnter={e=>{ if(!sel) e.currentTarget.style.background="rgba(255,255,255,0.04)"; }}
                                  onMouseLeave={e=>{ if(!sel) e.currentTarget.style.background="transparent"; }}>
                                  <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background:`linear-gradient(135deg,${c1},${c2})` }}>
                                    <I className="w-3.5 h-3.5 text-white"/>
                                  </div>
                                  <span className="flex-1 text-left truncate" style={{ color:sel?"#fff":"rgba(255,255,255,0.75)" }}>{p.title}</span>
                                  <span className="w-28 text-right" style={{ color:"rgba(255,255,255,0.3)", fontSize:12 }}>{p.duration}</span>
                                  <span className="w-20 text-right" style={{ color:"rgba(255,255,255,0.3)", fontSize:12 }}>{p.kind}</span>
                                </motion.button>
                              );
                            })}
                          </div>
                          {/* Detail panel */}
                          <AnimatePresence>
                            {project && (
                              <motion.div key={project.id} initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:20}} transition={{duration:0.2}}
                                className="flex-1 flex flex-col overflow-y-auto"
                                style={{ background:"rgba(26,26,35,0.98)", fontFamily:'-apple-system,sans-serif' }}>
                                <div className="flex-shrink-0 flex flex-col items-center py-7 px-5" style={{ borderBottom:"1px solid rgba(255,255,255,0.07)", background:"rgba(30,30,40,0.6)" }}>
                                  {(()=>{ const {c1,c2}=FOLDER_META[folder.id]; const I=project.icon; return (
                                    <div className="w-20 h-20 rounded-[22px] flex items-center justify-center shadow-2xl mb-4" style={{ background:`linear-gradient(135deg,${c1},${c2})`, boxShadow:`0 16px 40px ${c1}40` }}>
                                      <I className="w-10 h-10 text-white"/>
                                    </div>
                                  ); })()}
                                  <h3 className="font-bold text-white text-center mb-1" style={{fontSize:16}}>{project.title}</h3>
                                  <p className="text-center" style={{fontSize:12,color:"rgba(255,255,255,0.4)"}}>{project.duration}</p>
                                  <div className="flex flex-wrap justify-center gap-1.5 mt-2.5">
                                    {project.projectType&&<span className={`text-[10px] px-2 py-0.5 rounded-full border ${TYPE_STYLE[project.projectType]}`}>{project.projectType}</span>}
                                    {project.badge&&<span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">✓ {project.badge}</span>}
                                    {project.solo&&<span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Solo Built</span>}
                                    {project.isOrg&&<span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">{project.org}</span>}
                                    {project.status==="planning"&&<span className="text-[10px] px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">In Planning</span>}
                                  </div>
                                  <div className="flex gap-2 mt-4 w-full px-2">
                                    {project.github&&<a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg transition-all" style={{ background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.12)", fontSize:12, color:"rgba(255,255,255,0.8)" }}><Github className="w-3.5 h-3.5"/> GitHub</a>}
                                    {project.live&&<a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-white hover:opacity-90 transition-all" style={{ background:`linear-gradient(135deg,${FOLDER_META[folder.id].c1},${FOLDER_META[folder.id].c2})`, fontSize:12 }}><ExternalLink className="w-3.5 h-3.5"/> Live Demo</a>}
                                  </div>
                                </div>
                                <div className="p-4 space-y-4">
                                  <div className="rounded-xl p-3.5" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)" }}>
                                    <p className="font-semibold mb-2 uppercase tracking-widest" style={{fontSize:10,color:"rgba(255,255,255,0.35)"}}>Overview</p>
                                    <p style={{fontSize:12,color:"rgba(255,255,255,0.7)",lineHeight:1.7}}>{project.description}</p>
                                  </div>
                                  <div className="rounded-xl p-3.5" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)" }}>
                                    <p className="font-semibold mb-2.5 uppercase tracking-widest" style={{fontSize:10,color:"rgba(255,255,255,0.35)"}}>Key Features</p>
                                    <ul className="space-y-2">{project.features.map((f,i)=><li key={i} className="flex items-start gap-2" style={{fontSize:12,color:"rgba(255,255,255,0.65)"}}><div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[5px]" style={{background:FOLDER_META[folder.id].c1}}/>{f}</li>)}</ul>
                                  </div>
                                  <div className="rounded-xl p-3.5" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)" }}>
                                    <p className="font-semibold mb-2.5 uppercase tracking-widest" style={{fontSize:10,color:"rgba(255,255,255,0.35)"}}>Tech Stack</p>
                                    <div className="flex flex-wrap gap-1.5">{project.tech.map(t=><span key={t} className="font-mono" style={{ fontSize:11, padding:"3px 8px", borderRadius:5, background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.1)", color:"rgba(255,255,255,0.65)" }}>{t}</span>)}</div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Status bar */}
                <div className="flex items-center justify-between px-4 flex-shrink-0"
                  style={{ height:24, background:"rgba(28,28,36,0.97)", borderTop:"1px solid rgba(255,255,255,0.07)", fontSize:11, color:"rgba(255,255,255,0.35)", fontFamily:'-apple-system,sans-serif' }}>
                  <span>{folder?`${folder.projects.length} items`:"4 folders · 22 projects"}</span>
                  {project&&<span style={{color:FOLDER_META[folder?.id]?.c1}}>{project.title}</span>}
                  <span className="font-mono">dhruv@portfolio</span>
                </div>
              </div>

              {/* ── Dock (same as section) ── */}
              <div className="absolute left-1/2 -translate-x-1/2 flex items-end gap-2 px-4 pb-2 pt-3 rounded-2xl"
                style={{ bottom:10, background:"rgba(255,255,255,0.1)", backdropFilter:"blur(40px) saturate(180%)", border:"1px solid rgba(255,255,255,0.18)", boxShadow:"0 8px 32px rgba(0,0,0,0.4)" }}>
                <DockItem icon={Folder} label="Projects" color="linear-gradient(135deg,#3b82f6,#7c3aed)" action={goHome}/>
                <DockItem icon={Code2} label="Big Projects" color="linear-gradient(135deg,#3b82f6,#7c3aed)" action={()=>{ setFolder(FOLDERS[0]); setProject(FOLDERS[0].projects[0]); }}/>
                <DockItem icon={Monitor} label="Small Projects" color="linear-gradient(135deg,#10b981,#0d9488)" action={()=>{ setFolder(FOLDERS[1]); setProject(FOLDERS[1].projects[0]); }}/>
                <DockItem icon={Building2} label="Company Projects" color="linear-gradient(135deg,#f59e0b,#f97316)" action={()=>{ setFolder(FOLDERS[2]); setProject(FOLDERS[2].projects[0]); }}/>
                <DockItem icon={Rocket} label="Future Coming" color="linear-gradient(135deg,#ec4899,#e11d48)" action={()=>{ setFolder(FOLDERS[3]); setProject(FOLDERS[3].projects[0]); }}/>
                <div className="w-px self-stretch mx-1" style={{background:"rgba(255,255,255,0.2)"}}/>
                <DockItem icon={Github} label="GitHub" color="linear-gradient(135deg,#333,#555)" action={()=>window.open("https://github.com/DHRUV-SHERE","_blank")}/>
                <DockItem icon={Linkedin} label="LinkedIn" color="linear-gradient(135deg,#0077b5,#0ea5e9)" action={()=>window.open("https://www.linkedin.com/in/dhruv-shere/","_blank")}/>
                <DockItem icon={Mail} label="Contact" color="linear-gradient(135deg,#6366f1,#8b5cf6)" action={()=>{ exitFs(); setTimeout(()=>document.querySelector("#contact")?.scrollIntoView({behavior:"smooth"}),450); }}/>
              </div>

              {/* ── Scroll-to-exit hint ── */}
              <motion.div
                initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.9 }}
                className="absolute left-1/2 -translate-x-1/2 z-[300] flex flex-col items-center gap-1 pointer-events-none select-none"
                style={{ bottom: 92 }}>
                <motion.div animate={{ y:[0,4,0] }} transition={{ repeat:Infinity, duration:1.6, ease:"easeInOut" }}>
                  <span style={{ fontSize:11, color:"rgba(255,255,255,0.22)", fontFamily:'-apple-system,sans-serif', letterSpacing:"0.06em" }}>
                    scroll ↓ to exit · esc
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.3}}
          className="text-center mt-12">
          <div className="glass inline-flex items-center gap-4 px-8 py-4 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all">
            <p className="text-muted-foreground text-sm">Want to see all repositories?</p>
            <a href="https://github.com/DHRUV-SHERE" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/30 text-primary text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300">
              <Github className="w-4 h-4" /> Browse GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
