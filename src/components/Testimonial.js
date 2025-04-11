import React, { useState } from "react";
import "../components/styles/testimonial.css";
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
    </section>
  );
}

export default Testimonial;
