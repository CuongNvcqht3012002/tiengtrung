import {
  HStack, 
  Divider,
  Link,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import OAuthButtonGroup from '../../../components/OAuthButtonGroup'

export default function SignIn() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack spacing="6">
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading fontSize={'3xl'}>Đăng nhập tài khoản</Heading>
            <Text color="fg.muted">
              Chưa có tài khoản? <Link href="/auth/sign-up" color={'blue.400'}>Đăng ký</Link>
            </Text>
          </Stack>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" minWidth={360} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Mật khẩu</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                <Link color={'blue.400'} href={'/auth/forgot-password'} >Quên mật khẩu?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Đăng nhập
              </Button>
            </Stack>
            <HStack>
              <Divider />
              <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted !important">
                hoặc
              </Text>
              <Divider />
            </HStack>
            <OAuthButtonGroup />
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}