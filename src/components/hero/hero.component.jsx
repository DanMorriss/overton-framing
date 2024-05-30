import { Button } from "@mui/material";
import frame from "../../assets/images/frame2.png";

const Hero = () => {
  return (
    <div className="h-screen">
      <img
        src={frame}
        alt="Frame"
        width="500"
        height="1080"
        className="absolute -z-10 -mx-72 slide-in-bck-tl"
      />
      <div className="mt-0 flex flex-col justify-center content-center text-center p-8 tracking-in-expand">
        <div className="rounded-lg drop-shadow-lg bg-[#ffffffb0] w-fit place-self-center p-8 mt-20 mb-5">
          <h1 className="text-5xl p-2">Overton Framing Studio</h1>
          <h2 className="">Bespoke framing with over 15 years experience</h2>
        </div>
        <Button variant="contained" className="w-max place-self-center">
          Book a free consultation
        </Button>
      </div>
    </div>
  );
};

export default Hero;
