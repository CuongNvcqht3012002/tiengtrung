import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react';
import { BiSolidLock } from "react-icons/bi";
import PageLayout from '../../../components/layouts/PageLayout'

export default function ActiveCourse() {
    const [code, setCode] = useState("");
    const handleCodeChange = (e) => {
        const value = e.target.value
        if (value.length > 19) return;
        if (value.length === 4 || value.length === 9 || value.length === 14) {
            setCode(value + "-");
            return;
        }
        setCode(e.target.value);
    }

    const handleSubmit = () => {
        console.log(code);
    }

    return (
        <PageLayout>

            <Flex
            minH={'65vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={4} mx={'auto'} maxW={'lg'} py={12} px={6} mb={16}>
                    <Stack spacing="6">
                    <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                        <Heading fontSize={'3xl'}>Kích hoạt khóa học</Heading>
                        <Text color="fg.muted">
                            Lưu ý: Mỗi mã kích hoạt chỉ sử dụng được 1 lần.
                        </Text>
                    </Stack>
                    </Stack>
                    <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                        <Stack spacing={8}>
                            <FormControl id="code">
                                <FormLabel fontSize={16}>Nhập mã kích hoạt</FormLabel>
                                <Input 
                                    type="text" 
                                    minWidth={360} 
                                    placeholder="xxxx-xxxx-xxxx-xxxx" 
                                    textAlign="center" 
                                    fontSize={24}
                                    value={code}
                                    onChange={(e) => handleCodeChange(e)}    
                                />
                            </FormControl>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                bg: 'blue.500',
                                }}
                                leftIcon={<BiSolidLock />}  
                                isDisabled={code.length !== 19}
                                onClick={handleSubmit}
                            >
                                Kích hoạt
                            </Button>
                        </Stack>  
                    </Box>
                </Stack>
            </Flex>
        </PageLayout>
    )
}
