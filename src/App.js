import "./App.css";
import Hero from "./components/hero/hero.component";
import MeetAmanda from "./components/about-amanda/meet-amanda";
import FramingProcess from "./components/framing-process/framing-process.component";

function App() {
  return (
    <div className="App">
      <Hero />
      <MeetAmanda />
      <FramingProcess />
    </div>
  );
}

export default App;
