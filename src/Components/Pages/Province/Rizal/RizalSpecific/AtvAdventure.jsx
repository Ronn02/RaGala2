import React, { useState } from 'react';
import RagalaNavbar from '../../../../Navbar/RagalaNavbar';
import AtvAdventure1 from '../../../../../assets/destination/RIZAL/ATV ADVENTURE/ATV ADVENTURE(1).webp';
import AtvAdventure2 from '../../../../../assets/destination/RIZAL/ATV ADVENTURE/ATV ADVENTURE(2).webp';
import AtvAdventure3 from '../../../../../assets/destination/RIZAL/ATV ADVENTURE/ATV ADVENTURE(3).webp';
import PCNavBar from '../../../../Navbar/PCNavBar';
const AtvAdventure = () => {
  const [currentImage, setCurrentImage] = useState(AtvAdventure1);
  const [showModal, setShowModal] = useState(false);

  const images = [AtvAdventure1, AtvAdventure2, AtvAdventure3];

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
        <h1 className='text-5xl font-bold text-center'>AtvAdventure</h1>
        <div className='flex mt-4 space-x-4'>
          <a
            href='https://www.klook.com/en-PH/activity/20314-atv-adventure-rizal-manila/?aid=825&aff_adid=474028&aff_label1=ATV%20Ride%20Experience%20Rizal&aff_label2=Rizal&aff_label3=Philippines&aff_pid=&aff_sid=&utm_medium=affiliate-alwayson&utm_source=non-network&utm_campaign=825&utm_term=&utm_content=&aff_klick_id=41123951077-825-474028-8954b9e' // Replace with the actual booking site URL
            target='_blank'
            rel='noopener noreferrer'
            className='bg-blue-500 text-white px-4 py-2 rounded-md'
          >
            Book Now
          </a>
          <a
            href='https://ul.waze.com/ul?place=ChIJt6OKHEO5lzMRkQLqjDUwS68&ll=14.65858510%2C121.16207020&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location' // Replace with the actual Waze URL
            target='_blank'
            rel='noopener noreferrer'
            className='bg-green-500 text-white px-4 py-2 rounded-md'
          >
            Get Directions (Waze)
          </a>
        </div>
        <div className='flex w-80 justify-center items-center mt-[30px]'>
        <p className='mx-3'>This is a fun and exciting way to explore the forests and mountains of Rizal. You'll get to ride an ATV through challenging terrain and enjoy stunning views of the surrounding countryside</p> 
      </div>
    </div>
      
      <RagalaNavbar />
    </div>
  );
};

export default AtvAdventure;
