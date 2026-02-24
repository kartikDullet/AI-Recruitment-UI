import React, { useState } from "react";

export default function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    alert("Message sent!");
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input name="name" placeholder="Your Name" onChange={handleChange} />
      <input name="email" placeholder="Your Email" onChange={handleChange} />
      <textarea name="message" placeholder="Message" onChange={handleChange} />
      <button type="submit">Send</button>
    </form>
  );
}