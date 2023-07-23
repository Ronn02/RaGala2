import React from 'react';

import Batangas3 from '../../../../assets/destination/BATANGAS/CALERUEGA CHURCH/CALERUEGA CHURCH, BATANGAS - 1.jpg';
import Batangas2 from '../../../../assets/destination/BATANGAS/PADRE PIO NATIONAL SHRINE/PADRE PIO NATIONAL SHRINE, BATANGAS - 1.jpg';
import Batangas1 from '../../../../assets/destination/BATANGAS/FORTUNE ISLAND/FORTUNE ISLAND, BATANGAS - 1.jpg';
import Batangas4 from '../../../../assets/destination/BATANGAS/MINOR BASILICA OF ST. MARTIN OF TOURS/TAAL BASILICA, BATANGAS - 1.jpg';
import RagalaNavbar from '../../../Navbar/RagalaNavbar';
import { Link } from 'react-router-dom';
const Batangas = () => {
    return (
        <div className="w-full">
            <div className='h-[150px] bg-[#FBE470]'>
                <div className=" h-full w-full flex flex-col justify-end items-start text-black">
                    <h2 className="ml-3 text-2xl sm:text-3xl font-bold">Batangas</h2>
                </div>
            </div>
            
        <div className='w-full h-3/4'>
                <div className='h-full mx-2 justify-center items-center flexc mt-3'>
                    <h2 className=' text-[#6F87BE] text-center font-semibold text-xl'>Welcome to Batangas: Where History and Nature Unite!</h2>
                </div>
                <p className='ml-3 my-2 text-2xl'> Explore </p>
                
                <div className='flex-col mx-3'>
                    
                    <div className='flex'>
                        <Link to='/aguinaldoshrine'><div className='relative h-[200px] w-[150px] pr-1 flex'>
                            <img src={Batangas3} alt="" className="object-cover h-full w-full" />
                            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-end text-black">
                                <h2 className="text-lg sm:text-3xl font-bold">Aguinaldo Shrine</h2>
                            </div>
                        </div></Link>

                        <a href=""><div className='relative h-[200px] w-[150px] pl-1 flex'>
                            <img src={Batangas2} alt="" className="object-cover h-full w-full" />
                            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-center text-black">
                                <h2 className="text-lg sm:text-3xl font-bold">Sky Ranch</h2>
                            </div>
                        </div></a>
                    </div>

                    <div className='flex mt-5'>
                        <a href=""><div className='relative h-[200px] w-[150px] pr-1 flex'>
                                <img src={Batangas1} alt="" className="object-cover h-full w-full" />
                                <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-center text-black">
                                    <h2 className="text-lg sm:text-3xl font-bold">Sky Ranch</h2>
                                </div>
                            </div></a>

                        <a href=""><div className='relative h-[200px] w-[150px] pl-1 flex'>
                            <img src={Batangas4} alt="" className="object-cover h-full w-full" />
                            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-end text-black">
                                <h2 className="text-lg sm:text-3xl font-bold">Aguinaldo Shrine</h2>
                            </div>
                        </div></a>    
                    </div>
            </div>
        </div>  
            <RagalaNavbar/>
        
        </div>
    );
};

export default Batangas;