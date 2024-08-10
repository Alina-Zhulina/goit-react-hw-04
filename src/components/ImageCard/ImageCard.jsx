import css from "./ImageCard.module.css";

const ImageGalleryItem = ({ image }) => {
  return (
    <div className={css.imageContainer}>
      <img src={image.src} alt={image.alt} className={css.image} />
    </div>
  );
};

export default ImageGalleryItem;
