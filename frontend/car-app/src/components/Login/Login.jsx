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
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

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
      console.log('Sending login request:', { email, password }); // Debugging line

      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log('Received response:', data);

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

      toast({
        title: "Success",
        description: "Login successful!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      localStorage.setItem('accessToken', data.accessToken);

      if (data.role === 'agency') {
        navigate('/addv');
      } else if (data.role === 'client') {
        console.log(data.role);
        navigate('/allusers');
      } else {
        navigate('/home');
      }

    } catch (error) {
      console.error('Error during login:', error); // Debugging line
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
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="calc(100vh - 200px)" // Ensures form is between navbar and footer
      mt="50px"
    >
      <Box width="400px">
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
    </Box>
  );
};

export default LoginForm;
