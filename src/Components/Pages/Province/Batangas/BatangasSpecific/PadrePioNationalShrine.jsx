import React, { useState } from 'react';
import RagalaNavbar from '../../../../Navbar/RagalaNavbar';
import PadrePioNationalShrine1 from '../../../../../assets/destination/BATANGAS/PADRE PIO NATIONAL SHRINE/PADRE PIO NATIONAL SHRINE, BATANGAS - 1.jpg';
import PadrePioNationalShrine2 from '../../../../../assets/destination/BATANGAS/PADRE PIO NATIONAL SHRINE/PADRE PIO NATIONAL SHRINE, BATANAGAS - 4.jpg';
import PadrePioNationalShrine3 from '../../../../../assets/destination/BATANGAS/PADRE PIO NATIONAL SHRINE/PADRE PIO NATIONAL SHRINE, BATANGAS - 2.jpg';
import PCNavBar from '../../../../Navbar/PCNavBar';

const PadrePioNationalShrine = () => {
  const [currentImage, setCurrentImage] = useState(PadrePioNationalShrine1);
  const [showModal, setShowModal] = useState(false);

  const images = [PadrePioNationalShrine1, PadrePioNationalShrine2, PadrePioNationalShrine3];

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
      <div className='flex flex-col items-center md:mt-[20%] mt-4'>
        <h1 className='text-5xl font-bold'>Padre Pio National Shrine</h1>
        <div className='flex mt-4 space-x-4'>
          <a
            href='https://www.klook.com/en-PH/hotels/detail/191573-bravo-tanauan-hotel/?check_in=2023-07-21&check_out=2023-07-22&room_num=1&adult_num=2&child_num=0&age=&page_source=hotel_list_page&server_data=81124443136e8db398c4150149cf9cb8abd8229ed0cc4b84f39ae1538c9297f9b055cbd5c038cc771b5d6a9b2963269a176e4c7be10db6b3257d24e8d3ced39c5f755303292cbe0deb82ad5b26d54ca7c40dfd9c44da728ef31f43dd57fe7804&source_price_token=eyJjdXJyZW5jeSI6IlBIUCIsInByaWNlIjo0NzAyLjgsInNvdXJjZSI6MX0%3D&is_suggest_time=1' // Replace with the actual booking site URL
            target='_blank'
            rel='noopener noreferrer'
            className='bg-blue-500 text-white px-4 py-2 rounded-md'
          >
            Book Now
          </a>
          <a

            href='https://www.waze.com/live-map/directions/parish-and-national-shrine-of-saint-padre-pio-santo-tomas-lipa-rd-santo-tomas?to=place.w.79429773.794166656.4070823' // Replace with the actual Waze URL
            target='_blank'
            rel='noopener noreferrer'
            className='bg-green-500 text-white px-4 py-2 rounded-md'
          >
            Get Directions (Waze)
          </a>
        </div>
        <div className='flex w-80 justify-center items-center mt-[30px]' /*added some css*/>
            <p className='mx-3'>Batangas, Philippines, is blessed to be home to a significant religious landmark dedicated to one of the most beloved and revered saints in Catholicism – Saint Padre Pio. Located in the heart of Batangas City, the Padre Pio Shrine stands as a testament to faith, compassion, and miracles. A visit to this shrine offers a profound spiritual experience and a chance to learn about the life and legacy of this extraordinary saint.</p> 
         </div>   
      </div>
      
      <RagalaNavbar />
    </div>
  );
};

export default PadrePioNationalShrine;
