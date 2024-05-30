// import { Button } from "@mui/material";
import Button from "../button/button.component";
import frame from "../../assets/images/frame1.png";
import frame2 from "../../assets/images/frame2.png";

import {
  HeroContainer,
  RightFrame,
  OvertonFramingTitleSign,
} from "./hero.styles";

const Hero = () => {
  return (
    <HeroContainer className="h-screen">
      <RightFrame
        src={frame2}
        alt="Frame"
        width="500"
        height="1080"
        className="absolute slide-in-bck-tl shadow-xl"
      />
      <img
        src={frame}
        alt="Frame"
        width="500"
        height="1080"
        className="absolute slide-in-bck-tl shadow-xl"
      />

      <div className="mt-0 flex flex-col justify-center content-center text-center p-8 tracking-in-expand">
        <OvertonFramingTitleSign className="rounded shadow-lg bg-pink-500 w-fit place-self-center p-8 mt-20 mb-5">
          <h1 className="text-5xl p-2 text-slate-100">
            Overton Framing Studio
          </h1>
          <h2 className="text-slate-100 uppercase">
            Bespoke framing with over 15 years experience
          </h2>
        </OvertonFramingTitleSign>
        <Button variant="contained" className="place-self-center mt-10">
          Book a free consultation
        </Button>
      </div>
    </HeroContainer>
  );
};

export default Hero;
