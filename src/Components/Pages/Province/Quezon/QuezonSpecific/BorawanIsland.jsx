import React, { useState } from 'react';
import RagalaNavbar from '../../../../Navbar/RagalaNavbar';
import BorawanIsland1 from '../../../../../assets/destination/QUEZON/BORAWAN ISLAND/BORAWAN ISLAND2.webp';
import BorawanIsland2 from '../../../../../assets/destination/QUEZON/BORAWAN ISLAND/BORAWAN ISLAND3.webp';
import BorawanIsland3 from '../../../../../assets/destination/QUEZON/BORAWAN ISLAND/BORAWAN ISLAND4.webp';
import PCNavBar from '../../../../Navbar/PCNavBar';
import StarRating from '../../../StarRating/StarRating';

const BorawanIsland = () => {
  const [currentImage, setCurrentImage] = useState(BorawanIsland1);
  const [showModal, setShowModal] = useState(false);

  const images = [BorawanIsland1, BorawanIsland2, BorawanIsland3];

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
      <div className='flex flex-col items-center justify-center mt-10 mx-3 md:w-[50%] md:mt-[10%] lg:mt-[10%]'/*changed */> 
        <h1 className='text-5xl font-bold'>Borawan Island</h1>
        <StarRating rating={userRating} onChange={setUserRating} />
        <div className='flex mt-4 space-x-4'>
          <a
            href='https://www.klook.com/en-PH/hotels/detail/639057-borawan-island-resort-by-cocotel/?check_in=2023-07-20&check_out=2023-07-21&room_num=1&adult_num=2&child_num=0&age=&page_source=hotel_list_page&server_data=81124443136e8db398c4150149cf9cb8d4dedc53c9bbb42d49c1a50a09d21a817cb7c59d7ef56dabe0f5c3c098a031f0176e4c7be10db6b3257d24e8d3ced39c0595fecccfd31cb7f9e1256a95ca3682c40dfd9c44da728ef31f43dd57fe7804&source_price_token=eyJjdXJyZW5jeSI6IlBIUCIsInByaWNlIjo2NTIwLjIsInNvdXJjZSI6MX0%3D&is_suggest_time=1' // Replace with the actual booking site URL
            target='_blank'
            rel='noopener noreferrer'
            className='bg-blue-500 text-white px-4 py-2 rounded-md'
          >
            Book Now
          </a>
          <a
            href='https://ul.waze.com/ul?preview_venue_id=79298707.793249217.8568004&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location' // Replace with the actual Waze URL
            target='_blank'
            rel='noopener noreferrer'
            className='bg-green-500 text-white px-4 py-2 rounded-md'
          >
            Get Directions (Waze)
          </a>
        </div>
        <div className='flex w-80 justify-center mx-4 items-center mt-[30px]' /*added some css*/>
            <p className='mx-3'>Welcome to Borawan, a hidden gem nestled in the tropical paradise of Quezon Province, Philippines. Known for its stunning beauty and unique landscape, Borawan offers a perfect blend of the famous Boracay and Palawan, hence its name. Whether you seek relaxation on powdery beaches or an adventure amidst rugged rock formations, Borawan promises an unforgettable experience that will leave you enchanted and rejuvenated.</p> 
        </div>
      </div>
      
      <RagalaNavbar />
    </div>
  );
};

export default BorawanIsland;
