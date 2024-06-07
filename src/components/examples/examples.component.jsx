import Button from "../button/button.component";
import "./examples.styles.css";

import amanda from "../../assets/images/amanda2.jpg";

const Examples = () => {
  return (
    <div className="examples-container">
      <div className="buttons-container">
        <Button>Paintings</Button>
        <Button>Repairs</Button>
        <Button>3D Objects</Button>
        <Button>Memory Boxes</Button>
      </div>
      <div className="example-pictures-container">
        <img src={amanda} alt="example framed art" className="framed-art"></img>
      </div>
    </div>
  );
};

export default Examples;
