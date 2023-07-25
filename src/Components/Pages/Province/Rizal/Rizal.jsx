import React from 'react';

import Rizal3 from '../../../../assets/destination/RIZAL/TREASURE MOUNTAINS/TREASURE MOUNTAINS, RIZAL - 1.jpg';
import Rizal2 from '../../../../assets/destination/RIZAL/ATV ADVENTURE/ATV ADVENTURE(1).webp';
import Rizal1 from '../../../../assets/destination/RIZAL/AVILON ZOO/AVILON ZOO, RIZAL - 1.jpg';
import Rizal4 from '../../../../assets/destination/RIZAL/DARANAK FALLS/DARANAK FALLS, RIZAL - 1.jpg';
import RagalaNavbar from '../../../Navbar/RagalaNavbar';
import { Link } from 'react-router-dom';
import PCNavBar from '../../../Navbar/PCNavBar';
import RizalBG from '../../../../assets/destination/RIZAL/RIZAL BG.jpg';

const Rizal = () => {
    return (    
        <div className="w-full min-h-screen">
            <PCNavBar></PCNavBar>
            <div className='  h-[75vh] w-full flex justify-center items-center' ><img src={RizalBG} alt="" className="object-cover h-[100vh] w-full" />
            <div className="absolute top-0 left-0 h-[102vh] md:h-[100vh] w-full flex flex-col justify-center items-center text-white bg-black bg-opacity-20">
                <h2 className="ml-3 text-5xl font-bold md:text-8xl">RIZAL</h2>
                <a href="#places" className='text-l md:text-2xl mt-[50px] md:hover:underline'> View Destinations</a>
                
            </div>
            </div>
            
        <div className='w-full h-3/4 flex flex-col justify-center items-center mb-[100px]'>
        <div id='places' className='h-full w-3/4 mx-2 flex flex-col mt-[100px]'>
            <div className='ml-[150px] my-2 text-2xl md:mb-10 md:justify-start md:items-start md:text-start'> Explore </div>
            <div className='flex-growflex justify-end items-end'>
                <h2 className='text-[#6F87BE] italic text-center md:text-right font-semibold text-xl md:text-2xl'>
                Rizal: Unveiling the Charms of the Philippines' Cultural Gem!
                </h2>
            </div>
            <hr className='w-[80%] h-2 mt-10 text-black' />
        </div>
                
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