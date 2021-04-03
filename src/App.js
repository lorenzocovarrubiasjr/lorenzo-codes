import "./styles.css";
import Navbar from "../src/Components/Navbar/Navbar";
import Banner from "../src/Components/Banner/Banner";
import Projects from "../src/Components/Projects/Projects";
import WorkHistory from "../src/Components/WorkHistory/WorkHistory";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner backgroundImg="https://i.imgur.com/WHUKZg8.png?1[/img]" />
      <Projects />
      <WorkHistory />
    </div>
  );
}
