import { useState,  useEffect } from "react"
// import css from "./App.css"

import getImages from "../unsplash-api"
import ErrorMessage    from "../ErrorMassage/ErrorMessage"
import ImageModal from "../ImageModal/ImageModal"
import Loader from "../Loader/Loader"
import ImageGallery from "../ImageGallery/ImageGallery"
import LoaderMore from "../LoadMoreBtn/LoaderMore"
import SearchBar from "../SearchBar/SearchBar"
import { Image } from "../../models/ImageModel"



const App = () => {

    const [images, setImages] = useState<Image[]>([]);
    const [page, setPage] = useState<number>(1);
    const [error, setError] = useState<string|null>(null);
    const [isLoader, setIsLoader] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [searchImg, setSearchImg] = useState<string>("");
    const [selectedImg, setSelectedImg] = useState<Image| null>(null);

    // const loaderMoreBtnRef = useRef(null);



    useEffect(() => {
        if (!searchImg) return;
        setIsLoader(true);
        getImages(searchImg, page)

            .then(({ results }) => {
                setImages((prevImages) => [...prevImages, ...results]);
                setIsLoader(false);
            }).catch((error) => {
                setError(error.message);
                setIsLoader(false);
            })
    }, [searchImg, page]);


    const handleSearch = (query:string) => {
        setSearchImg(query);
        setPage(1);
        setImages([]);
}


    const handleLoaderMore = () => {
        setPage((prevPage) => prevPage + 1);
    }

    const handleImgClick = (image:Image) => {
        setSelectedImg(image);
        setShowModal(true);
    }

    const closeModal = () => {
        setSelectedImg(null);
        setShowModal(false);
    }




  return (
    <div>
      <h1>Image Search App</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      <ImageGallery images={images} onImageClick={handleImgClick} />
      {isLoader && <Loader />}
      {images.length > 0 && !isLoader && (
        <LoaderMore onClick={handleLoaderMore} />
        //   ref={loaderMoreBtnRef}
      )}
      {showModal && selectedImg&&(
        <ImageModal
          isOpen={showModal}
          image={selectedImg}
          onClose={closeModal}
          
          likes={selectedImg.likes}
          author={selectedImg.user.name}
        />
      )}
    </div>
  );
}

export default App