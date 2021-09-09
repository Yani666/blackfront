import { Box, Center, IconButton, Text, Flex, Image } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import logo from '../../assets/images/logo.png'
import './styles.css'



const Header = ({ showSidebarButton = true, onShowSidebar }) => {
  return (
      <div>
          <div className="bar"></div>
     
    <Flex bg="white" p={20} color="white" justifyContent="center">
      <Box flex="1">
        {showSidebarButton && (
          <IconButton
            icon={<ChevronRightIcon w={8} h={8} />}
            colorScheme="blackAlpha"
            variant="outline"
            onClick={onShowSidebar}
          />
        )}
      </Box>
     
      <Center flex="1" h="40px">
      
          <Image src={logo} 
          mt="-10"
          w="150"
          h="150"/>
         
        
      </Center>
      <Box flex="1" />
    </Flex>
    </div>
  )

}

export default Header
