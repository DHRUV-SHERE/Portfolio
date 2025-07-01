"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from "./components/Navbar"
import AboutSection from "./pages/About"
import HeroSection from "./pages/Home"
import SkillsSection from "./pages/Skills"
import Project from "./pages/Project"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ContactSection from "./pages/Contact"

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    // Apply dark mode to body
    document.body.className = darkMode ? "bg-dark text-light" : "bg-light text-dark"
  }, [darkMode])

  return (
    <AnimatePresence>
      <div className={`app ${darkMode ? "dark-theme" : "light-theme"}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <HeroSection darkMode={darkMode} />
        <AboutSection darkMode={darkMode} />
        
        <SkillsSection darkMode={darkMode} />
        <Project darkMode={darkMode} />
        <ContactSection darkMode={darkMode} />
      </div>
    </AnimatePresence>
  )
}

export default App
