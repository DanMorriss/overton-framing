import MeetAmanda from "../../components/about-amanda/meet-amanda";
import Contact from "../../components/contact/contact.component";
import Examples from "../../components/examples/examples.component";
import FramingProcess from "../../components/framing-process/framing-process.component";
import Hero from "../../components/hero/hero.component";
import Testimonials from "../../components/testimonials/testimonials.component";

import { Element } from "react-scroll";

export const Home = () => {
  return (
    <>
      <Hero />
      <MeetAmanda />
      <FramingProcess />
      <Testimonials />
      <Examples />
      <Element name="contact" className="element">
        <Contact />
      </Element>
    </>
  );
};

export default Home;
