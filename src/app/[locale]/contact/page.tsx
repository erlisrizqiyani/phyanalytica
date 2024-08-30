"use client";

import "@/styles/Contact.css";
import { title } from "@/components/primitives";
import { FormEvent } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Footer from "@/components/footer";

export default function ContactUs() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const response = await fetch("https://formspree.io/f/xeojpkjo", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      alert("Email sent successfully!");
    } else {
      alert("Failed to send email.");
    }
  };

  return (
    <section>
      <div className="overlay-text-container">
        <h1 className="overlay-text">Get In Touch</h1>
        <h2 className="overlay-subtext -mt-4">
          Comprehensive Data Consulting Services
        </h2>
      </div>
      <div className="contact-container sm:mx-8 lg:mx-auto mt-60">
        <div className="company-details">
          <h1 className={title()}>Contact Us</h1>
          <p>
            We would like to know more about your request. Let's schedule a free
            estimation call and discuss the next steps.
          </p>
          <p>
            <FaEnvelope className="icon ml" /> Email us at{" "}
            <a href="mailto:partner@phyanalytic.com" className="ml-2">
              partner@phyanalytic.com
            </a>
          </p>
          <p>
            <FaPhone className="icon" /> Call us at{" "}
            <a href="tel:+6285156162840" className="ml-2">
              +49 157-3155-4563
            </a>
          </p>

          <div className="company-addresses">
            <h4>Head Office</h4>
            <div className="address-section">
              <MdLocationOn className="icon" />
              Hattingerstr 273 44795, Bochum NRW Germany
            </div>
            <div className="address-section">
              <MdLocationOn className="icon" />
              Jalan Kaliurang, KM 5 No.7A, DIY, Indonesia
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2 className={title()}>Let’s discuss your project</h2>
          <form onSubmit={handleSubmit} className="mt-2" method="POST">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="phone" placeholder="Phone" />
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            {/* <input type="file" name="attachment" /> */}
            <label>
              <input type="checkbox" name="consent" required /> I consent to
              processing my personal data according to the Privacy Policy
            </label>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div className="absolute left-0 w-full mt-32">
        <Footer />
      </div>
    </section>
  );
}
