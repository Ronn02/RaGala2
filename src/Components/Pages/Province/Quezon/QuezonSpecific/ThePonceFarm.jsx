import React, { useState } from 'react';
import RagalaNavbar from '../../../../Navbar/RagalaNavbar';
import ThePonceFarm1 from '../../../../../assets/destination/QUEZON/THE PONCE FARM/The Ponce Farm2.png';
import ThePonceFarm2 from '../../../../../assets/destination/QUEZON/THE PONCE FARM/The Ponce Farm3.png';
import ThePonceFarm3 from '../../../../../assets/destination/QUEZON/THE PONCE FARM/The Ponce Farm4.png';
import PCNavBar from '../../../../Navbar/PCNavBar';
import StarRating from '../../../StarRating/StarRating';

const ThePonceFarm = () => {
  const [currentImage, setCurrentImage] = useState(ThePonceFarm1);
  const [showModal, setShowModal] = useState(false);

  const images = [ThePonceFarm1, ThePonceFarm2, ThePonceFarm3];

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
        <h1 className='text-5xl font-bold text-center'>The Ponce Farm</h1>
        <StarRating rating={userRating} onChange={setUserRating} />

        <div className='flex mt-4 space-x-4'>
          <a
            href='https://www.klook.com/en-PH/hotel-vouchers/65500-Overnight-Stay-At-The-Ponce-Farm-Sariaya-Quezon/?spm=BlogArticle.InArticleHyperlinkWord&clickId=8f37d58e6b
            The Ponce Farm' // Replace with the actual booking site URL
            target='_blank'
            rel='noopener noreferrer'
            className='bg-blue-500 text-white px-4 py-2 rounded-md'
          >
            Book Now
          </a>
          <a
            href='https://ul.waze.com/ul?place=ChIJLbsHWyhLvTMRsW9z6iWKcYE&ll=13.88260750%2C121.55621010&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location' // Replace with the actual Waze URL
            target='_blank'
            rel='noopener noreferrer'
            className='bg-green-500 text-white px-4 py-2 rounded-md'
          >
            Get Directions (Waze)
          </a>
        </div>
        <div className='flex justify-center items-center mt-[30px]'>
            <p className='mx-3'>Nestled in the picturesque province of Quezon, Philippines, The Ponce Farm offers an idyllic escape from the hustle and bustle of city life. Surrounded by lush landscapes, rolling hills, and gentle breezes, this charming farm is a haven for travelers seeking tranquility, authentic rural experiences, and a taste of the Filipino countryside.</p> 
        </div>
      </div>
      
      <RagalaNavbar />
    </div>
  );
};

export default ThePonceFarm;
