import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import CarBox from "./CarBox"; // Import CarBox

function PickCar() {
  const [activeCar, setActiveCar] = useState(null);  // Keep track of the active car
  const [cars, setCars] = useState([]);
  const [colorBtn, setColorBtn] = useState("");  // Track the active button for coloring
  const toast = useToast();

  useEffect(() => {
    const fetchCars = async () => {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        toast({
          title: "Error",
          description: "You must be logged in to view your cars.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      try {
        const response = await fetch("http://localhost:8000/get-all-cars", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorResponse = await response.json();
          throw new Error(errorResponse.message || "Failed to fetch cars");
        }

        const result = await response.json();
        setCars(result.cars);  // Set all cars
      } catch (error) {
        toast({
          title: "Error fetching cars.",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    };

    fetchCars();
  }, [toast]);

  const handleCarClick = (carID, btnID) => {
    setActiveCar(carID);  // Set the clicked car as active
    setColorBtn(btnID);    // Set the active button color
  };

  // Function to determine the button's active state for styling
  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <section className="pick-section">
      <div className="container">
        <div className="pick-container">
          <div className="pick-container__title">
            <h3>Vehicle Models</h3>
            <h2>Our rental fleet</h2>
            <p>
              Choose from a variety of our amazing vehicles to rent for your
              next adventure or business trip.
            </p>
          </div>

          <div className="pick-container__car-content">
            {/* Pick car buttons */}
            <div className="pick-box">
              {cars.length > 0 ? (
                cars.map((car, index) => (
                  <button
                    key={car._id}
                    className={`${coloringButton(`btn${index + 1}`)}`}
                    onClick={() => handleCarClick(car._id, `btn${index + 1}`)}
                  >
                    {car.brand} {car.model}
                  </button>
                ))
              ) : (
                <p>Loading cars...</p>
              )}
            </div>

            {/* Show CarBox only if a car is selected */}
            {activeCar && (
              <div className="car-details">
                <h3>Picked Car</h3> {/* Header to indicate the selected car */}
                <CarBox carID={activeCar} cars={cars} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PickCar;
