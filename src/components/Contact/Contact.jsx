import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [blank, setBlank] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all input fields are valid before proceeding
    if (name && phone && email && message) {
      setIsLoading(true);

      const data = {
        Name: name,
        Email: email,
        Phone: phone,
        Message: message,
      };
      axios
        .post(
          "https://sheet.best/api/sheets/2a50f5a1-4a17-418b-8e71-9bc99745c2a2",
          data
        )
        .then((response) => {
          console.log(response);
          setIsLoading(false);
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setBlank("Thank You!! We will reach out to you. ");
        })
        .catch((error) => {
          setIsLoading(false);
          console.error(error);
        });
    } else {
      // Show an error message if any of the input fields are empty
      setBlank("Please fill in all the required fields.");
    }
  };

  return (
    <>
      <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
          {/* Left Side */}
          <div className="flexColStart c-left">
            <span className="orangeText">Out Contacts </span>
            <span className="primaryText">Easy to Contact</span>
            <span className="secondaryText">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis, voluptate vitae? Cumque dolor quod nulla eum incidunt
              voluptates, expedita tempore officiis saepe dicta quis? Reiciendis
              laudantium nam recusandae quas nihil?
            </span>

            <div className="flexCenter contactModes">
              <form
                className="flexColCenter form-container"
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <div className="form-up  ">
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                  <input
                    type="tel"
                    placeholder="Enter Your Phone"
                    required
                    pattern="[789]\d{9}"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    title="Please enter a valid Indian phone number (10 digits starting with 7, 8, or 9)."
                  />
                </div>
                <div className="form-down form-container">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <input
                    type="text"
                    placeholder="Enter Your Subject"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  />
                </div>
                <button className="button contact-btn" type="submit">
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
                <span className="primaryText paddings blankspan">{blank}</span>
              </form>
            </div>
          </div>

          {/* Right Side */}
          <div className="flexEnd c-right">
            <div className="image-container">
              <img src="./contact.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
