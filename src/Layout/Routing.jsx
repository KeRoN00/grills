import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "../Components/Gallery";
import About from "../Components/About";
import Contact from "../Components/Contact";
import ForSale from "../Components/ForSale";
import Layout from "./Layout";
import ForSaleItem from "../Components/ForSaleItem";

const Routing = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="forsale" element={<ForSale />} />
          <Route path="forsale/:id" element={<ForSaleItem />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routing;
