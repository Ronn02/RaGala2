import React from 'react';

import Quezon3 from '../../../../assets/destination/QUEZON/';
import Quezon2 from '../../../../assets/destination/QUEZON';
import Quezon1 from '../../../../assets/destination/QUEZON';
import Quezon4 from '../../../../assets/destination/QUEZON';
import RagalaNavbar from '../../../Navbar/RagalaNavbar';
import { Link } from 'react-router-dom';
const Quezon = () => {
    return (
        <div className="w-full">
            <div className='h-[150px] bg-[#FBE470]'>
                <div className=" h-full w-full flex flex-col justify-end items-start text-black">
                    <h2 className="ml-3 text-2xl sm:text-3xl font-bold">Quezon</h2>
                </div>
            </div>
            
        <div className='w-full h-3/4'>
                <div className='h-full mx-2 justify-center items-center flexc mt-3'>
                    <h2 className=' text-[#6F87BE] text-center font-semibold text-xl'>Welcome to Quezon: Where History and Nature Unite!</h2>
                </div>
                <p className='ml-3 my-2 text-2xl'> Explore </p>
                
                <div className='flex-col mx-3'>
                    
                    <div className='flex'>
                        <Link to='/aguinaldoshrine'><div className='relative h-[200px] w-[150px] pr-1 flex'>
                            <img src={Quezon3} alt="" className="object-cover h-full w-full" />
                            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-end text-black">
                                <h2 className="text-lg sm:text-3xl font-bold">Aguinaldo Shrine</h2>
                            </div>
                        </div></Link>

                        <a href=""><div className='relative h-[200px] w-[150px] pl-1 flex'>
                            <img src={Quezon2} alt="" className="object-cover h-full w-full" />
                            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-center text-black">
                                <h2 className="text-lg sm:text-3xl font-bold">Sky Ranch</h2>
                            </div>
                        </div></a>
                    </div>

                    <div className='flex mt-5'>
                        <a href=""><div className='relative h-[200px] w-[150px] pr-1 flex'>
                                <img src={Quezon1} alt="" className="object-cover h-full w-full" />
                                <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-center text-black">
                                    <h2 className="text-lg sm:text-3xl font-bold">Sky Ranch</h2>
                                </div>
                            </div></a>

                        <a href=""><div className='relative h-[200px] w-[150px] pl-1 flex'>
                            <img src={Quezon4} alt="" className="object-cover h-full w-full" />
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

export default Quezon;