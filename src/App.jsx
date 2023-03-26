import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Gallery, About, ForSale, Main, Navbar, NotFound } from "./Components";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="info" element={<About />} />
        <Route path="galeria" element={<Gallery />} />
        <Route path="na-sprzedarz" element={<ForSale />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
