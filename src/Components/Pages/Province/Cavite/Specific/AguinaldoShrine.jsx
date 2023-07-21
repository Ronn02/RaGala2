import React, { useState } from 'react';
import RagalaNavbar from '../../../../Navbar/RagalaNavbar';
import aguinaldoshrine1 from '../../../../../assets/destination/CAVITE/AGUINALDO SHRINE/AGUINALDO SHRINE, CAVITE - 1.jpg';
import aguinaldoshrine2 from '../../../../../assets/destination/CAVITE/AGUINALDO SHRINE/AGUINALDO SHRINE, CAVITE - 2.jpg';
import aguinaldoshrine3 from '../../../../../assets/destination/CAVITE/AGUINALDO SHRINE/AGUINALDO SHRINE, CAVITE - 3.jpg';

const AguinaldoShrine = () => {
  const [currentImage, setCurrentImage] = useState(aguinaldoshrine1);
  const [showModal, setShowModal] = useState(false);

  const images = [aguinaldoshrine1, aguinaldoshrine2, aguinaldoshrine3];

  const handlePrevious = () => {
    const currentIndex = images.indexOf(currentImage);
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[previousIndex]);
  };

  const handleNext = () => {
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='w-full min-h-screen'>
      <div className='w-full bg-blue-100 flex justify-center items-center relative'>
        {images.length > 1 && (
          <>
            <button
              className='absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-black text-white rounded-l-lg'
              onClick={handlePrevious}
            >
              &lt;
            </button>
            <button
              className='absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-black text-white rounded-r-lg'
              onClick={handleNext}
            >
              &gt;
            </button>
          </>
        )}
        <img
          className='w-[400px] h-[300px] cursor-pointer'
          src={currentImage}
          alt=""
          onClick={() => handleImageClick(currentImage)}
        />
        {showModal && (
          <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50'>
            <div className='relative'>
              <img
                className='max-w-full max-h-full cursor-pointer'
                src={currentImage}
                alt=""
              />
              <button
                className='absolute top-0 right-0 m-2 px-3 py-1 bg-gray-600 text-white rounded'
                onClick={handleCloseModal}
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
      <div className='flex justify-center items-center mt-[10px]'>
        <h1 className='text-5xl font-bold'>Aguinaldo Shrine</h1>
      </div>
      <RagalaNavbar />
    </div>
  );
};

export default AguinaldoShrine;
