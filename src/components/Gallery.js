import React, { useState, useEffect, useCallback,  } from "react";
import "../components/styles/gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/imgs/Island Rose Feb 9, 2015/Greenhouse handled by Ms. Mae Ann 2.JPG";
import img2 from "../assets/imgs/Island Rose Feb 9, 2015/Ms. Mae Ann with her plenty harvested Rose for the Mother's Day.jpg";
import img3 from "../assets/imgs/Island Rose Feb 9, 2015/Ms. Mae Ann-technician of Island Rose- wearing White long sleeve.jpg";
import img4 from "../assets/imgs/Island Rose Feb 9, 2015/Newly harvest ready for packaging.jpg";
import img5 from "../assets/imgs/Island Rose Feb 9, 2015/Newly harvest red rose in Island Rose in Tagaytay.jpg";
import img6 from "../assets/imgs/Island Rose Feb 9, 2015/Newly harvested rose sprayed with Masinag.jpg";
import img7 from "../assets/imgs/Island Rose Feb 9, 2015/Production area  of Island Rose.jpg";
import img8 from "../assets/imgs/Island Rose Feb 9, 2015/Set of ordered ready for delivery.jpg";
import img9 from "../assets/imgs/Island Rose Feb 9, 2015/P1300327.JPG";
import img10 from "../assets/imgs/Island Rose Feb 9, 2015/P1300330.JPG";
import img11 from "../assets/imgs/Island Rose Feb 9, 2015/Rose sprayed with Masinag 2.JPG";
import img12 from "../assets/imgs/Island Rose Feb 9, 2015/Rose sprayed with Masinag 3.JPG";
import img13 from "../assets/imgs/Island Rose Feb 9, 2015/Rose sprayed with Masinag 4.JPG";
import img14 from "../assets/imgs/Island Rose Feb 9, 2015/Rose sprayed with Masinag 5.JPG";
import img15 from "../assets/imgs/Island Rose Feb 9, 2015/Rose sprayed with Masinag 6.JPG";
import img16 from "../assets/imgs/Island Rose Feb 9, 2015/Rose sprayed with Masinag 7.JPG";
import img17 from "../assets/imgs/Island Rose Feb 9, 2015/Rose sprayed with Masinag 8.JPG";
import img18 from "../assets/imgs/Island Rose Feb 9, 2015/Rose sprayed with Masinag 9.JPG";
import img19 from "../assets/imgs/Island Rose Feb 9, 2015/Rose sprayed with Masinag 10.JPG";
import img20 from "../assets/imgs/Island Rose Feb 9, 2015/Rose sprayed with Masinag 11.JPG";
import img21 from "../assets/imgs/Island Rose Feb 9, 2015/Rose sprayed with Masinag.JPG";
import img22 from "../assets/imgs/Island Rose Feb 9, 2015/Set of ordered ready for delivery.jpg";

import garden1 from "../assets/imgs/Sonyas Garden Feb 9, 2015/2015-02-12 16.48.05.jpg";
import garden2 from "../assets/imgs/Sonyas Garden Feb 9, 2015/2015-02-12 16.48.34.jpg";
import garden3 from "../assets/imgs/Sonyas Garden Feb 9, 2015/15364_10152770151637672_3931714422731023233_n.jpg";
import garden4 from "../assets/imgs/Sonyas Garden Feb 9, 2015/10690154_10152770151447672_1521898863416072084_n.jpg";
import garden5 from "../assets/imgs/Sonyas Garden Feb 9, 2015/Mr. Bernie - Farm Manager.jpg";
import garden6 from "../assets/imgs/Sonyas Garden Feb 9, 2015/Mr. Bernie (Farm Manager of Sonya's Garden) show their Tomato treated with Masinag.JPG";
import garden7 from "../assets/imgs/Sonyas Garden Feb 9, 2015/Organic Tomato in Sonya's Garden Farm.jpg";
import garden8 from "../assets/imgs/Sonyas Garden Feb 9, 2015/P1300261.JPG";
import garden9 from "../assets/imgs/Sonyas Garden Feb 9, 2015/P1300301.JPG";
import garden10 from "../assets/imgs/Sonyas Garden Feb 9, 2015/P1300315.JPG";
import garden11 from "../assets/imgs/Sonyas Garden Feb 9, 2015/P1300316.JPG";
import garden12 from "../assets/imgs/Sonyas Garden Feb 9, 2015/REd and Green Lettuce planted in Sonya's Garden with Masinag.JPG";
import garden13 from "../assets/imgs/Sonyas Garden Feb 9, 2015/Sonya's Garden Tomato sprayed with Masinag.jpg";
import garden14 from "../assets/imgs/Sonyas Garden Feb 9, 2015/Toamto1.jpg";
import garden15 from "../assets/imgs/Sonyas Garden Feb 9, 2015/tomato.jpg";
import garden16 from "../assets/imgs/Sonyas Garden Feb 9, 2015/tomato4.jpg";
import garden17 from "../assets/imgs/Sonyas Garden Feb 9, 2015/tomato5.jpg";
import garden18 from "../assets/imgs/Sonyas Garden Feb 9, 2015/tomato6.jpg";
import garden19 from "../assets/imgs/Sonyas Garden Feb 9, 2015/Vibrant and healthy oragnic lettuce  sprayed with Masinag.jpg";


const islandRoseImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22];
const sonyasGardenImages = [garden1, garden2, garden3, garden4, garden5, garden6, garden7, garden8, garden9, garden10, garden11, garden12, garden13, garden14, garden15, garden16, garden17, garden18, garden19];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState("islandRose");

  const images = selectedGallery === "islandRose" ? islandRoseImages : sonyasGardenImages;

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden"; // Disable background scrolling
      document.documentElement.style.overflow = "hidden"; // Prevent scrolling on the root element
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isLightboxOpen]);
  
  
  const openLightbox = (index, e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = (e) => {
    e.stopPropagation();
    setIsLightboxOpen(false);
  };
  
  const nextImage = useCallback((e) => {
    e.stopPropagation();
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);
  
  const prevImage = useCallback((e) => {
    e.stopPropagation();
    setActiveIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
  );
}, [images.length]);

useEffect(() => {
  const handleKeyDown = (e) => {
    if (!isLightboxOpen) return;
    if (e.key === "ArrowRight") nextImage(e);
    if (e.key === "ArrowLeft") prevImage(e);
    if (e.key === "Escape") setIsLightboxOpen(false);
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [isLightboxOpen, nextImage, prevImage]);

return (
    <section className="section_gallery" id="gallery">
      <h1 className="text-center">Gallery</h1>
      <p className="text-center">Click on an image to view it in full size.</p>
      <div className="gallery-switch">
        <button
          className={`gallery-btn ${selectedGallery === "islandRose" ? "active" : ""}`}
          onClick={() => setSelectedGallery("islandRose")}
        >
          Island Rose Feb 9, 2015
        </button>
        <button
          className={`gallery-btn ${selectedGallery === "sonyasGarden" ? "active" : ""}`}
          onClick={() => setSelectedGallery("sonyasGarden")}
        >
          Sonya's Garden Feb 9, 2015
        </button>
      </div>

      <div className="gallery-container">
        <div className="thumbs">
          {(showAll ? images : images.slice(0, 6)).map((img, index) => (
            <img key={index} src={img} alt="" onClick={(e) => openLightbox(index, e)} />
          ))}
        </div>
        <p 
  style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline', textAlign: 'center', marginTop: '70px', fontSize: '1.2rem' }} 
  onClick={() => {
    setShowAll((prev) => {
      const newState = !prev;
      if (!newState) { // If collapsing (showAll becomes false)
        setTimeout(() => {
          document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
      return newState;
    });
  }}
>
  {showAll ? 'See Less' : 'See More'}
</p>

      </div>

      {isLightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="close-btn" onClick={closeLightbox}>
            <FontAwesomeIcon icon={faTimes} style={{ color: "white" }} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="nav-btn left" onClick={prevImage}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <img src={images[activeIndex]} alt="Large View" />
            <button className="nav-btn right" onClick={nextImage}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
