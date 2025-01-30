import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const ProductSection = ({ title, imageSrc, altText, description, features, additionalNote, extraImages }) => {

  const [mainImage, setMainImage] = useState({
    src: imageSrc,
    alt: altText
  });
  
  const handleClick = (event) => {
    setMainImage({
      src: event.target.src,
      alt: event.target.alt
    });
  };

  const [listLength, setListLength] = useState(0);

  useEffect(() => {
    setListLength(features.length);
  }, [features]);


  return (
    <section className="main-section">
      <div className="product-heading">
        <Link to="/products"><button>Back</button></Link>
        <h1>{title}</h1>
      </div>
      <div className="drillerLayout">
        <div>
          <img className="drillerImage" src={mainImage.src} alt={mainImage.alt} />
          {extraImages && (
            <div className="picture-list">
              {extraImages.map((img, index) => (
                <img key={index} src={img.src} alt={img.alt} onClick={handleClick}/>
              ))}
            </div>
          )}
        </div>
        <div style={{ "--list-length": listLength }}>
          <p className="product-description">{description}</p>
          <ul className="featuresList">
            {features.map((feature, index) => (
              <li key={index} style={{ "--i": index + 1 }}>{feature}</li>
            ))}
          </ul>
          {additionalNote && <p className="additional"><em>{additionalNote}</em></p>}
        </div>
      </div>
      <div className="note">
        <p>Note: Products may need to be ordered in advance and are not always available. Visit our office to learn more.</p>
      </div>
    </section>
  );
};

export default ProductSection;