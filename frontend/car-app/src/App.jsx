import "../src/components/dist/styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import SignupForm from "./components/SignUp/Signup";
import LoginForm from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";

function App() {
  return (
    <ChakraProvider>
      <Router>
        {/* Navbar always present */}
        <Navbar />
        {/* Main Content */}
        <MainContent />
      </Router>
    </ChakraProvider>
  );
}

function MainContent() {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/signup" || location.pathname === "/login";

  return (
    <>
      <Routes>
        {/* Route for the Home page */}
        <Route path="/" element={<Home />} />

        {/* Routes for other pages */}
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Add other routes as needed */}
      </Routes>

      {/* Footer only on non-auth pages */}
      {!isAuthPage}
    </>
  );
}

export default App;
