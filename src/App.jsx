import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
import Hero from "./sections/Hero";
import NoSugar from "./sections/NoSugar";
import Flavors from "./sections/Flavors";
import Christmas from "./sections/Christmas";
import IconsBar from "./components/IconsBar";
import { InstagramLogo, LinkedinLogo } from "phosphor-react";



function App() {
  return (
    <div style={{ height: "200vh" }}>
      <NavBar />
      <Hero />
      <IconsBar />
      <NoSugar />
      <Flavors />
      <Christmas />
      <Footer />
    </div>
  );
}

export default App;
