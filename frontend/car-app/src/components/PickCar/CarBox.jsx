/* eslint-disable react/prop-types */
import { useState } from "react";

function CarBox({ carID, cars }) {
  const [carLoad, setCarLoad] = useState(true);

  // Find the car object based on carID
  const car = cars.find((car) => car._id === carID);

  // If car is not found, display loading message
  if (!car) {
    return <p>Loading car details...</p>;
  }

  // Assuming the images are stored on the server in 'public/images/cars/{carID}/'
  const carImagePath = `http://localhost:8000/backend/uploads/${car._id}/${car.images[0]}`;

  return (
    <div className="box-cars">
      <div className="pick-car">
        {carLoad && <span className="loader"></span>}
        <img
          style={{ display: carLoad ? "none" : "block" }}
          src={carImagePath}  // Use the backend image path
          alt="car_img"
          onLoad={() => setCarLoad(false)}
        />
      </div>
      <div className="pick-description">
        <div className="pick-description__price">
          <span>${car.pricePerDay}</span>/ rent per day
        </div>
        <div className="pick-description__table">
          <div className="pick-description__table__col">
            <span>Model</span>
            <span>{car.model}</span>
          </div>

          <div className="pick-description__table__col">
            <span>Brand</span>
            <span>{car.brand}</span>
          </div>

          <div className="pick-description__table__col">
            <span>Year</span>
            <span>{car.year}</span>
          </div>

          <div className="pick-description__table__col">
            <span>Seats</span>
            <span>{car.seats}</span>
          </div>

          <div className="pick-description__table__col">
            <span>Transmission</span>
            <span>{car.transmission}</span>
          </div>

          <div className="pick-description__table__col">
            <span>Fuel</span>
            <span>{car.fuelType}</span>
          </div>

          <div className="pick-description__table__col">
            <span>Mileage</span>
            <span>{car.mileage} km</span>
          </div>

          <div className="pick-description__table__col">
            <span>Location</span>
            <span>{car.location}</span>
          </div>

          <div className="pick-description__table__col">
            <span>Features</span>
            <ul>
              {car.features && car.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <a className="cta-btn" href="#booking-section">
          Reserve Now
        </a>
      </div>
    </div>
  );
}

export default CarBox;
