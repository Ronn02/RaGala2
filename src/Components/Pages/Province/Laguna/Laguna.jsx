import React from 'react';

import Laguna3 from '../../../../assets/destination/LAGUNA/HIDDEN VALLEY SPRINGS/HIDDEN VALLEY SPRINGS, LAGUNA - 1.jpg';
import Laguna2 from '../../../../assets/destination/LAGUNA/ENCHANTED KINGDOM/ENCHANTED KINGDOM, LAGUNA - 1.jpg';
import Laguna1 from '../../../../assets/destination/LAGUNA/PAGSANJAN FALLS/PAGSANJAN FALLS, LAGUNA - 1.jpg';
import Laguna4 from '../../../../assets/destination/LAGUNA/SPLASH ISLAND/SPLASH ISLAND, LAGUNA - 1.jpg';
import RagalaNavbar from '../../../Navbar/RagalaNavbar';
import { Link } from 'react-router-dom';
const Laguna = () => {
    return (    
        <div className="w-full min-h-screen">
            <div className='h-[150px] bg-[#FBE470]'>
                <div className=" h-full w-full flex flex-col justify-end items-start text-black md:justify-center md:items-center ">
                    <h2 className="ml-3 text-2xl sm:text-3xl font-bold md:text-5xl">Laguna</h2>
                </div>
            </div>
            
        <div className='w-full h-3/4 flex flex-col justify-center items-center mb-[100px]'>
                <div className='h-full mx-2 justify-center items-center flexc mt-3'>
                    <h2 className=' text-[#6F87BE] text-center font-semibold text-xl'>Welcome to Laguna: Where History and Nature Unite!</h2>
                </div>
                <p className='ml-3 my-2 text-2xl'> Explore </p>
                
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