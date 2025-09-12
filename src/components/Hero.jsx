import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> 👋 Hello, I'm </span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Tallis Teixeira
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            {" "}
            Software & Backend Developer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
          I develop reliable backend solutions with Java, focusing on scalable architecture, efficient APIs, and clean code. I enjoy solving complex problems and making systems work seamlessly behind the scenes.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              See my projects
            </motion.a>
            <motion.a
              href="/cvTallis.pdf" 
              // download="TALLIS TEIXEIRA DE MELO CURRICULO.pdf"
              target="_blank"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Curriculum  <HiDownload className="download-icon" />
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/tallismelo07" target="_blank">
              <i className="fab fa-github"> </i>
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/tallisteixeira/" target="_blank">
              <i className="fab fa-linkedin"> </i>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="typescript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
              }}
              // frameworks: ["React", "Angular", "TailwindCSS"],
              style={vscDarkPlus}
            >
              {`public class DeveloperProfile {
    private final String codename = "Tallis Teixeira Dev";
    private final String origin = "🌍 Em algum lugar entre uma cafeteria e um terminal";
    private final String role = "Software & Backend Developer";

    private final String[] languages = {"Java", "JavaScript", "SQL", "MySQL"};
    private final String[] frameworks = {"ReactJs"};
    private final String[] traits = {
        "entusiasta de código limpo",
        "sussurrador de APIs",
        "advogado do modo escuro"
    };

    private final String missionStatement = "Transformando ideias em sistemas e bugs em funcionalidades";
    private final String availability = "Disponível para contratação";
}
`}
            </SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon"> 💻 </span>
              <span className="card-text">
                {" "}
                Currently working on something awesome!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
