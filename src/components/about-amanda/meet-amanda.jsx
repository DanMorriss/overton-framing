import amanda from "../../assets/images/amanda2.jpg";
import { FramedImage } from "./meet-amanda.styles";

import useWindowSize from "../../hooks/useWindowSize";

const MeetAmanda = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <>
      <h2 className="text-center text-3xl p-10">
        Meet Amanda, the framing expert
      </h2>
      <div
        className={`flex ${
          isMobile ? "flex-col" : "flex-row-reverse"
        } m-10 mb-40`}
      >
        <div className={isMobile ? "flex justify-center" : "w-1/2"}>
          <FramedImage
            src={amanda}
            alt="Amanda framing artwork"
            className="shadow-xl"
          />
        </div>
        <div
          className={`${isMobile ? "w-full p-10" : "w-1/2 pr-10"} text-justify`}
        >
          <p className="mb-5">
            Amanda is a distinguished frame maker based in Marlborough, bringing
            over 15 years of expertise to her craft. Her dedication to providing
            personalized service ensures that every customer receives meticulous
            attention, whether they need a single photo mounted or an entire
            exhibition framed.
          </p>
          <p className="mb-5">
            A true creative at heart, Amanda possesses a sharp eye for selecting
            the perfect frames, mounts, and colors to complement each piece of
            artwork and its intended display setting. She thrives on challenges,
            which has led her to frame a diverse array of unique and delicate
            items, including memory boxes and large, fragile ceramic sculptures.
          </p>
          <p>
            Amanda&#39;s passion and pride in her work are evident in every
            project she undertakes, making her a trusted choice for anyone
            seeking exceptional framing services.
          </p>
        </div>
      </div>
    </>
  );
};

export default MeetAmanda;
