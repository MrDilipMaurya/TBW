import React, { useState } from 'react';

const TechDiscription = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div>
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => handleImageClick(index)}
            className={selectedImage === index ? 'selected' : ''}
          />
        ))}
      </div>
      {selectedImage !== null && (
        <div className="description-container">
          <h5>{images[selectedImage].title}</h5>
          <p className="description">{images[selectedImage].description}</p>
          <a href={images[selectedImage].link}>
            Learn more&nbsp;
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.01904 3.70605L12.8128 7.4998L9.01904 11.2936"
                stroke="#0174F3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.1875 7.5H12.7062"
                stroke="#0174F3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default TechDiscription;
