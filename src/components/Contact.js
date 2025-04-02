// components/Contact.jsx
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="section_contact" id="contact">
      <h1 className='text-center'>Contact Us</h1>
      <p className='text-center fs-5'>Get in touch with us today!</p>
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} md={5}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-2" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-2" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-2" controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-2" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Your message here..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button 
                variant="primary" 
                type="submit"
                className="w-100"
                disabled={submitted}
              >
                {submitted ? 'Sent!' : 'Send Message'}
              </Button>
            </Form>
          </Col>
          <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                    <iframe
            title="Google Map"
            src={`https://www.google.com/maps/embed/v1/place?q=2nd+Flr.+The+Arete+Square,+Congressional+Ave.+Quezon+City,+Zip+Code+1106&key=AIzaSyB2RyzwQTj2HT_pQdGJLg-5Q4Nz106r8Ic`}
            width="100%"
            height="400"
            style={{ border: 0, marginTop: '20px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          </Col>
        </Row>
      </Container>
      <style jsx>{`
      .section_contact{
      background: linear-gradient(90deg, rgb(175, 242, 252), #ffffff);
      padding-top: 150px;
      padding: 5px 5px;  
      }
      .section_contact.dark-mode {
    background-color: #121212;
    color: #ffffff;
  }
  
  .section_contact.dark-mode .form-control {
    background-color: #1e1e1e;
    color: #ffffff;
    border: 1px solid #444;
  }
  
  .section_contact.dark-mode .form-label {
    color: #ffffff;
  }
  
  .section_contact.dark-mode .btn-primary {
    background-color: #6200ea;
    border: none;
  }
  
  .section_contact.dark-mode .btn-primary:hover {
    background-color: #3700b3;
  }
      `}</style>
    </section>
  );
}

export default Contact;
