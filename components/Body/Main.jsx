import Hero from './Hero'
import CardLayout from '../Card/CardLayout'
import { Box } from '@chakra-ui/react'
import Banner from './Banner'

const Main = () => {
  return (
    <Box>
      <Banner />
      <Hero />
      <CardLayout />
    </Box>
  )
}

export default Main
