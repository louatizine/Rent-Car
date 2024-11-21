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
import Footer from "./components/Footer/Footer";
/* import AllUsersPage from "./components/AllUsers/GetAllUser";
 */ import MyCars from "./components/Admin/GetOwnCar";
import EditCar from "./components/Admin/EditCar";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        {/* Main Content */}
        <MainContent />

        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/edit-car" element={<EditCar/>} />
          {/* If you have more routes, add them here, e.g. */}
          {/* <Route path="/allusers" element={<AllUsersPage />} /> */}
        </Routes>
        {/*         <AllUsersPage/>
         */}
        <MyCars />
        <EditCar/>
        {/* Footer only once */}
        <Footer />
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
      {!isAuthPage && (
        <>
          {/*           <AllUsersPage/>
           */}{" "}
        </>
      )}
    </>
  );
}

export default App;
