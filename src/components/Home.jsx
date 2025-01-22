import { Link } from "react-router-dom";
import { motion, transform } from "motion/react";
import { delay, easeIn } from "motion";
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
const containerVarients = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {ease: "easeInOut"},
  },
};
const Home = () => {
  return (
    <motion.div
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home container"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, fontSize: "30px" }}
        transition={{ duration: 0.5 }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
