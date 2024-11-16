/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  useToast,
} from '@chakra-ui/react';

const AddCar = () => {
  const [formData, setFormData] = useState({
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
  });
  const [images, setImages] = useState([]);
  const toast = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = new FormData();
    // Append the form data fields
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    
    // Append images to FormData (check if images are present)
    images.forEach((image) => data.append("images", image));
  
    const token = localStorage.getItem("accessToken");
  
    if (!token) {
      toast({
        title: "Error",
        description: "You must be logged in to add a car.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
  
    try {
      const response = await fetch("http://localhost:8000/add-car", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Include the Authorization header
        },
        body: data,
      });
  
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || "Failed to add car");
      }
  
      const result = await response.json();
      toast({
        title: "Car added successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error adding car.",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  

  

  return (
    <Box maxW="500px" mx="auto" p="4" borderRadius="md" boxShadow="md">
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb="4">
          <FormLabel>Brand</FormLabel>
          <Input name="brand" value={formData.brand} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired mb="4">
          <FormLabel>Model</FormLabel>
          <Input name="model" value={formData.model} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired mb="4">
          <FormLabel>Year</FormLabel>
          <Input name="year" type="number" value={formData.year} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired mb="4">
          <FormLabel>Registration Number</FormLabel>
          <Input name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired mb="4">
          <FormLabel>Transmission</FormLabel>
          <Select name="transmission" value={formData.transmission} onChange={handleChange}>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </Select>
        </FormControl>
        <FormControl isRequired mb="4">
          <FormLabel>Fuel Type</FormLabel>
          <Select name="fuelType" value={formData.fuelType} onChange={handleChange}>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
          </Select>
        </FormControl>
        <FormControl isRequired mb="4">
          <FormLabel>Price Per Day</FormLabel>
          <Input name="pricePerDay" type="number" value={formData.pricePerDay} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired mb="4">
          <FormLabel>Seats</FormLabel>
          <Input name="seats" type="number" value={formData.seats} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired mb="4">
          <FormLabel>Mileage</FormLabel>
          <Input name="mileage" type="number" value={formData.mileage} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired mb="4">
          <FormLabel>Location</FormLabel>
          <Input name="location" value={formData.location} onChange={handleChange} />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Images</FormLabel>
          <Input type="file" multiple onChange={handleImageChange} />
        </FormControl>
        <Button type="submit" colorScheme="teal" width="full">
          Add Car
        </Button>
      </form>
    </Box>
  );
};

export default AddCar;
