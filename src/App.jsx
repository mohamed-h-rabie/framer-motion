import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import { AnimatePresence } from "motion/react";

function App() {
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <AnimatePresence> 
      <Routes location={location} key={location.pathname}>
        <Route path="/base" element={<Base addBase={addBase} pizza={pizza} />} />
        <Route path="/toppings" element={<Toppings addTopping={addTopping} pizza={pizza} />} />
        <Route path="/order" element={<Order pizza={pizza} />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </AnimatePresence>

    </>
  );
}

export default App;
