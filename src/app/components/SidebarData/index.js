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



const SidebarContent = ({ onClick }) => (
<>
  Black Studio  
  <VStack>

     
          
    
    <Button onClick={onClick} w="100%">
      Home
    </Button>
    <Menu>
   <MenuButton  rightIcon={<ChevronDownIcon />}>  {/*as={Button}*/}
    Coleccion
  </MenuButton>
  <MenuList>
    <MenuItem>Ropa</MenuItem>
    <MenuItem>Zapatos</MenuItem>
    <MenuItem>Accesorios</MenuItem>
    </MenuList>
    </Menu>
    <Button onClick={onClick} w="100%">
      Mi cuenta
    </Button>
    <Button onClick={onClick} w="100%">
      Carrito
    </Button>
    <Button onClick={onClick} w="100%">
      Editar productos
    </Button>
    <Button onClick={onClick} w="100%">
      Sugerencias
    </Button>
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
