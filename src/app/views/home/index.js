

import React from 'react'
import './style.css'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  SimpleGrid,
  IconButton,
  ButtonGroup,
  Link
} from '@chakra-ui/react';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io'
import {HomeNavBar, SlideCarousel} from '../../components';
import vampire from  '../../assets/images/blackStudioGirl.png'

export default function Home() {
  return (
    <div>
      <div>
        <HomeNavBar/>
      </div>
      <div>
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.500',
                zIndex: -1,
              }}>
              Bienvenido a Black Studio
            </Text>
            <br />
            <Text as={'span'} color={'red.500'}>
            Cambia tu estilo, se goth!
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Bienvenido a Black Studio, el lugar perfecto para comprar 
            ropa goth.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'red.00'}
              _hover={{ bg: 'red.500' }}>
              Comenzar
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              >
              Como trabaja
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Box
            position={'relative'}
            height={'full'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={vampire}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
    <Stack>
      <SlideCarousel/>
    </Stack>
    </div>
    <div className="footer" >
    <SimpleGrid columns={4} align="center">
    <Box minW="100px">
      <h1 mb="3">About us</h1>
      <Stack className="links">
        <Link>How it works</Link>
        <Link>Pricing</Link>
        <Link>Use Cases</Link>
      </Stack>
    </Box>
    <Box minW="100px">
      <h1 mb="3">More info</h1>
      <Stack className="links">
        <Link>Privacy</Link>
        <Link>Terms</Link>
        <Link>License</Link>
      </Stack>
    </Box>
    </SimpleGrid>
      <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
      <Stack fontSize="3xl" direction="column" spacing="4" align="center" justify="space-between">
      <h1   alignSelf={{ base: 'center', sm: 'start' }}>
     Black Studio<br/>¡Se antisocial!
  </h1>
  </Stack>
  <Stack >
      <ButtonGroup variant="ghost" spacing="20" color="white" alignSelf='center' >
    <IconButton as="a" href="https://www.instagram.com/?hl=es" aria-label="Instagram" icon={<IoLogoInstagram fontSize="40px" />} />
    <IconButton as="a" href="https://es-la.facebook.com/" aria-label="Facebook" icon={<IoLogoFacebook fontSize="40px" />} />
    <IconButton as="a" href="https://https://twitter.com/" aria-label="Twitter" icon={<IoLogoTwitter fontSize="40px" />} />
  </ButtonGroup>
    </Stack>
    <h2 align="center" className="links"> By Yani Padilla</h2>
  </Box>
    </div>
    </div>
  );
}