// Add this at the top of your file
'use client';

import "@/styles/Contact.css";
import { title } from "@/components/primitives";
import { FormEvent } from 'react';

export default function ContactUs() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const response = await fetch('/api/send_email', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message'),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      alert('Email sent successfully!');
    } else {
      alert('Failed to send email.');
    }
  };

  return (
    <div className="contact-container -mt-80">
      <div className="company-details">
        <h1 className={title()}>Contact Us</h1>
        <p>We would like to know more about your request. Let's schedule a free estimation call and discuss the next steps.</p>
        <p>Fill out the form or email us at <a href="mailto:syayakay@gmail.com">syayakay@gmail.com</a></p>
        <p>Or call us at <a href="tel:+6285156162840">0851-5616-2840</a></p>

        <div className="company-addresses">
          <h4>Head Office</h4>
          <p><strong>Germany</strong> 🇩🇪<br />Hattingerstr 273 44795, Bochum NRW Germany</p>
          <p><strong>Indonesia</strong> 🇮🇩<br />Jalan Kaliurang, KM 5 No.7A, DIY, Indonesia</p>
        </div>
      </div>

      <div className="contact-form">
        <h2 className={title()}>Let’s discuss your project</h2>
        <form onSubmit={handleSubmit} className="mt-2">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="phone" placeholder="Phone" />
          <textarea name="message" placeholder="Your Message" required></textarea>
          {/* <input type="file" name="attachment" /> */}
          <label>
            <input type="checkbox" name="consent" required /> I consent to processing my personal data according to the Privacy Policy
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
