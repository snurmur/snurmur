import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductCard from "./components/productCard/ProductCard";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductCard />} />{" "}
          </Routes>
        </div>
      </Router>
    </ProductProvider>
  );
}

export default App;
