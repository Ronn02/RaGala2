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
        <Route path="/batangas" element={<Batangas></Batangas>}></Route>
        <Route path="/laguna" element={<Laguna></Laguna>}></Route>
      </Routes>
    </div>
  );
};

export default Pages;
