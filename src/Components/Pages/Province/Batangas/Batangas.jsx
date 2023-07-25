import React from 'react';
import BatangasFront from '../../../../assets/destination/BATANGAS/Fortune-Island.jpg';
import Batangas3 from '../../../../assets/destination/BATANGAS/CALERUEGA CHURCH/CALERUEGA CHURCH, BATANGAS - 1.jpg';
import Batangas2 from '../../../../assets/destination/BATANGAS/PADRE PIO NATIONAL SHRINE/PADRE PIO NATIONAL SHRINE, BATANAGAS - 3.jpg';
import Batangas1 from '../../../../assets/destination/BATANGAS/FORTUNE ISLAND/FORTUNE ISLAND, BATANGAS - 1.jpg';
import Batangas4 from '../../../../assets/destination/BATANGAS/MINOR BASILICA OF ST. MARTIN OF TOURS/TAAL BASILICA, BATANGAS - 2.png';
import RagalaNavbar from '../../../Navbar/RagalaNavbar';
import { Link } from 'react-router-dom';
import PCNavBar from '../../../Navbar/PCNavBar';


const Batangas = () => {
    
    return (    
        <div className="w-full min-h-screen">
            <PCNavBar></PCNavBar>
            <div className='  h-[75vh] w-full flex justify-center items-center' ><img src={BatangasFront} alt="" className="object-cover h-[100vh] w-full" />
            <div className="absolute top-0 left-0 h-[102vh] md:h-[100vh] w-full flex flex-col justify-center items-center text-white bg-black bg-opacity-20">
                <h2 className="ml-3 text-5xl font-bold md:text-8xl">BATANGAS</h2>
                <a href="#places" className='text-l md:text-2xl mt-[50px] md:hover:underline'> View Destinations</a>
                
            </div>
            </div>


            {/* <div className=' h-[50px] md:h-[150px]' >
            
                {/* <div className=" h-full w-full flex flex-col justify-end items-start text-black md:justify-center md:items-center mt-[75px]">
                    <h2 className="ml-3 text-2xl sm:text-3xl font-bold md:text-5xl">BATANGAS</h2>
                    
                </div> *
            </div> */}
            
        <div className='w-full h-3/4 flex flex-col justify-center items-center mb-[100px]'>
             
                <div id='places' className='h-full w-3/4 mx-2 flex mt-[100px] justify-center bg-green-200'>
                    <p className='flex ml-3 my-2 text-2xl md:justify-start md:items-start md:text-start'> Explore </p>
                    <div className='flex bg-pink-200'>
                        <h2  className=' text-[#6F87BE] italic text-center mt-10 md:text-right font-semibold mb-4 text-xl md:text-2xl'>Welcome to Batangas: Where History and Nature Unite!</h2>
                    </div>
                    
                </div>
                <hr></hr>
                <div className='flex-col mx-3 mt-5'>
                    
                    <div className='flex'>
                        <Link to='/caleruegachurch'><div className='relative h-[200px] w-[150px]  md:h-[300px] md:w-[400px] pr-1 flex'>
                            <img src={Batangas3} alt="" className="object-cover h-full w-full" />
                            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-end text-black bg-black bg-opacity-20 ">
                                <h2 className="text-lg sm:text-3xl font-bold text-white">CALERUEGA CHURCH</h2>
                            </div>
                        </div></Link>

                        <Link to='/padrepionationalshrine'><div className='relative h-[200px] w-[150px] md:h-[300px] md:w-[400px] pl-1 flex'>
                            <img src={Batangas2} alt="" className="object-cover h-full w-full" />
                            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-center text-black bg-black bg-opacity-20">
                                <h2 className="text-lg sm:text-3xl font-bold text-white">PADRE PIO NATIONAL SHRINE</h2>
                            </div>
                        </div></Link>
                    </div>

                    <div className='flex mt-5'>
                        <Link to='/fortuneisland'><div className='relative h-[200px] w-[150px] md:h-[300px] md:w-[400px] pr-1 flex'>
                                <img src={Batangas1} alt="" className="object-cover h-full w-full" />
                                <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-center text-black bg-black bg-opacity-20">
                                    <h2 className="text-lg sm:text-3xl font-bold text-white">FORTUNE ISLAND</h2>
                                </div>
                            </div></Link>

                        <Link to='/minorbasilica'><div className='relative h-[200px] w-[150px] md:h-[300px] md:w-[400px] pl-1 flex'>
                            <img src={Batangas4} alt="" className="object-cover h-full w-full" />
                            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-end text-black bg-black bg-opacity-20">
                                <h2 className="text-lg sm:text-3xl font-bold text-white">MINOR BASILICA OF ST. MARTIN OF TOURS</h2>
                            </div>
                        </div>    </Link>
                    </div>
            </div>
        </div>  
            <RagalaNavbar/>
        
        </div>
    );
};

export default Batangas;