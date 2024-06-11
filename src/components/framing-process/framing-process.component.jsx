import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import {
  FramingProcessContainer,
  FramingProcessDescription,
} from "./framing-process.styles";

const FramingProcess = () => {
  const framingProcessSteps = [
    {
      title: "FRAME STYLE",
      content:
        "All our frames are custom made from high quality materials. Pick something that will be the perfect fit for your artwork.",
    },
    {
      title: "WINDOW MOUNT",
      content:
        "The right mount can transform a frame into a piece of art. Choose from a wide range of options, including floating and fixed mounts.",
    },
    {
      title: "COLOUR",
      content:
        "Choosing to paint the wooden frames can be tricky, out expert framer will help you choose the right colours for the project to help it pop.",
    },
    {
      title: "GLASS",
      content:
        "Does your artwork need glass? We can help with that too, Amanda will talk your thorough the benefits and see if it's right for the piece.",
    },
    {
      title: "LEAVE IT TO US",
      content:
        "Once you've chosen your frame style, mount, and colours, we'll get your artwork framed. We'll handle the rest, and let you know when it's ready!",
    },
  ];

  return (
    <FramingProcessContainer>
      <FramingProcessDescription className="text-2xl p-10">
        <p>Work with our framing expert to bring your vision to life.</p>
        <p>
          Come to the studio with your artwork and go through all the options in
          detail to make sure you get the perfect fit for you and your artwork.
        </p>
      </FramingProcessDescription>
      <VerticalTimeline lineColor={"#ec478c"}>
        {framingProcessSteps.map(({ title, content }, index) => (
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
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </FramingProcessContainer>
  );
};

export default FramingProcess;
