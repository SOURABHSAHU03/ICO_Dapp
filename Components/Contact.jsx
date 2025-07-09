import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_fo5sz4m",      // e.g. "service_4xy123"
      "template_y4iw72o",     // e.g. "template_qwe123"
      formRef.current,
      "O3VzJd7zQHUh1qrtN"       // e.g. "aBcD123xyz456"
    )
    .then((result) => {
      console.log("Email sent:", result.text);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error("Failed to send email:", error.text);
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Me</h2>
      {submitted && <p style={styles.success}>Thanks! I'll get back to you soon.</p>}
      <form ref={formRef} onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows="4"
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>Send</button>
      </form>
      <div className="token-info__shape">
      <div className="shape shape--1">
        <img src="assets/img/shape/s_shape1.png" alt="" />
      </div>
      <div className="shape shape--2">
        <img src="assets/img/shape/s_shape2.png" alt="" />
      </div>

      <div className="shape shape--2">
        <img src="assets\img\icon\bitcoin_icon.png" alt="" />
      </div>
    </div>
    </div>
    
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    background: "#111",
    borderRadius: "8px",
    color: "#fff",
    fontFamily: "Arial",
    boxShadow: "0 0 10px rgba(0,0,0,0.4)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#00FFFF",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #333",
    backgroundColor: "#222",
    color: "#fff",
  },
  textarea: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #333",
    backgroundColor: "#222",
    color: "#fff",
  },
  button: {
    padding: "10px",
    backgroundColor: "#00FFFF",
    color: "#000",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  success: {
    backgroundColor: "#0f0",
    padding: "10px",
    borderRadius: "4px",
    textAlign: "center",
    marginBottom: "10px",
    color: "#000",
  },
  
};

export default ContactMe;
