import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  ChevronRight,
  ChevronDown,
  Calendar,
  Globe,
  Database,
  Music,
  BookOpen,
  ShoppingCart,
  Coffee,
  GraduationCap,
  FileText,
  CheckSquare,
  Map,
  Zap,
  Users,
  Terminal,
  Settings,
  Search,
  Layout,
  FileCode,
  FolderOpen,
  Folder,
  Star,
  GitFork,
  Play,
  Code as CodeIcon,
  Menu,
} from "lucide-react";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [staticProjects, setStaticProjects] = useState([]);
  const [comingSoonProjects, setComingSoonProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [explorerOpen, setExplorerOpen] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileView, setMobileView] = useState("list"); // "list" or "details"

  // Check for mobile view on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // GitHub username
  const githubUsername = "DHRUV-SHERE";
  
  // Selected repositories to display
  const selectedRepos = [
    "Agrosence",
    "PashuMitra", 
    "Spotify",
    "knowBase",
    "Oracle",
    "Amazon",
    "RejoiuceClone",
    "Online_Learning_Management_System",
    "React_Text_Site",
    "ToDoList"
  ];

  // Enhanced static data for better presentation
  const projectEnhancements = {
    "agrosence": {
      title: "Agrosence",
      longDescription: "A comprehensive farmer-centric marketplace platform that eliminates middlemen through direct buyer connections. Features include an AI chatbot for farming queries, government scheme portal, Direct Market Access, and Farming Resources hub. Built with MERN stack to deliver a seamless agricultural ecosystem.",
      tech: ["MERN Stack", "React", "Node.js", "MongoDB", "Bootstrap", "Cloudinary", "JWT", "REST API"],
      icon: <Globe className="w-6 h-6" />,
      duration: "December 2024 – Present",
      live: "https://agrosence.vercel.app/",
      features: [
        "AI Chatbot for farming queries",
        "Government scheme portal",
        "Direct Market Access",
        "Farming Resources hub",
        "Farmer authentication system"
      ]
    },
    "pashumitra": {
      title: "PashuMitra",
      longDescription: "Smart veterinary healthcare platform connecting farmers with veterinary doctors and medical stores. Features real-time chat consultations, medicine ordering, appointment booking, prescription management, and livestock awareness information. Built with real-time capabilities using Socket.io.",
      tech: ["MERN Stack", "React", "Node.js", "MongoDB", "Tailwind CSS", "Socket.io", "Cloudinary", "JWT"],
      icon: <Database className="w-6 h-6" />,
      duration: "July 2025 – Present",
      live: "https://pashumitra.vercel.app/",
      features: [
        "Real-time chat consultations",
        "Medicine ordering system",
        "Appointment booking",
        "Prescription management",
        "Livestock awareness portal"
      ]
    },
    "spotify": {
      title: "Spotify Clone",
      longDescription: "Full-featured music streaming platform clone with playlist management, music discovery, and user authentication. Integrates Spotify Web API for music data, features responsive design, and implements modern audio playback controls.",
      tech: ["React", "Node.js", "Spotify API", "Tailwind CSS", "Express.js", "REST API"],
      icon: <Music className="w-6 h-6" />,
      duration: "September 2024",
      live: "https://spotify-clone-dhruv.vercel.app/",
      features: [
        "Playlist management",
        "Music discovery",
        "User authentication",
        "Audio playback controls",
        "Responsive design"
      ]
    },
    "knowbase": {
      title: "KnowBase",
      longDescription: "Knowledge management system with advanced search, categorization, and tagging capabilities. Features include markdown support, user roles, content organization, and efficient information retrieval systems.",
      tech: ["MERN Stack", "React", "Node.js", "MongoDB", "Tailwind CSS", "Search API", "JWT"],
      icon: <BookOpen className="w-6 h-6" />,
      duration: "October 2024",
      live: "https://knowbase-dhruv.vercel.app/",
      features: [
        "Advanced search functionality",
        "Markdown support",
        "User roles & permissions",
        "Content categorization",
        "Tagging system"
      ]
    },
    "oracle": {
      title: "Database Management System",
      longDescription: "Comprehensive database project focusing on efficient data management, query optimization, and database administration. Includes complex SQL queries, stored procedures, triggers, and database design principles.",
      tech: ["Oracle", "SQL", "PL/SQL", "Database Design", "Query Optimization"],
      icon: <Database className="w-6 h-6" />,
      duration: "August 2024",
      features: [
        "Complex SQL queries",
        "Stored procedures",
        "Database triggers",
        "Query optimization",
        "Database design principles"
      ]
    },
    "amazon": {
      title: "Amazon Clone",
      longDescription: "E-commerce platform replica with product listings, shopping cart functionality, user authentication, and payment integration. Features product search, filters, reviews, order tracking, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS", "Redux"],
      icon: <ShoppingCart className="w-6 h-6" />,
      duration: "July 2024",
      live: "https://amazon-clone-dhruv.vercel.app/",
      features: [
        "Product search & filters",
        "Shopping cart functionality",
        "User authentication",
        "Payment integration",
        "Admin dashboard"
      ]
    },
    "rejoiuceclone": {
      title: "Animated Website - Rejoiuce Clone",
      longDescription: "Food and beverage delivery system with product browsing, ordering, delivery tracking, and payment processing. Includes inventory management and real-time order updates.",
      tech: ["React", "Express.js", "MongoDB", "JWT", "Socket.io", "Payment Gateway"],
      icon: <Coffee className="w-6 h-6" />,
      duration: "June 2024",
      live: "https://rejoiuce-clone.vercel.app/",
      features: [
        "Product browsing & ordering",
        "Delivery tracking",
        "Real-time order updates",
        "Inventory management",
        "Payment processing"
      ]
    },
    "online_learning_management_system": {
      title: "Learning Management System",
      longDescription: "Complete online education platform with course creation, student enrollment, progress tracking, and assessment tools. Features video streaming, quiz system, and certificate generation.",
      tech: ["MERN Stack", "React", "Node.js", "MongoDB", "Tailwind CSS", "Video Streaming", "JWT"],
      icon: <GraduationCap className="w-6 h-6" />,
      duration: "May 2024",
      features: [
        "Course creation & management",
        "Student enrollment",
        "Progress tracking",
        "Video streaming",
        "Quiz system"
      ]
    },
    "react_text_site": {
      title: "Text Processing Tool",
      longDescription: "React-based text manipulation application with comprehensive text utilities. Features include word count, character count, text formatting, case conversion, and text analysis tools.",
      tech: ["React", "JavaScript", "CSS", "Local Storage"],
      icon: <FileText className="w-6 h-6" />,
      duration: "April 2024",
      features: [
        "Word & character count",
        "Text formatting",
        "Case conversion",
        "Text analysis",
        "Local storage"
      ]
    },
    "todolist": {
      title: "Task Management App",
      longDescription: "Advanced todo list application with task prioritization, deadlines, reminders, and progress tracking. Features drag-and-drop interface, categories, and data persistence.",
      tech: ["React", "Local Storage", "CSS", "Date-fns"],
      icon: <CheckSquare className="w-6 h-6" />,
      duration: "March 2024",
      features: [
        "Task prioritization",
        "Deadlines & reminders",
        "Drag & drop interface",
        "Progress tracking",
        "Data persistence"
      ]
    }
  };

  useEffect(() => {
    fetchGitHubProjects();
  }, []);

  const fetchGitHubProjects = async () => {
    try {
      setLoading(true);
      
      const response = await fetch(
        `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`
      );

      if (!response.ok) {
        throw new Error(`GitHub API error! Status: ${response.status}`);
      }

      const allRepos = await response.json();
      
      const mainProjects = allRepos.filter((repo) =>
        selectedRepos.some(selected => 
          selected.toLowerCase() === repo.name.toLowerCase()
        )
      );

      // Merge GitHub data with static enhancements
      const formattedProjects = mainProjects.map((repo) => {
        const repoKey = repo.name.toLowerCase();
        const enhancement = projectEnhancements[repoKey] || {};
        
        return {
          id: repoKey.replace(/[^a-z]/g, '_'),
          title: enhancement.title || formatProjectName(repo.name),
          description: repo.description || "A software development project",
          longDescription: enhancement.longDescription || 
            (repo.description ? `${repo.description}. A project built with modern web technologies and best practices.` : 
            `A ${repo.language || 'web'} application project.`),
          tech: enhancement.tech || [repo.language || "Web Development"],
          features: enhancement.features || ["Modern architecture", "Responsive design", "Clean code"],
          github: repo.html_url,
          live: enhancement.live || repo.homepage || null,
          duration: enhancement.duration || getProjectDuration(repo.created_at, repo.updated_at),
          language: repo.language || "JavaScript",
          stars: repo.stargazers_count || 0,
          forks: repo.forks_count || 0,
          lastUpdated: repo.updated_at,
          icon: enhancement.icon || <FileCode className="w-6 h-6" />,
          fileName: `${(enhancement.title || formatProjectName(repo.name)).replace(/\s+/g, '')}.jsx`
        };
      });

      setStaticProjects(formattedProjects);
      
      // Coming Soon Projects
      const upcomingProjects = [
        {
          id: "aryapath",
          title: "AryaPath",
          description: "Tourism platform for international travelers exploring India with itinerary planning and cultural insights",
          tech: ["MERN Stack", "Tailwind CSS", "Cloudinary", "Socket.io", "Maps API", "Payment Gateway"],
          status: "planning",
          icon: <Map className="w-5 h-5" />,
          github: "https://github.com/DHRUV-SHERE/AryaPath"
        },
        {
          id: "promptstudio",
          title: "PromptStudio",
          description: "AI-driven prompt generator for image creation, code generation, and content creation",
          tech: ["MERN Stack", "Tailwind CSS", "OpenAI API", "Framer Motion", "JWT Authentication"],
          status: "active",
          icon: <Zap className="w-5 h-5" />,
          github: "https://github.com/DHRUV-SHERE/PromptStudio"
        },
        {
          id: "connectvista",
          title: "ConnectVista",
          description: "Service-connection platform with smart matching algorithms and professional networking",
          tech: ["MERN Stack", "Tailwind CSS", "Cloudinary", "Socket.io", "JWT", "Algorithm"],
          status: "active",
          icon: <Users className="w-5 h-5" />,
          github: "https://github.com/DHRUV-SHERE/ConnectVista"
        }
      ];
      
      setComingSoonProjects(upcomingProjects);
    } catch (err) {
      console.error("Error fetching GitHub data:", err);
      // Fallback to static data on error
      const fallbackProjects = Object.values(projectEnhancements).map((proj, index) => ({
        id: Object.keys(projectEnhancements)[index],
        ...proj,
        github: `https://github.com/${githubUsername}/${Object.keys(projectEnhancements)[index]}`,
        language: proj.tech[0] || "JavaScript",
        stars: 0,
        forks: 0,
        lastUpdated: new Date().toISOString(),
        fileName: `${proj.title.replace(/\s+/g, '')}.jsx`
      }));
      setStaticProjects(fallbackProjects);
    } finally {
      setLoading(false);
    }
  };

  const getProjectDuration = (createdAt, updatedAt) => {
    const created = new Date(createdAt);
    const updated = new Date(updatedAt);
    const now = new Date();
    
    const createdMonth = created.toLocaleString('default', { month: 'short' });
    const createdYear = created.getFullYear();
    
    const daysSinceUpdate = Math.floor((now - updated) / (1000 * 60 * 60 * 24));
    
    if (daysSinceUpdate < 30) {
      return `${createdMonth} ${createdYear} – Present`;
    } else {
      const updatedMonth = updated.toLocaleString('default', { month: 'short' });
      const updatedYear = updated.getFullYear();
      return `${createdMonth} ${createdYear} – ${updatedMonth} ${updatedYear}`;
    }
  };

  const formatProjectName = (name) => {
    return name
      .split(/[-_]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: "#f1e05a",
      TypeScript: "#2b7489",
      Python: "#3572A5",
      Java: "#b07219",
      HTML: "#e34c26",
      CSS: "#1572b6",
      PHP: "#4F5D95",
      SQL: "#e38c00",
      "MERN Stack": "#61dafb",
      React: "#61dafb",
      "Node.js": "#68a063",
      "Express.js": "#000000",
      MongoDB: "#47a248",
      "Tailwind CSS": "#38b2ac",
      Bootstrap: "#7952b3",
      Oracle: "#f80000",
    };
    return colors[language] || "#00eaff";
  };

  if (loading) {
    return (
      <section id="projects" className="py-24 px-4 md:px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-4 p-8 rounded-2xl bg-primary/10 animate-pulse">
              <div className="w-10 h-10 bg-primary rounded-full animate-spin border-3 border-primary border-t-transparent"></div>
              <p className="text-muted-foreground text-lg">Loading VS Code Workspace...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Mobile View - Simple Card List
  if (isMobile && mobileView === "list") {
    return (
      <section id="projects" className="py-12 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <Terminal className="text-primary w-5 h-5" />
              <p className="text-secondary font-mono text-sm">// Projects</p>
            </div>
            <h2 className="text-2xl font-bold mb-3">
              <span className="gradient-text">My Projects</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              Tap any project to view details
            </p>
          </motion.div>

          {/* Mobile Project List */}
          <div className="space-y-4">
            {staticProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => {
                  setSelectedProject(index);
                  setMobileView("details");
                }}
                className="bg-card/50 backdrop-blur-sm rounded-xl border border-gray-800 p-4 active:scale-[0.99] transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <h3 className="font-bold text-base">{project.title}</h3>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                    <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs px-2 py-1 rounded bg-gray-800/50 text-gray-300">
                        {project.language}
                      </span>
                      {project.stars > 0 && (
                        <span className="text-xs text-yellow-500 flex items-center gap-1">
                          ★ {project.stars}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.tech.slice(0, 3).map(tech => (
                        <span key={tech} className="text-xs px-1.5 py-0.5 rounded bg-gray-800/30 text-gray-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View Toggle Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => setMobileView("details")}
              className="text-sm text-primary hover:underline"
            >
              Tap any project for details →
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Mobile View - Single Project Details
  if (isMobile && mobileView === "details") {
    const project = staticProjects[selectedProject];
    
    return (
      <section id="projects" className="py-4 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          {/* Back Button */}
          <button
            onClick={() => setMobileView("list")}
            className="flex items-center gap-2 text-primary mb-6"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            <span className="text-sm">Back to Projects</span>
          </button>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Header */}
            <div className="flex items-start gap-3">
              <div className="p-3 rounded-xl bg-primary/10">
                {project.icon}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white">{project.title}</h2>
                <p className="text-sm text-gray-400 mt-1">{project.duration}</p>
              </div>
              <div className="flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="bg-card/30 rounded-xl p-4">
              <h3 className="font-semibold text-primary mb-2">Description</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Features */}
            <div className="bg-card/30 rounded-xl p-4">
              <h3 className="font-semibold text-primary mb-3">Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="bg-card/30 rounded-xl p-4">
              <h3 className="font-semibold text-primary mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono rounded-lg bg-gray-800/50 text-gray-300 border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 bg-gray-800 hover:bg-primary/20 text-gray-300 hover:text-primary rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-medium">Live Demo</span>
                </a>
              )}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-800">
              <button
                onClick={() => {
                  setSelectedProject(prev => prev === 0 ? staticProjects.length - 1 : prev - 1);
                }}
                className="px-4 py-2 text-sm text-gray-400 hover:text-primary transition-colors"
              >
                ← Previous
              </button>
              <span className="text-sm text-gray-400">
                {selectedProject + 1} / {staticProjects.length}
              </span>
              <button
                onClick={() => {
                  setSelectedProject(prev => prev === staticProjects.length - 1 ? 0 : prev + 1);
                }}
                className="px-4 py-2 text-sm text-gray-400 hover:text-primary transition-colors"
              >
                Next →
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Desktop View - VS Code Interface
  return (
    <section id="projects" className="py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Terminal className="text-primary w-8 h-8" />
            <p className="text-secondary font-mono text-lg">// Project Workspace</p>
            <Layout className="text-primary w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">VS Code Style</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Browse my projects like a code editor. Click files on the left to view details.
          </p>
        </motion.div>

        {/* VS Code Interface Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* VS Code Top Bar */}
          <div className="flex items-center justify-between bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 rounded-t-2xl p-4">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <span className="text-sm text-gray-400 font-mono">projects-workspace — Dhruv Shere</span>
            </div>
            <div className="flex items-center gap-4">
              <Search className="w-4 h-4 text-gray-400" />
              <Settings className="w-4 h-4 text-gray-400" />
              <Play className="w-4 h-4 text-primary" />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="bg-gray-900/60 backdrop-blur-lg border border-gray-800 rounded-b-2xl overflow-hidden">
            <div className="flex">
              {/* Left Sidebar - Activity Bar */}
              <div className="w-16 bg-gray-900/90 border-r border-gray-800 py-4">
                <div className="flex flex-col items-center gap-6">
                  <div className="p-3 rounded-lg bg-primary/20 text-primary">
                    <FileCode className="w-5 h-5" />
                  </div>
                  <div className="p-3 rounded-lg text-gray-400 hover:text-primary hover:bg-gray-800/50 transition-colors cursor-pointer">
                    <Search className="w-5 h-5" />
                  </div>
                  <div className="p-3 rounded-lg text-gray-400 hover:text-primary hover:bg-gray-800/50 transition-colors cursor-pointer">
                    <GitFork className="w-5 h-5" />
                  </div>
                  <div className="p-3 rounded-lg text-gray-400 hover:text-primary hover:bg-gray-800/50 transition-colors cursor-pointer">
                    <Settings className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Explorer Sidebar */}
              <motion.div
                initial={{ width: sidebarCollapsed ? 0 : 280 }}
                animate={{ width: sidebarCollapsed ? 0 : 280 }}
                transition={{ duration: 0.3 }}
                className={`overflow-hidden ${sidebarCollapsed ? 'w-0' : 'w-72'}`}
              >
                <div className="h-full bg-gray-900/80 border-r border-gray-800">
                  {/* Explorer Header */}
                  <div className="p-4 border-b border-gray-800">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                        EXPLORER
                      </h3>
                      <div
                        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                        className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                      >
                        <ChevronRight className={`w-4 h-4 transition-transform ${sidebarCollapsed ? 'rotate-180' : ''}`} />
                      </div>
                    </div>
                  </div>

                  {/* Projects Folder */}
                  <div className="p-2">
                    <div
                      onClick={() => setExplorerOpen(!explorerOpen)}
                      className="flex items-center gap-2 w-full p-2 rounded hover:bg-gray-800/50 text-gray-300 cursor-pointer transition-colors"
                    >
                      {explorerOpen ? (
                        <ChevronDown className="w-4 h-4 text-primary" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-primary" />
                      )}
                      {explorerOpen ? (
                        <FolderOpen className="w-4 h-4 text-primary" />
                      ) : (
                        <Folder className="w-4 h-4 text-primary" />
                      )}
                      <span className="text-sm font-medium">projects</span>
                      <span className="ml-auto text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                        {staticProjects.length}
                      </span>
                    </div>

                    {/* Project Files */}
                    <AnimatePresence>
                      {explorerOpen && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="ml-6 mt-1 space-y-1"
                        >
                          {staticProjects.map((project, index) => (
                            <motion.div
                              key={project.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              onClick={() => setSelectedProject(index)}
                              className={`group flex items-center gap-3 w-full p-2 rounded-lg transition-all duration-200 cursor-pointer ${
                                selectedProject === index
                                  ? 'bg-primary/20 border-l-2 border-primary text-primary'
                                  : 'hover:bg-gray-800/50 text-gray-400 hover:text-gray-300'
                              }`}
                              whileHover={{ 
                                x: 3,
                                scale: 1.02,
                                boxShadow: selectedProject !== index ? "0 0 20px rgba(0, 234, 255, 0.3)" : "none"
                              }}
                            >
                              <div className={`transition-transform group-hover:scale-110 ${
                                selectedProject === index ? 'scale-110' : ''
                              }`}>
                                {project.icon}
                              </div>
                              <span className="text-sm font-mono truncate">{project.fileName}</span>
                              {selectedProject === index && (
                                <motion.div
                                  className="ml-auto w-2 h-2 rounded-full bg-primary animate-pulse"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                />
                              )}
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>

              {/* Main Editor Area */}
              <div className="flex-1 overflow-hidden">
                {/* Tabs Bar */}
                <div className="flex items-center bg-gray-900/90 border-b border-gray-800 overflow-x-auto">
                  {staticProjects.map((project, index) => (
                    <div
                      key={project.id}
                      onClick={() => setSelectedProject(index)}
                      className={`flex items-center gap-2 px-4 py-3 border-r border-gray-800 transition-all duration-200 cursor-pointer ${
                        selectedProject === index
                          ? 'bg-gray-900 text-primary border-b-2 border-primary'
                          : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
                      }`}
                    >
                      {project.icon}
                      <span className="text-sm font-mono truncate max-w-[120px]">{project.fileName}</span>
                      {selectedProject === index && (
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            // Handle tab close - implement your logic here
                          }}
                          className="ml-2 p-0.5 rounded hover:bg-gray-700 transition-colors"
                        >
                          <X className="w-3 h-3" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Editor Content */}
                <div className="p-6 md:p-8 h-[600px] overflow-y-auto bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm">
                  {staticProjects[selectedProject] && (
                    <motion.div
                      key={selectedProject}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.12 }}
                      className="space-y-6"
                    >
                      {/* File Header */}
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                              {staticProjects[selectedProject].icon}
                            </div>
                            <div>
                              <h3 className="text-2xl md:text-3xl font-bold text-white">
                                {staticProjects[selectedProject].title}
                              </h3>
                              <div className="flex items-center gap-3 mt-2">
                                <span className="text-sm text-gray-400 font-mono flex items-center gap-1.5">
                                  <Calendar className="w-4 h-4" />
                                  {staticProjects[selectedProject].duration}
                                </span>
                                <span className="text-sm text-gray-400 font-mono flex items-center gap-1.5">
                                  <Star className="w-4 h-4 text-yellow-500" />
                                  {staticProjects[selectedProject].stars} stars
                                </span>
                                <span className="text-sm text-gray-400 font-mono flex items-center gap-1.5">
                                  <GitFork className="w-4 h-4" />
                                  {staticProjects[selectedProject].forks} forks
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {staticProjects[selectedProject].live && (
                            <a
                              href={staticProjects[selectedProject].live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-all duration-300 flex items-center gap-2 text-sm"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Live Demo
                            </a>
                          )}
                          <a
                            href={staticProjects[selectedProject].github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-gray-800 hover:bg-primary/20 text-gray-300 hover:text-primary rounded-lg transition-all duration-300 flex items-center gap-2 text-sm"
                          >
                            <Github className="w-4 h-4" />
                            Source Code
                          </a>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="glass-card p-6 rounded-xl">
                        <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                          <FileCode className="w-5 h-5" />
                          Project Overview
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          {staticProjects[selectedProject].longDescription}
                        </p>
                      </div>

                      {/* Features & Tech Stack Grid */}
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Features */}
                        <div className="glass-card p-6 rounded-xl">
                          <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                            <ChevronRight className="w-5 h-5" />
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {staticProjects[selectedProject].features.map((feature, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-start gap-2 text-gray-300"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                                <span>{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack */}
                        <div className="glass-card p-6 rounded-xl">
                          <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                            <CodeIcon className="w-5 h-5" />
                            Technology Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {staticProjects[selectedProject].tech.map((tech, index) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                className="px-3 py-1.5 text-sm font-mono rounded-lg bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                                style={{
                                  boxShadow: `0 0 10px ${getLanguageColor(tech)}30`
                                }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Code Preview */}
                      <div className="glass-card p-6 rounded-xl">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold text-primary flex items-center gap-2">
                            <Terminal className="w-5 h-5" />
                            Code Preview
                          </h4>
                          <span className="text-sm text-gray-500 font-mono">
                            {staticProjects[selectedProject].fileName}
                          </span>
                        </div>
                        <div className="bg-gray-950 rounded-lg overflow-hidden border border-gray-800">
                          <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-800">
                            <div className="flex gap-2">
                              <div className="w-2 h-2 rounded-full bg-red-500"></div>
                              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                          </div>
                          <pre className="p-6 font-mono text-sm text-gray-300 overflow-x-auto">
                            <code>
{`// ${staticProjects[selectedProject].title}
// ${staticProjects[selectedProject].duration}

import React from 'react';
import { ${staticProjects[selectedProject].tech.slice(0, 3).join(', ')} } from 'tech-stack';

const ${staticProjects[selectedProject].title.replace(/\s+/g, '')} = () => {
  // Project initialized
  const features = ${JSON.stringify(staticProjects[selectedProject].features.slice(0, 3), null, 2)};
  
  return (
    <div className="project-container">
      <h1>${staticProjects[selectedProject].title}</h1>
      <p>${staticProjects[selectedProject].description.substring(0, 100)}...</p>
    </div>
  );
};

export default ${staticProjects[selectedProject].title.replace(/\s+/g, '')};`}
                            </code>
                          </pre>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coming Soon Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-6">
              <Calendar className="text-secondary" size={32} />
              <h3 className="text-3xl md:text-4xl font-bold gradient-text">
                Coming Soon
              </h3>
              <Calendar className="text-primary" size={32} />
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Projects currently in development pipeline
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoonProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-gray-800 group hover:border-primary/40 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                      {project.icon}
                    </div>
                    <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                  </div>
                  <span className={`px-3 py-1.5 font-mono rounded-lg text-sm ${
                    project.status === "active" 
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  }`}>
                    {project.status === "active" ? "In Dev" : "Planning"}
                  </span>
                </div>

                <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 font-mono rounded-lg bg-gray-800/50 text-gray-400 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors flex items-center gap-1.5 text-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-24"
        >
          <div className="glass-card p-8 rounded-3xl border border-primary/20 max-w-2xl mx-auto hover:border-primary/40 transition-all duration-500">
            <p className="text-muted-foreground text-lg mb-6">
              Want to explore more projects in detail?
            </p>
            <a
              href="https://github.com/DHRUV-SHERE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-xl hover:opacity-90 transition-all duration-300 flex items-center gap-3 shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105">
                <Github className="w-5 h-5" />
                <span className="text-base">Browse All Projects</span>
              </button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Inline CSS for glass effect - without jsx attribute */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .glass-card {
            background: rgba(30, 41, 59, 0.4);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }
          
          .gradient-text {
            background: linear-gradient(90deg, #00eaff 0%, #00ff88 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          @media (max-width: 768px) {
            .glass-card {
              background: rgba(30, 41, 59, 0.7);
            }
          }
        `
      }} />
    </section>
  );
};

export default ProjectsSection;