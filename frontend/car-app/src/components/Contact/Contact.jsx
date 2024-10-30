import { Box, Heading, Input, Textarea, Button, Stack, Container } from "@chakra-ui/react";
import Back from "./Back";
import img from "../Assests/homeImage.png"; // Make sure to import your image here

const Contact = () => {
  return (
    <>
      <Box className="contact mb">
        <Back name="Contact Us" title="Get Helps & Friendly Support" cover={img} />
        <Container maxW="container.md" mt="8">
          <Box as="form" p="8" boxShadow="lg" borderRadius="md" bg="white">
            <Heading as="h4" size="md" mb="4">Fill up The Form</Heading>
            <Stack spacing="4">
              <Stack direction={{ base: "column", md: "row" }} spacing="4">
                <Input placeholder="Name" size="md" />
                <Input placeholder="Email" size="md" />
              </Stack>
              <Input placeholder="Subject" size="md" />
              <Textarea placeholder="Your Message" rows={6} resize="vertical" />
              <Button colorScheme="teal" size="md" mt="4">Submit Request</Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
