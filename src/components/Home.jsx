import { Link } from "react-router-dom";
import { motion } from "motion/react";
const Home = () => {
  return (
    <div className="home container">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, fontSize: "30px" }}
        transition={{ duration: 0.5 }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
        whileHover={{
          scale:1.3,
          textShadow:"0 0 8px rgb(266 , 266 , 266)",
          boxShadow:"0 0 8px rgb(266 , 266 , 266)"
        }}
        >Create Your Pizza</motion.button>
      </Link>
    </div>
  );
};

export default Home;
