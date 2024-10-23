/* eslint-disable react/prop-types */
import {
    Box,
    Container,
    Text,
    Flex,
    Heading,
    SimpleGrid,
  } from "@chakra-ui/react";
  import { FaTaxi, FaMoneyCheckAlt, FaCar } from "react-icons/fa";
  
  const Services = () => {
    return (
      <>
        {/* Services Section */}
        <Box py={10} bg="gray.50">
          <Container maxW="container.xl" textAlign="center">
            <Heading size="xl" mb={5}>
              Our Services
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
              <ServiceCard
                icon={FaTaxi}
                title="Car Rental"
                description="Zine Cars offers a premium selection of luxury vehicles for rent, ensuring convenience, style, and exceptional customer service."
              />
              <ServiceCard
                icon={FaMoneyCheckAlt}
                title="Car Financing"
                description="Explore flexible car finance options at Zine Cars, tailored to suit your budget and make owning your dream car easy."
              />
              <ServiceCard
                icon={FaCar}
                title="Car Inspection"
                description="At Zine Cars, we provide comprehensive car inspections to ensure the highest standards of safety and performance."
              />
            </SimpleGrid>
          </Container>
        </Box>
      </>
    );
  };
  
  const ServiceCard = ({ icon, number, title, description }) => (
    <Box
      p={5}
      bg="white"
      borderRadius="md"
      boxShadow="md"
      _hover={{ bg: "blue.500", color: "white" }} // Change background and text color on hover
      transition="background-color 0.3s ease"
    >
      <Flex justify="space-between" align="center" mb={4}>
        <Box
          boxSize="80px"
          bg="yellow.500"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="md" // Optional: add a border radius for the icon background
        >
          {/* Change to a Box to control icon color */}
          <Box as={icon} color="black" boxSize="40px" />
        </Box>
        <Heading as="h1" size="xl" color="blue.500" _hover={{ color: "white" }}>
          {number}
        </Heading>
      </Flex>
      <Heading size="md" mb={2} color="blue.500" _hover={{ color: "white" }}>
        {title}
      </Heading>
      <Text color="gray.600" _hover={{ color: "white" }}>
        {description}
      </Text>
    </Box>
  );
  
  export default Services;
  