import { useState, useContext } from 'react'
import { Box, useBreakpointValue } from '@chakra-ui/react'
import {Ctx} from '../../hooks/context'


import Header from '../Header'
import Sidebar from '../SidebarData'


const smVariant = { navigation: 'drawer', navigationButton: true }
const mdVariant = { navigation: 'sidebar', navigationButton: false }

export default function Layout({children}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant })
  const {user} = useContext(Ctx)
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)
   console.log("soy el user",user)
  return (
    <>
      <Sidebar
        user={user}
        variant={variants?.navigation}
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
      />
      <Box ml={!variants?.navigationButton && 200}>
        <Header
          showSidebarButton={variants?.navigationButton}
          onShowSidebar={toggleSidebar}
        />
        {children}
      </Box>
    </>
  )
}
