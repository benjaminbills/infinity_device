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
            <Box
              display={"flex"}
              flexDirection={"column"}
              w={["100%", "50%", "50%"]}
              pr={("0", "5", "5")}
            >
              <Image src={ElectricLaparoscopicCutting} />
              <Text
                fontSize={"xl"}
                as={"h1"}
                textOverflow={"ellipsis"}
                overflow={"hidden"}
                whiteSpace="nowrap"
              >
                Hocer Disposable Fully Electric Laparoscopic Cutting Stapler
              </Text>
              <Text>
                Inheritance in the era of intelligent squeezing, a master of
                scientific anastomosis and technology integration
              </Text>
              <Button
                mb={["5", "5", "0"]}
                w={["40%"]}
                marginRight={["none", "none", "auto"]}
                mt={"5"}
                colorScheme="green"
                borderRadius={"none"}
                rightIcon={<ArrowForwardIcon />}
              >
                Read more
              </Button>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              w={["100%", "50%", "50%"]}
            >
              <Image src={ElectricLaparoscopicCutting} />
              <Text
                fontSize={"xl"}
                as={"h1"}
                textOverflow={"ellipsis"}
                overflow={"hidden"}
                whiteSpace="nowrap"
              >
                Hocer Disposable Fully Electric Laparoscopic Cutting Stapler
              </Text>
              <Text>
                Inheritance in the era of intelligent squeezing, a master of
                scientific anastomosis and technology integration
              </Text>
              <Button
                mb={["5", "5", "0"]}
                w={["40%"]}
                marginRight={["none", "none", "auto"]}
                mt={"5"}
                colorScheme="green"
                borderRadius={"none"}
                rightIcon={<ArrowForwardIcon />}
              >
                Read more
              </Button>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default Catalog;
