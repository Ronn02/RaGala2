import React, { useRef, useState, useEffect, useContext } from "react";

import ToDo from '../../assets/otherAssets/toDoIcon.png';
import Expenses from '../../assets/otherAssets/expensesIcon.png';
import Message from '../../assets/otherAssets/messageIcon.png';
import Cavite from '../../assets/destination/CAVITE/AGUINALDO SHRINE/AGUINALDO SHRINE, CAVITE - 1.jpg';
import Laguna from '../../assets/destination/LAGUNA/ENCHANTED KINGDOM/ENCHANTED KINGDOM, LAGUNA - 1.jpg';
import Batangas from '../../assets/destination/BATANGAS/CALERUEGA CHURCH/CALERUEGA CHURCH, BATANGAS - 1.jpg';
import Rizal from '../../assets/destination/RIZAL/AVILON ZOO/AVILON ZOO, RIZAL - 1.jpg';
import Quezon from '../../assets/destination/QUEZON/CAGBALETE ISLAND/CAGBALETE ISLAND, QUEZON - 1.jpg';
import { Link} from "react-router-dom";
import RagalaNavbar from '../Navbar/RagalaNavbar';
import { Tooltip } from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import avatar from "../../assets/images/avatar.jpg";
import { AuthContext } from "../AppContext/AppContext";
import PCNavBar from "../Navbar/PCNavBar";




const RagalaHome = () => {
  const { user, userData } = useContext(AuthContext);

  return (
    <div name='Ragalahome' className='w-full min-h-screen'>
      <PCNavBar></PCNavBar>
      

      <div className='m-[30px] '>
        <h1 className='text-5xl sm:text-6xl font-bold'>Tara Gala?</h1>
        <div className="lg:hidden">
        <li className='list-none flex justify-start m-[30px]'>
          <Link to='/todo'>            <ul className='h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] flex flex-col justify-center items-center m-[2px] sm:m-[10px] p-[10px] border-black border-2 rounded-[20px] hover:bg-[#FBE470]'>
              <img src={ToDo} alt='' className='h-[30px] sm:h-[50px] mb-[15px]' />
              <p className='text-[10px] sm:text-[10px]'>To-Do</p>
            </ul>
            </Link>

          <Link to='/expenses'>
            <ul className='h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] flex flex-col justify-center items-center m-[2px] sm:m-[10px] p-[10px] border-black border-2 rounded-[20px] hover:bg-[#FBE470]'>
              <img src={Expenses} alt='' className='h-[30px] sm:h-[50px] mb-[15px]' />
              <p className='text-[10px] sm:text-[10px]'>Expenses</p>
            </ul>
            </Link>
          <Link to ='/'>
            <ul className='h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] flex flex-col justify-center items-center m-[2px] sm:m-[10px] p-[10px] border-black border-2 rounded-[20px] hover:bg-[#FBE470]'>
              <img src={Message} alt='' className='h-[30px] sm:h-[50px] mb-[15px]' />
              <p className='text-[10px] sm:text-[10px]'>Social</p>
            </ul>
          </Link>
        </li>
        </div>
      </div>

      <div className='m-[30px] '>
      <h1 className='text-2xl sm:text-3xl font-bold'>Discover</h1>
      <p>Start exploring now and plan your next memorable trip!</p>
      </div>  
      {/*Container */}
      <div className=' grid grid-cols-1 sm:grid-cols-3 gap-3 text-center py-8  p-[30px]'>

      <Link to='/cavite'><div className='relative h-[250px] max-w-[350px] '>
        <img src={Cavite} alt="" className="object-cover h-full w-full" />
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h2 className="text-2xl sm:text-3xl font-bold">CAVITE</h2>
      
        </div>
      </div></Link>


      <Link to='/laguna'><div className='relative h-[250px] max-w-[350px]  '>
        <img src={Laguna} alt="" className="object-cover h-full w-full" />
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h2 className="text-2xl sm:text-3xl font-bold">LAGUNA</h2>
      
        </div>
      </div></Link>


      <Link to='/batangas'><div className='relative h-[250px] max-w-[350px] '>
        <img src={Batangas} alt="" className="object-cover h-full w-full" />
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h2 className="text-2xl sm:text-3xl font-bold">BATANGAS</h2>
      
        </div>
      </div></Link>

      <Link to='/rizal'><div className='relative h-[250px] max-w-[350px] '>
        <img src={Rizal} alt="" className="object-cover h-full w-full" />
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h2 className="text-2xl sm:text-3xl font-bold">RIZAL</h2>
      
        </div>
      </div></Link>

      <Link to='/quezon'><div className='relative h-[250px] max-w-[350px] '>
        <img src={Quezon} alt="" className="object-cover h-full w-full" />
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h2 className="text-2xl sm:text-3xl font-bold">QUEZON</h2>
      
        </div>
      </div></Link>
        
      </div>

     <RagalaNavbar/>
    </div>
  );
};

export default RagalaHome;
