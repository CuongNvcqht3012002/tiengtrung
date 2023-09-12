import {
    Box,
    Flex,
    HStack,
    Link,
    Stack,
    Icon,
    Text,
    chakra,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import { CartItem } from './CartItem'
import { CartOrderSummary } from './CartOrderSummary'
import { cartData } from '../../data/cart'
import { Fragment, useEffect, useState } from 'react'
import NextLink from 'next/link'
import {BiChevronRight} from "react-icons/bi";


export default function Index() {
    return (
        <Box>
            <BreadcrumbSection />
            <Cart/>
        </Box>
    )
}

const Cart = () => {
    const [data, setData] = useState(cartData)
    const [currency, setCurrency] = useState('USD')
    const [totalPrice, setTotalPrice] = useState(0)

    const onClickDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    useEffect(() => {
        let total = 0
        data.forEach((item) => {
            total += item.price
        })
        setTotalPrice(total)
    }, [data])

    return (
        <Box
            py={{ base: '6', md: '8', lg: '12' }}
            minHeight="60vh"
        >
            <Stack
            direction={{ base: 'column', lg: 'row' }}
            align={{ lg: 'flex-start' }}
            spacing={{ base: '8', md: '16' }}
            >
            <Stack spacing={{ base: '8', md: '10' }} flex="2">
                <Stack spacing="6">
                {data.map((item) => (
                    <CartItem key={item.id} {...item} onClickDelete={onClickDelete} />
                ))}
                </Stack>
            </Stack>

            <Flex direction="column" align="center" flex="1">
                <CartOrderSummary totalPrice={totalPrice} currency={currency}/>
            </Flex>
            </Stack>
        </Box>
    )
}

const BreadcrumbSection = () => {
    return (
        <Fragment>
            <HStack alignItems="center">
                <NextLink
                href={{
                    pathname: '/',
                }}
                passHref
                >
                <Link>Home</Link>
                </NextLink>
                <Icon as={BiChevronRight} mt="2px !important" />
                <Text>Giỏ hàng</Text>
            </HStack>
            <chakra.h1 fontSize="3xl" fontWeight="bold" mb={4}>
                Giỏ hàng
            </chakra.h1>
        </Fragment>
    )
}