import { useState, useEffect } from "react";
import Footer from "../../Footer/Footer";
import HeroPages from "../../Hero/HeroPage";

function Contact() {
  // State to store form input values
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Fetch logged-in user's data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("accessToken"); // Corrected key name

        if (!token) {
          setResponseMessage("User is not logged in.");
          return;
        }

        // Fetch user data from backend API using token
        const response = await fetch("http://localhost:8000/get-users", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`, // Send token in the Authorization header
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        
        // Check if there is any user and set the data
        if (data.error || !data.users.length) {
          setResponseMessage("User data not found.");
          return;
        }

        // Assuming the logged-in user is the first one in the array (if that's the case in your app)
        const loggedInUser = data.users.find((user) => user._id === data.userId); // Adjust based on your data structure

        if (loggedInUser) {
          setFullName(loggedInUser.fullName); // Set user's name
          setEmail(loggedInUser.email); // Set user's email
        } else {
          setResponseMessage("User not found.");
        }

      } catch (error) {
        console.error("Error fetching user data:", error);
        setResponseMessage("Error fetching user data.");
      }
    };

    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!fullName || !email || !message) {
      setResponseMessage("All fields are required");
      return;
    }

    setIsSubmitting(true);
    setResponseMessage("");

    // Prepare the data to send
    const contactData = { fullName, email, message };

    try {
      // Make sure the backend URL is correct
      const response = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      // Check if the request was successful
      if (response.ok) {
        setResponseMessage("Contact saved successfully!");
      } else {
        // Log the response for debugging
        const errorData = await response.json();
        console.error("Error:", errorData);
        setResponseMessage(errorData.error || "Failed to save contact");
      }
    } catch (err) {
      // Log the error for debugging
      console.error("Submission error:", err);
      setResponseMessage("An error occurred while submitting the form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; (+126) 53 880 643
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                zine@gmail.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp;Bizerte,Tunisia
              </a>
            </div>
            <div className="contact-div__form">
              <form onSubmit={handleSubmit}>
                <label>
                  Full Name <b>*</b>
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder='E.g: "Joe Shmoe"'
                />

                <label>
                  Email <b>*</b>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="youremail@example.com"
                />

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write Here.."
                />

                <button type="submit" disabled={isSubmitting}>
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp;{" "}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>

              {responseMessage && <p>{responseMessage}</p>}
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(+126) 53 880 643</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
