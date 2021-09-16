import React, {useState, useEffect} from 'react';
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    Divider,
    useColorModeValue,
    Image
  } from '@chakra-ui/react';
  import Paypal from '../paypal/index'
 


export default function CarView() {

    const[car,setCar] = useState({})

    useEffect(()=>{
      const data=localStorage.getItem("carrito")
       setCar(JSON.parse(data))
    },[])


    return (

      <div style={{display:"flex",
      flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
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
              Carrito Goth
            </Heading>
            <Text color={'gray.500'}>
            </Text>
          </Stack>
          <Divider />
          {Object.keys(car).length ? car._products.map((item,index)=><Stack key={index} mt={6} direction={'row'} spacing={4} align={'center'}>
         
            <Stack direction={'column'} spacing={0} fontSize={'l'}>
              <Text color={'gray.500'}>{item.title} - {item.cant}pz</Text>
              <Text color={'gray.500'}>{item.description}</Text>
              <Text color={'gray.500'}>Producto unitario:{item.price}</Text>
              <Text color={'gray.500'}>Total:{item.totalXcant}</Text>
            </Stack>
            <Image src={item.img[0]} boxSize="100px"/>
          </Stack>): ""}
          <Text color={'gray.500'}>Total a pagar:{car.price}</Text>
        </Box>
      </Center>
      
           <Paypal price={car.price}
           cart={car}/>
   
      </div>
     
    )
}