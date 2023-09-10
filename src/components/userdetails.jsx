'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Textarea,
} from '@chakra-ui/react'
import NavBar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Userdetails() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/camera');
    }, 500);
  }
  return (
    <div>
      <NavBar />
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={10} mx={'auto'} maxW={'lg'} py={12} px={6}>
        
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl isRequired id="text">
              <FormLabel>Job title</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl isRequired id="text">
              <FormLabel>Job description</FormLabel>
              <Textarea type="text" />
            </FormControl>
            <FormControl isRequired id="text">
              <FormLabel>Resume</FormLabel>
              <Input type="file" />
            </FormControl>
            <FormControl isRequired id="text">
              <FormLabel>Skill sets</FormLabel>
              <Textarea type="text" />
            </FormControl>
            <Stack spacing={40}>
              
              <Button
                bg={'teal.500'}
                color={'white'}
                _hover={{
                  bg: 'teal.400',
                }} onClick={handleSubmit}> 
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </div>
  )
}