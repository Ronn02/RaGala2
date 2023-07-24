import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Regsiter";
import Reset from "./Reset";
import FriendProfile from "./FriendProfile";
import RagalaHome from "./RagalaHome";
import Cavite from "./Province/Cavite/Cavite";
import AguinaldoShrine from "./Province/Cavite/CaviteSpecific/AguinaldoShrine";
import Batangas from "./Province/Batangas/Batangas";
import Laguna from "./Province/Laguna/Laguna";
import LaBellaBotique from "./Province/Cavite/CaviteSpecific/LaBellaBotique";
import SkyRanchTagaytay from "./Province/Cavite/CaviteSpecific/SkyRanchTagaytay";
import CorregidorIsland from "./Province/Cavite/CaviteSpecific/CorregidorIsland";
import Paradizoo from "./Province/Cavite/CaviteSpecific/Paradizoo";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/reset" element={<Reset></Reset>}></Route>
        <Route
          path="/profile/:id"
          element={<FriendProfile></FriendProfile>}
        ></Route>
        <Route path="/ragalahome" element={<RagalaHome></RagalaHome>}></Route>
        <Route path="/cavite" element={<Cavite></Cavite>}></Route>
            <Route path="/aguinaldoshrine" element={<AguinaldoShrine></AguinaldoShrine>}></Route>
            <Route path="/labellabotique" element={<LaBellaBotique></LaBellaBotique>}></Route>
            <Route path="/skyranchtagaytay" element={<SkyRanchTagaytay></SkyRanchTagaytay>}></Route>
            <Route path="/corregidorisland" element={<CorregidorIsland></CorregidorIsland>}></Route>
            <Route path="/paradizoo" element={<Paradizoo></Paradizoo>}></Route>


        <Route path="/batangas" element={<Batangas></Batangas>}></Route>
        <Route path="/laguna" element={<Laguna></Laguna>}></Route>
      </Routes>
    </div>
  );
};

export default Pages;
