import {
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import { FaArrowRight } from 'react-icons/fa'
  import { formatPrice } from './PriceTag'
  import { useRouter } from 'next/router'

  const OrderSummaryItem = (props) => {
    const { label, value, children } = props
    return (
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
          {label}
        </Text>
        {value ? <Text fontWeight="medium">{value}</Text> : children}
      </Flex>
    )
  }
  
  export const CartOrderSummary = (props) => {
    const router = useRouter()
    const { currency, totalPrice } = props
    return (
      <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
        {/* <Heading size="md">Thành tiền</Heading> */}
  
        <Stack spacing="6">
          {/* <OrderSummaryItem label="Subtotal" value={formatPrice(597)} />
          <OrderSummaryItem label="Shipping + Tax">
            <Link href="#" textDecor="underline">
              Calculate shipping
            </Link>
          </OrderSummaryItem>
          <OrderSummaryItem label="Coupon Code">
            <Link href="#" textDecor="underline">
              Add coupon code
            </Link>
          </OrderSummaryItem> */}
          
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Thành tiền
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
              {formatPrice(totalPrice, currency)}
            </Text>
          </Flex>
        </Stack>
        <Button 
          colorScheme="blue" 
          size="lg" 
          fontSize="md" 
          rightIcon={<FaArrowRight />} 
          onClick={() => {router.push('/checkout')}}
        >
          Thanh toán
        </Button>
      </Stack>
    )
  }