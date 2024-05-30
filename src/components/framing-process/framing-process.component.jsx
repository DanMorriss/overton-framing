import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FramingProcessContainer } from "./framing-process.styles";

const FramingProcess = () => {
  const framingProcessSteps = [
    {
      title: "Choose a frame style",
      content:
        "All our frames are custom made from high quality materials. Pick something that will be the perfect fit for your artwork.",
    },
    {
      title: "Select a window mount",
      content:
        "The right mount can transform a frame into a piece of art. Choose from a wide range of options, including floating and fixed mounts.",
    },
    {
      title: "Pick colours",
      content:
        "Choosing to paint the wooden frames can be tricky, out expert framer will help you choose the right colours for the project to help it pop.",
    },
    {
      title: "Decide on glass",
      content:
        "Does your artwork need glass? We can help with that too, Amanda will talk your thorough the benefits and see if it's right for the piece.",
    },
    {
      title: "Get framed",
      content:
        "Once you've chosen your frame style, mount, and colours, we'll get your artwork framed. We'll handle the rest, and let you know when it's ready!",
    },
  ];

  return (
    <FramingProcessContainer>
      <p>
        Work with our framing expert to bring your vision to life. Come to the
        studio with your artwork and we'll go through all the options in detail
        to make sure you get the perfect fit for your project.
      </p>
      <VerticalTimeline lineColor={"#ec478c"}>
        {framingProcessSteps.map(({ title, content }, index) => (
          <VerticalTimelineElement
            className=""
            contentStyle={{
              background: "",
              color: "",
              boxShadow:
                "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            iconStyle={{
              background: "#01aaa9",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            icon={<i class="fa-solid fa-palette"></i>}
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
