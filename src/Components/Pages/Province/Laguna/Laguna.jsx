import React from 'react';

import Laguna3 from '../../../../assets/destination/LAGUNA/HIDDEN VALLEY SPRINGS/HIDDEN VALLEY SPRINGS, LAGUNA - 1.jpg';
import Laguna2 from '../../../../assets/destination/LAGUNA/ENCHANTED KINGDOM/ENCHANTED KINGDOM, LAGUNA - 1.jpg';
import Laguna1 from '../../../../assets/destination/LAGUNA/PAGSANJAN FALLS/PAGSANJAN FALLS, LAGUNA - 1.jpg';
import Laguna4 from '../../../../assets/destination/LAGUNA/SPLASH ISLAND/SPLASH ISLAND, LAGUNA - 1.jpg';
import RagalaNavbar from '../../../Navbar/RagalaNavbar';
import { Link } from 'react-router-dom';
import PCNavBar from '../../../Navbar/PCNavBar';
import LagunaBG from '../../../../assets/destination/LAGUNA/LAGUNA BG.jpg';
const Laguna = () => {
    return (    
        <div className="w-full min-h-screen">
            <PCNavBar></PCNavBar>
            <div className='  h-[75vh] w-full flex justify-center items-center' ><img src={LagunaBG} alt="" className="object-cover h-[100vh] w-full" />
            <div className="absolute top-0 left-0 h-[102vh] md:h-[107vh] w-full flex flex-col justify-center items-center text-white bg-black bg-opacity-20">
                <h2 className="ml-3 text-5xl font-bold md:text-8xl">LAGUNA</h2>
                <a href="#places" className='text-l md:text-2xl mt-[50px] md:hover:underline'> View Destinations</a>
                
            </div>
            </div>
            
        <div className='w-full h-3/4 flex flex-col justify-center items-center mb-[100px]'>
        <div id='places' className='h-full w-3/4 mx-2 flex flex-col mt-[100px]'>
            <div className='ml-[150px] my-2 text-2xl md:justify-start md:items-start md:text-start'> Explore </div>
            <div className='flex-grow flex justify-end items-end'>
                <h2 className='text-[#6F87BE] italic text-center md:text-right font-semibold text-xl md:text-2xl md:mr-[150px]'>
                Discover Laguna: Nature's Playground and Cultural Gem!
                </h2>
            </div>
            <hr className='w-[80%] h-2 text-black' />
        </div>
                <div className='flex-col mx-3'>
                    
                    <div className='flex'>
                        <Link to='/hiddenvalleysprings'><div className='relative h-[200px] w-[150px]  md:h-[300px] md:w-[400px] pr-1 flex'>
                            <img src={Laguna3} alt="" className="object-cover h-full w-full" />
                            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-end text-black bg-black bg-opacity-20 ">
                                <h2 className="text-lg sm:text-3xl font-bold text-white">HIDDEN VALLEY SPRINGS</h2>
                            </div>
                        </div></Link>

                        <Link to='/enchantedkingdom'><div className='relative h-[200px] w-[150px] md:h-[300px] md:w-[400px] pl-1 flex'>
                            <img src={Laguna2} alt="" className="object-cover h-full w-full" />
                            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-center text-black bg-black bg-opacity-20">
                                <h2 className="text-lg sm:text-3xl font-bold text-white">ENCHANTED KINGDOM</h2>
                            </div>
                        </div></Link>
                    </div>

                    <div className='flex mt-5'>
                        <Link to='/pagsanjanfalls'><div className='relative h-[200px] w-[150px] md:h-[300px] md:w-[400px] pr-1 flex'>
                                <img src={Laguna1} alt="" className="object-cover h-full w-full" />
                                <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-center text-black bg-black bg-opacity-20">
                                    <h2 className="text-lg sm:text-3xl font-bold text-white">PAGSANJAN FALLS</h2>
                                </div>
                            </div></Link>

                        <Link to='/splashislands'><div className='relative h-[200px] w-[150px] md:h-[300px] md:w-[400px] pl-1 flex'>
                            <img src={Laguna4} alt="" className="object-cover h-full w-full" />
                            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-end text-black bg-black bg-opacity-20">
                                <h2 className="text-lg sm:text-3xl font-bold text-white">SPLASH ISLANDS</h2>
                            </div>
                        </div>    </Link>
                    </div>
            </div>
        </div>  
            <RagalaNavbar/>
        
        </div>
    );
};

export default Laguna;