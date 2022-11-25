import NavBar from "./components/layouts/NavBar";
import Hero from "./sections/Hero";
import NoSugar from "./sections/NoSugar";
import Flavors from "./sections/Flavors";
import Christmas from "./sections/Christmas";

function App() {
  return (
    <div style={{ height: "200vh" }}>
      <NavBar />
      <Hero />
      <NoSugar />
      <Flavors />
      <Christmas />

      <div
        style={{
          height: "10rem",
          backgroundColor: "#000",
        }}
      ></div>
    </div>
  );
}

export default App;
