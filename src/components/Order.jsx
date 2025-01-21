import { motion } from "motion/react";
import { tr } from "motion/react-client";

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
      when: "beforeChildren",
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.5,
    },
  },
};
const childVarients = {
  hidden: {
    opacity: 0,
  },
  visable: {
    opacity: 1,
  },

};
const Order = ({ pizza }) => {
  const { base, toppings } = pizza;
  return (
    <motion.div
      variants={containerVarients}
      initial="hidden"
      animate="visable"
      className="container order"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVarients}>
        You ordered a {base} pizza with:
      </motion.p>
      <motion.div variants={childVarients}>
        {toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
