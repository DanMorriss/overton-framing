import "./App.css";
import Hero from "./components/hero/hero.component";
import MeetAmanda from "./components/about-amanda/meet-amanda";
import FramingProcess from "./components/framing-process/framing-process.component";
import Testimonials from "./components/testimonials/testimonials.component";
import Examples from "./components/examples/examples.component";

function App() {
  return (
    <div className="App">
      <Hero />
      <MeetAmanda />
      <FramingProcess />
      <Testimonials />
      <Examples />
    </div>
  );
}

export default App;
