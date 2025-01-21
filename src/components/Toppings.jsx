import React from "react";
import { NavLink } from "react-router-dom";
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
      animate="visable"
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
        <motion.button
              whileHover={{
                scale: 1.3,
                textShadow: "0 0 8px rgb(266 , 266 , 266)",
                boxShadow: "0 0 8px rgb(266 , 266 , 266)",
              }}
        >Order</motion.button>
      </NavLink>
    </motion.div>
  );
};

export default Toppings;
