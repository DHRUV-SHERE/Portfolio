"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const SkillsSection = ({ darkMode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const skillsData = {
    "Frontend Development": [
      { name: "React.js", percentage: 90 },
      { name: "Tailwind CSS", percentage: 95 },
      { name: "JavaScript", percentage: 90 },
      { name: "HTML/CSS", percentage: 95 },
    ],
    "Backend Development": [
      { name: "Node.js", percentage: 85 },
      { name: "Express.js", percentage: 80 },
      { name: "Python", percentage: 70 },
      { name: "Java", percentage: 68 },
      { name: "PHP", percentage: 72 },
      { name: "MongoDB", percentage: 80 },
    ],
    "Tools & Technologies": [
      { name: "Git & GitHub", percentage: 90 },
      { name: "VS Code", percentage: 95 },
      { name: "ChatGPT", percentage: 90 },
      { name: "Other AI Tools", percentage: 95 },
    ],
  }

  const learningSkills = ["Artificial Intelligence", "Machine Learning", "AWS", "Next.js", "Three.js"]

  const SkillBar = ({ skill, index, categoryIndex }) => {
    return (
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ delay: categoryIndex * 0.2 + index * 0.1, duration: 0.6 }}
      >
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className={`fw-medium ${darkMode ? "text-light" : "text-dark"}`}>{skill.name}</span>
          <span className={`${darkMode ? "text-light" : "text-muted"}`}>{skill.percentage}%</span>
        </div>

        <div
          className="position-relative rounded-pill overflow-hidden"
          style={{
            height: "10px",
            backgroundColor: darkMode ? "#2f2f3a" : "#e0e0e0",
          }}
        >
          <motion.div
            className="h-100 rounded-pill"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
            initial={{ width: "0%" }}
            animate={isInView ? { width: `${skill.percentage}%` } : { width: "0%" }}
            transition={{
              delay: categoryIndex * 0.2 + index * 0.1 + 0.3,
              duration: 1.2,
              ease: "easeOut",
            }}
          />
        </div>
      </motion.div>
    )
  }

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-5 ${darkMode ? "bg-dark text-light" : "bg-white text-dark"}`}
      style={{ minHeight: "100vh", paddingTop: "100px" }}
    >
      <hr />
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
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
              Skills
            </span>
          </h1>
          <p className={`lead ${darkMode ? "text-light text-opacity-75" : "text-muted"}`}>
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="row g-5 mb-5">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <div key={category} className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              >
                <h3
                  className="h5 fw-bold mb-4"
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {category}
                </h3>

                <div className="skills-category">
                  {skills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} categoryIndex={categoryIndex} />
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* What I'm Learning */}
        <motion.div
          className="text-center mt-5 pt-5"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h2 className={`display-5 fw-bold mb-4 ${darkMode ? "text-light" : "text-dark"}`}>What I'm Learning</h2>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            {learningSkills.map((skill, index) => (
              <motion.span
                key={skill}
                className={`px-4 py-2 rounded-pill fw-medium border ${
                  darkMode
                    ? "bg-gradient text-light border-secondary"
                    : "bg-light text-dark border-light shadow-sm"
                }`}
                style={{
                  fontSize: "0.95rem",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{
                  delay: 1.2 + index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: darkMode ? "rgba(102, 126, 234, 0.2)" : "rgba(102, 126, 234, 0.1)",
                  transition: { duration: 0.2 },
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
