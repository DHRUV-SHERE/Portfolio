"use client"
import { motion } from "framer-motion"
import { Home, User, Award, Briefcase, Mail, Moon, Sun } from "lucide-react"

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const navItems = [
    { name: "Home", icon: Home, href: "#home" },
    { name: "About", icon: User, href: "#about" },
    { name: "Skills", icon: Award, href: "#skills" },
    { name: "Projects", icon: Briefcase, href: "#projects" },
    { name: "Contact", icon: Mail, href: "#contact" },
  ]

  return (
    <motion.nav
      className={`navbar navbar-expand-lg fixed-top ${darkMode ? "navbar-dark" : "navbar-light"}`}
      style={{
        backgroundColor: darkMode ? "rgba(0,0,0,0.9)" : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
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

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                className="nav-item mx-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <a
                  className={`nav-link d-flex align-items-center px-3 py-2 rounded-pill ${darkMode ? "text-light" : "text-dark"}`}
                  href={item.href}
                  style={{ transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent"
                  }}
                >
                  <item.icon size={16} className="me-2" />
                  {item.name}
                </a>
              </motion.li>
            ))}
            <li className="nav-item ms-3">
              <motion.button
                className={`btn btn-outline-${darkMode ? "light" : "dark"} rounded-circle p-2`}
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
    </motion.nav>
  )
}

export default Navbar
