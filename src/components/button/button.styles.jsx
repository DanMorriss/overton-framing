import styled from "styled-components";

export const Button1 = styled.button`
  border: none;
  padding: 12px 40px;
  background-color: #01aaa9;
  color: white;
  font-size: 22px;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  box-shadow: inset 0 0 0 5px #01aaa9, inset 0 0 0 6px white;
  border-radius: 2px;
  transition: all 0.3s;

  &:hover {
    box-shadow: inset 0 0 0 6px #01aaa9, inset 0 0 0 7px white;
  }

  &:active {
    background-color: #01aaaaa4;
  }

  &:before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    top: -5px;
    left: -5px;
    border-top: 2px solid #01aaa9;
    border-left: 2px solid #01aaa9;
    transition: all 0.25s;
  }

  &:hover:before,
  &:hover:after {
    height: 100%;
    width: 100%;
  }

  &:after {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    bottom: -5px;
    right: -5px;
    border-bottom: 2px solid #01aaa9;
    border-right: 2px solid #01aaa9;
    transition: all 0.25s;
  }
`;
