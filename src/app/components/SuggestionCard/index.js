
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import moment from 'moment';

export default function SuggestionCard({email, suggestion, createdAt }) {

  
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
       
        <Stack>
          
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
           Sugerencia:
          </Heading>
          <Text color={'gray.500'}>
            {suggestion}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'l'}>
            <Text color={'gray.500'}>{email}</Text>
            <Text color={'gray.500'}>{moment(createdAt).format("DD/MM/YYYY - HH:mm" )}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}