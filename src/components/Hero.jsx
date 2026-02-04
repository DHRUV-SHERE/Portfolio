import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import resumePDF from "../assets/RESUME_DHRUV-SHERE.pdf"; // Adjust path based on your structure

const TerminalHero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // ADD THIS IMPORT AT THE TOP OF YOUR FILE (if using direct import)

  const codeLines = [
    { text: "const developer = {", delay: 0 },
    { text: '  name: "Dhruv Shere",', delay: 100 },
    { text: '  role: "Full-Stack MERN Developer",', delay: 200 },
    { text: '  location: "Gujarat, India",', delay: 300 },
    {
      text: '  skills: ["React", "Node.js", "Express JS","MongoDB"],',
      delay: 400,
    },
    { text: '  passion: "Building innovative web solutions",', delay: 500 },
    { text: "  available: true,", delay: 600 },
    { text: "};", delay: 700 },
    { text: "", delay: 800 },
    { text: "developer.contact(); // Let's connect!", delay: 900 },
  ];

  useEffect(() => {
    let fullText = "";
    codeLines.forEach((line, index) => {
      setTimeout(() => {
        fullText += (index > 0 ? "\n" : "") + line.text;
        setDisplayedText(fullText);
        setCurrentLine(index);
        if (index === codeLines.length - 1) {
          setTimeout(() => setIsTyping(false), 500);
        }
      }, line.delay + index * 80);
    });
  }, []);

  // ADD THIS FUNCTION (similar to your old portfolio)
  const downloadResume = () => {
    // Option 1: If PDF is in public folder
    // const resumeUrl = "/Dhruv_Shere_Resume.pdf";
    
    // Option 2: If you want to import it (uncomment and adjust path)
    const resumeUrl = resumePDF;
    
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "DHRUV-SHERE_RESUME.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const syntaxHighlight = (text) => {
    return text.split("\n").map((line, i) => {
      const parts = [];
      let remaining = line;

      // Keywords
      remaining = remaining.replace(
        /(const|let|var|function|return|true|false)/g,
        "##KEYWORD##$1##/KEYWORD##"
      );
      // Strings
      remaining = remaining.replace(/(".*?")/g, "##STRING##$1##/STRING##");
      // Comments
      remaining = remaining.replace(/(\/\/.*$)/g, "##COMMENT##$1##/COMMENT##");

      const tokens = remaining.split(/(##\/?(?:KEYWORD|STRING|COMMENT)##)/);
      let currentClass = "";

      tokens.forEach((token, j) => {
        if (token === "##KEYWORD##") currentClass = "keyword";
        else if (token === "##STRING##") currentClass = "string";
        else if (token === "##COMMENT##") currentClass = "comment";
        else if (token.startsWith("##/")) currentClass = "";
        else if (token)
          parts.push(
            <span key={j} className={currentClass}>
              {token}
            </span>
          );
      });

      return (
        <div key={i} className="code-line flex">
          <span className="text-muted-foreground w-8 select-none text-right mr-4 opacity-50">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span>{parts}</span>
        </div>
      );
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-secondary font-mono text-sm"
              >
                {">"} Hello World! I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold"
              >
                <span className="gradient-text">Dhruv Shere</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground"
              >
                Full-Stack MERN Developer
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-muted-foreground leading-relaxed max-w-lg"
            >
              Experienced in building real-world web applications using React,
              Node.js, MongoDB, and REST APIs. Strong problem-solving skills
              with experience leading development teams. Let's turn your ideas
              into reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              {/* Hero Button - Matches original variant="hero" */}
              <button
                className="px-6 py-4 bg-card/50 border border-primary/30 text-primary font-mono rounded-lg hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
              >
                <Mail className="w-5 h-5" />
                Hire Me
              </button>

              {/* Terminal Button - Matches original variant="terminal" */}
              <button
                className="px-6 py-4 bg-card/50 border border-primary/30 text-primary font-mono rounded-lg  hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#projects");
                }}
              >
                <ExternalLink className="w-5 h-5" />
                View Projects
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="https://github.com/DHRUV-SHERE"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass hover:glass-hover transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/dhruv-shere/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass hover:glass-hover transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {/* UPDATED RESUME DOWNLOAD BUTTON */}
              <button
                onClick={downloadResume}
                className="p-3 rounded-lg glass hover:glass-hover transition-all duration-300"
                aria-label="Download Resume"
              >
                <Download className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="gradient-border rounded-xl overflow-hidden shadow-2xl shadow-primary/20 max-w-full">
              {/* Terminal Header */}
              <div className="bg-muted/50 px-4 py-3 flex items-center gap-2 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-4">
                  developer.js — ~/portfolio
                </span>
              </div>

              {/* Terminal Content */}
              <div className="bg-card/80 backdrop-blur-sm p-6 font-mono text-sm min-h-[320px]">
                {syntaxHighlight(displayedText)}
                {isTyping && <span className="terminal-cursor" />}
              </div>
            </div>

            {/* Floating badges */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: "spring" }}
              className="absolute -top-4 -right-4 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/50 text-secondary text-xs font-mono"
            >
              Open to Work
            </motion.div> */}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-secondary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TerminalHero;