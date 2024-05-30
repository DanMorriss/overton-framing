import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const FramingProcess = () => {
  const framingProcessSteps = [
    {
      title: "Choose a frame style",
      content: "Pick something that will be the perfect fit for your artwork.",
    },
    {
      title: "Select a window mount",
      content: "Support the artwork with the right window mount",
    },
    {
      title: "Pick colours",
      content: "Support the artwork with the right colours",
    },
    {
      title: "Decide on glass and fixtures",
      content: "Does your artwork need glass?",
    },
  ];

  return (
    <>
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
    </>
  );
};

export default FramingProcess;
