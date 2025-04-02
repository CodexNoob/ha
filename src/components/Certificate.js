import React, { useState } from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing icons
import img1 from '../assets/logo/BAFS.png';
import img2 from '../assets/logo/IDCP.jpg';
import img3 from '../assets/logo/IFOAM.png';
import img4 from '../assets/masinagweb/OCCP Certificate LOGO 2.png';
import img5 from '../assets/logo/tpc.jpg';
import img6 from '../assets/logo/philgeps.jpg';
import image1 from '../assets/masinagweb/Certificates/BAFS.jpg';
import image1b from '../assets/masinagweb/Certificates/BAFS2.jpg';
import image1c from '../assets/masinagweb/Certificates/RSTP COR 2021-2026.jpg';
import image2 from '../assets/masinagweb/Certificates/HALAL_CERT_Page_1.jpg';
import image2b from '../assets/masinagweb/Certificates/HALAL_CERT_Page_2.jpg';
import image3 from '../assets/masinagweb/Certificates/IFOAM Certificate.jpg';
import image4 from '../assets/masinagweb/Certificates/OCCP 2023.jpg';
import image5 from '../assets/masinagweb/Certificates/PHILGEPS 2024-2025_Page_1.jpg';
import image6 from '../assets/masinagweb/Certificates/PHILGEPS 2024-2025_Page_2.jpg';
import image7 from '../assets/masinagweb/Certificates/PHILGEPS 2024-2025_Page_3.jpg';
import image8 from '../assets/masinagweb/Certificates/tpc corn cert.jpg';
import image9 from '../assets/masinagweb/Certificates/tpc rice cert.jpg';
import image10 from '../assets/masinagweb/Certificates/tpc sugarcane cert.jpg';

function Certificate() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [index, setIndex] = useState(0); // Track active slide index

  const certificates = [
    { id: 1, title: 'Bureau of Agriculture and Fisheries Standards', paneltitle: 'BAFS', image: img1, certs: [image1, image1b, image1c] },
    { id: 2, title: "Islamic Da'wah Council of the Philippines, Inc.", paneltitle: 'IDCP', image: img2, certs: [image2, image2b] },
    { id: 3, title: 'International Federation of Organic Agriculture Movements', paneltitle: 'IFOAM', image: img3, certs: [image3] },
    { id: 4, title: 'Organic Certification Center of the Philippines',  paneltitle: 'OCCP', image: img4, certs: [image4] },
    { id: 6, title: 'Philippine Government Electronic Procurement System', paneltitle: 'PhilGEPS', image: img6, certs: [image5, image6, image7] },
    { id: 5, title: 'Technology Promotion Center', paneltitle: 'TPC', image: img5, certs: [image8, image9, image10] },
  ];

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
    setIndex(0); // Reset carousel index
    setIsPanelOpen(true);
    document.documentElement.style.overflow = 'hidden';
  };

  const closePanel = () => {
    setIsPanelOpen(false);
    document.documentElement.style.overflow = '';
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="certificate-section" id="certificate">
      <Container>
        <h1 className="text-center my-2">Certificates</h1>
        <Row className="justify-content-center g-4">
          {certificates.map((certificate) => (
            <Col key={certificate.id} xs={12} md={4} lg={4} className="d-flex justify-content-center">
              <div className="certificate-card" onClick={() => handleCertificateClick(certificate)}>
                <img src={certificate.image} alt={certificate.title} className="certificate-img" />
                <h3 style={{ fontSize: '20px' }}>{certificate.title}</h3>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {isPanelOpen && <div className="overlay" onClick={closePanel}></div>}

      <div className={`side-panel ${isPanelOpen ? 'open' : ''}`}>
        {selectedCertificate && (
          <div className="panel-content">
            <div className="panel-header">
              <button className="close-btn" onClick={closePanel}>×</button>
            </div>

            <div className="panel-title">
              <img src={selectedCertificate.image} alt={selectedCertificate.paneltitle} className="panel-logo" />
              <h2>{selectedCertificate.paneltitle}</h2>
            </div>

            {selectedCertificate.certs ? (
              <div className="carousel-container">
                <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false} interval={null}>
                  {selectedCertificate.certs.map((cert, idx) => (
                    <Carousel.Item key={idx}>
                      <img src={cert} alt={`Certificate ${idx + 1}`} className="certificate-preview" />
                    </Carousel.Item>
                  ))}
                </Carousel>

                {/* Navigation buttons moved inside carousel-container */}
                <div className="carousel-controls">
                <Button 
                  variant="dark" 
                  className="carousel-btn right" 
                  onClick={() => {
                    if (index > 0) {
                      setIndex(index - 1);
                    }
                  }}
                >
                  <FaChevronLeft />
                </Button>
                  <Button 
                    variant="dark" 
                    className="carousel-btn right" 
                    onClick={() => {
                      if (index < selectedCertificate.certs.length - 1) {
                        setIndex(index + 1);
                      }
                    }}
                  >
                    <FaChevronRight />
                  </Button>
                </div>
              </div>
            ) : (
              <p>No certificate available for this course.</p>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        .certificate-section {
          background: linear-gradient(90deg, rgb(175, 242, 252), #ffffff);
          padding-top: 0;
          margin-top: 0;
          padding-bottom: 30px;
          overflow-x: hidden;
        }

        .certificate-card {
          background: #fff;
          width: 80%;
          height: 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-radius: 10px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
          padding: 5px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .certificate-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .certificate-img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-bottom: 10px;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          z-index: 999;
        }

        .side-panel {
          position: fixed;
          top: 80px;
          right: -50%;
          width: 50%;
          height: 100vh;
          background: white;
          box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
          transition: right 0.3s ease-in-out;
          padding: 20px;
          z-index: 1000;
          overflow-y: auto;
        }

        .side-panel.open {
          right: 0;
        }

        .close-btn {
          font-size: 30px;
          background: none;
          border: none;
          cursor: pointer;
          color: black;
        }

        .panel-title {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .panel-logo {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: contain;
        }

        .certificate-preview {
          width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 10px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }

        .carousel-container {
          position: relative;
          text-align: center;
        }

        .carousel-controls {
          display: flex;
          justify-content: space-between;
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          transform: translateY(-50%);
        }

        .carousel-btn {
          font-size: 15px;
          padding: 10px 5px;
        }
      `}</style>
    </section>
  );
}

export default Certificate;
