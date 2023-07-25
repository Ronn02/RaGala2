import React, { useState } from 'react';
import RagalaNavbar from '../../../../Navbar/RagalaNavbar';
import SkyRanchTagaytay1 from '../../../../../assets/destination/CAVITE/SKYRANCH TAGAYTAY/SKYRANCH TAGAYTAY, CAVITE - 1.jpg';
import SkyRanchTagaytay2 from '../../../../../assets/destination/CAVITE/SKYRANCH TAGAYTAY/SKYRANCH TAGAYTAY, CAVITE - 2.jpg';
import SkyRanchTagaytay3 from '../../../../../assets/destination/CAVITE/SKYRANCH TAGAYTAY/SKYRANCH TAGAYTAY, CAVITE - 3.jpg';
import PCNavBar from '../../../../Navbar/PCNavBar';
import StarRating from '../../../StarRating/StarRating';


const SkyRanchTagaytay = () => {
  const [currentImage, setCurrentImage] = useState(SkyRanchTagaytay1);
  const [showModal, setShowModal] = useState(false);

  const images = [SkyRanchTagaytay1, SkyRanchTagaytay2, SkyRanchTagaytay3];

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
  const [userRating, setUserRating] = useState(4.5);
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

        <h1 className='text-5xl font-bold'>Sky Ranch Tagaytay</h1>
        <StarRating rating={userRating} onChange={setUserRating} />
        <div className='flex mt-4 space-x-4'>
          <a
            href='https://www.klook.com/en-PH/activity/14539-sky-ranch-tagaytay-ride-all-you-can-day-pass-manila/' // Replace with the actual booking site URL
            target='_blank'
            rel='noopener noreferrer'
            className='bg-blue-500 text-white px-4 py-2 rounded-md'
          >
            Book Now
          </a>
          <a
            href='https://www.waze.com/live-map/directions/ph/calabarzon/tagaytay/sky-ranch-tagaytay?to=place.ChIJraVCd6R3vTMRresxvaQ6gmA' // Replace with the actual Waze URL
            target='_blank'
            rel='noopener noreferrer'
            className='bg-green-500 text-white px-4 py-2 rounded-md'
          >
            Get Directions (Waze)
          </a>
        </div>
        <div className='flex w-80 justify-center items-center mt-[30px]'>

        <p className='mt-[30px]'>Skyranch Tagaytay is a popular amusement park with a variety of rides, including a zipline, a roller coaster, and a Ferris wheel. You can also enjoy the panoramic views of Taal Lake and the surrounding mountains.</p>
        </div>
      </div>
      
      <RagalaNavbar />
    </div>
  );
};

export default SkyRanchTagaytay;
