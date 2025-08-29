import { motion } from "framer-motion";

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

export const About = () => {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="section-title"
      >
        About Me
      </motion.h2>

      <motion.div
        className="about-content"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Imagem */}
        <motion.img
          src="/perfil.png"
          alt="Foto de perfil"
          className="about-image"
          variants={fadeInUp}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        />

        {/* Texto */}
        <motion.div
          className="about-text"
          variants={fadeInUp}
        >
          <h1>Passionate about coding</h1>
          <p>
           <li>Graduating in Systems Analysis and Development.</li>
           <li>3 months of experience</li>
           <li>Nivel de ingles: Intermediario</li>
          </p>

        <motion.div className="social-links" variants={staggerContainer}>
             <motion.a href="https://github.com/tallismelo07" target="_blank">
             <i className="fab fa-github"> </i>
            </motion.a>
             <motion.a href="https://www.linkedin.com/in/tallisteixeira/" target="_blank">
              <i className="fab fa-linkedin"> </i>
              </motion.a>
         </motion.div>
               


        </motion.div>
      </motion.div>
    </motion.section>
  );
};
