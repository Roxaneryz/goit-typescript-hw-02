import css from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard";
import { Image } from "../../models/ImageModel";

type Props = {
  images: Image[];
  onImageClick: (image:Image) =>  void;
};



const ImageGallery= ({ images, onImageClick }:Props) => {
  if (!images.length) {
    return null;
  }

  return (
    <ul className={css.imageGallery}>
      {images.map((image, index) => (
        <li
          key={index}
          className={css.imageGalleryItem}
          onClick={() => onImageClick(image)}
        >
          <ImageCard  imageInfo={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;



