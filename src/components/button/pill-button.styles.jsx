import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #01aaa9;
  color: white;
  text-transform: uppercase;
  font-family: "Rubik", sans-serif;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 25px;
  transition: all 0.4s ease-in-out;
  box-shadow: inset 0 0 0 3px #01aaa9, inset 0 0 0 5px white;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: -100%;
    background-color: white;
    border-radius: 25px;
    transition: all 0.5s;
  }

  &:hover {
    background-color: white;
    color: #01aaa9;
    border: 1px solid #01aaa9;
    transition: all 0.2s ease-in-out;
  }

  &:hover:before {
    left: 0;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: #01aaa9;
  border: 1px solid #01aaa9;

  &:before {
    background-color: #01aaa9;
  }

  &:hover {
    color: white;
    border: none;
  }
`;

export const ButtonText = styled.span`
  z-index: 1;
`;
