import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is included
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faPhone, faAddressBook } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-dark text-center text-lg-start text-light py-1">
      <section className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom">
        <div className="me-5 d-none d-lg-block fs-5">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="https://www.facebook.com/" className="me-4 text-white" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com" className="me-4 text-white" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com" className="me-4 text-white" aria-label="TikTok">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </section>

      <section className="container text-center text-md-start mt-4">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-2"></i> HANFORD
            </h6>
            <div className="mission-vision-wrapper">
              <div className="mission-vision">
                <p>
                  <strong style={{ color: "hsl(0, 0.00%, 100.00%)" }}>MISSION: </strong>
                  <br />
                  Helping Farmers' Dreams Come True - Improving Lives Socially and Economically. Maintaining a Healthy Life and Enriching the Environment Through Continuous Use of Advance Masinag Organic Farming Technology.
                </p>
                <p>
                  <strong style={{ color: "hsl(0, 0.00%, 100.00%)" }}>VISION: </strong>
                  <br />
                  Seeing Successful and Healthy Farmers Globally, in a Clean and Green Environment.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-center">
            <h6 className="text-uppercase fw-bold mb-4">
              <FontAwesomeIcon icon={faLocationDot} className="me-2" />
              Address
            </h6>
            <p>2nd Flr. The Arete Square, Congressional Ave. Quezon City</p>
            <p>Zip Code 1106</p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-center">
            <h6 className="text-uppercase fw-bold mb-4">
              <FontAwesomeIcon icon={faAddressBook} className="me-2" />
              Contact
            </h6>
            <p><FontAwesomeIcon icon={faEnvelope} className="me-2" /> info@example.com</p>
            <p><FontAwesomeIcon icon={faPhone} className="me-2" /> +01 234 567 88</p>
            <p><FontAwesomeIcon icon={faPhone} className="me-2" /> +01 234 567 89</p>
          </div>
        </div>
      </section>

      <div className="text-center p-3 text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        <p>© 2025 All Rights Reserved By <strong>HANFORD</strong></p>
      </div>
    </footer>
  );
}

<style>{`
  .mission-vision-wrapper {
    display: flex;
    justify-content: center; /* Centers the mission-vision div horizontally */
    align-items: center; /* Centers the mission-vision div vertically */
    height: 100%; /* Ensures full height for vertical alignment */
    text-align: center; /* Centers text inside the mission-vision container */
  }

  .mission-vision {
    font-size: 1.2rem;
    max-width: 500px; /* Limit the width of the content */
    width: 100%;
  }

  .mission-vision p {
    text-align: center; /* Ensures text inside paragraphs is centered */
    margin: 10px 0; /* Space out the paragraphs */
  }

  @media (max-width: 768px) {
    .mission-vision {
      font-size: 1rem; /* Adjust for smaller screens */
    }
  }
`}</style>

export default Footer;
