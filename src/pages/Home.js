import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import hocer from "../assets/images/hocerlogo.png";
import fengh from "../assets/images/fengh.jpeg";
import nairobihospital from "../assets/images/nairobihospital.png";
import kenyatta from "../assets/images/kenyatta.png";
import landing from "../assets/images/landing.jpg";
import surgeryroom from "../assets/images/surgeryroom.jpeg";
import disposableBurstPolymer from "../assets/images/DisposableBurstClip.png";
import ElectricLaparoscopicCutting from "../assets/images/ElectricLaparoscopicCutting.jpeg";

import Apparatus from "../assets/images/apparatus.jpeg";
import Stapler from "../assets/images/stapler.png";
import { ArrowForwardIcon, PhoneIcon } from "@chakra-ui/icons";

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
  const basicBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxSize: "100%",
    minHeight: "400px",
    color: "gray.100",
    textShadow: "0 0 20px black",
    fontWeight: "bold",
    px: 4,
    // background:
    //   "url(https://picsum.photos/id/1080/200/300) center/cover no-repeat",
    background: `url(https://media-exp1.licdn.com/dms/image/C5622AQGO1CFTOh72rQ/feedshare-shrink_2048_1536/0/1657853020613?e=1662595200&v=beta&t=zo2jxmrpH4Lje1U9L8VNVhitxML8pSccl0oZlWyEbfw) center/cover no-repeat`,
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
            <Box position={"relative"}>
              <Image src={Apparatus} />
            </Box>
          </Container>
        </Box>
      </Stack>
      <Box>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          pt={"5"}
          minH={"60px"}
        >
          <Wrap spacing={"5"} justify={"left"}>
            <WrapItem>
              <Box
                display={"flex"}
                border={"1px solid black"}
                h={"30px"}
                w={"80px"}
              >
                <Image src={hocer} />
              </Box>
            </WrapItem>
            <WrapItem>
              <Box
                display={"flex"}
                border={"1px solid black"}
                h={"30px"}
                w={"80px"}
              >
                <Image src={fengh} />
              </Box>
            </WrapItem>
            <WrapItem>
              <Box
                display={"flex"}
                justifyContent={"center"}
                border={"1px solid black"}
                h={"30px"}
                w={"60px"}
              >
                <Image src={nairobihospital} />
              </Box>{" "}
            </WrapItem>
          </Wrap>
        </Stack>
      </Box>
      <hr />
      {/* <Stack
        pt={"4%"}
        pb={"4%"}
        display={"flex"}
        flexDir={["column", "row"]}
        minH={"600px"}
      >
        <Box w={["100%", "50%", "40%"]}>
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
          maxH={"400px"}
          maxW={"400px"}
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
        justifyContent={"center"}
      >
        <Center fontSize={"xl"}>Got any Questions?</Center>
        <Center fontSize={"2xl"}>
          <PhoneIcon /> +254-7431-56011
        </Center>
        <Center>and speak with a product specialist today.</Center>
      </Box>
      <Box pt={"5"} pb={"5"}>
        <Stack flexDir={["column", "row"]}>
          <Box w={["100%", "30%", "30%"]}>
            <Text>We deeply care about our patients.</Text>
            <Text>+254-7431-56011</Text>
            <Text>contact@infintydevices</Text>
          </Box>
          <Box>
            <Box>
              <Input placeholder="Enter  enamil address" />
              <Text>Get notified when we add a new product.</Text>
            </Box>
            <Box></Box>
          </Box>
        </Stack>
      </Box> */}
      <Stack
        flexDir={["column", "column", "row"]}
        pt={"5"}
        pb={"10"}
        rowGap={"5"}
      >
        <Box w={["100%", "100%", "50%"]}>
          <Box position={"relative"} mb={"5"}>
            <Text className="underline" fontSize={["2xl", "3xl"]} as={"h1"}>
              Infinity Devices
            </Text>
          </Box>
          <Box pr={["none", "none", "8"]}>
            <Text width={"100%"} textAlign={"justify"}>
              Fenghe Medical is based in China and faces the world; it focuses
              on the research and development of innovative medical devices and
              consumables for minimally invasive surgery. The field of minimally
              invasive surgery in the world and in China is in the ascendant,
              bringing many benefits to patients and at the same time there is
              huge room for improvement. In the future, minimally invasive
              surgery and even non-invasive surgery will be helped by more and
              more new medical devices. It is shorter, has fewer complications,
              has a lower rate of trauma or bleeding, and is also expected to
              achieve the goal of more complete long-term removal of hidden
              dangers and a higher rate of complete cure.
            </Text>
          </Box>
          <Button
            mt={"5"}
            colorScheme="teal"
            borderRadius={"none"}
            variant="outline"
            rightIcon={<ArrowForwardIcon />}
          >
            See more
          </Button>
        </Box>
        <Box w={["100%", "100%", "50%"]} display={"flex"}>
          <Image src={landing} />
        </Box>
      </Stack>
      <Box
        mb={"10"}
        display={"flex"}
        flexDir={"column"}
        sx={basicBoxStyles}
        filter="auto"
        brightness="80%"
      >
        <Text>
          Walk with excellence, grow together with minimally invasive surgery -
          a Chinese-style solution for the integration of minimally invasive
          surgery
        </Text>
        <Button
          mt={"5"}
          colorScheme="green"
          borderRadius={"none"}
          rightIcon={<ArrowForwardIcon />}
        >
          View Our Catalog
        </Button>{" "}
      </Box>
      <Stack flexDir={"column"}>
        <Box display={"flex"} flexDir={["column", "column", "row"]}>
          <Box
            display={"flex"}
            flexDir={"column"}
            justifyContent={"right"}
            justifyItems={"right"}
            w={["100%", "40%"]}
          >
            <Text as={"h1"}>
              New Lunar® Disposable Fully Electric Laparoscopic Cutting Stapler
            </Text>
            <Text>
              Inheritance in the era of intelligent squeezing, a master of
              scientific anastomosis and technology integration
            </Text>
            <Button
              mt={"5"}
              colorScheme="green"
              borderRadius={"none"}
              rightIcon={<ArrowForwardIcon />}
            >
              Read more
            </Button>
          </Box>
          <Box w={["100%", "60%"]}>
            <Image src={ElectricLaparoscopicCutting} />
          </Box>
        </Box>
      </Stack>
    </div>
  );
}

export default Home;