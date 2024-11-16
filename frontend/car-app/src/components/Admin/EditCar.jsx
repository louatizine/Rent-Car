import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Use useNavigate for routing
import { Box, FormControl, FormLabel, Input, Button, Textarea, Select, Checkbox, useToast } from '@chakra-ui/react';

const EditCar = () => {
  const { carId } = useParams(); // Get carId from URL params
  const navigate = useNavigate(); // Initialize navigate hook
  const [carDetails, setCarDetails] = useState({
    brand: '',
    model: '',
    year: '',
    registrationNumber: '',
    transmission: '',
    fuelType: '',
    pricePerDay: '',
    seats: '',
    mileage: '',
    location: '',
    features: '',
    images: '',
    available: true,
  });

  const toast = useToast();

  useEffect(() => {
    // Fetch car details when the component mounts
    const fetchCarDetails = async () => {
        const token = localStorage.getItem("accessToken");
      
        if (!token) {
          toast({
            title: "Error",
            description: "You must be logged in to edit a car.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          return;
        }
      
        try {
          const response = await fetch(`http://localhost:8000/get-car/${carId}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`, // Pass token in Authorization header
            },
          });
      
          // Log the response for debugging
          console.log('Response Status:', response.status);
          console.log('Response Body:', await response.text()); // Log the body before attempting to parse
      
          if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message || "Failed to fetch car details");
          }
      
          const result = await response.json();
          setCarDetails(result.car); // Update the state with the fetched car details
        } catch (error) {
          console.error('Error fetching car details:', error); // Log error for debugging
          toast({
            title: "Error fetching car details",
            description: error.message,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      };
      
    fetchCarDetails();
  }, [carId, toast]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleUpdateCar = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("accessToken");

    if (!token) {
      toast({
        title: "Error",
        description: "You must be logged in to update the car.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/edit-car/${carId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(carDetails),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to update car");
      }

      toast({
        title: "Car updated",
        description: result.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Redirect to the list of cars after success
      navigate('/my-cars'); // Use navigate for routing
    } catch (error) {
      toast({
        title: "Error updating car",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="600px" mx="auto" p="4">
      <form onSubmit={handleUpdateCar}>
        <FormControl mb="4" isRequired>
          <FormLabel>Brand</FormLabel>
          <Input
            type="text"
            name="brand"
            value={carDetails.brand}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl mb="4" isRequired>
          <FormLabel>Model</FormLabel>
          <Input
            type="text"
            name="model"
            value={carDetails.model}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl mb="4" isRequired>
          <FormLabel>Year</FormLabel>
          <Input
            type="number"
            name="year"
            value={carDetails.year}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl mb="4" isRequired>
          <FormLabel>Registration Number</FormLabel>
          <Input
            type="text"
            name="registrationNumber"
            value={carDetails.registrationNumber}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl mb="4" isRequired>
          <FormLabel>Transmission</FormLabel>
          <Select
            name="transmission"
            value={carDetails.transmission}
            onChange={handleInputChange}
          >
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
          </Select>
        </FormControl>

        <FormControl mb="4" isRequired>
          <FormLabel>Fuel Type</FormLabel>
          <Select
            name="fuelType"
            value={carDetails.fuelType}
            onChange={handleInputChange}
          >
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
            <option value="electric">Electric</option>
            <option value="hybrid">Hybrid</option>
          </Select>
        </FormControl>

        <FormControl mb="4" isRequired>
          <FormLabel>Price Per Day (DT)</FormLabel>
          <Input
            type="number"
            name="pricePerDay"
            value={carDetails.pricePerDay}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl mb="4" isRequired>
          <FormLabel>Seats</FormLabel>
          <Input
            type="number"
            name="seats"
            value={carDetails.seats}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl mb="4" isRequired>
          <FormLabel>Mileage (in km)</FormLabel>
          <Input
            type="number"
            name="mileage"
            value={carDetails.mileage}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl mb="4" isRequired>
          <FormLabel>Location</FormLabel>
          <Input
            type="text"
            name="location"
            value={carDetails.location}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl mb="4">
          <FormLabel>Features</FormLabel>
          <Textarea
            name="features"
            value={carDetails.features}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl mb="4">
          <FormLabel>Images</FormLabel>
          <Input
            type="text"
            name="images"
            value={carDetails.images}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl mb="4">
          <FormLabel>Available</FormLabel>
          <Checkbox
            name="available"
            isChecked={carDetails.available}
            onChange={(e) =>
              setCarDetails((prevDetails) => ({
                ...prevDetails,
                available: e.target.checked,
              }))
            }
          />
        </FormControl>

        <Button colorScheme="teal" type="submit">
          Update Car
        </Button>
      </form>
    </Box>
  );
};

export default EditCar;
