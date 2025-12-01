import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/LandingPage/Navbar";
import Hero from "./Components/LandingPage/Hero";
import FeaturedProperties from "./Pages/PropertyDetails/FeaturedProperties";
import PropertyDetails from "./Pages/PropertyDetails/PropertyDetails";
import PropertyDetails2 from "./Pages/PropertyDetails/PropertyDetails2";
import PropertyDetails3 from "./Pages/PropertyDetails/PropertyDetails3";
import WhyChooseUs from "./Components/LandingPage/WhyChooseUS";
import Agents from "./Components/LandingPage/Agents";
import Footer from "./Components/LandingPage/Footer";
import BlogSection from "./Components/LandingPage/BlogSection";
import Gallery from "./Components/LandingPage/Gallery";
import Rent from "./Pages/Rent/Rent";
import Buy from "./Pages/Buy/Buy";
import Mortgage from "./Pages/Mortgage";
import FindAgent from "./Pages/FindAgent";
import RentDetails1 from "./Pages/Rent/RentDetails1";
import RentDetails2 from "./Pages/Rent/RentDetails2";
import RentDetails3 from "./Pages/Rent/RentDetails3";
import RentDetails4 from "./Pages/Rent/RentDetails4";
import RentDetails5 from "./Pages/Rent/RentDetails5";
import RentDetails6 from "./Pages/Rent/RentDetails6";
import RentDetails7 from "./Pages/Rent/RentDetails7";
import RentDetails8 from "./Pages/Rent/RentDetails8";
import RentDetails9 from "./Pages/Rent/RentDetails9";
import PaymentSuccess from "./Components/Common/PaymentSuccess";
import BuyDetails1 from "./Pages/Buy/BuyDetails1";
import BuyDetails2 from "./Pages/Buy/BuyDetails2";
import BuyDetails3 from "./Pages/Buy/BuyDetails3";
import BuyDetails4 from "./Pages/Buy/BuyDetails4";
import BuyDetails5 from "./Pages/Buy/BuyDetails5";
import BuyDetails6 from "./Pages/Buy/BuyDetails6";
import BuyDetails7 from "./Pages/Buy/BuyDetails7";
import BuyDetails8 from "./Pages/Buy/BuyDetails8";
import BuyDetails9 from "./Pages/Buy/BuyDetails9";
import HomeBuyingTips from "./Components/LandingPage/HomeBuyingTips";
import RealEstateInvesting from "./Components/LandingPage/RealEstateInvesting";
import LuxuryPropertyGuide from "./Components/LandingPage/LuxuryPropertyGuide";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeaturedProperties />
              <Gallery />
              <WhyChooseUs />
              <Agents />
              <BlogSection />
              
            </>
          }
        />
        <Route path="/property/1" element={<PropertyDetails />} />
        <Route path="/property/2" element={<PropertyDetails2 />} />
        <Route path="/property/3" element={<PropertyDetails3 />} />
        <Route path="/agent/:id" element={<Agents />} />
        <Route path="/Rent" element={<Rent/>} />
        <Route path="/Buy" element={<Buy/>} />
        <Route path="/Mortgage" element={<Mortgage/>} />
        <Route path="/find-an-agent" element={<FindAgent />} />
        <Route path="/rent/:id" element={<RentDetails1 />} />
        <Route path="/rent/1" element={<RentDetails1 />} />
        <Route path="/rent/2" element={<RentDetails2 />} />
        <Route path="/rent/3" element={<RentDetails3 />} />
        <Route path="/rent/4" element={<RentDetails4 />} />
        <Route path="/rent/5" element={<RentDetails5 />} />
        <Route path="/rent/6" element={<RentDetails6 />} />
        <Route path="/rent/7" element={<RentDetails7 />} />
        <Route path="/rent/8" element={<RentDetails8 />} />
        <Route path="/rent/9" element={<RentDetails9 />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/buy/1" element={<BuyDetails1 />} />
        <Route path="/buy/2" element={<BuyDetails2 />} />
        <Route path="/buy/3" element={<BuyDetails3 />} />
        <Route path="/buy/4" element={<BuyDetails4 />} />
        <Route path="/buy/5" element={<BuyDetails5 />} />
        <Route path="/buy/6" element={<BuyDetails6 />} />
        <Route path="/buy/7" element={<BuyDetails7 />} />
        <Route path="/buy/8" element={<BuyDetails8 />} />
        <Route path="/buy/9" element={<BuyDetails9 />} />
        <Route path="/blog/home-buying-tips" element={<HomeBuyingTips />} />
        <Route path="/blog/real-estate-investing" element={<RealEstateInvesting />} />
        <Route path="/blog/luxury-property-guide" element={<LuxuryPropertyGuide />} />

      </Routes>
      <Footer />
      
    </>
  );
};

export default App;
