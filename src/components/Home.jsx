import { Link } from "react-router-dom";
import { motion } from "motion/react";
const Home = () => {
  return (
    <div className="home container">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, fontSize: "30px"}}
        transition={{duration:.5}}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <button>Create Your Pizza</button>
      </Link>
    </div>
  );
};

export default Home;
