import React, { useState, useEffect } from "react";
import "../components/styles/navbar.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../assets/imgs/logo.png";

function NavBar() {
  const [darkMode] = useState(localStorage.getItem("darkMode") === "enabled");
  const [expanded, setExpanded] = useState(false); // Navbar toggle state

  const navItems = ["Home", "Product", "Protocol", "Gallery", "Testimonial", "Certificate"];

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  }, [darkMode]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    const navbar = document.querySelector(".navbar");
    const isMobile = window.innerWidth <= 992; // adjust based on your design
    const navbarHeight = navbar ? navbar.offsetHeight : 80;
  
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const sectionsWithOffset = 
      [
      "product", 
      "protocol", 
      "gallery", 
      "testimonial", 
      "certificate"
    ]; // Add your section IDs here
      const extraOffset = isMobile && sectionsWithOffset.includes(targetId) ? -220 : 0; // Adjust this value as needed for desktop
      window.scrollTo({
        top: elementPosition - navbarHeight - extraOffset, // smaller adjustment on mobile
        behavior: "smooth",
      });
    }
  
    setExpanded(false);
  };
  
  return (
    <Navbar
      fixed="top"
      expand="lg"
      expanded={expanded} // Control navbar state
      className={`navbar ${darkMode ? "dark-navbar" : "light-navbar"}`}
      variant={darkMode ? "dark" : "light"}
    >
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex align-items-center ps-3">
          <img src={Logo} width="70" height="50" className="d-inline-block align-top" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="custom-toggle"
          onClick={() => setExpanded(!expanded)} // Toggle navbar
        />
        <Navbar.Collapse id="navbarScroll" in={expanded}>
          <Nav className="me-auto nav-links">
            {navItems.map((item) => (
              <Nav.Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-text holographic-card"
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
