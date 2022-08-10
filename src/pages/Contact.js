import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
function Contact() {
  const basicBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",

    color: "gray.100",

    // background:
    //   "url(https://picsum.photos/id/1080/200/300) center/cover no-repeat",
    background: `url(https://images.unsplash.com/photo-1611144727915-ef30a08aaeb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1972&q=80) center/cover no-repeat`,
  };
  const innerBoxStyles = {
    display: "flex",
    alignItems: "left",
    justifyContent: "center",
    textAlign: "left",
    boxSize: "100%",
    width: "100%",
    color: "white.100",
    fontSize: "20px",
  };
  return (
    <Box pt="10" pb="10">
      <Center>
        <Text fontSize={["2xl", "3xl"]} as={"h1"}>
          Contact Us
        </Text>
      </Center>
      <Box
        display={"flex"}
        h={"auto"}
        flexDir={["column", "column", "row"]}
        boxShadow="base"
      >
        <Box
          h={"500px"}
          w={["100%", "100%", "40%"]}
          display={"flex"}
          flexDir={"column"}
          sx={basicBoxStyles}
          filter="grayscale(80%)"
          brightness="50%"
        >
          {" "}
          <Box
            flexDir={"column"}
            w={"100%"}
            h={"100%"}
            sx={innerBoxStyles}
            backdropFilter="auto"
            backdropBlur="2px"
          >
            <Box p="4">
              <Text mb={"1"}>
                <Icon as={GoLocation} mr={"2"} />
                Elgon Court Apartment D2, Ralph Bunche Road
              </Text>
              <Text mb={"1"}>
                <Icon as={FiPhoneCall} mr={"2"} />
                0743156011, 0743156011
              </Text>
              <Text mb={"1"}>
                {" "}
                <Icon as={MdOutlineEmail} mr={"2"} /> infinitydevices@gmail.com
              </Text>
            </Box>
          </Box>
        </Box>
        <Box p={["4", "4", "4"]} w={["100%", "100%", "60%"]}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input type={"text"} placeholder="Please enter your name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type={"email"} placeholder="you@gmail.com" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Phone</FormLabel>
            <Input
              type={"phone"}
              placeholder="Please enter your phone number"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea type={"text"} placeholder="you@gmail.com" />
          </FormControl>
          <Button colorScheme={"green"} mt={"4"}>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
