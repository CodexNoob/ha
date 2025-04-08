import React, { useState } from "react";
import img1 from "../assets/imgs/logo.png";
import img2 from "../assets/imgs/masinagorganic-removebg-preview.png";
import img3 from "../assets/imgs/OIP.png";


function Testimonial() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const testimonials = [
    {
      name: "John Doe",
      quote: "This product changed my life! Highly recommended.",
      image: img1,
      video: "https://www.youtube.com/embed/tOwjEOt1zYU",
      role: "Software Engineer",
    },
    {
      name: "Jane Smith",
      quote: "Amazing experience! Would buy again.",
      image: img2,
      video: "https://www.youtube.com/embed/DIFCMtzg7xg",
      role: "Product Manager",
    },
    {
      name: "Emily Johnson",
      quote: "Exceptional quality and great support.",
      image: img3,
      video: "https://www.youtube.com/embed/Uf4JAss1vEo",
      role: "UX Designer",
    },
    {
      name: "Bob Kally",
      quote: "Exceptional quality and great support.",
      image: img3,
      video: "https://www.youtube.com/embed/Uf4JAss1vEo",
      role: "UX Designer",
    },
    {
      name: "Mark Nicolas",
      quote: "Exceptional quality and great support.",
      image: img3,
      video: "https://www.youtube.com/embed/Uf4JAss1vEo",
      role: "UX Designer",
    },
    {
      name: "Mark Tahimik Lang",
      quote: "Exceptional quality and great support.",
      image: img3,
      video: "https://www.youtube.com/embed/Uf4JAss1vEo",
      role: "UX Designer",
    },
  ];

  return (
    <section className="section_Testimonial" id="testimonial">
      <div className="container">
        <h1 className="text-center">
          Testimonials
        </h1>
        <div className="row justify-content-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-4 d-flex justify-content-center p-3">
              <div className="flip-card">
                <div className="flip-card-inner">
                  {/* Front Side (Image) */}
                  <div className="flip-card-front">
                    <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.role}</p>
                  </div>
                  {/* Back Side (Video with Button) */}
                  <div className="flip-card-back">
                    <button className="play-button" onClick={() => setSelectedVideo(testimonial.video)}>
                      ▶ Watch Video
                    </button>
                    <p className="quote">"{testimonial.quote}"</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Video */}
        {selectedVideo && (
          <div className="video-modal" onClick={() => setSelectedVideo(null)}>
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src={selectedVideo}
                title="Testimonial Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .section_Testimonial {
          background: linear-gradient(90deg, rgb(175, 242, 252), #ffffff);
          padding-top: 0;
          min-height: 100vh; /* Adjusted for navbar height */
          height: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          margin-top: 0; /* Remove extra margin at the top */
        }

        /* Testimonial Card Styling */
        .flip-card {
          background-color: transparent;
          width: 90%;
          height: 250px;
          perspective: 1000px;
          padding: 5px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 50px;
          border-radius: 10px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }

        .flip-card-front {
          background: #fff;
        }

        .flip-card-front img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-bottom: 10px;
        }

        .flip-card-back {
          background:rgb(10, 121, 141);
          color: white;
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .play-button {
          background-color: #fff;
          color:rgb(0, 0, 0);
          border: none;
          padding: 10px 15px;
          font-size: 1rem;
          cursor: pointer;
          border-radius: 5px;
          transition: background 0.3s ease;
        }

        .play-button:hover {
          background-color:rgb(0, 0, 0);
          color: white;
        }

        .quote {
          font-style: italic;
          font-size: 1rem;
          margin-top: 10px;
        }

        /* Video Modal */
        .video-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .video-container {
          background: black;
          padding: 5px;
          border-radius: 10px;
          max-width: 600px;
          text-align: center;
        }
       @media (max-width: 768px) and (min-height: 571px) {
  /* Modify the .row container to use flex or grid */
  .row {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two columns */
    gap: 10px;  /* Reduce the gap between cards */
  }

  .col-md-4 {
    width: 100%; /* Make sure cards take up full width */
    display: flex;
    justify-content: center;
  }

  /* Make the testimonial cards bigger */
  .flip-card {
    width: 95%;  /* Adjust the width to make it larger */
    height: 250px; /* Adjust the height to make it taller */
  }
}

      `}</style>
    </section>
  );
}

export default Testimonial;
