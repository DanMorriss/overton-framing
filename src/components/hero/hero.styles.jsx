import styled from "styled-components";

import wood from "../../assets/images/wood/5.jpg";

export const HeroContainer = styled.div`
  background-image: url(${wood});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`;

export const RightFrame = styled.img`
  right: -250px;
  top: -250px;
  position: absolute;
  overflow: hidden;
`;

export const OvertonFramingTitleSign = styled.div`
  box-shadow: inset 0 0 0 20px #ec4899, inset 0 0 0 23px white;
`;
