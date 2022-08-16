import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Hide,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import Logo from "../assets/images/logo.jpeg";
import Map from "./Map";
function Footer() {
  const emailRef = useRef();
  const submitEmail = () => {
    console.log(emailRef.current.value);
  };
  return (
    <Box bg={"#B0B0B0"} color={"white"} pt={"5"} pb={"5"} mt="auto" w="100%">
      <Container maxW="container.xl">
        <Stack flexDir={"column"}>
          <Box display={"flex"}>
            <Box display={"flex"}>
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
              <Text as={"h1"} fontSize="xl" ml={"2"} fontWeight={"bold"}>
                Infinity Devices Africa
              </Text>
            </Box>
            <Spacer />
            <Hide below="md">
              <Box>
                <HStack>
                  <Box>
                    <Link to="/">Home</Link>
                  </Box>
                  <Box>
                    <Link to="/about">About</Link>
                  </Box>
                  <Box>
                    <Link to="/catalog">Catalog</Link>
                  </Box>
                  <Box>
                    <Link to="/contact">Contact Us</Link>
                  </Box>
                </HStack>
              </Box>
            </Hide>
          </Box>

          <hr />
          <Box display={"flex"} flexDir={["column", "column", "row"]}>
            <Box
              display={"flex"}
              flexDir="column"
              fontSize={"lg"}
              fontWeight={"bold"}
              justifyContent="space-between"
            >
              <Text mb={"2"}>
                <Icon as={GoLocation} mr={"2"} /> Elgon Court D2, Ralph Bunche
                Road, Upperhill
              </Text>
              <Text mb={"2"}>
                <Icon as={FiPhoneCall} mr={"2"} />
                <a href="tel:0706731683">0706731683</a>,
                <a href="tel:0734329563">0734329563</a>
              </Text>

              <Text mb={"2"}>
                <a href="mailto:obafemibenjamins@gmail.com">
                  <Icon as={MdOutlineEmail} mr={"2"} />
                  info@infinitydevices.co
                </a>
              </Text>

              <Text>
                <a
                  href={
                    "https://wa.me/254792300998?text=I'm%20interested%20in%20%20infinity%20device%20products"
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon as={BsWhatsapp} mr={"2"} />
                  Click to send us a whatsapp message.
                </a>
              </Text>

              {/* <FormControl>
                <FormLabel fontSize={"xl"}>
                  Get notified when we add new products
                </FormLabel>
                <InputGroup
                  color={"white"}
                  w={["100%", "100%", "50%"]}
                  size="md"
                >
                  <Input
                    color={"white"}
                    pr="4.5rem"
                    type={"email"}
                    ref={emailRef}
                    placeholder="Enter email"
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      colorScheme="green"
                      type="submit"
                      onClick={submitEmail}
                    >
                      Submit
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl> */}
            </Box>
            <Spacer />
            <Box pt={["4", "4", "0"]}>
              <Map />
            </Box>
          </Box>
        </Stack>
        <Box mt={"4"}>
          <hr />
          <Text>
            Copyright 2021-{new Date().getFullYear()}, Infinity Devices.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
