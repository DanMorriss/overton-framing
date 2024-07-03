import Button from "../button/button.component";
import "./examples.styles.css";

import amanda from "../../assets/images/amanda2.jpg";

import useWindowSize from "../../hooks/useWindowSize";

import example1 from "../../assets/images/examples/example1.png";
import example2 from "../../assets/images/examples/example2.png";
import example3 from "../../assets/images/examples/example3.png";
import { useState } from "react";

const Examples = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const [paintingsSelected, setPaintingsSelected] = useState(true);
  const [repairsSelected, setRepairsSelected] = useState(false);
  const [objectsSelected, setObjectsSelected] = useState(false);
  const [memorySelected, setMemorySelected] = useState(false);

  const handlePaintingsClick = () => {
    setRepairsSelected(false);
    setObjectsSelected(false);
    setMemorySelected(false);
    setPaintingsSelected(true);
  };

  const handleRepairsClick = () => {
    setPaintingsSelected(false);
    setObjectsSelected(false);
    setMemorySelected(false);
    setRepairsSelected(true);
  };

  const handleObjectsClick = () => {
    setPaintingsSelected(false);
    setRepairsSelected(false);
    setMemorySelected(false);
    setObjectsSelected(true);
  };

  const handleMemoryClick = () => {
    setPaintingsSelected(false);
    setRepairsSelected(false);
    setObjectsSelected(false);
    setMemorySelected(true);
  };

  return (
    <div className={isMobile ? "flex flex-col" : "examples-container"}>
      <div
        className={isMobile ? "buttons-container-mobile" : "buttons-container"}
      >
        <Button onClick={handlePaintingsClick}>Paintings</Button>
        <Button onClick={handleRepairsClick}>Repairs</Button>
        <Button onClick={handleObjectsClick}>3D Objects</Button>
        <Button onClick={handleMemoryClick}>Memory Boxes</Button>
      </div>
      <div className={isMobile ? "m-4" : "example-pictures-container"}>
        <img
          src={
            paintingsSelected
              ? example1
              : repairsSelected
              ? example2
              : objectsSelected
              ? example3
              : memorySelected
              ? amanda
              : example1
          }
          alt="example framed art"
          className="framed-art"
        ></img>
      </div>
    </div>
  );
};

export default Examples;
