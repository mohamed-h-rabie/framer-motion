import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const containerVarients = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visable: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};

const nextVarients = {
  hidden: {
    x: "-100vw",
  },
  visable: {
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 150,
      delay: 0.2,
    },
  },
};
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
const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      variants={containerVarients}
      initial="hidden"
      animate="visable"
      className="base container"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Step 1: Choose Your Base
      </motion.h3>
      <ul>
        {bases.map((base, index) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{
                fontSize: "25px",
                color: " rgb(234 179 8)",
              }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div variants={nextVarients} className="next">
          <Link to="/toppings">
            <motion.button variants={buttonVariants} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
