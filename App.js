import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Middle from "./components/Middle";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";


function App() {
  return (
   <div>
    <Footer/>
    <Navbar/>
    <Middle/>
    <ScrollToTop/>
    <Services/>
    <Testimonials/> 
   </div>
  );
}

export default App;
