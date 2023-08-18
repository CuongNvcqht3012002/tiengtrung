import { Box } from '@chakra-ui/react'
import { Fragment } from 'react'
import Footer from './Footer';
import Header from './AdminHeader'

function AdminLayout({ children }) {
  return (
    <Fragment>
      <Header/>
      <Box
        maxW="7xl"
        mx="auto"
        px={{
          base: 4,
          md: 8,
          lg: 10,
        }}
        pt={{
          base: 4,
          md: 8,
        }}
        pb={{
          base: 10,
          md: 16,
        }}
      >
        {children}
      </Box>
      <Footer/>
    </Fragment>
  )
}

export default AdminLayout
