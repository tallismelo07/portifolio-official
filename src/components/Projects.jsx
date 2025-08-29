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

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
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
      >
        My Projects
      </motion.h2>



      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >

          <motion.a
        href="https://github.com/tallismelo07/projeto-screen-match"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
        variants={fadeInUp}
        whileHover={{ y: -10, transition: { duration: 0.2 } }}
       >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/imagesProjetos/screenmatch.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Screen Match</h3>
          <p>
            This project simulates a basic system for managing films and series, allowing you to register works, define their durations, record ratings, and calculate averages. It also includes a recommendation filter that analyzes content based on predefined criteria.
          </p>
          <div className="project-tech">
            <span>Java</span>
            <span>POO</span>
            <span>Collections</span>
          </div>
        </motion.div>
        </motion.a>

        <motion.a
        href="https://github.com/tallismelo07/projeto_convert"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
        variants={fadeInUp}
        whileHover={{ y: -10, transition: { duration: 0.2 } }}
       >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/imagesProjetos/convert.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Convert</h3>
          <p>
            A simple and functional converter, designed to transform values ​​quickly and intuitively. The interface was created with HTML and CSS to ensure a clean and pleasant experience, while JavaScript handles the conversion logic, making the process dynamic and instantaneous.
          </p>
          <div className="project-tech">
            <span>JavaScript.js</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </motion.div>
        </motion.a>

        <motion.a
        href="https://github.com/tallismelo07/projeto_lista_de_compras"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
        variants={fadeInUp}
        whileHover={{ y: -10, transition: { duration: 0.2 } }}
       >

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/imagesProjetos/listadecompra.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Shopping list - quicklist </h3>
          <p>
            Interactive application for creating and managing shopping lists directly in the browser. With HTML and CSS, the interface is clear and organized, and JavaScript adds features such as adding, removing, and marking items as completed, ensuring practicality and usability.
          </p>
          <div className="project-tech">
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </motion.div>
        </motion.a> 

        <motion.a
        href="https://github.com/tallismelo07/projeto-apple-relogio"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
        variants={fadeInUp}
        whileHover={{ y: -10, transition: { duration: 0.2 } }}
       >

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/imagesProjetos/appleloja.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Product Page – Apple Watch Sport Loop Band</h3>
          <p>
           A project designed to simulate an official Apple Store-style product page. The page displays images, colors, and technical details of an Apple Watch accessory, allowing users to interact with size options and view the product from different angles.
          </p>
          <div className="project-tech">
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </motion.div>
        </motion.a> 
      </motion.div>
    </motion.section>
  );
};
