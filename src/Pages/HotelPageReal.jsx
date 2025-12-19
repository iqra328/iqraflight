import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Main from "../Components/Main.jsx";
import BottomBar from "../Components/ButtomBar.jsx";
import Hotel from "../Components/Hotel.jsx";
import Footer from "../Components/Footer.jsx";

function HotelRealPagee() {
  return (
    <div>
      <Navbar />
      <Main />
      <BottomBar />
      <Hotel />  {/* Hardcoded hotel search */}
      <Footer />
    </div>
  );
}

export default HotelRealPagee;
