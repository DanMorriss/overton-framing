import Button from "../button/button.component";
import "./examples.styles.css";

import amanda from "../../assets/images/amanda2.jpg";

import useWindowSize from "../../hooks/useWindowSize";

const Examples = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <div className={isMobile ? "flex flex-col" : "examples-container"}>
      <div
        className={isMobile ? "buttons-container-mobile" : "buttons-container"}
      >
        <Button>Paintings</Button>
        <Button>Repairs</Button>
        <Button>3D Objects</Button>
        <Button>Memory Boxes</Button>
      </div>
      <div className={isMobile ? "m-4" : "example-pictures-container"}>
        <img src={amanda} alt="example framed art" className="framed-art"></img>
      </div>
    </div>
  );
};

export default Examples;
