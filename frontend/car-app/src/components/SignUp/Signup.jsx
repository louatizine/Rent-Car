/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  useToast,
} from '@chakra-ui/react';

const SignupForm = () => {
  const [fullname, setFullname] = useState('');  
  const [email, setEmail] = useState('');        
  const [password, setPassword] = useState('');  
  const [role, setRole] = useState('client');    
  const toast = useToast();                       

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullname || !email || !password) {
      toast({
        title: "Error",
        description: "All fields are required",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/create-account', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullname, email, password, role }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast({
          title: "Error",
          description: data.message || "An unexpected error occurred.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      // Show success toast and reset form fields
      toast({
        title: "Success",
        description: "Account created successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Reset the form
      setFullname('');
      setEmail('');
      setPassword('');
      setRole('client');

    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while creating your account.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box width="400px" mx="auto" mt="50px">
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Full Name</FormLabel>
            <Input
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Enter your full name"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Role</FormLabel>
            <Select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="client">Client</option>
              <option value="agency">Agency</option>
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="teal" mt="4">
            Sign Up
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default SignupForm;
