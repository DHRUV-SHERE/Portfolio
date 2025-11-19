import { Component } from "react";
import {
  Calendar,
  Users,
  Rocket,
  Code,
  Database,
  Lightbulb,
  Target,
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
        "PashuMitra is an intelligent livestock management and veterinary support platform designed to empower farmers with digital tools for animal care, disease prevention, breeding optimization, and supply chain management. As the project lead, I supervised architecture planning, development workflows, and deployment strategies throughout the project.",
      techStack: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Tailwind CSS",
        "JWT Auth",
        "Mongoose",
      ],
      teamSize: 3,
      myRole: "Project Lead • Full Stack Developer",
      progress: 100,
      features: [
        "Livestock Health Monitoring with Alerts",
        "Breeding Cycle & Genetic Lineage Tracking",
        "Digital Medical Records & Prescription Logs",
        "Farmer–Veterinarian Consultation System",
        "Medicine Ordering & Supply Chain Module",
        "Transport Request Management",
        "Awareness Portal for Farmers",
        "Finance Tracking & Analytics Dashboard",
        "Role-based Access for Farmers, Doctors & Stores",
      ],
      contributions: [
        "Designed system architecture and led a team of 3 developers",
        "Developed secure authentication and role-based authorization using JWT",
        "Built complete Health Monitoring and Breeding Management modules",
        "Implemented Medicine Ordering & Transportation workflow",
        "Created admin dashboards with analytics and reporting tools",
        "Integrated geolocation to help users find nearby medical stores",
        "Conducted code reviews, optimized backend APIs, and improved overall UX",
        "Managed Git workflow and ensured consistent code quality across modules",
      ],
      launchDate: "Q1 2024",
      challenges:
        "Ensuring synchronization between multiple modules such as medicine ordering, transport requests, and veterinary consultations while maintaining consistent data flow across all micro-features. Coordinating development with varied coding approaches within the team was also a challenge.",
      icon: Target,
    },
    {
      id: 2,
      name: "Connect Vista",
      status: "in-progress",
      description:
        "A modern professional networking and community-building platform designed to help users connect, collaborate, and grow. Connect Vista features a real-time chat system, intelligent content recommendations, and event-based networking, making it a powerful alternative to traditional platforms.",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
        "Tailwind CSS",
        "Socket.io",
        "JWT Auth",
      ],
      teamSize: 1,
      myRole: "Solo Full Stack Developer",
      progress: 70,
      features: [
        "Real-Time One-to-One & Group Messaging",
        "Advanced User Profiles with Skills & Portfolios",
        "Smart Content Feed Algorithm",
        "Event Creation & Joining System",
        "Search & Advanced Filtering for Professionals",
        "Media Uploads Using Cloudinary",
        "Notifications System (Real-time + In-app)",
        "Friend Request / Follow System",
      ],
      contributions: [
        "Designed and developed complete UI/UX using Tailwind CSS",
        "Built scalable real-time chat system using Socket.io",
        "Implemented secure authentication and role-based authorization",
        "Developed feed algorithm based on user interests & activity",
        "Created event management module with join requests",
        "Integrated Cloudinary for image & media uploads",
        "Optimized MongoDB queries for faster feed and messaging operations",
        "Built reusable components and clean project architecture",
      ],
      launchDate: "Q2 2025",
      challenges:
        "Optimizing real-time communication for large audiences, improving feed relevance with algorithm tuning, and maintaining scalable backend architecture.",
      icon: Users,
    },
    {
      id: 3,
      name: "AryaPath",
      status: "development",
      description:
        "A smart tourism platform designed to enhance travel experiences across India by connecting tourists with verified guides, personalized travel routes, cultural insights, and real-time assistance. AryaPath focuses on making Indian tourism more accessible, safe, and interactive.",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
        "Tailwind CSS",
        "Map APIs",
        "JWT Auth",
      ],
      teamSize: 1,
      myRole: "Solo Full Stack Developer",
      progress: 65,
      features: [
        "Smart Tourist Dashboard",
        "Guide Verification System",
        "Tour Booking & Scheduling",
        "Personalized Travel Routes",
        "Cultural & Historical Insights",
        "Real-Time Chat with Guides",
        "Multi-role Modules for Users & Guides",
        "State-wise Tourism Data",
      ],
      contributions: [
        "Designed complete 3-module architecture: Common, User, and Guide",
        "Built secure authentication with role-based access controls",
        "Implemented interactive UI with animations and responsive layout",
        "Created dynamic tourism content management system",
        "Developed REST APIs for booking, guide management, and tourism data",
        "Integrated geolocation-based search and smart filtering for guides",
      ],
      launchDate: "Q2 2025",
      challenges:
        "Building a seamless multi-role experience while managing location-based guide discovery, real-time communication, and large tourism datasets.",
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
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {this.upcomingProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
                  style={{
                    animation: `slideUp 0.6s ease-out ${index * 0.2}s forwards`,
                    opacity: 0,
                  }}
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${this.getStatusColor(
                        project.status
                      )} backdrop-blur-sm border border-white/20`}
                    >
                      {this.getStatusText(project.status)}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Project Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-primary/10 glow-blue">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground font-['Orbitron'] group-hover:text-primary transition-colors duration-300">
                          {project.name}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <Users size={14} />
                          <span>
                            {project.teamSize}{" "}
                            {project.teamSize === 1 ? "Person" : "People"}
                          </span>
                          <Calendar size={14} />
                          <span>{project.launchDate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed font-['Inter'] text-sm">
                      {project.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-foreground font-medium">
                          Development Progress
                        </span>
                        <span className="text-sm font-bold text-primary">
                          {project.progress}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${this.getProgressColor(
                            project.progress
                          )}`}
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Code size={16} />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-primary/10 text-primary rounded-lg text-xs font-medium border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* My Role */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        My Role
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {project.myRole}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        Key Features
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features
                          .slice(0, 3)
                          .map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center gap-2"
                            >
                              <div className="w-1 h-1 bg-primary rounded-full" />
                              {feature}
                            </li>
                          ))}
                        {project.features.length > 3 && (
                          <li className="text-primary text-xs font-medium">
                            +{project.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Current Challenge */}
                    {project.challenges && (
                      <div className="mt-4 pt-4 border-t border-primary/20">
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          Current Focus
                        </h4>
                        <p className="text-xs text-muted-foreground italic">
                          {project.challenges}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto hover:border-primary/40 transition-all duration-500">
              <h3 className="text-2xl font-bold text-foreground font-['Orbitron'] mb-4">
                Interested in Collaboration?
              </h3>
              <p className="text-muted-foreground mb-6 font-['Inter']">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl font-medium font-['Orbitron'] hover:scale-105 transition-transform duration-300 hover-glow"
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
