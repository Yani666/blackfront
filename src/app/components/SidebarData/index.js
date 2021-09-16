import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
  Menu, 
  MenuButton, 
  ChevronDownIcon,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import {Link} from "react-router-dom"
import React, {useContext} from 'react';



const SidebarContent = ({ onClick, user }) => {
  


  
return(
<>
  <VStack>

     
          
    
    <Link to="/"><Button onClick={onClick} w="100%">
      Home
    </Button></Link>

    <Link to="/store/dashboard"><Button onClick={onClick} w="100%">
      Coleccion
      </Button></Link>
      <Link to="/store/profile"><Button onClick={onClick} w="100%">
      Mi perfil de compras
      </Button></Link>
      <Link to="/store/carrito"><Button onClick={onClick} w="100%">
      Carrito
    </Button></Link>
    {user.role != undefined && user.role==="ADMIN" ? <Link to="/store/uploadprod"><Button onClick={onClick} w="100%">
      Productos Admin
    </Button></Link>: ""}
    {user.role != undefined && user.role==="ADMIN" ? <Link to ="/store/suggestions"><Button onClick={onClick} w="100%">
      Sugerencias
    </Button></Link> : "" }
  </VStack>
  </>
)}

const Sidebar = ({ isOpen, variant, onClose, user={role:"USER"} }) => {
  return variant === 'sidebar' ? (
    <Box
      position="fixed"
      left={0}
      p={5}
      w="200px"
      top={0}
      h="100%"
      bg="black"
    >
      <SidebarContent onClick={onClose} user={user}/>
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} >
      <DrawerOverlay >
        <DrawerContent bg="black">
          <DrawerCloseButton />
          <DrawerHeader>Black Studio</DrawerHeader>
          <DrawerBody>
            <SidebarContent onClick={onClose} user={user}/>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default Sidebar
