import React, { useEffect, useRef, useState } from "react";
import ProductImage1 from "../assets/imgs/Hi Res MASINAG BOTTLE.png";
// import ProductImage2 from "../assets/imgs/MASINAG_BTL-removebg-preview.png";

function Product({ darkMode }) {
  const productRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = productRef.current; // Store the ref in a variable
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
  
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  

  return (
    <section
      ref={productRef}
      className={`product-section ${darkMode ? "dark" : ""}`}
      id="product"
    >
      <div className="product-content">
        {/* Product Images with Slide-in Effect */}
        <div className="product-images">
          <img
            src={ProductImage1}
            alt="Organic Product 1"
            className={`product-img ${isVisible ? "slide-in" : ""}`}
            style={{ animationDelay: "0.3s" }} // First image appears first
          />
        </div>

        {/* Product Text */}
        <div className="product-text">
          <h1>Our Organic Products</h1>
          <div className="features-benefits-container">
            <div className="features-benefits-list">
              <p><strong>MASINAG FEATURES</strong></p>
              <ul>
                <li>Organic; Liquid Plant Extract</li>
                <li>Contains nitrogen (N), phosphorus (P), potassium (K)</li>
                <li>Contains magnesium, zinc, iron, manganese, copper, sodium, calcium, and other micronutrients</li>
                <li>Contains phytochemicals such as alkaloids, saponins, and glycosides</li>
                <li>Plant growth booster</li>
                <li>Soil conditioner</li>
                <li>Compost activator</li>
                <li>Easy to apply</li>
                <li>Natural disease control properties</li>
                <li>Non-toxic</li>
              </ul>
            </div>

            <div className="features-benefits-list">
              <p><strong>Benefits (based on previous trials & studies)</strong></p>
              <ul>
                <li>At least 20% increase in yield</li>
                <li>Between 10% to 50% savings on fertilizer</li>
                <li>Provides the nutrients essential for growth</li>
                <li>Hastens and enhances the effect of mineral fertilizers and organic matter</li>
                <li>Makes plants resistant to diseases</li>
                <li>Cost-effective</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .product-section {
          display: flex;
          justify-content: flex-start;
          min-height: 100vh;
          height: auto; /* Let the height adapt to the content */
          padding: 10px 10%; /* Adjust padding as needed */
          background: linear-gradient(90deg, rgb(175, 242, 252), #ffffff);
          transition: background-color 0.3s, color 0.3s;
          overflow: hidden;
        }

        .product-text h1 {
    padding-bottom: 30px; /* Adjust the value as needed */
  }

        .product-content {
          margin: 0 auto;
          display: flex;
          align-items: flex-start;
          gap: 50px;
          justify-content: flex-start;
          max-width: 1200px;
          width: 100%;
        }

        .product-img {
          width: 100%;
          max-width: 150px;
          border-radius: 10px;
          height: auto;
          padding-top: 20px;
          object-fit: contain;
          opacity: 0;
          margin-left: 0;
          transform: translateX(-100%);
          transition: transform 0.8s ease-in-out, opacity 1s ease-in-out;
        }

        .product-img.slide-in {
          opacity: 1;
          transform: translateX(0);
        }

        .product-text {
          flex: 1;
          max-width: 100%;
          text-align: center;
        }

        .features-benefits-container {
          display: flex;
          justify-content: flex-start;
          gap: 20px;
          max-width: 800px;
        }

        .features-benefits-list {
          flex: 1;
          min-width: 300px;
          text-align: left;
        }

        /* Dark Mode */
        .product-section.dark {
          background-color: #222;
        }

        .product-section.dark .product-text h2,
        .product-section.dark .product-text p {
          color: #fff !important;
        }
        
        // @media (min-width: 1001px) and (max-width: 1800px) {
        //   .product-section {
        //     padding-bottom: 150px; /* Ensure consistent padding for this range */
        //     }
        //     .product-content{
        //     gap: 50px;
        //     }
        // }

        @media (min-width: 1001px) {
          .product-img {
            max-width: 200px; /* Adjust size for desktop */
            width: auto;
            height: auto;
          }
        }

        /* Responsive */
        @media (max-width: 1000px){
          .product-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding-top: 5px;
          }

          .product-section {
            padding-bottom: 20px; /* Adjust padding for smaller screens */
          }

          .features-benefits-container {
            flex-direction: column;
            align-items: center;
            margin-left: 0;
          }

          .features-benefits-list {
            min-width: unset;
            margin-bottom: 20px;
          }

          .product-images {
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }

          .product-img {
            max-width: 200px;
            width: 100%;
            height: auto;
            margin-left: 0;
          }
        }

        @media (max-width: 768px) {
          .product-section {
            padding-left: 5%;
            padding-right: 5%;
          }
          .product-content{
          padding-top: 5px;
          }

          .product-img {
            width: 100%;
            max-width: 150px;
          }

          .features-benefits-container {
            gap: 20px;
          }
        }
          

        @media (max-width: 480px) {
          .product-section {
            padding: 20px;
          }

          .product-content{
          padding-top: 1px;
          }

          .product-img {
            max-width: 120px;
          }

          .features-benefits-container {
            gap: 10px;
          }

          .features-benefits-list {
            font-size: 14px;
          }

          .product-text h2 {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
}

export default Product;