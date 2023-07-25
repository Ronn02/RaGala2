import React, { useState } from 'react';
import RagalaNavbar from '../../../../Navbar/RagalaNavbar';
import TreasureMountains1 from '../../../../../assets/destination/RIZAL/TREASURE MOUNTAINS/TREASURE MOUNTAINS, RIZAL - 1.jpg';
import TreasureMountains2 from '../../../../../assets/destination/RIZAL/TREASURE MOUNTAINS/TREASURE MOUNTAINS, RIZAL - 2.jpg';
import TreasureMountains3 from '../../../../../assets/destination/RIZAL/TREASURE MOUNTAINS/TREASURE MOUNTAINS, RIZAL - 3.jpg';
import PCNavBar from '../../../../Navbar/PCNavBar';

const TreasureMountains = () => {
  const [currentImage, setCurrentImage] = useState(TreasureMountains1);
  const [showModal, setShowModal] = useState(false);

  const images = [TreasureMountains1, TreasureMountains2, TreasureMountains3];

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
      <div className='w-full md:w-[50%]  flex justify-center items-center relative'>
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
        <h1 className='text-5xl font-bold text-center'>TreasureMountains</h1>
        <div className='flex mt-4 space-x-4'>
          <a
            href='https://www.klook.com/en-PH/activity/57782-treasure-mountain-day-tour-rizal/?spm=SearchResult.SearchResult_LIST&clickId=3c766af98c' // Replace with the actual booking site URL
            target='_blank'
            rel='noopener noreferrer'
            className='bg-blue-500 text-white px-4 py-2 rounded-md'
          >
            Book Now
          </a>
          <a
            href='https://ul.waze.com/ul?place=ChIJsW1SOAmTlzMRJt2VjkRjFZM&ll=14.60076300%2C121.36449960&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location' // Replace with the actual Waze URL
            target='_blank'
            rel='noopener noreferrer'
            className='bg-green-500 text-white px-4 py-2 rounded-md'
          >
            Get Directions (Waze)
          </a>
        </div>
        <div className='flex w-80 justify-center items-center mt-[30px]'>
            <p className='mx-3'>This tour takes you to Treasure Mountain, a popular destination for hiking, ATV riding, and ziplining. You can also visit the nearby Daranak Falls, a beautiful waterfall with several cascading pools.</p> 
          </div>
      </div>
      
      <RagalaNavbar />
    </div>
  );
};

export default TreasureMountains;
