import css from "./ImageCard.module.css"
import { Image } from "../../models/ImageModel";

type Props = {
  imageInfo: Image;
};

const ImageCard= ({ imageInfo }:Props) => {
  const { urls, alt_description, user, likes } = imageInfo;

  return (
    <div className={css.imageCard}>
      <img src={urls.small} alt={alt_description || "Image"} />
          <div className={css.imageItem}>
        <p>Author: {user.name}</p>
        <p>Likes: {likes}</p>
      </div>
    </div>
  );
};


export default ImageCard