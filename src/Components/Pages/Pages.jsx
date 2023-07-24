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
import CaleruegaChurch from "./Province/Batangas/BatangasSpecific/CaleruegaChurch";
import PadrePioNationalShrine from "./Province/Batangas/BatangasSpecific/PadrePioNationalShrine";
import FortuneIsland from "./Province/Batangas/BatangasSpecific/FortuneIsland";
import MinorBasilica from "./Province/Batangas/BatangasSpecific/MinorBasilica";
import HiddenValleySprings from "./Province/Laguna/LagunaSpecific/HiddenValleySprings";
import EnchantedKingdom from "./Province/Laguna/LagunaSpecific/EnchantedKingdom";
import PagsanjanFalls from "./Province/Laguna/LagunaSpecific/PagsanjanFalls";
import SplashIslands from "./Province/Laguna/LagunaSpecific/SplashIslands";
import Quezon from "./Province/Quezon/Quezon";
import ThePonceFarm from "./Province/Quezon/QuezonSpecific/ThePonceFarm";
import BorawanIsland from "./Province/Quezon/QuezonSpecific/BorawanIsland";
import VillaEscuderoResort from "./Province/Quezon/QuezonSpecific/VillaEscuderoResort";
import QuezonPremierHotel from "./Province/Quezon/QuezonSpecific/QuezonPremierHotel";
import Rizal from "./Province/Rizal/Rizal";
import TreasureMountains from "./Province/Rizal/RizalSpecific/TreasureMountains";
import AtvAdventure from "./Province/Rizal/RizalSpecific/AtvAdventure";
import AvilonZoo from "./Province/Rizal/RizalSpecific/AvilonZoo";
import DaranakFalls from "./Province/Rizal/RizalSpecific/DaranakFalls";
import ToDo from "./ToDo";


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
            <Route path="/caleruegachurch" element={<CaleruegaChurch></CaleruegaChurch>}></Route>
            <Route path="/padrepionationalshrine" element={<PadrePioNationalShrine></PadrePioNationalShrine>}></Route>
            <Route path="/fortuneisland" element={<FortuneIsland></FortuneIsland>}></Route>
            <Route path="/minorbasilica" element={<MinorBasilica></MinorBasilica>}></Route>

                    
        <Route path="/laguna" element={<Laguna></Laguna>}></Route>
            <Route path="/hiddenvalleysprings" element={<HiddenValleySprings></HiddenValleySprings>}></Route>
            <Route path="/enchantedkingdom" element={<EnchantedKingdom></EnchantedKingdom>}></Route>
            <Route path="/pagsanjanfalls" element={<PagsanjanFalls></PagsanjanFalls>}></Route>
            <Route path="/splashislands" element={<SplashIslands></SplashIslands>}></Route>

        <Route path="/quezon" element={<Quezon></Quezon>}></Route>
            <Route path="/theponcefarm" element={<ThePonceFarm></ThePonceFarm>}></Route>
            <Route path="/borawanisland" element={<BorawanIsland></BorawanIsland>}></Route>
            <Route path="/villaescuderoresort" element={<VillaEscuderoResort></VillaEscuderoResort>}></Route>
            <Route path="/quezonpremierhotel" element={<QuezonPremierHotel></QuezonPremierHotel>}></Route>

        <Route path="/rizal" element={<Rizal></Rizal>}></Route>
            <Route path="/treasuremountains" element={<TreasureMountains></TreasureMountains>}></Route>
            <Route path="/atvadventure" element={<AtvAdventure></AtvAdventure>}></Route>
            <Route path="/avilonzoo" element={<AvilonZoo></AvilonZoo>}></Route>
            <Route path="/daranakfalls" element={<DaranakFalls></DaranakFalls>}></Route>

        <Route path="/todo" element={<ToDo></ToDo>}></Route>
        




      </Routes>
    </div>
  );
};

export default Pages;
