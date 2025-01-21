import { Link } from "react-router-dom";
import { motion } from "motion/react";
const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0 0 8px rgb(266 , 266 , 266)",
    boxShadow: "0 0 8px rgb(266 , 266 , 266)",
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};
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
          variants={buttonVariants}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  );
};

export default Home;
