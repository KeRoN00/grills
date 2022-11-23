import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Layout>
      <Gallery />
      <About />
      <Contact />
    </Layout>
  );
}

export default App;
