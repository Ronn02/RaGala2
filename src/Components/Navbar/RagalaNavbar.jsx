import React from 'react';
import Home from '../../assets/otherAssets/homeIcon.png';
import Plus from '../../assets/otherAssets/plusIcon.png';
import { Link } from 'react-router-dom';


const RagalaNavbar = () => {
  return (
    <div className='flex justify-center items-center flex-col fixed bottom-0 mb-[40px] left-0 w-full hidden'>
      <div className='flex justify-evenly items-center bg-[black] h-[60px] w-[40vh] rounded-[20px]'>
       <Link to='/ragalahome'><img src={Home} alt="" /></Link>
       <Link to='/'><img src={Plus} alt="" /></Link>
      </div>
      {/* The rest of your content */}
    </div>
  );
};

export default RagalaNavbar;