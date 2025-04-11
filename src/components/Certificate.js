import React, { useState } from 'react';
import "../components/styles/certificate.css";
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
        <h1 className="text-center my-4">Certificates</h1>
              <Row className="justify-content-center g-3">
        {certificates.map((certificate) => (
          <Col key={certificate.id} xs={6} md={4} lg={4} className="d-flex justify-content-center">
            <div className="certificate-card" onClick={() => handleCertificateClick(certificate)}>
              <img src={certificate.image} alt={certificate.title} className="certificate-img" />
              <h3 style={{ fontSize: '18px' }}>{certificate.title}</h3>
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
                    className="carousel-btn left" 
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
    </section>
  );
}

export default Certificate;
