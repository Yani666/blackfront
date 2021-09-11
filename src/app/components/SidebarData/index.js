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



const SidebarContent = ({ onClick }) => (
<>
  Black Studio  
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
    <Link to="/store/uploadprod"><Button onClick={onClick} w="100%">
      Prouctos Admin
    </Button></Link>
    <Link to ="/store/suggestions"><Button onClick={onClick} w="100%">
      Sugerencias
    </Button></Link>
  </VStack>
  </>
)

const Sidebar = ({ isOpen, variant, onClose }) => {
  return variant === 'sidebar' ? (
    <Box
      position="fixed"
      left={0}
      p={5}
      w="200px"
      top={0}
      h="100%"
      bg="#C53030"
    >
      <SidebarContent onClick={onClose} />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} >
      <DrawerOverlay >
        <DrawerContent bg="#C53030">
          <DrawerCloseButton />
          <DrawerHeader>Black Studio</DrawerHeader>
          <DrawerBody>
            <SidebarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default Sidebar
