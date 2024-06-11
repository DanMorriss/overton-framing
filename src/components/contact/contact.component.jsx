import { useState } from "react";

import { FormInput, FormTextArea } from "../form-input/form-input.component";
import Button from "../button/button.component";
import SectionHeading from "../section-heading/section-heading.component.jsx";

import { ContactContainer } from "./contact.styles.jsx";

const defaultFormFields = {
  name: "",
  email: "",
  message: "",
};
const Contact = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, message } = formFields;

  const handleSubmit = () => {};

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <ContactContainer>
      <SectionHeading line1="Get in touch" line2="BOOK A FREE CONSULTATION" />
      <div className="grid grid-cols-2 gap-4 w-full p-10">
        <form>
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
        <div className="w-full bg-slate-400 rounded-lg"></div>
      </div>
    </ContactContainer>
  );
};

export default Contact;
