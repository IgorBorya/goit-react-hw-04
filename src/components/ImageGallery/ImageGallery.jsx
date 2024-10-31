import React from "react";
import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li className={s.galleryItem} key={image.id}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
