import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Hide,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
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
              <Box ml={"1"} background={"white"} w="30px" borderRadius={"full"}>
                <Image boxSize="30px" src={Logo} alt="infinity devices" />
              </Box>
              <Text as={"h1"} fontSize="2xl" ml={"2"}>
                Infinity Devices
              </Text>
            </Box>
            <Spacer />
            <Hide below="md">
              <Box>
                <HStack>
                  <Box>
                    <Link to="/about">About</Link>
                  </Box>
                  <Box>
                    <Link to="/">Home</Link>
                  </Box>
                  <Box>
                    <Link to="contact">Contact Us</Link>
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
              justifyContent="space-between"
            >
              <Text mb={"2"}>
                Company Address: Elgon Court D2, Ralph Bunche Road, Upperhill
              </Text>
              <Text mb={"2"}>Contact Number:0706731683, 0734329563</Text>
              <Text mb={"2"}>Email:info@infinitydevices.com</Text>
              <FormControl>
                <FormLabel>Get notified when we add new products</FormLabel>
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
              </FormControl>
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
