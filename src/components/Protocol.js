import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Modal, Dropdown } from 'react-bootstrap';

const fruits = [
  { id: 1, name: 'Cashew', image: '/protocolthumb/cashew-removebg-preview.png', docs: [
    { name: 'Protocol for Cashew \n Using Masinag Organic', url: '/protocol/Cashew.pdf' },
    { name: "Protocol for Cashew \n Using Masinag Organic Fertilizer", url: '/protocolthumb/Cashew 1.pdf' }
  ]},
  { id: 2, name: 'Corn', image: '/protocolthumb/corn-removebg-preview.png', doc: { name: 'Protocol for Corn', url: '/Protocol/Corn.pdf' } },
  { id: 3, name: 'Rice', image: '/protocolthumb/rice-removebg-preview.png', docs: [
      { name: 'Protocol for Lowland Rice Production', url: '/Protocol/LowlandRiceProduction.pdf' },
      { name: 'Protocol for Broadcasted Rice \n Using Masinag Fertilizer', url: '/Protocol/ProtocolforBroadcastedRice.pdf' },
      { name: 'Protocol for Transplanted Rice \n Using Masinag Fertilizer', url: '/Protocol/ProtocolforTransplantedRice.pdf' },
      { name: 'New Protocol for Rice', url: '/Protocol/NewProtocolforRice.pdf' },
    ]
  },
  { id: 4, name: 'Coffee Tree', image: '/protocolthumb/coffee-removebg-preview.png', doc: { name: "Protocl for Coffee Tree", url: '/Protocol/HOWTOUSEMASINAGCOFFEETREE.pdf' } },
  { id: 5, name: 'Dragon Fruit', image: '/protocolthumb/dragonfruit-removebg-preview.png', doc: { name: "Protocol For Dragon Fruit Tree", url: '/Protocol/DragonFruit.pdf' } },
  { id: 6, name: 'Calamansi', image: '/protocolthumb/calamansi-removebg-preview.png', doc: { name: "Protocol For Calamansi Tree", url: '/Protocol/Calamansi.pdf' } },
  { id: 7, name: 'CastorBean', image: '/protocolthumb/castorbean-removebg-preview.png', doc: { name: 'Protocol For Castor Bean', url: '/Protocol/CastorBean.pdf' } },
  { id: 8, name: "Fruit Tree's", image: '/protocolthumb/fruit_trees-removebg-preview.png', doc: { name: "Protocol for Fruit Tree's", url: '/Protocol/FRUITTREESusing.pdf' } },
  { id: 9, name: 'Coconut', image: '/protocolthumb/coconut-removebg-preview.png', doc: { name: "Protocol for Coconut Tree", url: '/Protocol/Coconut.pdf' } },
  { id: 10, name: "Leafy Vegetable's", image: '/protocolthumb/leafyvege-removebg-preview.png', doc: { name: "Protocol for Leafy Vegetable's", url: '/Protocol/LEAFYVEGETABLES.pdf' } },
  { id: 11, name: "Mango Tree's", image: '/protocolthumb/mango-removebg-preview.png', doc: { name: "Protocol for Mango Tree's", url: '/Protocol/MANGOTREES.pdf' } },
  { id: 12, name: 'Onion', image: '/protocolthumb/onion-removebg-preview.png', doc: { name: 'Protocol for Onion', url: '/Protocol/onion.pdf' } },
  { id: 13, name: 'Ratooning', image: '/protocolthumb/ratoon.jpg', doc: { name: 'Protocol for Ratooning', url: '/Protocol/Ratooning.pdf' } },

    { id: 14, name: 'Fish Pond', image: '/protocolthumb/fishpond.jpg', doc: { name: 'Protocol for Fish Pond', url: '/Protocol/Fish.pdf' } },

    { id: 15, name: 'Sweet Pepper', image: '/protocolthumb/sweetpepper-removebg-preview.png', doc: { name: 'Protocol for Sweet Pepper', url: '/Protocol/SweetPepper.pdf' } },

    { id: 16, name: "Various Vegetable's", image: '/protocolthumb/variousvege-removebg-preview.png', doc: { name: "Protocol for Various Vegetable's", url: '/Protocol/VariousVegetables.pdf' } }, 

    { id: 17, name: 'Garlic', image: '/protocolthumb/garlic-removebg-preview.png', doc: { name: 'Protocol for Garlic', url: '/Protocol/Garlic.pdf' } }, 

    { id: 18, name: 'Watermelon', image: 'protocolthumb/watermelon-removebg-preview.png', docs: [
      { name: 'Protocol for \n WATERMELON - Direct Seeding', url: '/Protocol/WATERMELON-DirectSeeding.pdf' },
      { name: 'Protocol for \n WATERMELON - Transplanted', url: '/Protocol/WATERMELON-Transplanting.pdf' }
    ]
  },
  
];

function Protocol() {
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [modalTitle, setModalTitle] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = showModal ? 'hidden' : 'auto';

    return () => { document.documentElement.style.overflow = 'auto'; };
  }, [showModal]);

  const handleFruitClick = (fruit) => {
    setSelectedFruit(fruit);
    if (fruit.docs) {
      setSelectedDoc(fruit.docs[0].url);
      setModalTitle(fruit.docs[0].name);
    } else {
      setSelectedDoc(fruit.doc.url);
      setModalTitle(fruit.doc.name);
    }
    setShowModal(true);
  };

  const handleDocSelection = (pdf) => {
    setSelectedDoc(pdf.url);
    setModalTitle(pdf.name);
  };

  return (
    <section className="section_protocol" id="protocol">
      <h1 className="text-center">Protocol</h1>
      <p className="text-center">Select a fruit to view its protocol document.</p>
      <Container>
  <Row className="g-4 justify-content-center">
    {(showAll ? fruits : fruits.slice(0, 6)).map((fruit) => (
      <Col key={fruit.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
        <Card className="fruit-card text-center p-3 shadow-sm"
          data-id={fruit.id}
          onClick={() => handleFruitClick(fruit)}
          style={{ cursor: 'pointer', width: '240px' }}>
          <div className="fruit-image">
            <img src={fruit.image} alt={fruit.name} />
          </div>
          <Card.Body>
            <Card.Title>{fruit.name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>


      {/* See More / See Less Button */}
      <div className="text-center mt-4">
        <p 
          style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline', fontSize: '1.2rem' }} 
          onClick={() => {
            setShowAll((prev) => {
              const newState = !prev;
              if (!newState) { // If collapsing (showAll becomes false)
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

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg" backdrop="static" keyboard={false}>
        <Modal.Header closeButton className="d-flex justify-content-center w-100">
          {selectedFruit?.docs && (
            <Dropdown className="me-auto">
              <Dropdown.Toggle variant="secondary">
                {selectedFruit.name.toUpperCase()} PROTOCOLS
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {selectedFruit.docs.map((pdf, index) => (
                  <Dropdown.Item key={index} onClick={() => handleDocSelection(pdf)}>
                    {pdf.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          )}
          <div className="w-100 text-center">
            <Modal.Title style={{ whiteSpace: "pre-line", textAlign: "center", fontSize: "1.3rem", fontWeight: "medium" }}>
              {modalTitle}
            </Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body style={{ padding: 0, overflow: 'auto', maxHeight: '80vh' }}> 
          {selectedDoc && <iframe src={selectedDoc} title={modalTitle} width="100%" height="400px" style={{ border: 'none', display: 'block' }} />}
        </Modal.Body>
      </Modal>

      <style jsx>{`

          @keyframes fadeIn {
          from {
          opacity: 0;
          transform: translateY(20px);
        }
          to {
          opacity: 1;
          transform: translateY(0);
        }
      }

        .section_protocol {
          padding-top: 5px;
          background: linear-gradient(90deg, rgb(175, 242, 252), #ffffff);
          scroll-margin-top: 50px;
          min-height: 100vh;
          overflow-x: hidden;
          justify-content: center;
          align-items: center;
        }
          .modal-header .btn-close {
          position: absolute;
            right: 30px;
          }
                  .fruit-card {
            width: 240px;
            height: 180px;
            border-radius: 12px;
            overflow: hidden;
            color: black;
            font-size: 1.5rem;
            font-weight: bold;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }

          .fruit-card:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          }

        .fruit-image img {
          width: 100px;
          height: 100px;
          object-fit: contain;
          transition: transform 0.3s ease-in-out;
        }
          .fruit-card:hover .fruit-image img {
  transform: scale(1.1);
}
      `}</style>
    </section>
  );
}

export default Protocol;
