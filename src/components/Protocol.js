import React, { useState, useEffect  } from 'react';
import "../components/styles/protocol.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Modal, Dropdown } from 'react-bootstrap';
import img1 from '../assets/certificate/protocolthumb/cashew-removebg-preview.png';
import img2 from '../assets/certificate/protocolthumb/corn-removebg-preview.png';
import img3 from '../assets/certificate/protocolthumb/rice-removebg-preview.png';
import img4 from '../assets/certificate/protocolthumb/coffee-removebg-preview.png';
import img5 from '../assets/certificate/protocolthumb/dragonfruit-removebg-preview.png';
import img6 from '../assets/certificate/protocolthumb/calamansi-removebg-preview.png';
import img7 from '../assets/certificate/protocolthumb/castorbean-removebg-preview.png';
import img8 from '../assets/certificate/protocolthumb/fruit_trees-removebg-preview.png';
import img9 from '../assets/certificate/protocolthumb/coconut-removebg-preview.png';
import img10 from '../assets/certificate/protocolthumb/leafyvege-removebg-preview.png';
import img11 from '../assets/certificate/protocolthumb/mango-removebg-preview.png';
import img12 from '../assets/certificate/protocolthumb/onion-removebg-preview.png';
import img13 from '../assets/certificate/protocolthumb/ratoon.jpg';
import img14 from '../assets/certificate/protocolthumb/fishpond.jpg'
import img15 from '../assets/certificate/protocolthumb/sweetpepper-removebg-preview.png'
import img16 from '../assets/certificate/protocolthumb/variousvege-removebg-preview.png'
import img17 from '../assets/certificate/protocolthumb/garlic-removebg-preview.png'
import img18 from '../assets/certificate/protocolthumb/watermelon-removebg-preview.png'

// PDF
import cashew from '../assets/certificate/protocol/Cashew.pdf';
import cashew1 from '../assets/certificate/protocol/Cashew1.pdf';
import corn from '../assets/certificate/protocol/Corn.pdf';
import rice from '../assets/certificate/protocol/LowlandRiceProduction.pdf';
import rice1 from '../assets/certificate/protocol/ProtocolforBroadcastedRice.pdf';
import rice2 from '../assets/certificate/protocol/ProtocolforTransplantedRice.pdf';
import rice3 from '../assets/certificate/protocol/NewProtocolforRice.pdf';
import coffee from '../assets/certificate/protocol/HOWTOUSEMASINAGCOFFEETREE.pdf';
import dragonf from '../assets/certificate/protocol/DragonFruit.pdf';
import calamansi from '../assets/certificate/protocol/Calamansi.pdf';
import castorbean from '../assets/certificate/protocol/CastorBean.pdf';
import fruit3 from '../assets/certificate/protocol/FRUITTREESusing.pdf';
import coconut from '../assets/certificate/protocol/Coconut.pdf';
import leafyvege from '../assets/certificate/protocol/LEAFYVEGETABLES.pdf';
import mango from '../assets/certificate/protocol/MANGOTREES.pdf';
import onion from '../assets/certificate/protocol/onion.pdf';
import ratooning from '../assets/certificate/protocol/Ratooning.pdf';
import fishpond from '../assets/certificate/protocol/Fish.pdf';
import fishpond1 from '../assets/certificate/protocol/FishCulture.pdf';
import sweetpepper from '../assets/certificate/protocol/SweetPepper.pdf';
import varvege from '../assets/certificate/protocol/VariousVegetables.pdf';
import garlic from '../assets/certificate/protocol/Garlic.pdf';
import watermelon from '../assets/certificate/protocol/WATERMELON-DirectSeeding.pdf';
import watermelon1 from '../assets/certificate/protocol/WATERMELON-Transplanting.pdf';


// PDF Rendering Component


const fruits = [
  { 
    id: 1, 
    name: 'Cashew', 
    image: img1, // added leading slash
    docs: [
      { name: 'Protocol for Cashew \n Using Masinag Organic', url: cashew },
      { name: "Protocol for Cashew \n Using Masinag Organic Fertilizer", url: cashew1 }
    ]
  },
  { 
    id: 2, 
    name: 'Corn', 
    image: img2, 
    docs: [
      { name: 'Protocol for Corn Using Masinag Organic', url: corn }
    ]
  },
  { 
    id: 3, 
    name: 'Rice', 
    image: img3, 
    docs: [
      { name: 'Protocol for Lowland Rice Production', url: rice },
      { name: 'Protocol for Broadcasted Rice \n Using Masinag Fertilizer', url: rice1},
      { name: 'Protocol for Transplanted Rice \n Using Masinag Fertilizer', url: rice2 },
      { name: 'New Protocol for Rice', url: rice3 }
    ]
  },
  { 
    id: 4, 
    name: 'Coffee Tree', 
    image: img4, 
    docs: [
      { name: 'Protocol for Coffee Tree', url: coffee }
    ]
  },
  { 
    id: 5,                                                                                                                                                  
    name: 'Dragon Fruit', 
    image: img5, 
    docs: [
      { name: 'Protocol For Dragon Fruit Tree', url: dragonf}
    ]
  },
  { 
    id: 6, 
    name: 'Calamansi', 
    image: img6, 
    docs: [
      { name: 'Protocol For Calamansi Tree', url: calamansi }
    ]
  },
  { 
    id: 7, 
    name: 'CastorBean', 
    image: img7, 
    docs: [
      { name: 'Protocol For Castor Bean', url: castorbean }
    ]
  },
  { 
    id: 8, 
    name: "Fruit Tree's", 
    image: img8, 
    docs: [
      { name: "Protocol for Fruit Tree's", url: fruit3 }
    ]
  },
  { 
    id: 9, 
    name: 'Coconut', 
    image: img9, 
    docs: [
      { name: 'Protocol for Coconut Tree', url: coconut }
    ]
  },
  { 
    id: 10, 
    name: "Leafy Vegetable's", 
    image: img10, 
    docs: [
      { name: "Protocol for Leafy Vegetable's", url: leafyvege }
    ]
  },
  { 
    id: 11, 
    name: "Mango Tree's", 
    image: img11, 
    docs: [
      { name: "Protocol for Mango Tree's", url: mango }
    ]
  },
  { 
    id: 12, 
    name: 'Onion', 
    image: img12, 
    docs: [
      { name: 'Protocol for Onion', url: onion }
    ]
  },
  { 
    id: 13, 
    name: 'Ratooning', 
    image: img13, 
    docs: [
      { name: 'Protocol for Ratooning', url: ratooning }
    ]
  },
  { 
    id: 14, 
    name: 'Fish Pond', 
    image: img14, 
    docs: [
      { name: 'Protocol for Fish Pond', url: fishpond },
      { name: 'Protocol for Fish Culture', url: fishpond1 }
    ]
  },
  { 
    id: 15, 
    name: 'Sweet Pepper', 
    image: img15, 
    docs: [
      { name: 'Protocol for Sweet Pepper', url: sweetpepper }
    ]
  },
  { 
    id: 16, 
    name: "Various Vegetable's", 
    image: img16, 
    docs: [
      { name: "Protocol for Various Vegetable's", url: varvege }
    ]
  },
  { 
    id: 17, 
    name: 'Garlic', 
    image: img17, 
    docs: [
      { name: 'Protocol for Garlic', url: garlic }
    ]
  },
  { 
    id: 18, 
    name: 'Watermelon', 
    image: img18, // added leading slash
    docs: [
      { name: 'Protocol for \n WATERMELON - Direct Seeding', url: watermelon },
      { name: 'Protocol for \n WATERMELON - Transplanted', url: watermelon1 }
    ]
  }
];

function Protocol() {
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [modalTitle, setModalTitle] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);


  useEffect(() => {
    document.documentElement.style.overflow = showModal ? 'hidden' : 'auto';
    return () => { document.documentElement.style.overflow = 'auto'; };
  }, [showModal]);

  const handleFruitClick = (fruit) => {
    setSelectedFruit(fruit);
    if (fruit.docs && fruit.docs.length > 0) {
      setSelectedDoc(fruit.docs[0].url);
      setModalTitle(fruit.docs[0].name);
    }
    setShowModal(true);
  };

  const handleDocSelection = (pdf) => {
    setSelectedDoc(pdf.url);
    setModalTitle(pdf.name);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const diffX = touchEndX - touchStartX;
    if (diffX > 75) {
      setShowModal(false); // Swipe right to close
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section className="section_protocol" id="protocol">
      <h1 className="text-center">Protocol</h1>
      <p className="text-center">Select a fruit to view its protocol document.</p>
      <Container fluid="sm">
        <Row className="g-4 justify-content-center">
          {(showAll ? fruits : fruits.slice(0, 6)).map((fruit) => (
            <Col key={fruit.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
              <Card
                className="fruit-card text-center p-3 shadow-sm"
                onClick={() => handleFruitClick(fruit)}
                style={{ cursor: 'pointer', width: '240px' }}
              >
                <div className="fruit-image">
                  <img
                    src={fruit.image}
                    alt={fruit.name}
                    className={fruit.name === 'Ratooning' || fruit.name === 'Fish Pond' ? 'rounded-circle' : ''}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{fruit.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="text-center mt-4">
        <p 
          style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline', fontSize: '1.2rem', paddingTop: '3rem' }} 
          onClick={() => {
            setShowAll((prev) => {
              const newState = !prev;
              if (!newState) {
                setTimeout(() => {
                  document.getElementById("protocol").scrollIntoView({ behavior: "smooth" });
                }, 100);
              }
              return newState;
            });
          }}
        >
          {showAll ? 'See Less' : 'See More'}
        </p>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg" backdrop="static" keyboard={false}>
  <Modal.Header className="d-flex align-items-center justify-content-between flex-wrap">
    {/* Dropdown */}
    {selectedFruit?.docs && (
      <Dropdown className="me-2 mb-2 mb-sm-0">
        <Dropdown.Toggle variant="secondary" size="sm" style={{ fontSize: '0.85rem' }}>
          {selectedFruit.name.toUpperCase()} PROTOCOLS
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {selectedFruit.docs.map((pdf, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => handleDocSelection(pdf)}
              style={{
                fontSize: '0.85rem',
                whiteSpace: 'normal',
                textAlign: 'center',
                borderBottom: '1px solid #ccc',
                paddingBottom: '6px',
                marginBottom: '6px',
              }}
            >
              {pdf.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    )}

    {/* Title */}
    <Modal.Title
      className="flex-grow-1 text-center"
      style={{
        whiteSpace: 'pre-line',
        fontSize: '1.1rem',
        fontWeight: '500',
        margin: '0 auto',
      }}
    >
      {modalTitle}
    </Modal.Title>

    {/* Close button */}
    <button
      onClick={() => setShowModal(false)}
      className="custom-close-btn"
      style={{
        border: 'none',
        background: 'transparent',
        fontSize: '1.5rem',
        color: '#000',
        marginLeft: 'auto',
      }}
    >
      &times;
    </button>
  </Modal.Header>
  <Modal.Body
  style={{
    height: '75vh',
    overflow: 'hidden',
    padding: 0,
  }}
  onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}
>
  {selectedDoc ? (
    <iframe
      src={selectedDoc}
      title="Protocol PDF Viewer"
      width="100%"
      height="100%"
      style={{
        border: 'none',
      }}
    />
  ) : (
    <p className="text-center my-5">No document selected.</p>
  )}
</Modal.Body>

</Modal>

    </section>
  );
}

export default Protocol;
