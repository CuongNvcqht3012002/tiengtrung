import { ChakraProvider } from '@chakra-ui/react'
import theme from '../components/layouts/Theme'
import ProgressBar from '../components/Util/ProgressBar'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ProgressBar />
      {/* <ClerkProvider {...pageProps}> */}
      <Component {...pageProps} />
      {/* </ClerkProvider> */}
    </ChakraProvider>
  )
}

export default MyApp
