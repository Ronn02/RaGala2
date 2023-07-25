import React from 'react';

import Cavite3 from '../../../../assets/destination/CAVITE/LA BELLA BOTIQUE HOTEL/LA BELLA HOTEL, CAVITE - 1.jpeg';
import Cavite2 from '../../../../assets/destination/CAVITE/SKYRANCH TAGAYTAY/SKYRANCH TAGAYTAY, CAVITE - 3.jpg';
import Cavite1 from '../../../../assets/destination/CAVITE/CORREGIDOR ISLAND/CORREGIDOR ISLAND, CAVITE - 2.jpg';
import Cavite4 from '../../../../assets/destination/CAVITE/PARADIZOO/PARADIZOO, CAVITE - 1.jpg';
import RagalaNavbar from '../../../Navbar/RagalaNavbar';
import PCNavBar from '../../../Navbar/PCNavBar'
import { Link } from 'react-router-dom';
import CaviteBG from '../../../../assets/destination/CAVITE/CAVITE BG.jpg';

const Cavite = () => {
    return (    
        <div className="w-full min-h-screen">
            <PCNavBar></PCNavBar>
            <div className='  h-[75vh] w-full flex justify-center items-center' ><img src={CaviteBG} alt="" className="object-cover h-[100vh] w-full" />
            <div className="absolute top-0 left-0 h-[102vh] md:h-[102vh] lg:h-[100vh] w-full flex flex-col justify-center items-center text-white bg-black bg-opacity-20">
                <h2 className="ml-3 text-5xl font-bold md:text-8xl">CAVITE</h2>
                <a href="#places" className='text-l md:text-2xl mt-[50px] md:hover:underline'> View Destinations</a>
                
            </div>
            </div>
            
        <div className='w-full h-3/4 flex flex-col justify-center items-center mb-[100px]'>
                
        <div id='places' className='h-full w-3/4 mx-2 flex flex-col mt-[100px] bg-green-200'>
            <div className='ml-[150px] my-2 text-2xl md:justify-start md:items-start md:text-start'> Explore </div>
            <div className='flex-grow bg-pink-200 flex justify-end items-end'>
                <h2 className='text-[#6F87BE] italic text-center md:text-right font-semibold text-xl md:text-2xl'>
                Welcome to Batangas: Where History and Nature Unite!
                </h2>
            </div>
            <hr className='w-[80%] h-2 text-black' />
        </div>


                
                <div className='flex-col mx-3'>
                    
                    <div className='flex'>
                        <Link to='/labellabotique'><div className='relative h-[200px] w-[150px]  md:h-[300px] md:w-[400px] pr-1 flex'>
                            <img src={Cavite3} alt="" className="object-cover h-full w-full" />
                            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-end text-black bg-black bg-opacity-20 ">
                                <h2 className="text-lg sm:text-3xl font-bold text-white">LA BELLA BOTIQUE HOTEL</h2>
                            </div>
                        </div></Link>

                        <Link to='/skyranchtagaytay'><div className='relative h-[200px] w-[150px] md:h-[300px] md:w-[400px] pl-1 flex'>
                            <img src={Cavite2} alt="" className="object-cover h-full w-full" />
                            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-center text-black bg-black bg-opacity-20">
                                <h2 className="text-lg sm:text-3xl font-bold text-white">SKYRANCH TAGAYTAY</h2>
                            </div>
                        </div></Link>
                    </div>

                    <div className='flex mt-5'>
                        <Link to='/corregidorisland'><div className='relative h-[200px] w-[150px] md:h-[300px] md:w-[400px] pr-1 flex'>
                                <img src={Cavite1} alt="" className="object-cover h-full w-full" />
                                <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-center text-black bg-black bg-opacity-20">
                                    <h2 className="text-lg sm:text-3xl font-bold text-white">CORREGIDOR ISLAND</h2>
                                </div>
                            </div></Link>

                        <Link to='/paradizoo'><div className='relative h-[200px] w-[150px] md:h-[300px] md:w-[400px] pl-1 flex'>
                            <img src={Cavite4} alt="" className="object-cover h-full w-full" />
                            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-end text-black bg-black bg-opacity-20">
                                <h2 className="text-lg sm:text-3xl font-bold text-white">PARADIZOO</h2>
                            </div>
                        </div>    </Link>
                    </div>
            </div>
        </div>  
            <RagalaNavbar/>
        
        </div>
    );
};

export default Cavite;