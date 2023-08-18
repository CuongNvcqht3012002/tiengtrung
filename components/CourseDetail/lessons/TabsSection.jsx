import React from 'react'
import {
  chakra,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Icon,
} from '@chakra-ui/react'
import {
  AiOutlineStar,
  AiOutlineQuestionCircle,
  AiOutlineUnorderedList,
  AiOutlineInfoCircle,
  AiOutlineDollarCircle,
} from 'react-icons/ai'
import QuizzSection from '../QuizzSection'

const tabsList = [
  { heading: 'Trả lời câu hỏi', data: <QuizzSection />, icon: AiOutlineQuestionCircle },
  // {
  //   heading: 'Review & Ratings',
  //   data: 'Review & Ratings Data',
  //   icon: AiOutlineStar,
  // },
  { heading: 'Đánh giá & Bình luận', data: 'Overview Data', icon: AiOutlineUnorderedList },
  // {
  //   heading: 'Bình luận học viên',
  //   data: 'About Trainer Data',
  //   icon: AiOutlineInfoCircle,
  // },
  // { heading: 'Donate', data: 'Donate Data', icon: AiOutlineDollarCircle },
]

const TabsSection = () => {
  return (
    <Tabs>
      <TabList overflowY={{ base: 'scroll', md: 'inherit' }}>
        {tabsList.map((tab, index) => (
          <Tab key={index}>
            <Icon as={tab.icon} w={4} h={4} />
            <chakra.span ml={2} whiteSpace="nowrap">
              {tab.heading}
            </chakra.span>
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabsList.map((tab, index) => (
          <TabPanel key={index}>
            <p>{tab.data}</p>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}

export default TabsSection
