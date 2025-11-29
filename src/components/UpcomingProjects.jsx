import { Component } from "react";
import {
  Calendar,
  Users,
  Rocket,
  Code,
  Database,
  Lightbulb,
  Target,
  ChevronRight,
  Github,
  ExternalLink,
} from "lucide-react";

class UpcomingProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // You can add state variables here if needed
    };
  }

  upcomingProjects = [
    {
      id: 1,
      name: "PashuMitra",
      status: "completed",
      description:
        "An intelligent livestock management and veterinary support platform empowering farmers with digital tools for animal care, disease prevention, and supply chain management.",
      techStack: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Tailwind CSS",
        "JWT Auth",
      ],
      teamSize: 3,
      myRole: "Project Lead • Full Stack Developer",
      progress: 100,
      features: [
        "Livestock Health Monitoring",
        "Veterinarian Consultation System",
        "Medicine Ordering & Supply Chain",
        "Finance Tracking & Analytics",
        "Role-based Access Control",
      ],
      githubUrl: "https://github.com/ProjectSGH/PashuMitra",
      launchDate: "Q1 2024",
      icon: Target,
    },
    {
      id: 2,
      name: "Connect Vista",
      status: "in-progress",
      description:
        "A modern professional networking platform featuring real-time chat, intelligent content recommendations, and event-based networking.",
      techStack: [
        "React.js",
        "Node.js",
        "Socket.io",
        "MongoDB",
        "Cloudinary",
        "Tailwind CSS",
      ],
      teamSize: 1,
      myRole: "Solo Full Stack Developer",
      progress: 70,
      features: [
        "Real-Time Messaging",
        "Advanced User Profiles",
        "Smart Content Feed",
        "Event Management",
        "Media Upload System",
      ],
      githubUrl: "https://github.com/ProjectConnectVista2025/ConnectVista",
      launchDate: "Q2 2025",
      icon: Users,
    },
    {
      id: 3,
      name: "AryaPath",
      status: "development",
      description:
        "A smart tourism platform connecting tourists with verified guides, personalized travel routes, and cultural insights across India.",
      techStack: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Map APIs",
        "Cloudinary",
        "Tailwind CSS",
      ],
      teamSize: 1,
      myRole: "Solo Full Stack Developer",
      progress: 65,
      features: [
        "Guide Verification System",
        "Tour Booking & Scheduling",
        "Personalized Travel Routes",
        "Real-Time Chat",
        "Multi-role Modules",
      ],
      githubUrl: "https://github.com/Aryapath/Aryapath",
      launchDate: "Q2 2025",
      icon: Lightbulb,
    },
  ];

  getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "from-green-500 to-emerald-600";
      case "development":
        return "from-blue-500 to-cyan-600";
      case "planning":
        return "from-purple-500 to-pink-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  getStatusText = (status) => {
    switch (status) {
      case "completed":
        return "Ready for Launch";
      case "development":
        return "In Development";
      case "planning":
        return "Planning Phase";
      default:
        return "Coming Soon";
    }
  };

  getProgressColor = (progress) => {
    if (progress >= 80) return "bg-green-500";
    if (progress >= 60) return "bg-blue-500";
    if (progress >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  componentDidMount() {
    // Add any initialization logic here
  }

  render() {
    return (
      <section
        id="upcoming-projects"
        className="py-20 relative w-full overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Rocket className="text-primary" size={32} />
              <h2 className="text-4xl md:text-6xl font-bold font-['Orbitron'] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Upcoming Projects
              </h2>
              <Rocket className="text-secondary" size={32} />
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-['Inter'] leading-relaxed">
              A glimpse into my current and future development endeavors
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 container mx-auto">
            {this.upcomingProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  className="group relative glass-card border border-primary/20 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
                  style={{
                    animation: `slideUp 0.6s ease-out ${index * 0.2}s forwards`,
                    opacity: 0,
                  }}
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${this.getStatusColor(
                        project.status
                      )} backdrop-blur-sm border border-white/20`}
                    >
                      {this.getStatusText(project.status)}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Project Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-primary/10 glow-blue">
                        <Icon className="text-primary" size={28} />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-foreground font-['Orbitron'] group-hover:text-primary transition-colors duration-300 mb-2">
                          {project.name}
                        </h3>
                        <div className="flex items-center gap-3 text-base text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Users size={18} />
                            <span>
                              {project.teamSize}{" "}
                              {project.teamSize === 1 ? "Person" : "People"}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={18} />
                            <span>{project.launchDate}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed font-['Inter'] text-lg">
                      {project.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-lg text-foreground font-semibold">
                          Development Progress
                        </span>
                        <span className="text-lg font-bold text-primary">
                          {project.progress}%
                        </span>
                      </div>
                      <div className="h-3 bg-muted/30 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${this.getProgressColor(
                            project.progress
                          )}`}
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Code size={20} />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* My Role */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        My Role
                      </h4>
                      <p className="text-base text-muted-foreground font-medium">
                        {project.myRole}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Key Features
                      </h4>
                      <ul className="text-base text-muted-foreground space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-3"
                          >
                            <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* GitHub Link */}
                    <div className="mt-6 pt-4 border-t border-primary/20">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-xl font-semibold hover:bg-primary/20 transition-all duration-300 hover:scale-105 group/link"
                      >
                        <Github size={20} />
                        <span>View on GitHub</span>
                        <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="glass-card border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto hover:border-primary/40 transition-all duration-500">
              <h3 className="text-3xl font-bold text-foreground font-['Orbitron'] mb-4">
                Interested in Collaboration?
              </h3>
              <p className="text-muted-foreground mb-6 font-['Inter'] text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl font-semibold font-['Orbitron'] hover:scale-105 transition-transform duration-300 hover-glow text-lg"
              >
                Let's Build Together
              </button>
            </div>
          </div>
        </div>

        {/* Add CSS animations */}
        <style jsx>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>
    );
  }
}

export default UpcomingProjects;