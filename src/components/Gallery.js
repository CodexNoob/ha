import React, { useState, useEffect, useCallback,  } from "react";
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
          {(showAll ? images : images.slice(0, 4)).map((img, index) => (
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
            <FontAwesomeIcon icon={faTimes} />
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

      <style>{`
      @keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.thumbs img {
  animation: fadeIn 0.6s ease-in-out forwards;
  opacity: 0; /* Start hidden */
}

/* Thumbnail Gallery */

.section_gallery {
          background: linear-gradient(90deg, rgb(175, 242, 252), #ffffff);
          scroll-margin-top: 50px;
          min-height: 100vh; /* Adjusted for navbar height */
          height: auto;
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-center;
          align-items: center;
          margin-bottom: 0; /* Remove extra margin at the bottom */
        }


.thumbs {
   display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  overflow: hidden;
  max-width: 100%; 
  transition: max-height all 0.8s ease-in-out;
}


.thumbs.show-all {
  max-height: 2000px; /* Expand smoothly */
}

.thumbs img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, filter 0.2s ease-in-out;
  filter: grayscale(50%);
}

.thumbs.show-all img {
  opacity: 1;
  transform: scale(1);
}

.thumbs img:hover {
  transform: scale(1.1);
  filter: grayscale(0%);
}

/* See More Button */
.see-more-btn {
  display: block;
  margin: 20px auto;
  background: none;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.see-more-btn:hover {
  background: none;
}

/* Lightbox Modal */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.lightbox-content {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 60px;
}

.lightbox-content img {
  max-width: 85vw;
  max-height: 85vh;
  padding: 10px;
  min-width: 60vw;
  min-height: 50vh;
  object-fit: cover;
  border-radius: 5px;
}

/* Navigation Buttons */
.nav-btn {
  position: absolute;
  background: transparent !important; 
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;
  padding: 20px;
  border-radius: 50%;
}

.nav-btn:hover,
.close-btn:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.2);
}

/* Button Positioning */
.nav-btn.left {
  left: -40px;
}

.nav-btn.right {
  right: -40px;
}

/* Close Button */
.close-btn {
  position: absolute;
  top: 70px;
  right: 20px;
  margin-top: 15px;
  margin-right: 15px;
  right: 10px;
  background: transparent !important;
  border: none;
  font-size: 2.5rem;
  color: white !important;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
  padding: 10px;
  border-radius: 50%;
   z-index: 1100;
}

.close-btn:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.8);
}

/* Gallery Selection Buttons */
.gallery-switch {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 25px;
  margin-bottom: 25px;
}

.gallery-btn {
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;  
  border: none;
  border-radius: 0px;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;
  background: #ffffff;
  color: black;
}

.gallery-btn.active {
  background:rgb(51, 59, 68);
  color: white;
}

.gallery-btn:hover {
  background:rgb(0, 0, 0);
  color: white;
  transform: scale(1.05);
}


@media (max-width: 600px) {
  .gallery-switch {
    padding: 0 20px;
    flex-wrap: wrap;
  }

  .gallery-btn {
    flex: 1 1 45%;
    text-align: center;
  }

  .thumbs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    justify-items: center;
    padding: 0 20px;
  }

  .thumbs img {
    width: 100%;
    height: auto;
    max-width: 170px;
    aspect-ratio: 1 / 1;
  }
}


`}</style>
    </section>
  );
};

export default Gallery;
