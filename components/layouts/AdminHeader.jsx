import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Icon,
  IconButton,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose, AiTwotoneThunderbolt } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { MdTimeline } from 'react-icons/md';
import { BsBook } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';

const dropdownLinks = [
  {
    name: 'Projects',
    path: '#',
    icon: MdTimeline
  },
  {
    name: 'Tech Stack',
    path: '#',
    icon: AiTwotoneThunderbolt
  },
  {
    name: 'Open Source',
    path: '#',
    icon: BsBook
  }
];

const navLinks = [
  { name: 'Dashboard', path: '#', dropdown: null},
  { name: 'Khóa học', path: '#', dropdown: null },
  { name: 'Quiz', path: '#', dropdown: null },
  { name: 'Học viên', path: '#', dropdown: null },
  { name: 'Đơn hàng', path: '#', dropdown: null },
  { name: 'Marketing', path: '#', dropdown: [{name: 'Projects',path: '#',icon: MdTimeline},{name: 'Tech Stack',path: '#',icon: AiTwotoneThunderbolt},]},
  { name: 'Website', path: '#', dropdown: [{name: 'Projects',path: '#',icon: MdTimeline},{name: 'Tech Stack',path: '#',icon: AiTwotoneThunderbolt},] },
  { name: 'Báo cáo', path: '#', dropdown: null },
  { name: 'Cài đặt', path: '#', dropdown: null },
];

export default function AdminHeader() {
  const menuProps = {
    bg: useColorModeValue('gray.200', 'gray.700'),
    color: useColorModeValue('blue.500', 'blue.200')
  };

  return (
    <Box px={4} boxShadow="lg" width="100%">
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW={1200} mx="auto">
        <IconButton
          size="md"
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label="Open Menu"
          display={['inherit', 'inherit', 'none']}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Avatar
            href="#"
            as={Link}
            size="sm"
            showBorder={true}
            borderColor="blue.400"
            rounded="full"
            src="https://avatars2.githubusercontent.com/u/37842853?v=4"
          />
          <HStack as="nav" spacing={1} display={{ base: 'none', md: 'flex' }} alignItems="center">
            {/* Dropdown Menu */}
            {navLinks.map((link, index) => (
              <Menu autoSelect={false} isLazy key={index} >
                {({ isOpen, onClose }) => (
                  <>
                    <MenuButton
                      as={Button}
                      variant="ghost"
                      size="sm"
                      px={3}
                      py={1}
                      lineHeight="inherit"
                      fontSize="1em"
                      fontWeight="normal"
                      rounded="md"
                      height="auto"
                      _hover={{ color: 'blue.400', bg: menuProps.bg }}
                    >
                      <Flex alignItems="center">
                        <Text>{link.name}</Text>
                        {
                          link.dropdown && <Icon
                            as={BiChevronDown}
                            h={5}
                            w={5}
                            ml={1}
                            transition="all .25s ease-in-out"
                            transform={isOpen ? 'rotate(180deg)' : ''}
                          />
                        }
                      </Flex>
                    </MenuButton>
                    {
                      link.dropdown && <MenuList
                      zIndex={5}
                      // bg={useColorModeValue('rgb(255, 255, 255)', 'rgb(26, 32, 44)')}
                      border="none"
                      // boxShadow={useColorModeValue(
                      //   '2px 4px 6px 2px rgba(160, 174, 192, 0.6)',
                      //   '2px 4px 6px 2px rgba(9, 17, 28, 0.6)'
                      // )}
                    >
                      {dropdownLinks.map((link, index) => (
                        <MenuLink
                          key={index}
                          name={link.name}
                          path={link.path}
                          icon={link.icon}
                          onClose={onClose}
                        />
                      ))}
                      </MenuList>
                    }
                  </>
                )}
              </Menu>
            ))}
          </HStack>
        </HStack>

        <IconButton aria-label="Color Switcher" icon={<FiSun />} />
      </Flex>

      {/* Mobile Screen Links */}
      {isOpen ? (
        <Box pb={4} display={['inherit', 'inherit', 'none']}>
          <Stack as="nav" spacing={2}>
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

const NavLink = ({ name, path, onClose }) => {
  const link = {
    bg: useColorModeValue('gray.200', 'gray.700'),
    color: useColorModeValue('blue.500', 'blue.200')
  };

  return (
    <Link
      href={path}
      px={3}
      py={1}
      lineHeight="inherit"
      rounded="md"
      _hover={{
        textDecoration: 'none',
        bg: link.bg,
        color: link.color
      }}
      onClick={() => onClose()}
    >
      {name}
    </Link>
  );
};

const MenuLink = ({ name, path, icon, onClose }) => {
  return (
    <Link href={path} onClick={() => onClose()}>
      <MenuItem _hover={{ color: 'blue.400', bg: useColorModeValue('gray.200', 'gray.700') }}>
        <HStack>
          <Icon as={icon} size={18} color="blue.400" />
          <Text>{name}</Text>
        </HStack>
      </MenuItem>
    </Link>
  );
};