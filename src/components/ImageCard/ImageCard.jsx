import React from "react";
import s from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  console.log(onClick);
  return (
    <div className={s.imageCard} onClick={() => onClick(image.urls.full)}>
      <img src={image.urls.thumb} alt={image.tags} />
    </div>
  );
};

export default ImageCard;
