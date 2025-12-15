import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Contact.css";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Reveal on scroll
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div style={{ backgroundColor: "#F7F7F2", fontFamily: "Poppins" }}>
      <Navbar />

      {/* PARALLAX HERO */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <h1 className="contact-title reveal">Contact Us</h1>
          <p className="contact-subtitle reveal">
            We're here to help — reach out anytime.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="contact-form-section reveal">
        <div className="contact-form-container">

          <h2 className="form-header">Get In Touch</h2>
          <p className="form-subtext">
            Fill in the details below and we’ll get back to you soon.
          </p>

          <form className="contact-form">
            
            {/* NAME */}
            <div className="floating-group">
              <input type="text" required />
              <label>Name</label>
            </div>

            {/* EMAIL */}
            <div className="floating-group">
              <input type="email" required />
              <label>Email</label>
            </div>

            {/* MESSAGE */}
            <div className="floating-group">
              <textarea required rows="4"></textarea>
              <label>Your Message</label>
            </div>

            <button className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
