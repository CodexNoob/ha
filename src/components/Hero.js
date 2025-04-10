import React, { useEffect, useRef, useState } from "react";
import HeroImage from "../assets/imgs/masinagorganic-removebg-preview.png";

function Hero({ darkMode }) {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = heroRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className={`hero-section ${darkMode ? "dark" : ""}`}
      id="home"
    >
      <div className="hero-content">
        <div className="hero-text">
          <h1
            className="fw-bold"
            style={{
              marginBottom: "20px",
              fontSize: "3rem",
              paddingTop: "50px",
              textShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <span style={{ color: "hsl(122, 72.40%, 17.10%)" }}>Welcome to</span>
            <br />
            Masinag Organic
          </h1>
          <p className="fs-4">
            Your trusted source for organic products. Experience the best nature has to offer!
          </p>
          <button
            className="hero-btn"
            style={{
              cursor: "pointer",
              marginTop: "50px",
              padding: "10px 20px",
              fontSize: "1rem",
              fontWeight: "bold",
              backgroundColor: "hsl(122, 72.40%, 17.10%)",
              color: "white",
              border: "20px",
              borderRadius: "25px",
            }}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              const navbarHeight =
                document.querySelector(".navbar")?.offsetHeight || 80;

              if (contactSection) {
                window.scrollTo({
                  top: contactSection.offsetTop - navbarHeight - 20,
                  behavior: "smooth",
                });
              }
            }}
          >
            Contact Us
          </button>
        </div>
        <div className="hero-image">
          <img
            src={HeroImage}
            alt="Organic Products"
            className={isVisible ? "slide-in" : ""}
          />
          <p className={`image-caption ${isVisible ? "slide-in" : ""}`}>
            ORGANIC PLANT SUPPLEMENT
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .hero-section {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          height: auto;
          padding-top: 50px;
          padding-bottom: 50px;
          background-color: rgb(255, 255, 255);
          background: linear-gradient(90deg, rgb(175, 242, 252), #ffffff);
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .hero-section.dark {
          background-color: rgb(0, 0, 0);
          color: white;
        }

        .hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          width: 100%;
          flex-wrap: wrap;
          text-align: center;
        }

        .hero-text {
          flex: 1;
          max-width: 50%;
          padding: 10px;
          text-align: left;
        }

        .hero-image {
          flex: 1;
          text-align: center;
        }

        .hero-image img {
          width: 100%;
          max-width: 400px;
          border-radius: 10px;
          opacity: 0;
          transform: translateX(100%);
          transition: transform 0.8s ease-in-out, opacity 1s ease-in-out;
        }

        .hero-image img.slide-in {
          opacity: 1;
          transform: translateX(0);
        }

        .image-caption {
          display: block;
          text-align: center;
          margin-top: 10px;
          font-weight: bold;
          color: hsl(122, 72.40%, 17.10%);
          font-size: 1.5rem;
          text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
          text-transform: uppercase;
          opacity: 0;
          transform: translateX(100%);
          transition: transform 0.8s ease-in-out, opacity 1.2s ease-in-out;
        }

        .image-caption.slide-in {
          opacity: 1;
          transform: translateX(0);
        }

        .hero-section.dark .image-caption {
          color: #90EE90;
        }

        /* Button Styling */
        .hero-btn {
          cursor: pointer;
          margin-top: 50px;
          padding: 10px 20px;
          font-size: 1rem;
          font-weight: bold;
          background-color: hsl(122, 72.40%, 17.10%);
          color: white;
          border: 20px;
          border-radius: 25px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .hero-btn:hover {
          background-color: white;
          color: hsl(122, 72.40%, 17.10%);
        }

       @media (min-width: 1280px) {
  .hero-section {
    padding-top: 150px;
    padding-bottom: 100px;
  }

  .hero-text h1 {
    font-size: 4rem;
  }

  .hero-text p {
    font-size: 1.5rem;
  }

  .hero-image img {
    max-width: 600px; /* Adjust for larger screens */
  }

  .image-caption {
    font-size: 2rem;
  }

  .hero-content {
    max-width: 1400px;
    flex-direction: row;
    text-align: left;
  }
}

@media (min-width: 1001px) and (max-width: 1279px) {
  .hero-content {
    flex-direction: row;
    text-align: left;
  }

  .hero-text {
    max-width: 50%;
    text-align: left;
    padding-left: 60px;
  }

  .hero-image img {
    max-width: 500px;
  }

  .image-caption {
    font-size: 1.8rem;
  }
}

@media (max-width: 1000px) {
  .hero-section {
    padding: 60px 20px;
    justify-content: center;
    text-align: center;
  }

  .hero-content {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding-top: 0;
  }

  .hero-text {
    max-width: 100%;
    text-align: center;
  }

  .hero-image {
    margin-top: 30px;
  }
}

@media (max-width: 768px) {
  .hero-content {
    flex-direction: column-reverse;
    text-align: center;
    padding-top: 50px;
  }

  .hero-section {
    height: auto;
    padding: 50px 20px;
  }

  .hero-text {
    max-width: 100%;
    font-size: 2rem;
  }

  .hero-image img {
    width: 80%;
    max-width: 300px;
  }

  .image-caption {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .hero-text h1 {
    font-size: 2.5rem;
  }

  .hero-text p {
    font-size: 1rem;
  }

  .hero-image img {
    max-width: 250px;
  }

  .image-caption {
    font-size: 1rem;
  }
}
      `}</style>
    </section>
  );
}

export default Hero;
