import React from 'react';

import Rizal3 from '../../../../assets/destination/RIZAL/TREASURE MOUNTAINS/TREASURE MOUNTAINS, RIZAL - 1.jpg';
import Rizal2 from '../../../../assets/destination/RIZAL/ATV ADVENTURE/ATV ADVENTURE(1).webp';
import Rizal1 from '../../../../assets/destination/RIZAL/AVILON ZOO/AVILON ZOO, RIZAL - 1.jpg';
import Rizal4 from '../../../../assets/destination/RIZAL/DARANAK FALLS/DARANAK FALLS, RIZAL - 1.jpg';
import RagalaNavbar from '../../../Navbar/RagalaNavbar';
import { Link } from 'react-router-dom';
const Rizal = () => {
    return (    
        <div className="w-full min-h-screen">
            <div className='h-[150px] bg-[#FBE470]'>
                <div className=" h-full w-full flex flex-col justify-end items-start text-black md:justify-center md:items-center ">
                    <h2 className="ml-3 text-2xl sm:text-3xl font-bold md:text-5xl">Rizal</h2>
                </div>
            </div>
            
        <div className='w-full h-3/4 flex flex-col justify-center items-center mb-[100px]'>
                <div className='h-full mx-2 justify-center items-center flexc mt-3'>
                    <h2 className=' text-[#6F87BE] text-center font-semibold text-xl'>Welcome to Rizal: Where History and Nature Unite!</h2>
                </div>
                <p className='ml-3 my-2 text-2xl'> Explore </p>
                
                <div className='flex-col mx-3'>
                    
                    <div className='flex'>
                        <Link to='/treasuremountains'><div className='relative h-[200px] w-[150px]  md:h-[300px] md:w-[400px] pr-1 flex'>
                            <img src={Rizal3} alt="" className="object-cover h-full w-full" />
                            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-end text-black bg-black bg-opacity-20 ">
                                <h2 className="text-lg sm:text-3xl font-bold text-white">TREASURE MOUNTAINS</h2>
                            </div>
                        </div></Link>

                        <Link to='/atvadventure'><div className='relative h-[200px] w-[150px] md:h-[300px] md:w-[400px] pl-1 flex'>
                            <img src={Rizal2} alt="" className="object-cover h-full w-full" />
                            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-center text-black bg-black bg-opacity-20">
                                <h2 className="text-lg sm:text-3xl font-bold text-white">ATV ADVENTURE</h2>
                            </div>
                        </div></Link>
                    </div>

                    <div className='flex mt-5'>
                        <Link to='/avilonzoo'><div className='relative h-[200px] w-[150px] md:h-[300px] md:w-[400px] pr-1 flex'>
                                <img src={Rizal1} alt="" className="object-cover h-full w-full" />
                                <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-center text-black bg-black bg-opacity-20">
                                    <h2 className="text-lg sm:text-3xl font-bold text-white">AVILON ZOO</h2>
                                </div>
                            </div></Link>

                        <Link to='/daranakfalls'><div className='relative h-[200px] w-[150px] md:h-[300px] md:w-[400px] pl-1 flex'>
                            <img src={Rizal4} alt="" className="object-cover h-full w-full" />
                            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-end text-black bg-black bg-opacity-20">
                                <h2 className="text-lg sm:text-3xl font-bold text-white">DARANAK FALLS</h2>
                            </div>
                        </div>    </Link>
                    </div>
            </div>
        </div>  
            <RagalaNavbar/>
        
        </div>
    );
};

export default Rizal;