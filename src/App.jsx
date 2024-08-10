import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  // const handleSearchSubmit = () => {

  // setImages(sampleImages);
  // };

  return (
    <div>
      <SearchBar
        query={searchQuery}
        onChange={setSearchQuery}
        onSubmit={handleSearchQueryChange}
      />
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
