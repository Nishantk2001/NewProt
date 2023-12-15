import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g89kepo",
        "template_8vj3twf",
        form.current,
        "2iH4ipxw712YcOVLC"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowPopup(true);
          // alert("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const closePopup = () => {
    setShowPopup(false);
    // You can reset the form fields here if needed
    form.current.reset();
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          I'd love to hear from you! Whether you have a project in mind,
          <br /> a question, or just want to say hello, feel free to reach out.
          Your ideas and inquiries are always welcome.
        </p>
      </div>

      <form
        className="contact--form--container"
        ref={form}
        onSubmit={sendEmail}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="user_name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="user_email"
              id="email"
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            name="message"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>

        <div>
          <button className="btn btn-primary contact--form--btn" type="submit">
            Submit
          </button>
        </div>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Message sent successfully!</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
