import {
    Box,
    Container,
    Heading,
    Text,
    Input,
    Textarea,
    Button,
    SimpleGrid,
    Flex,
    Icon,
  } from "@chakra-ui/react";
  import { FaMapMarkerAlt, FaEnvelopeOpen } from "react-icons/fa";
  
  const ContactUs = () => {
    return (
      <Box py={5}>
        <Container maxW="container.lg" pt={5} pb={3}>
          <Heading as="h1" size="2xl" textAlign="center" mb={5} textTransform="uppercase">
            Contact Us
          </Heading>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5}>
            <Box
              bg="gray.100"
              p={8}
              borderRadius="md"
              boxShadow="md"
              mb={4}
            >
              <form>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                  <Input
                    placeholder="Your Name"
                    required
                    p={4}
                  />
                  <Input
                    placeholder="Your Email"
                    type="email"
                    required
                    p={4}
                  />
                </SimpleGrid>
                <Input
                  placeholder="Subject"
                  required
                  my={4}
                  p={4}
                />
                <Textarea
                  placeholder="Message"
                  rows={5}
                  required
                  p={4}
                />
                <Button colorScheme="blue" type="submit" py={3} px={5}>
                  Send Message
                </Button>
              </form>
            </Box>
            <Box
              bg="blue.500"
              color="white"
              p={5}
              borderRadius="md"
              boxShadow="md"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="435px"
            >
              <Flex alignItems="center" mb={3}>
                <Icon as={FaMapMarkerAlt} boxSize={8} color="blue.200" mr={3} />
                <Box>
                  <Text fontWeight="bold">Head Office</Text>
                  <Text>Bizert, Tunisia, 7081</Text>
                </Box>
              </Flex>
              <Flex alignItems="center" mb={3}>
                <Icon as={FaMapMarkerAlt} boxSize={8} color="blue.200" mr={3} />
                <Box>
                  <Text fontWeight="bold">Branch Office</Text>
                  <Text>Bizert, Tunisia, 7081</Text>
                </Box>
              </Flex>
              <Flex alignItems="center" mb={3}>
                <Icon as={FaEnvelopeOpen} boxSize={8} color="blue.200" mr={3} />
                <Box>
                  <Text fontWeight="bold">Customer Service</Text>
                  <Text>customer@example.com</Text>
                </Box>
              </Flex>
              <Flex alignItems="center">
                <Icon as={FaEnvelopeOpen} boxSize={8} color="blue.200" mr={3} />
                <Box>
                  <Text fontWeight="bold">Return & Refund</Text>
                  <Text>refund@example.com</Text>
                </Box>
              </Flex>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    );
  };
  
  export default ContactUs;
  