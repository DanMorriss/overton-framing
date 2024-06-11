import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useState } from "react";

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
    <div>
      <h2>Book a free consultation</h2>
      <div className="contact-form">
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
          <FormInput
            label="Message"
            type="text"
            required
            onChange={handleChange}
            name="message"
            value={message}
          />
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
