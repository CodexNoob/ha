import React, { useEffect, useRef, useState } from "react";
import ProductImage1 from "../assets/imgs/Hi Res MASINAG BOTTLE.png";
import "../components/styles/product.css";
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
    </section>
  );
}

export default Product;