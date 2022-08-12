import {
  Box,
  Button,
  Center,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
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
        <Box>
          <Stack
            pt={"5"}
            spacing={"4%"}
            display={"flex"}
            direction={["column", "row", "row"]}
          >
            <Box
              overflow={"hidden"}
              w={["100%", "48%", "48%"]}
              boxShadow="base"
            >
              <Box
                _hover={{
                  transform: "scale(1.1)",
                  transition: " 0.8s all",
                }}
              >
                <Image src={ElectricLaparoscopicCutting} />
              </Box>

              <Box p={"4"}>
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
                  w={["60%"]}
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
            <Box
              overflow={"hidden"}
              w={["100%", "48%", "48%"]}
              boxShadow="base"
            >
              <Box
                _hover={{
                  transform: "scale(1.1)",
                  transition: " 0.8s all",
                }}
              >
                <Image src={ElectricLaparoscopicCutting} />
              </Box>
              <Box p="4">
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
                  w={["60%"]}
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
    </Box>
  );
}

export default Catalog;
