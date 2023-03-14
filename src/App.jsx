import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import ForSale from "./Components/ForSale";
import ForSaleItem from "./Components/ForSaleItem";
import Main from "./Components/Main";
import Navbar from './Components/Navbar'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="forsale" element={<ForSale />} />
          <Route path="forsale/:id" element={<ForSaleItem />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
