"use client";
import { motion } from "framer-motion";
import { Home, User, Award, Briefcase, Mail, Moon, Sun } from "lucide-react";
import { useEffect } from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const navItems = [
    { name: "Home", icon: Home, href: "#home" },
    { name: "About", icon: User, href: "#about" },
    { name: "Skills", icon: Award, href: "#skills" },
    { name: "Projects", icon: Briefcase, href: "#projects" },
    { name: "Contact", icon: Mail, href: "#contact" },
  ];

  // Close navbar when clicking on a nav item
  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top shadow-sm ${
        darkMode ? "navbar-dark" : "navbar-light"
      }`}
      style={{
        width: "100%",
        backgroundColor: darkMode
          ? "rgba(0,0,0,0.9)"
          : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${
          darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
        }`,
        zIndex: 1000,
      }}
    >
      <div className="container">
        {/* Brand */}
        <motion.a
          className="navbar-brand fw-bold fs-4"
          href="#"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          whileHover={{ scale: 1.05 }}
        >
          Dhruv
        </motion.a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex flex-column flex-lg-row align-items-center gap-2 gap-lg-0">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                className="nav-item text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <a
                  className={`nav-link d-flex align-items-center justify-content-center px-3 py-2 rounded-pill ${
                    darkMode ? "text-light" : "text-dark"
                  }`}
                  href={item.href}
                  onClick={closeNavbar}
                  style={{ transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = darkMode
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  <item.icon size={16} className="me-2" />
                  {item.name}
                </a>
              </motion.li>
            ))}

            {/* Theme Toggle */}
            <li className="nav-item text-center mt-2 mt-lg-0 ms-lg-3">
              <motion.button
                className={`btn btn-outline-${
                  darkMode ? "light" : "dark"
                } rounded-circle p-2`}
                onClick={toggleDarkMode}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;