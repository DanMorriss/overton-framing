import "./App.css";
import Hero from "./components/hero/hero.component";
import MeetAmanda from "./components/about-amanda/meet-amanda";
import FramingProcess from "./components/framing-process/framing-process.component";
import Testimonials from "./components/testimonials/testimonials.component";
import Examples from "./components/examples/examples.component";
import Contact from "./components/contact/contact.component";
import NavBar from "./components/navbar/navbar.component";

import { Element } from "react-scroll";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Hero />
      <MeetAmanda />
      <FramingProcess />
      <Testimonials />
      <Examples />
      <Element name="contact" className="element">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
