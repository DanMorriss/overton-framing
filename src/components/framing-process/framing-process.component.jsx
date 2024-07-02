import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import {
  FramingProcessContainer,
  FramingProcessDescription,
} from "./framing-process.styles";

import frameStyleImage from "../../assets/images/process/pick-a-frame.png";
import pickAColourImage from "../../assets/images/process/pick-a-colour.png";
import dismantledFrameImage from "../../assets/images/process/dismantled-frame.png";
import woodStainImage from "../../assets/images/process/wood-stain.png";
import paintAndFramesImage from "../../assets/images/process/paint-and-frames.png";

const FramingProcess = () => {
  const framingProcessSteps = [
    {
      title: "FRAME STYLE",
      content:
        "All our frames are custom made from high quality materials. Pick something that will be the perfect fit for your artwork.",
      image: frameStyleImage,
    },
    {
      title: "WINDOW MOUNT",
      content:
        "The right mount can transform a frame into a piece of art. Choose from a wide range of options, including floating and fixed mounts.",
      image: dismantledFrameImage,
    },
    {
      title: "COLOUR",
      content:
        "Choosing to paint the wooden frames can be tricky, out expert framer will help you choose the right colours for the project to help it pop.",
      image: pickAColourImage,
    },
    {
      title: "GLASS",
      content:
        "Does your artwork need glass? We can help with that too, Amanda will talk your thorough the benefits and see if it's right for the piece.",
      image: woodStainImage,
    },
    {
      title: "LEAVE IT TO US",
      content:
        "Once you've chosen your frame style, mount, and colours, we'll get your artwork framed. We'll handle the rest, and let you know when it's ready!",
      image: paintAndFramesImage,
    },
  ];

  return (
    <FramingProcessContainer>
      {/* <FramingProcessDescription className="text-2xl p-10">
        <p>
          Work with our <span>framing expert</span> to bring your vision to
          life.
        </p>
        <p>
          Come to the studio with your artwork and go through all the options in
          detail to make sure you get the perfect fit for you and your artwork.
        </p>
      </FramingProcessDescription> */}
      <VerticalTimeline lineColor={"#ec478c"}>
        {framingProcessSteps.map(({ title, content, image }, index) => (
          <VerticalTimelineElement
            key={index}
            className=""
            contentStyle={{
              background: "#ec4899",
              color: "white",
              boxShadow: "inset 0 0 0 12px #ec4899, inset 0 0 0 14px white",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #ec4899" }}
            iconStyle={{
              background: "#01aaa9",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            icon={<i className="fa-solid fa-palette"></i>}
          >
            <h3 className="font-bold text-xl">{title}</h3>
            <p>{content}</p>
            <img src={image} />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </FramingProcessContainer>
  );
};

export default FramingProcess;
