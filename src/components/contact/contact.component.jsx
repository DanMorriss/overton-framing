import { useState, useRef } from "react";

import { useInView } from "framer-motion";

import { FormInput, FormTextArea } from "../form-input/form-input.component";
import Button from "../button/button.component";
import SectionHeading from "../section-heading/section-heading.component.jsx";

import { ContactContainer, Address } from "./contact.styles.jsx";

const defaultFormFields = {
  name: "",
  email: "",
  message: "",
};
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, message } = formFields;

  const handleSubmit = () => {};

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <ContactContainer>
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(-60px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
        }}
      >
        <SectionHeading line1="Get in touch" line2="BOOK A FREE CONSULTATION" />
      </div>
      <div className="grid grid-cols-2 gap-4 w-full p-10 text-left text-xl">
        <div
          className="w-full flex flex-col justify-center ml-auto"
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-60px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
          }}
        >
          <Address className="p-3 ml-8">
            <p>Unit 2</p>
            <p>Elmtree Industrial Park</p>
            <p>Manton</p>
            <p>Marlborough</p>
            <p>SN8 1PS</p>
          </Address>
          <div className="w-fit p-3">
            <p className="pb-3">
              <i className="fa-solid fa-phone pr-3"></i>
              <a href="tel:07880 810631">07880 810631</a>
            </p>
            <p>
              <i className="fa-solid fa-envelope pr-3"></i>
              <a href="mailto:amanda@overtonframingstudio.co.uk">
                amanda@overtonframingstudio.co.uk
              </a>
            </p>
          </div>
        </div>
        <form
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(60px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
          }}
        >
          <FormInput
            label="Name"
            type="text"
            required
            onChange={handleChange}
            name="name"
            value={name}
          />
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
          <FormTextArea
            label="Message"
            type="text"
            max="120"
            required
            onChange={handleChange}
            name="message"
            value={message}
            className="message-input"
          />
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </div>
    </ContactContainer>
  );
};

export default Contact;
