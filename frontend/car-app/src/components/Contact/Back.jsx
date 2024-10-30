/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Container, Text, Heading, Image } from "@chakra-ui/react";


const Back = ({ name, title, cover }) => {
  return (
    <Box position="relative" textAlign="center" mb="8">
      <Image src={cover} alt="" w="100%" maxH="300px" objectFit="cover" />
      <Container maxW="container.md" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="white">
        <Text fontSize="lg" fontWeight="bold" color={"black"}>{name}</Text>
        <Heading as="h1" fontSize="4xl" mt="2" color={"black"}>{title}</Heading>
      </Container>
    </Box>
  );
};

export default Back;
