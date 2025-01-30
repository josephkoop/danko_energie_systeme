import React, { useState, useEffect } from 'react';

const Home = () => {
  const images = [
    "photos/bushhog.jpg",
    "photos/driller.jpeg", 
    "photos/semi.jpeg", 
    "photos/feedtrailer.jpeg", 
    "photos/dump.jpg", 
    "photos/mpdbuilding.jpeg", 
    "photos/bumper.jpg", 
    "photos/yellowsemi.jpg", 
    "photos/crane.jpg",
    "photos/tank.jpeg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setVisible(true);
      }, 500);
    }, 7000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="main-section">
      <h1>Danko Energie Systeme</h1>
      <img
        id="slideshow"
        className={`images ${visible ? 'visible' : ''}`}
        src={images[currentIndex]}
        alt="slideshow"
      />
      <br />
      <p className="intro-paragraph">
        Danko Energie Systeme is a leading manufacturing company 
        based in Spanish Lookout, Belize, dedicated to producing innovative
        renewable energy solutions. Our expertise extends 
        beyond energy projects to include the design and fabrication 
        of high-quality farm equipment, semi-trailers, and buildings.
        For more information on 
        the industrial equipment currently available, head over to the 
        Products page.
      </p>
      <ul className="contact">
        <div>
          <a href="https://maps.app.goo.gl/ZGJLxCCtxxkSzYZH6"><img className="icon" src="icons/maps.jpg" alt="Maps Icon"/></a>
          <li><a href="https://maps.app.goo.gl/ZGJLxCCtxxkSzYZH6">Spanish Lookout, BZ</a></li>
        </div>
        <div>
          <a href="mailto:dankoenergie@gmail.com"><img className="icon" src="icons/email.png" alt="Email Icon"/></a>
          <li><a href="mailto:dankoenergie@gmail.com">dankoenergie@gmail.com</a></li>
        </div>
        <div>
          <a href="https://wa.me/5018230544"><img className="icon" src="icons/phone.png" alt="Phone Icon"/></a>
          <li><a href="https://wa.me/5018230544">(501) 823-0544</a></li>
        </div>
      </ul>
    </div>
  );
};

export default Home;
