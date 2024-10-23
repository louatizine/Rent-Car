import {
  Box,
  Container,
  Text,
  Heading,
  Stack,
  Flex,
  Button,
  Input,
  Image,
  Grid,
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Box
        className="container-fluid"
        bg="gray.700"
        py={5}
        px={{ base: 3, sm: 3, md: 5 }}
        mt={20}
      >
        <Container maxW="container.xl">
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={5}
            py={5}
          >
            <Box>
              <Heading as="h4" size="md" color="white" mb={4}>
                Get In Touch
              </Heading>
              <Text color="white" mb={2}>
                <FaMapMarkerAlt style={{ marginRight: "8px" }} />
                Bizert, Tunisia, 7081
              </Text>
              <Text color="white" mb={2}>
                <FaPhoneAlt style={{ marginRight: "8px" }} />
                +91 8952147896
              </Text>
              <Text color="white">
                <FaEnvelope style={{ marginRight: "8px" }} />
                info@example.com
              </Text>
              <Text color="white" py={2} fontWeight="bold">
                Follow Us
              </Text>
              <Flex justify="start">
                <Button
                  as="a"
                  href="#"
                  colorScheme="blackAlpha"
                  variant="outline"
                  size="lg"
                  mr={2}
                >
                  <FaTwitter />
                </Button>
                <Button
                  as="a"
                  href="#"
                  colorScheme="blackAlpha"
                  variant="outline"
                  size="lg"
                  mr={2}
                >
                  <FaFacebookF />
                </Button>
                <Button
                  as="a"
                  href="#"
                  colorScheme="blackAlpha"
                  variant="outline"
                  size="lg"
                  mr={2}
                >
                  <FaLinkedinIn />
                </Button>
                <Button
                  as="a"
                  href="#"
                  colorScheme="blackAlpha"
                  variant="outline"
                  size="lg"
                >
                  <FaInstagram />
                </Button>
              </Flex>
            </Box>

            <Box>
              <Heading as="h4" size="md" color="white" mb={4}>
                Useful Links
              </Heading>
              <Stack spacing={2} color="white">
                <Button variant="link" color="white" href="#">
                  Private Policy
                </Button>
                <Button variant="link" color="white" href="#">
                  Term & Conditions
                </Button>
                <Button variant="link" color="white" href="#">
                  New Member Registration
                </Button>
                <Button variant="link" color="white" href="#">
                  Affiliate Programme
                </Button>
                <Button variant="link" color="white" href="#">
                  Return & Refund
                </Button>
                <Button variant="link" color="white" href="#">
                  Help & FAQs
                </Button>
              </Stack>
            </Box>

            <Box>
              <Heading as="h4" size="md" color="white" mb={4}>
                Car Gallery
              </Heading>


              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  sm: "repeat(3, 1fr)",
                }}
                gap={2}
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <Box key={num}>
                    <Image
                      /*                       src={`img/gallery-${num}.jpg`}

 */
                      src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReNH5jn_0kTTlKJgl8bymWfvwJdhAj_xUUUA&s-${num}.jpg`}
                      alt={`Gallery Image ${num}`}
                      width="100%"
                      borderRadius="md"
                    />
                  </Box>
                ))}
              </Grid>



              
            </Box>

            <Box>
              <Heading as="h4" size="md" color="white" mb={4}>
                Newsletter
              </Heading>
              <Text color="white" mb={4}>
                Stay updated with Zine Cars! Subscribe to our newsletter for
                exclusive offers, the latest arrivals, and tips for your next
                rental. Experience luxury on the road and never miss out on
                special promotions!
              </Text>
              <Flex>
                <Input
                  placeholder="Your Email"
                  bg="gray.600"
                  borderColor="gray.600"
                  _placeholder={{ color: "gray.400" }}
                />
                <Button colorScheme="blue" ml={2} px={6}>
                  Sign Up
                </Button>
              </Flex>
            </Box>
          </Grid>
        </Container>
      </Box>

      <Box
        className="container-fluid"
        bg="black"
        py={4}
        px={{ base: 3, sm: 3, md: 5 }}
      >
        <Text textAlign="center" color="gray.500">
          &copy;{" "}
          <a href="#" style={{ color: "blue" }}>
            Zine Cars
          </a>
          . All Rights Reserved.
        </Text>
      </Box>
    </>
  );
};

export default Footer;
