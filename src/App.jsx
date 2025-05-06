import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { fetchImages } from "./api/pexels";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!searchTerm) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchImages(searchTerm, page);
        setItems(prev => [...prev, ...data.results]);
        setTotalResults(data.total_results);
        setError(null);
      } catch (err) {
        setError("Something went wrong while loading images!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, page]);

  const handleSearch = query => {
    setSearchTerm(query);
    setItems([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const handleImageClick = imageData => {
    setModalImage(imageData);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <div
      style={{
        backgroundImage: "url('/pirate-bg.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "#f0e6d2",
        padding: "0 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Pirata One', cursive"
      }}
    >
      <SearchBar onSubmit={handleSearch} />

      {error && <ErrorMessage message={error} />}
      {items.length > 0 && (
        <ImageGallery items={items} onImageClick={handleImageClick} />
      )}
      {isLoading && <Loader />}
      {items.length > 0 &&
        items.length < totalResults &&
        !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}

      <ImageModal
        isOpen={modalImage !== null}
        onClose={handleCloseModal}
        data={modalImage}
      />
    </div>
  );
};

export default App;
