import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Text, SimpleGrid, Card, CardBody, Image, Heading, Stack, Button, useToast } from '@chakra-ui/react';

const MyCars = () => {
  const [cars, setCars] = useState([]);
  const toast = useToast();
  const navigate = useNavigate(); // Initialize navigate hook

  useEffect(() => {
    // Function to fetch cars added by the logged-in user
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
            Authorization: `Bearer ${token}`, // Pass token in Authorization header
          },
        });

        if (!response.ok) {
          const errorResponse = await response.json();
          throw new Error(errorResponse.message || "Failed to fetch cars");
        }

        const result = await response.json();
        setCars(result.cars); // Update the state with the fetched cars
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
  const handleEditClick = (carId) => {
    navigate(`/edit-car/${carId}`); 
  };

  return (
    <Box maxW="1200px" mx="auto" p="4">
      <Heading as="h2" mb="6" textAlign="center">My Cars</Heading>
      
      {/* Display cars in a grid */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="4">
        {cars.length === 0 ? (
          <Text>No cars available</Text>
        ) : (
          cars.map((car) => (
            <Card key={car._id} boxShadow="md" borderRadius="md">
              <Image
                src={car.images.length > 0 ? car.images[0] : 'https://via.placeholder.com/400'}
                alt={`${car.brand} ${car.model}`}
                borderRadius="md"
                objectFit="cover"
                height="200px"
              />
              <CardBody>
                <Stack spacing="3">
                  <Heading size="md">{car.brand} {car.model}</Heading>
                  <Text>Year: {car.year}</Text>
                  <Text>Price per day: ${car.pricePerDay}</Text>
                  <Text>Location: {car.location}</Text>
                </Stack>
                <Button colorScheme="teal" mt="4" onClick={() => handleEditClick(car._id)}>
                  Edit
                </Button>
              </CardBody>
            </Card>
          ))
        )}
      </SimpleGrid>
    </Box>
  );
};

export default MyCars;
