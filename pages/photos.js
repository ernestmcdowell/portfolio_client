import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import api from "../api/api";
import Link from "next/link";
import BlogFooter from "../components/blog_footer";
import ModalComponent from "../components/ModalComponent";

const Photos = () => {
  const [photoList, setPhotoList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchImages = async (page) => {
    try {
      const response = await api.fetchAdventurePhotos(page);
      console.log("Photos:", response);
      setPhotoList(response.results);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  useEffect(() => {
    fetchImages(currentPage);
  }, [currentPage]);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <section>
        <Navbar />
      </section>
      <section className="flex-grow">
        <div className="grid grid-cols-1 gap-8 p-10 sm:grid-cols-2 md:grid-cols-3">
          {photoList.map((photo) => (
            <div
              key={photo.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden"
            >
              <img
                src={photo.image}
                className="w-full h-full hover:scale-110 transition duration-500 cursor-pointer object-cover object-cover"
                alt="Adventure Photo"
                onClick={() => setSelectedImage(photo.image)}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-l focus:outline-none ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r focus:outline-none"
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </section>
      {selectedImage && (
        <ModalComponent
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
      <footer>
        <BlogFooter />
      </footer>
    </div>
  );
};

export default Photos;
