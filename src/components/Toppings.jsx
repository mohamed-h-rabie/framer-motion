import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";

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
    transition: { ease: "easeInOut" },
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

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="toppings container"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{
                fontSize: "25px",
                color: " rgb(234 179 8)",
              }}
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </li>
          );
        })}
      </ul>

      <NavLink to="/order">
        <motion.button variants={buttonVariants} whileHover="hover">
          Order
        </motion.button>
      </NavLink>
    </motion.div>
  );
};

export default Toppings;
