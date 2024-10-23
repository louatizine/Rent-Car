
// App.jsx
 import { ChakraProvider } from '@chakra-ui/react';
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/SignUp/Signup'; import LoginForm from './components/Login/Login';
import AllUsersPage from './components/AllUsers/GetAllUser'; 
import Navbar from './Components/Navbar/Navbar';
import Services from './components/Services/Services';
import Home from './components/Home/Home';
import ContactUs from './components/Contact/Contact';
import VendorCarousel from './components/Sponsors/SponsorCarrousel';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar/>
        <Home/>
        <Services/>
        <ContactUs/>
        <VendorCarousel/>
        <Footer/>
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/aLLusers" element={<AllUsersPage />} /> 

        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
 



