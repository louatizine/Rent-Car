import {
    Box,
    Flex,
    Button,
    HStack,
    Link,
    IconButton,
    Image,
    useDisclosure,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
  import { Link as RouterLink } from 'react-router-dom';
  
  const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Logo on the left as an image */}
          <Box>
            <Link as={RouterLink} to="/">
              <Image
                src="../../Assests/" 
                alt="YourLogo"
                boxSize="50px"
                objectFit="cover"
              />
            </Link>
          </Box>
  
          {/* Hamburger menu for mobile view */}
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
  
          {/* Links for larger screens */}
          <HStack spacing={8} alignItems="center" display={{ base: 'none', md: 'flex' }}>
            <Link as={RouterLink} to="/">
              Home
            </Link>
            <Link as={RouterLink} to="/services">
              Services
            </Link>
            <Link as={RouterLink} to="/contactus">
            Contact Us
            </Link>
            <Link as={RouterLink} to="/sponsors">
              Sponsors
            </Link>
          </HStack>
  
          {/* Sign Up and Login buttons */}
          <HStack spacing={4}>
            <Button as={RouterLink} to="/signup" colorScheme="blue" size="sm">
              Sign Up
            </Button>
            <Button as={RouterLink} to="/login" size="sm">
              Login
            </Button>
          </HStack>
        </Flex>
  
        {/* Links for mobile view */}
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              <Link as={RouterLink} to="/" onClick={onClose}>
                Home
              </Link>
              <Link as={RouterLink} to="/services" onClick={onClose}>
                Services
              </Link>
              <Link as={RouterLink} to="/contactus" onClick={onClose}>
                Contact Us
              </Link>
              <Link as={RouterLink} to="/sponsors" onClick={onClose}>
                Sponsors
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    );
  };
  
  export default Navbar;
  