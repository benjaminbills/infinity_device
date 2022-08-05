import {
  Box,
  Button,
  Container,
  HStack,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Apparatus from "../assets/images/apparatus.jpeg";
import Stapler from "../assets/images/stapler.png";

function Home() {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: false,
    speed: 300,
    slidesToShow: 1,
    // centerMode: true,
    centerPadding: 0,
    autoplay: true,
    // beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div pt={"5"} pb={"5"}>
      <Stack
        display={"flex"}
        direction={["column-reverse", "row", "row"]}
        pt="5"
        pb="5"
      >
        <Box w={["100%", "50%", "75%"]}>
          <Text fontSize={"4xl"} as={"h1"}>
            {" "}
            Better Pricing, <br /> Guaranteed
          </Text>
          <Text pb={"5"}>
            We journey with you everyday and each with us is a gift
          </Text>
          <Button colorScheme="teal" variant="outline" borderRadius={"3xl"}>
            View Catalog
          </Button>
        </Box>
        <Box w={["100%", "50%", "25%"]}>
          <Container display={"flex"} flexDir="column">
            <Carousel
              autoPlay
              showThumbs={false}
              showStatus={false}
              showArrows={false}
            >
              <Box position={"relative"}>
                <Image src={Apparatus} />
                <Text
                  borderRadius={"5"}
                  opacity={".8"}
                  background={"gray.50"}
                  width={"100%"}
                  position={"absolute"}
                  top={"80%"}
                  mb={6}
                  mt={0}
                >
                  Legend 1
                </Text>
              </Box>
              <Box position={"relative"}>
                <Image src={Apparatus} />
                <Text
                  background={"gray.50"}
                  width={"150px"}
                  position={"absolute"}
                  bottom={"8px"}
                  left={"16px"}
                  mb={6}
                  mt={0}
                >
                  Legend 1
                </Text>
              </Box>
              <Box position={"relative"}>
                <Image src={Apparatus} />
                <Text
                  position={"absolute"}
                  top={"8px"}
                  right={"16px"}
                  mb={6}
                  mt={0}
                >
                  Legend 1
                </Text>
              </Box>
              <Box position={"relative"}>
                <Image src={Apparatus} />
                <Text
                  position={"absolute"}
                  top={"50%"}
                  left={"50%"}
                  mb={6}
                  mt={0}
                >
                  Legend 1
                </Text>
              </Box>
              <Box position={"relative"}>
                <Image src={Apparatus} />
                <Text
                  position={"absolute"}
                  bottom={"8px"}
                  right={"16px"}
                  mb={6}
                  mt={0}
                >
                  Legend 1
                </Text>
              </Box>
            </Carousel>
          </Container>
        </Box>
      </Stack>
      <Box>
        <Stack direction={"row"} pt={"5"} pb={"5"}>
          <Wrap spacing={"4"} justify={"left"}>
            <WrapItem>
              <Button>Fengh</Button>
            </WrapItem>
            <WrapItem>
              <Button>Fenghing</Button>
            </WrapItem>
            <WrapItem>
              <Button>Fengh</Button>
            </WrapItem>
            <WrapItem>
              <Button>Working</Button>
            </WrapItem>
          </Wrap>
        </Stack>
      </Box>
      <hr />
      <Stack pt={"4%"} display={"flex"} flexDir={["column", "row"]}>
        <Box pt={["5%", "20%"]} w={["100%", "50%", "40%"]}>
          <Text>
            As your solution for manufacturer - direct medical devices,
            equipment and consumables, our team is dedicated to helping you save
            money.
          </Text>
          <Button
            mt={"5"}
            colorScheme="teal"
            variant="outline"
            borderRadius={"3xl"}
          >
            Get started
          </Button>
        </Box>
        <Box
          h={"400px"}
          w={"400px"}
          backgroundColor={"#d4fad8"}
          borderRadius={"full"}
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}
        >
          <Carousel
            autoPlay
            showThumbs={false}
            showStatus={false}
            showArrows={false}
          >
            <Box position={"relative"}>
              <Image src={Stapler} />
            </Box>
            <Box position={"relative"}>
              <Image src={Stapler} />
            </Box>
          </Carousel>
        </Box>
      </Stack>
      <Box
        p={"10"}
        display={"flex"}
        flexDir={"column"}
        backgroundColor={"#d4fad8"}
        borderBottom={"1px solid black"}
      >
        <Text>Got any Questions?</Text>
        <Text>+254-7431-56011</Text>
        <Text>and speak with a product specialist today.</Text>
      </Box>
      <Box pt={"5"} pb={"5"}>
        <Stack flexDir={["column", "row"]}>
          <Box w={["100%", "30%", "30%"]}>
            <Text>We deeply care about our patients.</Text>
            <Text>+254-7431-56011</Text>
            <Text>contact@infintydevices</Text>
          </Box>
          <Box></Box>
        </Stack>
      </Box>
    </div>
  );
}

export default Home;
