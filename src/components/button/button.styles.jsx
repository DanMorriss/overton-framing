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

  &:hover {
    background-color: white;
    color: #01aaa9;
    border: 1px solid #01aaa9;
    transition: all 0.2s ease-in-out;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: #01aaa9;
  border: 1px solid #01aaa9;

  &:hover {
    background-color: #01aaa9;
    color: white;
    border: none;
  }
`;
