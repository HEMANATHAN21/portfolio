import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${form.name}`;
    const body = `
Name: ${form.name}
Email: ${form.email}
Mobile: ${form.mobile}

Message:
${form.message}
    `;

    window.location.href = `mailto:hemanathan@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          required
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          onChange={handleChange}
        />

        <input
          name="mobile"
          type="tel"
          placeholder="Mobile Number"
          required
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          onChange={handleChange}
        />

        <button type="submit">Send Message</button>
      </form>

      <style>{`
        #contact {
          padding: 80px 24px;
          text-align: center;
        }

        form {
          max-width: 500px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        input, textarea {
          padding: 14px;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          font-size: 14px;
          outline: none;
        }

        button {
          background: #3b82f6;
          color: white;
          border: none;
          padding: 14px;
          border-radius: 10px;
          font-size: 15px;
          cursor: pointer;
        }

        button:hover {
          background: #2563eb;
        }

        /* Dark mode support */
        .dark input,
        .dark textarea {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          color: #e5e7eb;
        }
      `}</style>
    </section>
  );
}
