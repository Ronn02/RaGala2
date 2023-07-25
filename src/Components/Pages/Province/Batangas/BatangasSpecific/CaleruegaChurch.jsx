import React, { useState } from 'react';
import RagalaNavbar from '../../../../Navbar/RagalaNavbar';
import CaleruegaChurch1 from '../../../../../assets/destination/BATANGAS/CALERUEGA CHURCH/CALERUEGA CHURCH, BATANGAS - 1.jpg';
import CaleruegaChurch2 from '../../../../../assets/destination/BATANGAS/CALERUEGA CHURCH/CALERUEGA CHURCH, BATANGAS - 2.jpg';
import CaleruegaChurch3 from '../../../../../assets/destination/BATANGAS/CALERUEGA CHURCH/CALERUEGA CHURCH, BATANGAS - 4.jpg';
import PCNavBar from '../../../../Navbar/PCNavBar';

const CaleruegaChurch = () => {
  const [currentImage, setCurrentImage] = useState(CaleruegaChurch1);
  const [showModal, setShowModal] = useState(false);

  const images = [CaleruegaChurch1, CaleruegaChurch2, CaleruegaChurch3];

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
    <div className='w-full min-h-screen md:flex'>
      <PCNavBar></PCNavBar>
      <div className='w-full md:w-[50%] flex justify-center items-center relative'>
        {images.length > 1 && (
          <>
            <button
              className='absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-black text-white rounded-l-lg opacity-50'
              onClick={handlePrevious}
            >
              &lt;
            </button>
            <button
              className='absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-black text-white rounded-r-lg opacity-50'
              onClick={handleNext}
            >
              &gt;
            </button>
          </>
        )}
        <img
          className='w-[400px] md:w-[100vh]  md:h-[100vh] h-[300px]  cursor-pointer'
          src={currentImage}
          alt=""
          onClick={() => handleImageClick(currentImage)}
        />
        {showModal && (
          <div className='fixed top-0 left-0 w-full h-full  flex justify-center items-center bg-black bg-opacity-50'>
            <div className='relative items-center'>
              <img
                className='max-w-full max-h-full md:max-w-[800px] md:max-h-[600px] cursor-pointer'
                src={currentImage}
                alt=""
              />
              <button
                className='absolute top-0 right-0 m-2 px-3 py-1 bg-gray-600 text-white rounded'
                onClick={handleCloseModal}
              >
                X
              </button>
              {images.length > 1 && (
                <>
                  <button
                    className='absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-black text-white rounded-l-lg opacity-50'
                    onClick={handlePrevious}
                  >
                    &lt;
                  </button>
                  <button
                    className='absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-black text-white rounded-r-lg opacity-50'
                    onClick={handleNext}
                  >
                    &gt;
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
  
      <div className='flex flex-col items-center justify-center mt-10 mx-3 md:w-[50%] md:mt-[20%] lg:mt-[5%]'>
        <h1 className='text-5xl font-bold text-center'>Caleruega Church</h1>
        <div className='flex mt-4 space-x-4'>
          <a
            href='https://booking-site-url.com' // Replace with the actual booking site URL
            target='_blank'
            rel='noopener noreferrer'
            className='bg-blue-500 text-white px-4 py-2 rounded-md justify-center items-center'
          >
            Book Now
          </a>
          <a
            href='https://waze.com' // Replace with the actual Waze URL
            target='_blank'
            rel='noopener noreferrer'
            className='bg-green-500 text-white px-4 py-2 rounded-md justify-center items-center'
          >
            Get Directions (Waze)
          </a>
        </div>
          <div className='flex w-80 justify-center items-center mt-[30px]'>
            <p className='mx-3'>The Transfiguration Chapel is an alternative name for Caleruega Church. It is a stunning chapel positioned atop the tallest hill, surrounded by breathtakingly expansive views of the scenery.
This church in Nasugbu, Batangas, may reflect a profoundly spiritual and religious environment because to its great location at the top of the hill.</p> 
          </div>
      </div>
      
      <RagalaNavbar />
    </div>
  );
};

export default CaleruegaChurch;
