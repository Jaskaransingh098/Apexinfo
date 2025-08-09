import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Consultant from "./Pages/Consultant/Consultant";
import Blog from "./Pages/Blog/Blog";
// import Services from "./Pages/Services/Services";
// import CommonCta from "./Components/CommonCta/CommonCta";
import Ecommerce from "./Pages/Industries/E-commerce/E-commerce";
import Healthcare from "./Pages/Industries/Healthcare/Healthcare";
import Financial from "./Pages/Industries/Financial/Financial";
import Logistics from "./Pages/Industries/Logistics/Logistics";
import Manufacturing from "./Pages/Industries/Manufacturing/Manufacturing";
import Technology from "./Pages/Industries/Technology/Technology";
import Accounting from "./Pages/Services/Accounting/Accounting";
import CallCenter from "./Pages/Services/CallCenter/CallCenter";
import Annotion from "./Pages/Services/Annotion/Annotion";
import Domestic from "./Pages/Services/Domestic/Domestic";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import DataManagement from "./Pages/Services/DataManagement/DataManagement";
import Creative from "./Pages/Services/Creative/Creative";
import Software from "./Pages/Services/Software/Software";
import Website from "./Pages/Services/Website/Website";
import Digital from "./Pages/Services/Digital/Digital";

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Navbar isHome={isHome} />
      <Routes>
        <Route path="/" element={
          <>
            <Body />
          </>} 
        />
        <Route path="/about" element={<About />} />
        <Route path="/consultant" element={<Consultant/> }/>
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/services" element={<Services/>} /> */}
        <Route path="/e-commerce" element={<Ecommerce/>}/>
        <Route path="/healthcare" element={<Healthcare/>}/>
        <Route path="/financial" element={<Financial/>}/>
        <Route path="/logistics" element={<Logistics/>}/>
        <Route path="/manufacturing" element={<Manufacturing/>}/>
        <Route path="/technology" element={<Technology/>}/>
        <Route path="/accounting" element={<Accounting/>}/>
        <Route path="/annotion" element={<Annotion/>}/>
        <Route path="/domestic" element={<Domestic/>}/>
        <Route path="/data" element={<DataManagement/>}/>
        <Route path="/callcenter" element={<CallCenter/>}/>
        <Route path="/callcenter" element={<CallCenter/>}/>
        <Route path="/creative" element={<Creative/>}/>
        <Route path="/software" element={<Software/>}/>
        <Route path="/website" element={<Website/>}/>
        <Route path="/digital" element={<Digital/>}/>
        <Route path="/privacy" element={<PrivacyPolicy/>}/>
        
      </Routes>
      <Footer/>
    </>
  );
}

function App() {
  return (
    <>

      <ScrollToTop />
      <AppContent />
    </>
  );
}

export default App;
