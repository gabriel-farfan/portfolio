import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  return (
    <div className="bg-cover-pic w-full">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
