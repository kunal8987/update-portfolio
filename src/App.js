import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import About from "./Pages/About/About";
import AboutTwo from "./Pages/About/AboutTwo";
import Intro from "./Pages/Intro/Intro";

function App() {
  return (
    <div className="container flex my-5 ">
      <dix className=" md:container border border-red-600 md:w-[20%] w-[25%]">
        <Navbar />
      </dix>
      <dix className=" container border border-yellow-600 w-full">
        <Intro />
        <div className="divider divider-accent"></div>
        <About />
        <div className="divider divider-accent"></div>
        <AboutTwo />
      </dix>
    </div>
  );
}

export default App;
