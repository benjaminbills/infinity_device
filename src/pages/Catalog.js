import {
  Box,
  Button,
  Center,
  Container,
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
import { Link } from "react-router-dom";
function Catalog() {
  const downloadCatalog = () => {
    fetch(
      "https://res.cloudinary.com/dd2y96zp9/image/upload/v1660500144/InfinityDevices/Documents/infinity_devices_catalog_m2mle8.pdf"
    ).then((res) => {
      res.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "infinity_devices_catalog.pdf";
        alink.click();
      });
    });
  };
  return (
    <Container maxW="container.xl">
      <Box>
        <Box pt="5" pb="10">
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
                  <Link to="/product/2">
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
                  </Link>
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
                  <Link to="/product/2">
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
                  </Link>
                </Box>
              </Box>
            </Stack>
          </Box>
          <Center pt="10">
            {/* <Link to={"/"}> */}
            <Button
              colorScheme="green"
              borderRadius={"none"}
              variant="outline"
              onClick={downloadCatalog}
            >
              Download Our Catalog
            </Button>
            {/* </Link> */}
          </Center>
        </Box>
      </Box>
    </Container>
  );
}

export default Catalog;
