import React from 'react'
import AdminLayout from '../../components/layouts/AdminLayout'
import Table from '../../components/ManageCourseTable'
import { Box, Button, Flex, Input, Select } from '@chakra-ui/react'

const Admin = () => {
  return (
    <AdminLayout>
      <Flex justifyContent='space-between' mb={8}>
          <Flex>
            <Input placeholder='Nhập tên khóa học' mr={3}/>
            <Select placeholder='Lọc' mr={3}>
            {
              filters.map((item) => <option value={item.key}>{item.value}</option>)
            }
            </Select>
            <Button backgroundColor='blue.500' minWidth={75}>
                Lọc
            </Button>
          </Flex>
          <Box>
            <Button backgroundColor='green.500'>
              + Thêm khóa học
            </Button>
          </Box>
      </Flex>
      <Table/>
    </AdminLayout>
  )
}

export default Admin

const filters = [
  {key: '1', value: 'Giá cao nhất'},
  {key: '2', value: 'Giá thấp nhất'}
]
