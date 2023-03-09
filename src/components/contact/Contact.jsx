import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // service id, template id, public key, yang eth.link(template_ob64eth)
        "service_pg0ukrr",
        "template_n7my7so",
        form.current,
        "zhONXOXMrkk6GGtjZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="contact_container">
      <h5 className='text-subtitle'>Get In Touch</h5>
      <h2 className='text-title'>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>admin@roundbytes.com</h5>
            <a
              href="mailto:admin@roundbytes.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a messge
            </a>
          </article>

          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Jeriel Isaiah Layantara</h5>
            <a
              href="https://www.linkedin.com/in/jeriel-isaiah-layantara/"
              target="_blank"
              rel="noreferrer"
            >
              Send a messge
            </a>
          </article>
        </div>
        {/* end of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message required"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit" className="btn-primary"
          >
            {" "}
            Send Message
          </motion.button>

        </form>
      </div>
    </section>
  );
};

export default Contact;
