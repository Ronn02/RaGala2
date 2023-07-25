import React, { useState } from 'react';
import RagalaNavbar from '../../../../Navbar/RagalaNavbar';
import FortuneIsland1 from '../../../../../assets/destination/BATANGAS/FORTUNE ISLAND/FORTUNE ISLAND, BATANGAS - 1.jpg';
import FortuneIsland2 from '../../../../../assets/destination/BATANGAS/FORTUNE ISLAND/FORTUNE ISLAND, BATANGAS - 2.jpg';
import FortuneIsland3 from '../../../../../assets/destination/BATANGAS/FORTUNE ISLAND/FORTUNE ISLAND, BATANGAS - 3.png';
import PCNavBar from '../../../../Navbar/PCNavBar';

const FortuneIsland = () => {
  const [currentImage, setCurrentImage] = useState(FortuneIsland1);
  const [showModal, setShowModal] = useState(false);

  const images = [FortuneIsland1, FortuneIsland2, FortuneIsland3];

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
    <div className='w-full min-h-screen md:flex' /* additional css*/ >
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
      <div className='flex flex-col items-center justify-center mt-10 mx-3 md:w-[50%] md:mt-[20%] lg:mt-[10%]'/*changed */> 
        <h1 className='text-5xl font-bold'>Fortune Island</h1>
        <div className='flex mt-4 space-x-4'>
          <a
            href='https://www.airbnb.com/fortune-island-philippines/stays' // booking site URL
            target='_blank'
            rel='noopener noreferrer'
            className='bg-blue-500 text-white px-4 py-2 rounded-md'
          >
            Book Now
          </a>
          <a
            href='https://www.waze.com/live-map/directions/ph/calabarzon/nasugbu/fortune-island?to=place.ChIJNTymjPfqvTMRmZ46pf_AMUg' //Waze URL
            target='_blank'
            rel='noopener noreferrer'
            className='bg-green-500 text-white px-4 py-2 rounded-md'
          >
            Get Directions (Waze)
          </a>
        </div>
        <div className='flex w-80 justify-center items-center mt-[30px]' /*added some css*/>
            <p className='mx-3'>Fortune Island is a hidden gem nestled in the turquoise waters of the Batangas Strait, Philippines. Located just off the coast of Nasugbu, Batangas, this enchanting island is a dream destination for adventurous souls and history enthusiasts alike. Its allure lies in the mystical combination of its ancient Greek-inspired architecture, pristine beaches, and stunning rock formations, making it a truly unique and unforgettable experience.</p> 
        </div>
      </div>
      <RagalaNavbar />
    </div>
  );
};

export default FortuneIsland;
