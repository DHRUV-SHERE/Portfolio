"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ExternalLink, Github, Calendar, Star, GitFork } from "lucide-react";
import { Resource } from "../components/Resource";

const ProjectsSection = ({ darkMode }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const githubUsername = "DHRUV-SHERE";
  const selectedRepos = [
    "AgroSence",
    "knowBase",
    "Spotify",
    "Oracle",
    "Amazon",
    "RejoiuceClone",
    "Online_Learning_Management_System",
    "React_Text_Site",
    "ToDoList"
  ];
  const selectedReposLower = selectedRepos.map((name) => name.toLowerCase());

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos`,
          {
            headers: {
              Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
              Accept: "application/vnd.github.v3+json",
            },
          }
        );

        if (!response.ok)
          throw new Error(`GitHub API error! Status: ${response.status}`);

        const data = await response.json();
        const filtered = data.filter((repo) =>
          selectedReposLower.includes(repo.name.toLowerCase())
        );

        const formatted = filtered.map((repo) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description || "No description provided.",
          html_url: repo.html_url,
          homepage: repo.homepage || repo.html_url,
          language: repo.language || "N/A",
          updated_at: repo.updated_at,
          topics: [], // GitHub API doesn't return topics here unless you use a different endpoint
        }));

        setProjects(formatted);
      } catch (err) {
        console.error("Error fetching GitHub data: ", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: "#f1e05a",
      TypeScript: "#2b7489",
      Python: "#3572A5",
      Java: "#b07219",
      React: "#61dafb",
      HTML: "#e34c26",
      CSS: "#1572b6",
    };
    return colors[language] || "#8b949e";
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  if (loading) {
    return (
      <section
        id="projects"
        className={`py-5 ${
          darkMode ? "bg-dark text-light" : "bg-light text-dark"
        }`}
        style={{ minHeight: "100vh", width: "100%", paddingTop: "100px", overflowX: "hidden" }}
      >
        <div className="container text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className={`py-5 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
     style={{ minHeight: "100vh", width: "100%", paddingTop: "100px", overflowX: "hidden" }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="display-3 fw-bold mb-3">
            My{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projects
            </span>
          </h1>
          <p className={`lead ${darkMode ? "text-secondary" : "text-muted"}`}>
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="row g-3 g-md-4 mb-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="col-lg-4 col-md-6"
              variants={cardVariants}
            >
              <motion.div
                className={`card h-100 border-0 ${
                  darkMode ? "bg-secondary text-light" : "bg-white shadow-sm"
                }`}
                style={{ borderRadius: "16px", overflow: "hidden" }}
                whileHover={{
                  y: -10,
                  boxShadow: darkMode
                    ? "0 20px 40px rgba(102, 126, 234, 0.3)"
                    : "0 20px 40px rgba(0,0,0,0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Banner */}
                <div
                  className="position-relative"
                  style={{
                    height: "200px",
                    backgroundColor: "#f8f9fa",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: `url(${
                      Resource[project.name] || ""
                    })`,
                  }}
                >
                  {!Resource[project.name] && (
                    <div
                      className="d-flex align-items-center justify-content-center h-100"
                      style={{
                        background: `linear-gradient(135deg, ${getLanguageColor(
                          project.language
                        )}20, ${getLanguageColor(project.language)}40)`,
                      }}
                    >
                      <Github
                        size={48}
                        className={darkMode ? "text-light" : "text-dark"}
                        style={{ opacity: 0.6 }}
                      />
                    </div>
                  )}
                </div>

                <div className="card-body p-4">
                  <h5
                    className={`card-title fw-bold mb-3 ${
                      darkMode ? "text-light" : "text-dark"
                    }`}
                  >
                    {project.name
                      .split(/[-_]/)
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </h5>

                  <p
                    className={`card-text mb-3 ${
                      darkMode ? "text-light" : "text-muted"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Project Stats */}
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="d-flex align-items-center gap-1">
                      <Calendar
                        size={16}
                        className={darkMode ? "text-light" : "text-muted"}
                      />
                      <small>{formatDate(project.updated_at)}</small>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex gap-2">
                    {project.homepage && (
                      <motion.a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm d-flex align-items-center gap-2 flex-fill"
                        style={{
                          background:
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          border: "none",
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    )}
                    <motion.a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn btn-outline-${
                        darkMode ? "light" : "dark"
                      } btn-sm d-flex align-items-center gap-2 flex-fill`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github size={16} />
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className={`mb-4 ${darkMode ? "text-light" : "text-muted"}`}>
            Interested in seeing more of my work?
          </p>
          <motion.a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark btn-lg px-4 py-3 rounded-pill d-flex align-items-center gap-2 mx-auto"
            style={{ width: "fit-content" }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
