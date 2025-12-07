import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Code,
  X,
  ChevronRight,
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
  Monitor,
  Cpu,
  Terminal,
  MousePointerClick,
  ArrowRight,
} from "lucide-react";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [staticProjects, setStaticProjects] = useState([]);
  const [comingSoonProjects, setComingSoonProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const projectsListRef = useRef(null);

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

  // Project icons mapping
  const projectIcons = {
    "agrosence": <Globe className="w-5 h-5" />,
    "pashumitra": <Database className="w-5 h-5" />,
    "spotify": <Music className="w-5 h-5" />,
    "knowbase": <BookOpen className="w-5 h-5" />,
    "oracle": <Database className="w-5 h-5" />,
    "amazon": <ShoppingCart className="w-5 h-5" />,
    "rejoiuceclone": <Coffee className="w-5 h-5" />,
    "online_learning_management_system": <GraduationCap className="w-5 h-5" />,
    "react_text_site": <FileText className="w-5 h-5" />,
    "todolist": <CheckSquare className="w-5 h-5" />
  };

  // Project colors
  const projectColors = {
    "agrosence": "border-l-green-500",
    "pashumitra": "border-l-blue-500",
    "spotify": "border-l-green-600",
    "knowbase": "border-l-purple-500",
    "oracle": "border-l-red-500",
    "amazon": "border-l-yellow-500",
    "rejoiuceclone": "border-l-pink-500",
    "online_learning_management_system": "border-l-indigo-500",
    "react_text_site": "border-l-cyan-500",
    "todolist": "border-l-teal-500"
  };

  // Project data
  const projectData = {
    "agrosence": {
      title: "Agrosence",
      description: "Farmer-centric marketplace platform eliminating middlemen",
      tech: ["MERN Stack", "React", "Node.js", "MongoDB", "Bootstrap", "Cloudinary", "JWT", "REST API"],
      live: "https://agrosence.vercel.app/",
      duration: "Dec 2024 – Present"
    },
    "pashumitra": {
      title: "PashuMitra",
      description: "Veterinary healthcare platform with real-time consultations",
      tech: ["MERN Stack", "Socket.io", "Tailwind CSS", "Cloudinary"],
      live: "https://pashumitra.vercel.app/",
      duration: "Jul 2025 – Present"
    },
    "spotify": {
      title: "Spotify Clone",
      description: "Music streaming platform with playlist management",
      tech: ["React", "Spotify API", "Tailwind CSS", "Express.js"],
      live: "https://spotify-clone-dhruv.vercel.app/",
      duration: "Sep 2024"
    },
    "knowbase": {
      title: "KnowBase",
      description: "Knowledge management system with advanced search",
      tech: ["MERN Stack", "Search API", "JWT", "Tailwind CSS"],
      live: "https://knowbase-dhruv.vercel.app/",
      duration: "Oct 2024"
    },
    "oracle": {
      title: "Database System",
      description: "Database management and query optimization",
      tech: ["Oracle", "SQL", "PL/SQL", "Database Design"],
      duration: "Aug 2024"
    },
    "amazon": {
      title: "Amazon Clone",
      description: "E-commerce platform replica with payment integration",
      tech: ["React", "Stripe API", "Redux", "Tailwind CSS"],
      live: "https://amazon-clone-dhruv.vercel.app/",
      duration: "Jul 2024"
    },
    "rejoiuceclone": {
      title: "Rejoiuce Clone",
      description: "Food delivery system with real-time order updates",
      tech: ["React", "Socket.io", "JWT", "Payment Gateway"],
      live: "https://rejoiuce-clone.vercel.app/",
      duration: "Jun 2024"
    },
    "online_learning_management_system": {
      title: "LMS Platform",
      description: "Complete online education platform",
      tech: ["MERN Stack", "Video Streaming", "JWT", "Tailwind CSS"],
      duration: "May 2024"
    },
    "react_text_site": {
      title: "Text Tool",
      description: "React-based text manipulation application",
      tech: ["React", "JavaScript", "CSS", "Local Storage"],
      duration: "Apr 2024"
    },
    "todolist": {
      title: "Task Manager",
      description: "Advanced todo application with progress tracking",
      tech: ["React", "Local Storage", "CSS", "Date-fns"],
      duration: "Mar 2024"
    }
  };

  // Coming Soon Projects
  const upcomingProjects = [
    {
      id: "aryapath",
      title: "AryaPath",
      description: "Tourism platform for India travelers",
      tech: ["MERN Stack", "Maps API", "Socket.io", "Payment"],
      github: "https://github.com/DHRUV-SHERE/AryaPath",
      icon: <Map className="w-5 h-5" />,
      status: "planning"
    },
    {
      id: "promptstudio",
      title: "PromptStudio",
      description: "AI prompt generator tool",
      tech: ["MERN Stack", "OpenAI API", "Framer Motion", "JWT"],
      github: "https://github.com/DHRUV-SHERE/PromptStudio",
      icon: <Zap className="w-5 h-5" />,
      status: "active"
    },
    {
      id: "connectvista",
      title: "ConnectVista",
      description: "Service connection platform",
      tech: ["MERN Stack", "Socket.io", "Algorithm", "Cloudinary"],
      github: "https://github.com/DHRUV-SHERE/ConnectVista",
      icon: <Users className="w-5 h-5" />,
      status: "active"
    }
  ];

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

      const formattedProjects = mainProjects.map((repo) => {
        const repoKey = repo.name.toLowerCase();
        const projectInfo = projectData[repoKey] || {};
        
        return {
          id: repoKey,
          title: projectInfo.title || formatProjectName(repo.name),
          description: projectInfo.description || (repo.description ? repo.description.substring(0, 100) : "A web development project"),
          tech: projectInfo.tech || [repo.language || "Web Dev"],
          github: repo.html_url,
          live: projectInfo.live || repo.homepage || null,
          icon: projectIcons[repoKey] || <Code className="w-5 h-5" />,
          color: projectColors[repoKey] || "border-l-primary",
          language: repo.language || "JavaScript",
          stars: repo.stargazers_count || 0,
          duration: projectInfo.duration || "Recent",
          forks: repo.forks_count || 0
        };
      });

      setStaticProjects(formattedProjects);
      setComingSoonProjects(upcomingProjects);
    } catch (err) {
      console.error("Error fetching GitHub data:", err);
      // Fallback to static data
      const fallbackProjects = Object.keys(projectData).map(key => ({
        id: key,
        ...projectData[key],
        github: `https://github.com/${githubUsername}/${key}`,
        icon: projectIcons[key] || <Code className="w-5 h-5" />,
        color: projectColors[key] || "border-l-primary",
        language: "JavaScript",
        stars: 0,
        forks: 0
      }));
      setStaticProjects(fallbackProjects);
      setComingSoonProjects(upcomingProjects);
    } finally {
      setLoading(false);
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
    return colors[language] || "#8b949e";
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 px-4 md:px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-4 p-8 rounded-2xl bg-primary/10 animate-pulse">
              <div className="w-8 h-8 bg-primary rounded-full animate-spin border-2 border-primary border-t-transparent"></div>
              <p className="text-muted-foreground">Loading projects...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-6 relative">
      <div className="container mx-auto ">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 md:gap-3 mb-3">
            <Monitor className="text-primary w-5 h-5 md:w-6 md:h-6" />
            <p className="text-secondary font-mono text-sm md:text-base">// Project Terminal</p>
            <Terminal className="text-primary w-5 h-5 md:w-6 md:h-6" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Project Workspace</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Browse projects on the left, view details on the right
          </p>
        </motion.div>

        {/* Laptop-like Container */}
        <div className="relative">
          {/* Laptop Top (Screen) */}
          <div className="relative max-w-6xl mx-auto mb-8 md:mb-12">
            {/* Laptop Frame */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl md:rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
              {/* Screen Bezel */}
              <div className="bg-gray-950 p-2 md:p-3">
                {/* Camera */}
                <div className="w-2 h-2 rounded-full bg-gray-700 mx-auto mb-2"></div>
                
                {/* Screen Content */}
                <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-lg md:rounded-xl overflow-hidden border border-gray-800">
                  <div className="p-4 md:p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                        <span className="text-xs md:text-sm text-gray-400 font-mono ml-2">
                          projects-terminal
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-primary" />
                        <span className="text-xs text-muted-foreground font-mono">
                          {staticProjects.length} Projects
                        </span>
                      </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Left Column - Project List */}
                      <motion.div 
                        ref={projectsListRef}
                        className="lg:w-2/5"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="bg-gray-900/50 rounded-lg p-3 md:p-4 border border-gray-800">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-sm md:text-base font-semibold text-gray-300">
                              Projects Directory
                            </h3>
                            <span className="text-xs text-gray-500 font-mono">
                              {staticProjects.length} items
                            </span>
                          </div>
                          
                          <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                            {staticProjects.map((project, index) => (
                              <motion.div
                                key={project.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() => setSelectedProject(index)}
                                className={`group cursor-pointer p-3 rounded-lg transition-all duration-300 ${
                                  selectedProject === index 
                                    ? 'bg-gray-800/70 border-l-4' 
                                    : 'hover:bg-gray-800/30 border-l-2'
                                } ${project.color} border-gray-700`}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-md ${
                                      selectedProject === index 
                                        ? 'bg-primary/20' 
                                        : 'bg-gray-800/50 group-hover:bg-primary/10'
                                    }`}>
                                      {project.icon}
                                    </div>
                                    <div>
                                      <h4 className="text-sm font-medium text-gray-200 group-hover:text-primary transition-colors">
                                        {project.title}
                                      </h4>
                                      <div className="flex items-center gap-2 mt-1">
                                        <span 
                                          className="text-xs px-2 py-0.5 rounded"
                                          style={{
                                            backgroundColor: `${getLanguageColor(project.language)}20`,
                                            color: getLanguageColor(project.language),
                                          }}
                                        >
                                          {project.language}
                                        </span>
                                        {project.stars > 0 && (
                                          <span className="text-xs text-yellow-500 flex items-center gap-0.5">
                                            ★ {project.stars}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                  <ChevronRight className={`w-4 h-4 transition-transform ${
                                    selectedProject === index 
                                      ? 'text-primary rotate-90' 
                                      : 'text-gray-500 group-hover:text-gray-400'
                                  }`} />
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>

                      {/* Right Column - Project Details */}
                      <motion.div 
                        className="lg:w-3/5"
                        key={selectedProject}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="bg-gray-900/50 rounded-lg p-4 md:p-6 border border-gray-800 h-full">
                          {staticProjects[selectedProject] && (
                            <>
                              <div className="flex items-start justify-between mb-4">
                                <div>
                                  <div className="flex items-center gap-3 mb-2">
                                    <div className={`p-2.5 rounded-lg ${staticProjects[selectedProject].color.replace('border-l-', 'bg-')} bg-opacity-10`}>
                                      {staticProjects[selectedProject].icon}
                                    </div>
                                    <div>
                                      <h3 className="text-xl md:text-2xl font-bold text-white">
                                        {staticProjects[selectedProject].title}
                                      </h3>
                                      <p className="text-sm text-gray-400 mt-1">
                                        {staticProjects[selectedProject].duration}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <a
                                    href={staticProjects[selectedProject].github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-gray-800 hover:bg-primary/20 text-gray-400 hover:text-primary transition-colors"
                                  >
                                    <Github className="w-4 h-4 md:w-5 md:h-5" />
                                  </a>
                                  {staticProjects[selectedProject].live && (
                                    <a
                                      href={staticProjects[selectedProject].live}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="p-2 rounded-lg bg-gray-800 hover:bg-green-500/20 text-gray-400 hover:text-green-500 transition-colors"
                                    >
                                      <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                                    </a>
                                  )}
                                </div>
                              </div>

                              <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
                                {staticProjects[selectedProject].description}
                              </p>

                              <div className="mb-6">
                                <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                                  <Code className="w-4 h-4" />
                                  Technologies Used
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {staticProjects[selectedProject].tech.slice(0, 6).map((tech) => (
                                    <span
                                      key={tech}
                                      className="px-3 py-1.5 text-xs font-mono rounded-lg bg-gray-800 text-gray-300 border border-gray-700 hover:border-primary/50 transition-colors"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                  href={staticProjects[selectedProject].github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-1"
                                >
                                  <button className="w-full px-4 py-3 bg-gray-800 hover:bg-primary/20 text-gray-300 hover:text-primary rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                                    <Github className="w-4 h-4" />
                                    <span className="text-sm font-medium">View Source Code</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                  </button>
                                </a>
                                
                                {staticProjects[selectedProject].live && (
                                  <a
                                    href={staticProjects[selectedProject].live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1"
                                  >
                                    <button className="w-full px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 group">
                                      <ExternalLink className="w-4 h-4" />
                                      <span className="text-sm font-medium">Live Demo</span>
                                    </button>
                                  </a>
                                )}
                              </div>
                            </>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Laptop Bottom (Keyboard) */}
            <div className="mx-auto w-3/4 md:w-2/3">
              <div className="h-4 md:h-6 bg-gradient-to-r from-gray-900 to-gray-950 rounded-b-xl md:rounded-b-2xl border-t-0 border border-gray-800"></div>
              <div className="h-2 md:h-3 bg-gray-950 mx-auto w-1/3 rounded-b-md"></div>
            </div>
          </div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mb-12"
          >
            {/* <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-card/30 px-4 py-2 rounded-full border border-border">
              <MousePointerClick className="w-3 h-3" />
              <span>Click any project on the left to view details</span>
            </div> */}
          </motion.div>
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 md:mt-24"
        >
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Calendar className="text-secondary" />
              <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                Coming Soon
              </h3>
              <Calendar className="text-primary" />
            </div>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
              Projects currently in development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {comingSoonProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 p-5 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {project.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{project.title}</h4>
                    <span className={`text-xs px-2 py-1 rounded ${
                      project.status === "active" 
                        ? "bg-green-500/20 text-green-400" 
                        : "bg-blue-500/20 text-blue-400"
                    }`}>
                      {project.status === "active" ? "In Development" : "Planning"}
                    </span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono rounded bg-muted/30 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-secondary hover:text-primary transition-colors flex items-center gap-1.5"
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16 md:mt-24"
        >
          <div className="p-6 md:p-8 rounded-xl border border-primary/10 bg-card/30 max-w-xl mx-auto">
            <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6">
              Explore more projects and contributions
            </p>
            <a
              href="https://github.com/DHRUV-SHERE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 flex items-center gap-2 md:gap-3 mx-auto"
              >
                <Github className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">View All Projects</span>
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;