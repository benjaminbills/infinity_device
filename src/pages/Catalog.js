import { Box, Button, Center, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ElectricLaparoscopicCutting from "../assets/images/ElectricLaparoscopicCutting.jpeg";

import Clip from "../assets/images/clip.jpeg";
import { ArrowForwardIcon } from "@chakra-ui/icons";
function Catalog() {
  return (
    <Box>
      <Box>
        <Image src={Clip} />
      </Box>
      <Box pt="10" pb="10">
        <Center>
          <Text fontSize={["2xl", "3xl"]} as={"h1"}>
            Catalog
          </Text>
        </Center>
        <Stack>
          <Box
            display={"flex"}
            flexDir={["column", "column", "row"]}
            pt={["0", "0", "0"]}
          >
            <Box display={"flex"} w={["100%", "100%", "60%"]}>
              <Image src={ElectricLaparoscopicCutting} />
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default Catalog;
