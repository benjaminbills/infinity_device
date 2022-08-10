import { Box, Center, Stack, Text } from "@chakra-ui/react";
import React from "react";

function Contact() {
  return (
    <Box pt="10">
      <Center>
        <Text fontSize={["2xl", "3xl"]} as={"h1"}>
          Contact Us
        </Text>
      </Center>
      <Stack pt="5" flexDir={["column", "column", "row"]}>
        <Box>one</Box>
        <Box>two</Box>
      </Stack>
    </Box>
  );
}

export default Contact;
