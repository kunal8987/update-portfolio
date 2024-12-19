import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import About from "./Pages/About/About";
import AboutTwo from "./Pages/About/AboutTwo";
import Contact from "./Pages/Contact/Contact";
import Experience from "./Pages/Experience/Experience";
import Github from "./Pages/Github/Github";
import Intro from "./Pages/Intro/Intro";
import Techinical from "./Pages/Skills/Techinical/Techinical";

function App() {
  return (
    <div className=" container flex ">
      <dix className=" md:container border border-red-600 md:w-[20%] w-[25%]">
        <Navbar />
      </dix>
      <dix className=" border border-yellow-600 w-full">
        <Intro />
        <div className="divider divider-accent"></div>
        <About />
        <div className="divider divider-accent"></div>
        <AboutTwo />
        <div className="divider divider-accent"></div>
        <Techinical />
        <div className="divider divider-accent"></div>
        <Experience />
        <div className="divider divider-accent"></div>
        <Github />
        <div className="divider divider-accent"></div>
        <Contact />
        <div className="divider divider-accent"></div>
      </dix>
    </div>
  );
}

export default App;
