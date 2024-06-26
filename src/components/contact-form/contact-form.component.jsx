import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import { FormInput, FormTextArea } from "../form-input/form-input.component";
import Button from "../button/button.component";

const ContactForm = () => {
  const defaultFormFields = {
    name: "",
    email: "",
    message: "",
  };
  const form = useRef();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, message } = formFields;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    emailjs
      .sendForm(
        "service_5fwzmlv",
        "template_460huv5",
        form.current,
        "4mUTAHJ729LuZ8cSE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFeedbackMessage("Thank you for your message!");
          setFormFields(defaultFormFields);
        },
        (error) => {
          console.log(error.text);
          setFeedbackMessage("Oops! Something went wrong. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitted(false);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <form ref={form} onSubmit={handleSubmit}>
      {feedbackMessage && <p>{feedbackMessage}</p>}
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
      <Button type="submit" disabled={isSubmitted}>
        {isSubmitted ? "Sending..." : "Submit"}
      </Button>
    </form>
  );
};
export default ContactForm;
