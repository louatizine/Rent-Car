import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

const LoginForm = () => {
  const [email, setEmail] = useState('');        
  const [password, setPassword] = useState('');  
  const toast = useToast();                     
  const navigate = useNavigate(); // Use React Router's useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
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
      const response = await fetch('http://localhost:8000/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) { // If login fails
        toast({
          title: "Error",
          description: data.message || "An unexpected error occurred.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      // Show success toast if login is successful
      toast({
        title: "Success",
        description: "Login successful!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Store the accessToken in localStorage for further API requests
      localStorage.setItem('accessToken', data.accessToken);

      // Redirect to the home page after successful login
      navigate("/Home"); // Redirects to the home page
      
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during login.",
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
          <Button type="submit" colorScheme="teal" mt="4">
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
