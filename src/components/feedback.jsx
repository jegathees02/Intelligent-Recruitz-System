'use client'

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,   
  SimpleGrid,
  Spinner
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons';
import NavBar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
const BOLD =
'https://res.cloudinary.com/dyizhabab/image/upload/v1692195555/boldness_nn97ih.jpg'
  // 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
const CONFIDENCE =
'https://images.pexels.com/photos/3779409/pexels-photo-3779409.jpeg?auto=compress&cs=tinysrgb&w=600'
  // 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
const EYECONTACT =
'https://res.cloudinary.com/dyizhabab/image/upload/v1692196235/eye-macro-4_eyxo3j.jpg'
//   'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
const CLARITY =
'https://res.cloudinary.com/dyizhabab/image/upload/v1692194847/clarity_fzcwmn.jpg'
  // 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
 
export default function Feedback() {
  const [loading, setLoading] = useState(true);
  const bgcolor=useColorModeValue('white', 'gray.800');
  const navigate = useNavigate();
  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(loaderTimeout);
  }, []);

  if (loading) {
    return (
      <Center minHeight="100vh">
        <Spinner s  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='teal.500'
  size='xl' /><p> &nbsp;&nbsp;Loading...</p>
      </Center>
    );
  }
  
  // Retrieve the values from localStorage
// let ec = JSON.parse(localStorage.getItem('eye_contact'));
// let bold = JSON.parse(localStorage.getItem('boldness'));
// let cl = JSON.parse(localStorage.getItem('clarity'));
// let con = JSON.parse(localStorage.getItem('confidence'));

// console.log(con)

// const conf = con;
//   let confidence_str;
//   let clarity_str = '';
//   let eyecontact_str = '';
//   let boldness_str = '';
//   const confid = () => {
//   switch(conf) {
//     case conf > 90 : 
//     confidence_str = 'Optimal eye contact is achieved when you confidently maintain eye contact throughout the interview, with occasional breaks to ensure the conversation remains comfortable. This level of engagement underscores your authenticity and the depth of your interpersonal skills. By actively listening, responding with conviction, and connecting with the interviewer, you create a lasting impression that can greatly influence the outcome of the interview.';
//     break;
//     case conf > 80 : 
//     confidence_str = "As you approach near-constant eye contact, you convey your dedication and genuine interest in the role. Show your enthusiasm by actively listening and responding with thoughtful insights. Use eye contact to underscore how your experiences align with the company's goals and to make a memorable impact on the interviewer.";
//     break;
//     case conf > 70 : 
//     confidence_str = "Maintaining strong eye contact indicates that you're a focused and capable communicator. During the interview, keep your gaze fixed on the interviewer while occasionally glancing away to avoid appearing overly intense. This balance highlights your interpersonal skills and reinforces your suitability for the role.";
//     break;
//     case conf > 60 : 
//     confidence_str = "Reaching this stage demonstrates a high level of confidence and involvement in the conversation. As you discuss specific examples of your work experience that align with the company's requirements, maintain consistent eye contact. This approach solidifies your credibility and showcases how you can contribute effectively to the team.";
//     break;
//     case conf > 50 : 
//     confidence_str = "Strive for a well-rounded approach to eye contact, alternating between the interviewer's eyes and their facial expressions. This approach lets you connect on a personal level while conveying professionalism. Use this level of engagement to emphasize your motivations for joining the company and your understanding of its values and goals.";
//     break;
//     case conf > 40 : 
//     confidence_str = "Balancing your eye contact during the conversation is crucial. Maintaining eye contact while discussing various topics shows that you are not only confident but also genuinely interested in the company and the opportunity. Remember, effective eye contact is a two-way interaction—it helps you gauge the interviewer's reactions and allows them to see your enthusiasm and passion.";
//     break;
//     case conf > 30 : 
//     confidence_str = "At this stage, consistent but moderate eye contact indicates that you are actively engaged in the interview. When discussing your accomplishments, skills, and how they align with the position, maintain eye contact with the interviewer. This level of connection demonstrates your genuine interest in the role and your potential contributions to the company.";
//     break;
//     case conf > 20 : 
//     confidence_str = "Advancing to this level signifies a growing comfort with eye contact. During key moments of the interview—such as explaining your relevant skills or sharing anecdotes from your work history—maintain eye contact to emphasize your points. This not only showcases your confidence but also helps the interviewer remember your responses more effectively.";
//     break;
//     case conf > 10 : 
//     confidence_str = "As you progress from minimal eye contact, start focusing on increasing the duration. During moments when you're discussing your qualifications and experiences, make a conscious effort to maintain eye contact. This communicates your attentiveness and willingness to actively participate in the interview. Remember, eye contact is not just about looking at someone; it's about showing that you're truly present and interested in the interaction.";
//     break;
//     case conf >= 0 : 
//     confidence_str = "Limited eye contact during an interview can unintentionally send negative signals. It might indicate a lack of interest, shyness, or nervousness, which could impact your chances of leaving a positive impression. To improve your initial eye contact, practice maintaining eye contact for a few seconds when introducing yourself or during greetings. By doing so, you demonstrate that you are engaged in the conversation and convey a level of confidence.";
//     break;
//   }
// }
//   switch(bold) {
//     case bold > 90 :
//       boldness_str = "";
//       break;
//       case bold > 80 :
//       boldness_str = "";
//       break;
//       case bold > 70 :
//       boldness_str = "";
//       break;
//       case bold > 60 :
//       boldness_str = "";
//       break;
//       case bold > 50 :
//       boldness_str = "";
//       break;
//       case bold > 40 :
//       boldness_str = "";
//       break;
//       case bold > 30 :
//       boldness_str = "";
//       break;
//       case bold > 20 :
//       boldness_str = "";
//       break;
//       case bold > 10 :
//       boldness_str = "";
//       break;
//       case bold > 0 :
//       boldness_str = "";
//       break;
//   }


  return (
    <>
        <NavBar />
        <Box>
        <Button variant={'outline'} borderColor={'teal'} marginLeft={5} marginTop={5} onClick={() => navigate('/result')}>
        <ArrowBackIcon /> Back
        </Button>
        
      </Box>
      <Center>
      <Heading color={'teal.600'}  fontFamily={'initial'}  fontSize={'2xl'} textTransform={'uppercase'}  fontWeight={500}>
      <h1>Personalized Feedback</h1>
      </Heading>
      </Center>
            <Center>
               
        <SimpleGrid columns={[1, 2]} gap={14} py={12} px={6}>
        
         {/* ... First Box ... */}
      <Box
        role={'group'}
        p={6}
        maxW={'530px'}
        w={'full'}
        bg={bgcolor}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${EYECONTACT})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={532}
            objectFit={'cover'}
            src={EYECONTACT}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={'center'}>
          {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text> */}
          <Heading color={'gray.500'} fontSize={'2xl'} textTransform={'uppercase'} fontFamily={'body'} fontWeight={500}>
            Eye Contact
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text>
            One area of improvement for your interview skills is your eye contact. Eye contact is important because it shows confidence, interest and respect for the interviewer. According to some studies, the optimal eye contact percentage is around 60-70%. You made eye contact only 40% of the time, which might have given the impression that you were nervous, distracted or uninterested. To improve your eye contact, you can practice with a friend or a mirror, and try to maintain a natural and comfortable gaze. Avoid staring too intensely or looking away too frequently. 
</Text>
          </Stack>
        </Stack>
      </Box>
      {/* ... Second Box ... */}
      <Box
        role={'group'}
        p={6}
        maxW={'530px'}
        w={'full'}
        bg={bgcolor}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${CONFIDENCE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={532}
            objectFit={'cover'}
            src={CONFIDENCE}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={'center'}>
          {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text> */}
          <Heading color={'gray.500'} fontSize={'2xl'} textTransform={'uppercase'} fontFamily={'body'} fontWeight={500}>
            Confidence
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text>
            You showed a good level of confidence during the interview, which is important for communicating your skills and abilities. However, you also need to balance your confidence with humility and respect for others. Sometimes, you came across as too self-assured or arrogant, which might create a negative impression on the interviewer. Try to be more aware of how you present yourself and avoid making statements that might sound boastful or dismissive of other people's opinions or experiences.
</Text>

{/* <Text>{confidence_str}</Text> */}
          </Stack>
        </Stack>
      </Box>
      
      {/* ... Third Box ... */}
      <Box
        role={'group'}
        p={6}
        maxW={'530px'}
        w={'full'}
        bg={bgcolor}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${CLARITY})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={532}
            objectFit={'cover'}
            src={CLARITY}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={'center'}>
          {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text> */}
          <Heading color={'gray.500'} fontSize={'2xl'} fontFamily={'body'} textTransform={'uppercase'} fontWeight={500}>
            Clarity
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text>
            One of the areas that you need to improve on is your clarity of speech. During the interview, I noticed that you were speaking very softly and mumbling your words, which made it hard for me to understand your answers. This can affect your chances of getting hired, as employers want to communicate effectively with their employees. You should practice speaking louder and more confidently, and enunciate your words clearly. This will help you convey your ideas better and make a good impression.
</Text>
          </Stack>
        </Stack>
      </Box>
      {/* ... Four Box ... */}
      <Box
        role={'group'}
        p={6}
        maxW={'530px'}
        w={'full'}
        bg={bgcolor}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${BOLD})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={532}
            objectFit={'cover'}
            src={BOLD}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={'center'}>
          {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text> */}
          <Heading color={'gray.500'} fontSize={'2xl'} fontFamily={'body'} textTransform={'uppercase'} fontWeight={500}>
            Boldness
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text>
            I think the guy who makes his boldness 100% while attending an interview is confident and assertive. He shows that he is not afraid to speak his mind and express his opinions. He also demonstrates that he can handle challenging situations and deal with criticism. However, he should also be careful not to come across as arrogant or rude. He should balance his boldness with respect and humility. He should listen to the interviewer's questions and feedback, and acknowledge his strengths and weaknesses. He should also show interest and enthusiasm for the job and the company.

</Text>
          </Stack>
        </Stack>
      </Box>
    </SimpleGrid>
      </Center>

    </>
  )
}