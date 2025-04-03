import React, { useState, useEffect } from "react";
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
  const navbarHeight = navbar ? navbar.offsetHeight : 80; // Get navbar height dynamically

  if (targetElement) {
    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY; // Get accurate position
    window.scrollTo({
      top: elementPosition - navbarHeight - 10, // Adjust based on navbar height
      behavior: "smooth",
    });
  }

  setExpanded(false); // Close navbar on mobile
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
        <Navbar.Brand href="#" className="d-flex align-items-center ps-4">
          <img src={Logo} width="70" height="50" className="d-inline-block align-top" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="custom-toggle"
          onClick={() => setExpanded(expanded ? false : true)} // Toggle navbar
        />
        <Navbar.Collapse id="navbarScroll">
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

      <style>{`
        /* Light Mode Navbar */
        .light-navbar {
          background: #ffffff;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
        }

        /* Dark Mode Navbar */
        .dark-navbar {
          background: linear-gradient(5deg, white, orange) !important;
          box-shadow: 0px 4px 12px rgba(255, 255, 255, 0.1);
        }

        /* Responsive Navbar */
        .navbar {
          padding: 10px 15px;
        }

        /* Navbar Toggle Button */
        .custom-toggle {
          border: none !important;
          background-color: transparent !important;
        }
        .custom-toggle:focus {
          box-shadow: none !important;
        }

        /* Navigation Links */
        .nav-text {
          font-size: 1rem;
          font-weight: 500;
          margin-right: 20px;
          text-transform: uppercase;
          padding: 10px 15px;
          transition: all 0.3s ease;
        }

        /* Holographic Hover Effect */
        .holographic-card {
          padding: 6px 12px;
          border-radius: 8px;
          transition: all 0.3s ease;
          background: transparent !important;
        }
        .holographic-card:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px rgb(0, 0, 0);
        }

        /* Dark & Light Mode Styling */
        .dark-navbar .nav-text {
          color: white !important;
        }
        .light-navbar .nav-text {
          color: black !important;
        }

        /* Dark Mode Holographic Effect */
        .dark-navbar .holographic-card {
          background: #111;
          color: white !important;
        }

        /* Dark Mode Toggle Button */
        .toggle-btn {
          padding: 6px 10px;
          border-radius: 5px;
          font-size: 1.1rem;
          background-color: transparent;
          border: 1px solid gray;
          color: ${darkMode ? "white" : "black"};
          cursor: pointer;
          transition: 0.3s ease;
        }
        .toggle-btn:hover {
          background-color: ${darkMode ? "white" : "black"};
          color: ${darkMode ? "black" : "white"};
        }

        /* Responsive Adjustments */
        @media (max-width: 1024px) {
          .nav-text {
            font-size: 1.2rem;
            text-align: center;
            width: 100%;
            padding: 8px;
          }
        }
      `}</style>
    </Navbar>
  );
}

export default NavBar;
