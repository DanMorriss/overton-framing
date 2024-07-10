import { useRef } from "react";

import { useInView } from "framer-motion";

import PillButton from "../button/pill-button.component.jsx";
import SectionHeading from "../section-heading/section-heading.component.jsx";
import ContactForm from "../contact-form/contact-form.component.jsx";
import useWindowSize from "../../hooks/useWindowSize.jsx";

import { ContactContainer, Address } from "./contact.styles.jsx";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { width } = useWindowSize();
  const isMobile = width < 768;

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

      <div
        className={
          isMobile
            ? "flex flex-col-reverse"
            : "grid grid-cols-2 gap-4 w-full p-10 text-left text-xl"
        }
      >
        <div
          className="w-full flex flex-col justify-center ml-auto"
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(-60px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
          }}
        >
          <Address className={isMobile ? "p-3 pt-7" : "p-3 ml-8"}>
            <p>Unit 2</p>
            <p>Elmtree Industrial Park</p>
            <p>Manton</p>
            <p>Marlborough</p>
            <p>SN8 1PS</p>
          </Address>
          <div className="w-fit p-3">
            <a href="tel:07880 810631">
              <PillButton
                buttonType="inverted"
                className="mb-3"
                style={{ width: "100%" }}
              >
                <i className="fa-solid fa-phone pr-3 pt-4"></i>07880 810631
              </PillButton>
            </a>

            <a href="mailto:amanda@overtonframingstudio.co.uk">
              <PillButton buttonType="inverted">
                <i className="fa-solid fa-envelope pr-3 pt-4"></i>
                amanda@overtonframingstudio.co.uk
              </PillButton>
            </a>
          </div>
        </div>

        {/* FORM */}
        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX(60px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
          }}
        >
          <ContactForm />
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;
