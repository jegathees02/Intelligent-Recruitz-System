import React from 'react';
// import WithAction from './navbar';
import NavBar from '../components/navbar';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Heading,Button,Text } from '@chakra-ui/react';
// import { Button, Box, Spinner } from '@chakra-ui/react';


function About() {
    return (
        <>
        <div>
        <NavBar />
        </div>
        <div>
        <Card align='center'>
  <CardHeader>
    <Heading size='md'> About Recruitz</Heading>
  </CardHeader>
  <CardBody>
    <Text>Recruitz is an AI-powered personality assessment and assistive platform that provides personality score based on personality traits and job suitability.
 </Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>
        </div>
        </>
    )
}

export default About;