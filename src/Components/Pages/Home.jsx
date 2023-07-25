import React from "react";
import LeftSide from "../LeftSidebar/LeftSide";
import CardSection from "../Main/CardSection";
import Navbar from "../Navbar/Navbar";
import RightSide from "../RightSidebar/RightSide";
import Main from "../Main/Main";
import RagalaNavbar from "../Navbar/RagalaNavbar";
import PCNavBar from "../Navbar/PCNavBar";

const Home = () => {
  return (
    <div className="w-full">
      <PCNavBar></PCNavBar>
      
      <div className="flex bg-gray-100">
        <div className=" hidden md:block md:flex-auto w-[20%] fixed mt-[10px]">
          <LeftSide></LeftSide>
        </div>
        <div className="flex-auto w-full md:w-[60%] absolute md:left-[20%] p-[20px] md:p-0 bg-gray-100 rounded-xl">
          <div className="w-full md:w-[80%] mx-auto mt-[10px]">
           
            <Main></Main>
          </div>
        </div>
        <div className="hidden md:block md:flex-auto w-[20%] fixed right-0 mt-[10px]">
          <RightSide></RightSide>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
