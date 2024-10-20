import { Box, Button, FormControl, FormLabel, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

import './Login.css'

function LogInFrom() {
  return (
    <Box className='box' paddingY={'50px'} maxW="md" mx="auto"  p={6} borderWidth="1px" borderRadius="lg" backgroundColor={'#F5F5F5'}>
      <VStack className='vstack'>
        <Text className='heading' fontSize='40px' marginY={'20px'} textTransform={'uppercase'} fontWeight={'bold'}>Log In</Text>
        <form>
            <FormControl>
                <FormLabel fontSize={'20px'} marginBottom={'10px'}>Email Address :</FormLabel>
                <Input paddingLeft={'10px'} width={'400px'} height={'60px'} marginBottom={'20px'} type='email' placeholder='Enter your email address'/>
            </FormControl>

            <FormControl>
                <FormLabel fontSize={'20px'} marginBottom={'10px'}>Password :</FormLabel>
                <Input paddingLeft={'10px'} width={'400px'} height={'60px'} marginBottom={'20px'} type='password' placeholder='Enter your password'/>
                <Text marginBottom={'10px'} cursor={'pointer'} _hover={{color: '#DC2D13', textDecoration: 'underline'}} fontSize={'15px'} textAlign={'right'}>Forgot Password ?</Text>
            </FormControl>
            
            <Button backgroundColor={'#DC2D13'} color={'white'} fontSize={'20px'} _hover={{backgroundColor: '#FFA500'} } transition={'0.2s ease-in-out'}  width={'400px'} height={'60px'}>Log In</Button>

           <HStack className='text-bottom' marginTop={'20px'}>
           <Text >Don't have an account ?</Text>
            <Text textDecoration={'underline'} transition={'0.2s ease-in-out'} cursor={'pointer'} _hover={{color: '#DC2D13'}} ><Link to='/signup'>Sign Up</Link></Text>
           </HStack>
        </form>
      </VStack>
    </Box>
  )
}

export default LogInFrom
