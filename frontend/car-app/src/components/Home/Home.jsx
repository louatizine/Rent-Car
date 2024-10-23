import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  AspectRatio,
} from "@chakra-ui/react";
import { FaHeadset, FaCar, FaMapMarkerAlt } from "react-icons/fa";

const About = () => {
  return (
    <Box py={5}>
      <Container maxW="container.lg" pt={5} pb={3}>
        <Heading
          as="h1"
          size="2xl"
          textAlign="center"
          mb={5}
          textTransform="uppercase"
        >
          Welcome To <span style={{ color: "blue" }}>Zine Cars</span>
        </Heading>
      
     <AspectRatio ratio={16 / 9}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
    </AspectRatio>


        <Flex justify="center">
          <Box textAlign="center" width="75%">
            <img
              className="w-75 mb-4"
              src="img/about.png"
              alt=""
              style={{ width: "100%", maxWidth: "500px" }} // Adjust the width as needed
            />
            <Text>
              Welcome to Zine Cars, your premier destination for luxury car
              rentals. We offer a diverse selection of high-end vehicles to meet
              your unique travel needs. Whether it&lsquo;s for business,
              leisure, or a special occasion, our seamless rental process
              ensures convenience and reliability. Experience top-tier customer
              service and drive your dream car today with Zine Cars. Choose from
              a range of premium models and enjoy the journey in style and
              comfort. Book now and elevate your driving experience.
            </Text>
          </Box>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} mt={3}>
          <Flex
            alignItems="center"
            bg="gray.100"
            p={4}
            borderRadius="md"
            height="150px"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              backgroundColor="blue.500"
              borderRadius="md"
              width="100px"
              height="100px"
              marginRight={4}
            >
              <Icon as={FaHeadset} boxSize={8} color="gray.200" />
            </Box>
            <Heading size="md" textTransform="uppercase">
              24/7 Car Rental Support
            </Heading>
          </Flex>
          <Flex
            alignItems="center"
            bg="blue.500"
            p={4}
            borderRadius="md"
            height="150px"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              backgroundColor="blue.300"
              borderRadius="md"
              width="100px"
              height="100px"
              marginRight={4}
            >
              <Icon as={FaCar} boxSize={8} color="gray.200" />
            </Box>
            <Heading size="md" color="gray.200" textTransform="uppercase">
              Car Reservation Anytime
            </Heading>
          </Flex>
          <Flex
            alignItems="center"
            bg="gray.100"
            p={4}
            borderRadius="md"
            height="150px"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              backgroundColor="blue.500"
              borderRadius="md"
              width="100px"
              height="100px"
              marginRight={4}
            >
              <Icon as={FaMapMarkerAlt} boxSize={8} color="gray.200" />
            </Box>
            <Heading size="md" textTransform="uppercase">
              Lots Of Pickup Locations
            </Heading>
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default About;
