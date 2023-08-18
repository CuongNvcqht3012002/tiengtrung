import {
  Box,
  chakra,
  Link,
  Stack,
  Text,
  Divider,
  Center,
  SimpleGrid,
  VisuallyHidden,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Center
        maxW="7xl"
        mx="auto"
        px={{
          base: 4,
          md: 8,
          lg: 10,
        }}
        py={{
          base: 4,
          md: 6,
        }}
      >
        <Stack direction="column" alignItems="center">
          <Text textAlign="center">
            © SĐT/Zalo: 0369551688 - 人有多少知识，就有多少力量 - Điều khoản sử dụng - Vận hành bởi Edubit
          </Text>
          {/* <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </SocialButton> */}
        </Stack>
      </Center>
    </Box>
  )
}

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}
