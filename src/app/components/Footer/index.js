import { useState } from 'react';
import {
  Stack,
  FormControl,
  Link,
  Input,
  Button,
  SimpleGrid,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram} from 'react-icons/fa'
import {createSuggestion} from '../../services/suggestions-ws'
import './styles.css'

export default function Footer() {
 
 const [info, setInfo] = useState({})
 
 const handleChange = (e)=>{
  setInfo({...info,[e.target.name]:e.target.value})
 }

  const onSubmit = async (e) =>{
    e.preventDefault()
    try {
      const {data} = await createSuggestion (info)

    }catch (error){
     console.log(error)
    }

  }

  return (
    <Flex
      minH={'50vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray', 'gray.800')}>
    
    <Stack spacing={6}>
    <SimpleGrid mt="6" columns={3} spacing="3">
            <a href= "https://es-la.facebook.com/">
              <Button color="currentColor" variant="outline">
                <FaFacebook />
              </Button>
              </a>

              <a href="https://www.instagram.com/?hl=es">
              <Button color="currentColor" variant="outline">
                <FaInstagram />
              </Button>
              </a>
            </SimpleGrid>
          </Stack>

          <Stack align={'flex-grow'}>
            {/* <ListHeader>Company</ListHeader> */}
            <Link href={'#'}>About us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Contact us</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Testimonials</Link>
          </Stack>  


      <Container
        maxW={'lg'}
        bg={useColorModeValue('black', 'whiteAlpha.100')}
        boxShadow={'xl'}
        rounded={'lg'}
        p={6}
        direction={'column'}>


        <Heading
          as={'h1'}
          font-fontFamily={'Jolly Lodger'}
          fontSize={{ base: 'xl', sm: '4xl' }}
          textAlign={'center'}
          mb={5}>
         <Text fontColor="black" fontSize="xl">Pst pst... No encontraste lo que buscabas? escribeme te ayudo a conseguirlo</Text>
        </Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          as={'form'}
          spacing={'12px'}
          >
          <FormControl >
          <Input
              name = "name"
              onChange = {handleChange}
              variant={'solid'}
              borderWidth={1}
              color={'gray.800'}
              _placeholder={{
                color: 'gray.400',
              }}
              borderColor={useColorModeValue('gray.300', 'gray.700')}
              id={'name'}
              type={'name'}
              required
              placeholder={'Nombre'}
              aria-label={'nombre'}
             
            />
            <Input
              name = "email"
              onChange = {handleChange}
              variant={'solid'}
              borderWidth={1}
              color={'gray.800'}
              _placeholder={{
                color: 'gray.400',
              }}
              borderColor={useColorModeValue('gray.300', 'gray.700')}
              id={'email'}
              type={'email'}
              required
              placeholder={'Tu Email'}
              aria-label={'Your Email'}
             
            />
            <Input
              name = "suggestion"
              onChange = {handleChange}
              variant={'solid'}
              borderWidth={1}
              color={'gray.800'}
              _placeholder={{
                color: 'gray.400',
              }}
              borderColor={useColorModeValue('gray.300', 'gray.700')}

              required
              placeholder={'Mensaje'}
              aria-label={'Your Email'}
             
            />
          </FormControl>
          <FormControl w={{ base: '50%', md: '40%' }} >
            <Button
            onClick = {onSubmit}
              w="100%">
              enviar
            </Button>
          </FormControl>
        </Stack>
        <Text
          mt={2}
          textAlign={'center'}
          >
        </Text>
      </Container>
    </Flex>
  );
}