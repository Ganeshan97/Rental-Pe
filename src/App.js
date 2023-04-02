import "./css/styles.css";
import { Route, Routes } from "react-router-dom";
import Appliances from "./Pages/Appliances";
import Home from "./Pages/Home";
import Furnitures from "./Pages/Furnitures";
import OurTeam from "./Pages/OurTeam";
import Contact from "./Pages/Contact";
import Navbar from "./components/Navbar";
import ApplianceProduct from "./Pages/ApplianceProduct";
import FurnitureProduct from "./Pages/FurnitureProduct";
import Cart from "./Pages/Cart";
import { useState } from "react";
import { CartProvider } from "./components/CartContext";

export default function App() {
  const [cartDisplay, setCartDisplay] = useState(false);
  return (
    <>
      <CartProvider>
        <Navbar cartDisplay={cartDisplay} />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route
            path="/cart"
            element={<Cart />}
            setCartDisplay={setCartDisplay}
          />
          <Route
            path="/applianceproducts/:productId"
            element={<ApplianceProduct setCartDisplay={setCartDisplay} />}
          />
          <Route
            path="/furnitureproducts/:productId"
            element={<FurnitureProduct setCartDisplay={setCartDisplay} />}
          />
          <Route path="furnitures" element={<Furnitures />} />
          <Route path="appliances" element={<Appliances />} />
          <Route path="ourteam" element={<OurTeam />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </CartProvider>
    </>
  );
}
