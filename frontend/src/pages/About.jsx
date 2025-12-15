import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/About.css";

export default function About() {
  
  // REAL scroll-triggered animations
  useEffect(() => {
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
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: "#F7F7F2", fontFamily: "Poppins" }}>
      <Navbar />

      {/* HERO PARALLAX */}
      <section className="about-hero">
        <div className="hero-overlay">
          <h1 className="hero-title reveal">ABOUT SPROUT SPACE</h1>
          <p className="hero-subtitle reveal">
            Clean produce. Ethical sourcing. A better tomorrow.
          </p>
        </div>
      </section>

      {/* SECTION 1 — IMAGE LEFT / TEXT RIGHT */}
      <section className="about-section">
        <div className="section-image image-1 reveal"></div>

        <div className="section-text reveal">
          <h2>Who We Are</h2>
          <p>
            Sprout Space connects eco-conscious consumers with responsible 
            farmers. We empower sustainable agriculture and offer fresh 
            produce directly from the source.
          </p>
        </div>
      </section>

      {/* SECTION 2 — IMAGE RIGHT / TEXT LEFT */}
      <section className="about-section reverse">
        <div className="section-text reveal">
          <h2>Our Vision</h2>
          <p>
            Our vision is simple — to create transparent, ethical, 
            and accessible food systems that benefit farmers and customers alike.
          </p>
        </div>

        <div className="section-image image-2 reveal"></div>
      </section>

      {/* SECTION 3 — IMAGE LEFT / TEXT RIGHT */}
      <section className="about-section">
        <div className="section-image image-3 reveal"></div>

        <div className="section-text reveal">
          <h2>Why It Matters</h2>
          <p>
            Food shouldn't feel like a mystery. We believe in honesty, 
            sustainability, and providing a premium farm-to-home experience.
          </p>
        </div>
      </section>

      {/* FULL WIDTH TEXT */}
      <section className="full-text-container reveal">
        <h2>Growing Together</h2>
        <p>
          Every order supports farmers, strengthens communities, 
          and pushes the world toward a cleaner, greener future.
        </p>
      </section>

      {/* GALLERY STRIP */}
      <section className="gallery-section">
        <div className="gallery-img img-a"></div>
        <div className="gallery-img img-b"></div>
        <div className="gallery-img img-c"></div>
      </section>

      <Footer />
    </div>
  );
}
