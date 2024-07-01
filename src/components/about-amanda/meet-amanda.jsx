import { useRef } from "react";

import { useInView } from "framer-motion";

import amanda from "../../assets/images/amanda2.jpg";
import {
  MeetAmandaContainer,
  FramedImage,
  FramingExpertTitle,
} from "./meet-amanda.styles";

import useWindowSize from "../../hooks/useWindowSize";
import SectionHeading from "../section-heading/section-heading.component";

const MeetAmanda = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <MeetAmandaContainer>
      <div
        className="flex justify-center pt-10"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(-60px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
        }}
      >
        <SectionHeading line1="Meet Amanda" line2="THE FRAMING EXPERT" />
      </div>
      <div
        className={`flex ${
          isMobile ? "flex-col" : "flex-row-reverse"
        } m-10 mb-0`}
      >
        <div className={isMobile ? "flex justify-center" : "w-1/2"}>
          <FramedImage
            src={amanda}
            alt="Amanda framing artwork"
            className="shadow-xl"
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          />
        </div>
        <div
          className={`${
            isMobile ? "w-full p-3 pt-10" : "w-1/2 pr-10"
          } text-justify`}
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <p className="mb-5 text-lg">
            Amanda is a distinguished frame maker based in Marlborough, bringing
            over 15 years of expertise to her craft. Her dedication to providing
            personalized service ensures that every customer receives meticulous
            attention, whether they need a single photo mounted or an entire
            exhibition framed.
          </p>
          <p className="mb-5 text-lg">
            A true creative at heart, Amanda possesses a sharp eye for selecting
            the perfect frames, mounts, and colors to complement each piece of
            artwork and its intended display setting. She thrives on challenges,
            which has led her to frame a diverse array of unique and delicate
            items, including memory boxes and large, fragile ceramic sculptures.
          </p>
          <p className="text-lg">
            Amanda&#39;s passion and pride in her work are evident in every
            project she undertakes, making her a trusted choice for anyone
            seeking exceptional framing services.
          </p>
        </div>
      </div>
    </MeetAmandaContainer>
  );
};

export default MeetAmanda;
