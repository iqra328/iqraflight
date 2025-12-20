import React, { useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import Main from "../Components/Main.jsx";
<<<<<<< HEAD
import Bottombar from "../Components/ButtomBar.jsx"
=======
>>>>>>> c7ea92548f5d486ebdb215e845318d288b52af66
import OverseasSection from "../Components/OverseasSection.jsx";
import SearchFilterBar from "../Components/SearchFilterBar.jsx";
import Footer from "../Components/Footer.jsx";

import Weather from "../Components/Weather.jsx";
import Location from "../Components/Locations.jsx";
import User from "../Components/User.jsx";
import Time from "../Components/Time.jsx";

function HotelPage() {
<<<<<<< HEAD
  const [selectedSection, setSelectedSection] = useState(""); 
=======
  const [selectedSection, setSelectedSection] = useState(""); // state for filter
>>>>>>> c7ea92548f5d486ebdb215e845318d288b52af66

  const renderSection = () => {
    switch (selectedSection) {
      case "weather":
        return <Weather />;
      case "location":
        return <Location />;
      case "user":
        return <User />;
      case "time":
        return <Time />;
      default:
<<<<<<< HEAD
        return null; 
=======
        return null; // nothing selected
>>>>>>> c7ea92548f5d486ebdb215e845318d288b52af66
    }
  };

  return (
    <>
      <Navbar />
      <Main />
<<<<<<< HEAD
      <Bottombar/>
         <SearchFilterBar setSelectedSection={setSelectedSection} />
          {renderSection()}  
      <OverseasSection />
      <br />
     
=======
         <SearchFilterBar setSelectedSection={setSelectedSection} />
      <OverseasSection />
      <br />
      {renderSection()}
>>>>>>> c7ea92548f5d486ebdb215e845318d288b52af66

      <Footer />
    </>
  );
}

export default HotelPage;
