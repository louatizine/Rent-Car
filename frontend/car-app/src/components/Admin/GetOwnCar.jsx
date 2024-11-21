import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Heading,
  Stack,
  Button,
  useToast,
} from "@chakra-ui/react";

const MyCars = () => {
  const [cars, setCars] = useState([]);
  const toast = useToast();
  const navigate = useNavigate();

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
        setCars(result.cars);
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
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      padding={{ base: "4", md: "6" }}
    >
      {/* Main content area */}
      <Box flex="1">
        <Heading as="h2" mb="6" textAlign="center" marginTop={50}>
          My Cars
        </Heading>

        {/* Display cars in a responsive grid */}
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
          spacing={{ base: "4", sm: "6", md: "8" }}
          justifyItems="center"
        >
          {cars.length === 0 ? (
            <Text>No cars available</Text>
          ) : (
            cars.map((car) => (
              <Card
                key={car._id}
                boxShadow="md"
                borderRadius="md"
                maxW="300px"
                width="100%"
                p="4"
              >
                <Image
                  src={car.imageUrl || "https://via.placeholder.com/400"}
                  alt={`${car.brand} ${car.model}`}
                  borderRadius="md"
                  objectFit="cover"
                  height="200px"
                />

                <CardBody>
                  <Stack spacing="3">
                    <Heading size="md">
                      {car.brand} {car.model}
                    </Heading>
                    <Text>Year: {car.year}</Text>
                    <Text>Price per day: ${car.pricePerDay}</Text>
                    <Text>Location: {car.location}</Text>
                  </Stack>
                  <Button
                    colorScheme="teal"
                    mt="4"
                    onClick={() => handleEditClick(car._id)}
                  >
                    Edit
                  </Button>
                </CardBody>
              </Card>
            ))
          )}
        </SimpleGrid>
      </Box>

      {/* Footer can be here or a different component */}
      {/* If using a footer component, you can place it at the bottom */}
    </Box>
  );
};

export default MyCars;
