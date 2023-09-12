import {Box, HStack, Icon, Text, chakra, Button} from "@chakra-ui/react";
import NextLink from "next/link";
import Link from "next/link";
import CardLayout from '../Card/CardLayout'
import {BiChevronRight, BiCaretDown, BiCaretUp} from "react-icons/bi";
import { Fragment, useState } from "react";

export default function CourseMaster() {
  return (
    <Box>
        <BreadcrumbSection />
        <SortSection />
        <CardLayout />
    </Box>
  );
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
                <Text>Tất cả khóa học</Text>
            </HStack>
            <chakra.h1 fontSize="3xl" fontWeight="bold" mb={4}>
                Tất cả khóa học
            </chakra.h1>
        </Fragment>
    )
}

const SortSection = () => {
    const [field, setField] = useState("name");
    const [sorted, setSorted] = useState("asc");
    const fields = [
        {field: "name", label: "Tên khóa học"},
        {field: "price", label: "Giá"},
        {field: "rating", label: "Số sao"},
        {field: "review", label: "Số lượt reviews"},
    ]
    const handleSort = (selectedField) => {
        if (field === selectedField) {
            setSorted(sorted === "asc" ? "desc" : "asc");
        } else {
            setField(selectedField);
            setSorted(selectedField == "rating" || selectedField == "review" ? "desc" : "asc");
        }
    }

    return (
        <HStack my={4}>
            <chakra.h4 fontSize="md" fontWeight="bold" mr={4}>
                Sắp xếp
            </chakra.h4>
            {
                fields.map((item) => (
                    <Button
                        key={item.field}
                        variant="ghost"
                        colorScheme={field === item.field ? "blue" : "gray"}
                        rightIcon={field === item.field ? (sorted === "asc" ? <BiCaretUp /> : <BiCaretDown />) : null}
                        border={"1px solid #ddd"}
                        onClick={() => handleSort(item.field)}
                    >
                        {item.label}
                    </Button>
                ))
            }
        </HStack>
    )
}