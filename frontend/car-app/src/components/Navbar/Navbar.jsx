import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react"; // Import Button from Chakra UI

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token); // If there's an access token, the user is logged in
  }, []); // Empty dependency array to only run once when the component mounts

  const handleLogout = () => {
    localStorage.removeItem("accessToken"); // Remove the token on logout
    setIsLoggedIn(false); // Update the state to reflect that the user is logged out
  };

  return (
    <>
      <nav>
        {/* Mobile Navbar */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/Services">
                Services
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/sponsors">
                Our Sponsors
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Navbar */}
        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              {/* Add your logo here */}
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="about-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="models-link" to="/models">
                Vehicle Models
              </Link>
            </li>
            <li>
              <Link className="testi-link" to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link className="team-link" to="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link className="contact-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <div className="navbar__buttons">
            {!isLoggedIn ? (
              <>
                <Link className="navbar__buttons__sign-in" to="/signup">
                  Sign Up
                </Link>
                <Link className="navbar__buttons__register" to="/login">
                  Login
                </Link>
              </>
            ) : (
              <>
                <Link className="navbar__buttons__profile" to="/profile">
                  Profile
                </Link>
                <Button className="navbar__buttons__logout" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            )}
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
