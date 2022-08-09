import { Box, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../assets/images/logo.png";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
function Footer() {
  return (
    <Box bg={"gray.200"} h={["200px"]}>
      <Stack flexDir={"column"}>
        <Box display={"flex"} mt="5">
          <Box display={"flex"}>
            <Box
              ml={"1"}
              background={"white"}
              h="30px"
              w="30px"
              borderRadius={"full"}
            >
              <Image boxSize="30px" src={Logo} alt="infinity devices" />
            </Box>
            <Text as={"h1"} ml={"2"}>
              Infinity Devices
            </Text>
          </Box>
          <Spacer />
          <Text>
            Company Address: Elgon Court Apartment D2, Ralph Bunche Road
          </Text>
        </Box>

        <hr />
        <Box>
          <Text>Contact Number:0743156011, 0743156011</Text>
          <Text>Email:infinitydevices@gmail.com</Text>
        </Box>
        <Box></Box>
      </Stack>
    </Box>
  );
}

export default Footer;
