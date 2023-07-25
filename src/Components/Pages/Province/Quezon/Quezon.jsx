import React from 'react';

import Quezon3 from '../../../../assets/destination/QUEZON/THE PONCE FARM/The Ponce Farm.png';
import Quezon2 from '../../../../assets/destination/QUEZON/BORAWAN ISLAND/BORAWAN ISLAND.webp';
import Quezon1 from '../../../../assets/destination/QUEZON/Villa Escudero Plantations and Resort/Villa Escudero Plantations and Resort.webp';
import Quezon4 from '../../../../assets/destination/QUEZON/Quezon Premier Hotel Lucena/Quezon Premier Hotel Lucena.webp';
import RagalaNavbar from '../../../Navbar/RagalaNavbar';
import { Link } from 'react-router-dom';
import PCNavBar from '../../../Navbar/PCNavBar';
import QuezonBG from '../../../../assets/destination/QUEZON/QUEZON BG.jpg'

const Quezon = () => {
    return (    
        <div className="w-full min-h-screen">
            <PCNavBar></PCNavBar>
            <div className='  h-[75vh] w-full flex justify-center items-center' ><img src={QuezonBG} alt="" className="object-cover h-[100vh] w-full" />
            <div className="absolute top-0 left-0 h-[102vh] md:h-[100vh] w-full flex flex-col justify-center items-center text-white bg-black bg-opacity-20">
                <h2 className="ml-3 text-5xl font-bold md:text-8xl">QUEZON</h2>
                <a href="#places" className='text-l md:text-2xl mt-[50px] md:hover:underline'> View Destinations</a>
                
            </div>
            </div>

        <div className='w-full h-3/4 flex flex-col justify-center items-center mb-[100px]'>
        <div id='places' className='h-full w-3/4 mx-2 flex flex-col mt-[100px]'>
            <div className='ml-[150px] my-2 text-2xl md:justify-start md:items-start md:text-start'> Explore </div>
            <div className='flex-growflex justify-end items-end'>
                <h2 className='text-[#6F87BE] italic text-center md:text-right font-semibold text-xl md:text-2xl'>
                Where Nature's Beauty and Cultural Riches Converge!
                </h2>
            </div>
            <hr className='w-[80%] h-5 text-black' />
        </div>
                
                <div className='flex-col mt-10 mx-3'>
                    
                    <div className='flex'>
                        <Link to='/theponcefarm'><div className='relative h-[200px] w-[150px]  md:h-[300px] md:w-[400px] pr-1 flex'>
                            <img src={Quezon3} alt="" className="object-cover h-full w-full" />
                            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-end text-black bg-black bg-opacity-20 ">
                                <h2 className="text-lg sm:text-3xl font-bold text-white">THE PONCE FARM</h2>
                            </div>
                        </div></Link>

                        <Link to='/borawanisland'><div className='relative h-[200px] w-[150px] md:h-[300px] md:w-[400px] pl-1 flex'>
                            <img src={Quezon2} alt="" className="object-cover h-full w-full" />
                            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-center text-black bg-black bg-opacity-20">
                                <h2 className="text-lg sm:text-3xl font-bold text-white">BORAWAN ISLAND</h2>
                            </div>
                        </div></Link>
                    </div>

                    <div className='flex mt-5'>
                        <Link to='/villaescuderoresort'><div className='relative h-[200px] w-[150px] md:h-[300px] md:w-[400px] pr-1 flex'>
                                <img src={Quezon1} alt="" className="object-cover h-full w-full" />
                                <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-center text-black bg-black bg-opacity-20">
                                    <h2 className="text-lg sm:text-3xl font-bold text-white">VILLA ESCUDERO RESORT</h2>
                                </div>
                            </div></Link>

                        <Link to='/quezonpremierhotel'><div className='relative h-[200px] w-[150px] md:h-[300px] md:w-[400px] pl-1 flex'>
                            <img src={Quezon4} alt="" className="object-cover h-full w-full" />
                            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-end text-black bg-black bg-opacity-20">
                                <h2 className="text-lg sm:text-3xl font-bold text-white">QUEZON PREMIER HOTEL LUCENA</h2>
                            </div>
                        </div>    </Link>
                    </div>
            </div>
        </div>  
            <RagalaNavbar/>
        
        </div>
    );
};

export default Quezon;