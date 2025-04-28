import React from "react";
import "../components/styles/footer.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faPhone, faAddressBook } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <footer className="bg-dark text-center text-light py-1">
        <section className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between p-3 border-bottom footer-social">
          <div className="me-5 d-none d-lg-block fs-5">
            <span>Get connected with us on social networks:</span>
          </div>
          <div className="text-center">
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

        <section className="container text-center mt-4">
          <div className="footer-columns">
            <div className="footer-col">
              <div className="mission-vision-wrapper">
                <div className="mission-vision">
                  <p>
                    <strong>MISSION: </strong><br />
                    Helping Farmers' Dreams Come True - Improving Lives Socially and Economically. Maintaining a Healthy Life and Enriching the Environment Through Continuous Use of Advance Masinag Organic Farming Technology.
                  </p>
                  <p>
                    <strong>VISION: </strong><br />
                    Seeing Successful and Healthy Farmers Globally, in a Clean and Green Environment.
                  </p>
                </div>
              </div>
            </div>

            <div className="footer-col">
              <h6 className="text-uppercase fw-bold mb-4">
                <FontAwesomeIcon icon={faLocationDot} className="me-2" />
                Address
              </h6>
              <p>2nd Flr. The Arete Square, Congressional Ave. Quezon City</p>
              <p>Zip Code 1106</p>
            </div>

            <div className="footer-col">
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
          <p>© 2025 All Rights Reserved By <strong>1CV</strong></p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
