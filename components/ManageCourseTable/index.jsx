import React from 'react'
import { TableContainer, Table, Thead, Tr, Tbody, Td, Th, Box, Image, Flex, Text, Link, Button } from '@chakra-ui/react';

const DataTable = () => {
  return (
    <TableContainer>
        <Table variant='striped' colorScheme='gray' userSelect='none'>
            <Thead>
            <Tr>
                <Th textAlign="center">Hình ảnh</Th>
                <Th textAlign="center">Tên khóa học</Th>
                <Th textAlign="center">Vào học</Th>
                <Th textAlign="center">Bài học</Th>
                <Th textAlign="center">Học viên</Th>
                <Th textAlign="center">Học phí</Th>
                <Th textAlign="center">Trạng thái</Th>
                <Th textAlign="center">Hành động</Th>
            </Tr>
            </Thead>
            <Tbody>
            {
                data.map((item) => {
                    return (
                        <Tr key={item.id}>
                            <Td>
                                <Flex justifyContent='center' width='100%'>
                                    <Image src={item.image} alt={item.name} width={75} borderRadius='4px'/>
                                </Flex>
                            </Td>
                            <Td>
                                <Flex flexDirection='column'>
                                    <Text fontSize='md' textAlign="center">{item.name}</Text>
                                    <Flex justifyContent='space-between'>
                                        <Text fontSize='xs'>ID: {item.id}</Text>
                                        <Text fontSize='xs'>GV: {item.teacherName}</Text>
                                        <Text as='a' fontSize='xs' href={item.coursePath}>Xem trang</Text>
                                    </Flex>
                                </Flex>
                            </Td>
                            <Td>
                                <Flex justifyContent='center'>
                                    <Button>
                                        <Link href={item.studyPath}>
                                            Xem
                                        </Link>
                                    </Button>
                                </Flex>
                            </Td>
                            <Td>
                                <Flex justifyContent='center'>
                                    <Box border="1px solid #ccc" borderRadius="8px" textAlign='center' py={2} width={55}>
                                        {item.noLesson}
                                    </Box>
                                </Flex>
                            </Td>
                            <Td>
                                <Flex justifyContent='center'>
                                    <Box border="1px solid #ccc" borderRadius="8px" textAlign='center' py={2} width={55}>
                                        {item.noStudent}
                                    </Box>
                                </Flex>
                            </Td>
                            <Td>
                                <Flex flexDirection='column' >
                                    <Text fontSize='xs' textAlign='center' textDecoration='line-through'>
                                        {item.retailPrice}
                                    </Text>
                                    <Text textAlign='center'>
                                        {item.price}
                                    </Text>
                                </Flex>
                            </Td>
                            <Td>
                                {
                                    item.status
                                    ?   <Text backgroundColor='blue.400' borderRadius="8px" textAlign='center' py={2}>
                                            Mở bán
                                        </Text>
                                    :   <Text backgroundColor='red.500' borderRadius="8px" textAlign='center' py={2}>
                                            Dừng bán
                                        </Text>
                                }

                            </Td>
                            <Td>
                                <Button backgroundColor='yellow.500' borderRadius="8px" mx='4px'>
                                    Sửa
                                </Button>
                                <Button backgroundColor='red.500' borderRadius="8px" mx='4px'>
                                    Xóa
                                </Button>
                            </Td>
                        </Tr>
                    )
                })
            }
            </Tbody>
        </Table>
        </TableContainer>
  )
}

export default DataTable

const data = [
    {
        id: 'CN12312',
        image: 'https://www.huongnghiepaau.com/wp-content/uploads/2020/11/image-seo-featured-image.jpg',
        name: 'Tiếng Trung cao cấp 2 (HSK 6)',
        teacherName: 'Thầy Trung',
        studyPath: '#',
        coursePath: '#',
        noLesson: 110,
        noStudent: 13,
        retailPrice: '800.000đ',
        price: '499.000đ',
        status: true,
    },
    {
        id: 'CN12312',
        image: 'https://www.huongnghiepaau.com/wp-content/uploads/2020/11/image-seo-featured-image.jpg',
        name: 'Tiếng Trung cao cấp 2 (HSK 6)',
        teacherName: 'Thầy Trung',
        studyPath: '#',
        coursePath: '#',
        noLesson: 0,
        noStudent: 0,
        retailPrice: '800.000đ',
        price: '499.000đ',
        status: false,
    },
    {
        id: 'CN12312',
        image: 'https://www.huongnghiepaau.com/wp-content/uploads/2020/11/image-seo-featured-image.jpg',
        name: 'Tiếng Trung cao cấp 2 (HSK 6)',
        teacherName: 'Thầy Trung',
        studyPath: '#',
        coursePath: '#',
        noLesson: 0,
        noStudent: 0,
        retailPrice: '800.000đ',
        price: '499.000đ',
        status: true,
    },
    {
        id: 'CN12312',
        image: 'https://www.huongnghiepaau.com/wp-content/uploads/2020/11/image-seo-featured-image.jpg',
        name: 'Tiếng Trung cao cấp 2 (HSK 6)',
        teacherName: 'Thầy Trung',
        studyPath: '#',
        coursePath: '#',
        noLesson: 0,
        noStudent: 0,
        retailPrice: '800.000đ',
        price: '499.000đ',
        status: true,
    },
    {
        id: 'CN12312',
        image: 'https://www.huongnghiepaau.com/wp-content/uploads/2020/11/image-seo-featured-image.jpg',
        name: 'Tiếng Trung cao cấp 2 (HSK 6)',
        teacherName: 'Thầy Trung',
        studyPath: '#',
        coursePath: '#',
        noLesson: 0,
        noStudent: 0,
        retailPrice: '800.000đ',
        price: '499.000đ',
        status: true,
    }
]
