import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "../Components/Gallery";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Layout from "./Layout";

const Routing = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routing;
