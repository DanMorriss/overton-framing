import { FramedTitleContainer, Line1, Line2 } from "./section-heading.styles";

const SectionHeading = ({ line1, line2 }) => {
  return (
    <FramedTitleContainer className="framing-expert-title shadow-lg w-fit text-center">
      <Line1 className="line1">{line1}</Line1>
      <Line2 className="line2">{line2}</Line2>
    </FramedTitleContainer>
  );
};

export default SectionHeading;
