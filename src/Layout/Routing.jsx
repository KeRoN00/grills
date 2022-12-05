import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "../Components/Gallery";
import About from "../Components/About";
import Contact from "../Components/Contact";
import ForSale from "../Components/ForSale";
import Layout from "./Layout";

const Routing = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="forsale" element={<ForSale />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routing;
