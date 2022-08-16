import { ReactNode } from "react";

import {
  Image,
  Spacer,
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import React from "react";
// import { Link  } from "react-router-dom";
import Logo from "../assets/images/logo.jpeg";
const Links = ["Dashboard", "Projects", "Team"];

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.200", "gray.700"),
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // return (
  //   <Box position={"sticky"}>
  //     <HStack>
  //       <Box>
  //         <Link to="/">
  //           <Image boxSize="30px" src={Logo} alt="infinity devices" />
  //         </Link>
  //       </Box>
  //       <Spacer />
  //       <Box>
  //         <Link to="/">Home</Link>
  //       </Box>
  //       <Box>
  //         <Link to="/about">About</Link>
  //       </Box>
  //       <Box>
  //         <Link to="/catalog">Catalog</Link>
  //       </Box>
  //       <Box>
  //         <Link to="contact">Contact Us</Link>
  //       </Box>
  //     </HStack>
  //   </Box>
  // );
  return (
    <Box position={"fixed"} color={"gray.600"} top={"0"} w={"100%"} zIndex="20">
      <Box bg={useColorModeValue("gray.100", "gray.900")}>
        <Container maxW="container.xl">
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Box>
                <Link
                  fontSize={["xl"]}
                  fontWeight={"bold"}
                  textDecoration={"none"}
                  _hover={{
                    textDecoration: "none",
                  }}
                  px={2}
                  py={1}
                  rounded={"md"}
                  href={"/"}
                >
                  Infinity Devices
                </Link>
              </Box>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {/* {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))} */}
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  href={"/about"}
                >
                  About
                </Link>
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  href={"/catalog"}
                >
                  Catalog
                </Link>
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  href={"/contact"}
                >
                  Contact us
                </Link>
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} src={Logo} />
                </MenuButton>
              </Menu>
            </Flex>
          </Flex>
        </Container>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: "gray.200",
                }}
                href={"/"}
              >
                Home
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: "gray.200",
                }}
                href={"/about"}
              >
                About
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: "gray.200",
                }}
                href={"/catalog"}
              >
                Catalog
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: "gray.200",
                }}
                href={"/contact"}
              >
                Contact us
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </Box>
  );
}

export default Navbar;
