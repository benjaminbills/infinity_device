import {
  Box,
  Button,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import disposableBurstPolymer from "../assets/images/DisposableBurstClip.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";

function Product() {
  return (
    <Stack w="100%" flexDir={["column", "row", "row"]}>
      <Box w={["100%", "50%", "50%"]}>
        <Carousel
          autoPlay
          showThumbs={true}
          showStatus={false}
          showArrows={false}
          thumbWidth={100}
          swipeable={true}
          emulateTouch={true}
        >
          <img src={disposableBurstPolymer} alt="disposableBurstPolymer" />

          <img src={disposableBurstPolymer} alt="disposableBurstPolymer" />
          <img src={disposableBurstPolymer} alt="disposableBurstPolymer" />

          <img src={disposableBurstPolymer} alt="disposableBurstPolymer" />
          <img src={disposableBurstPolymer} alt="disposableBurstPolymer" />

          <img src={disposableBurstPolymer} alt="disposableBurstPolymer" />
        </Carousel>
      </Box>
      <Box pl={["0", "5"]} w={["100%", "50%", "50%"]}>
        <Text fontSize={"xl"} as={"h1"}>
          Hocer Disposable Fully Electric Laparoscopic Cutting Stapler
        </Text>
        <Text fontSize={"l"}>Product description:</Text>
        <UnorderedList>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </UnorderedList>
        <Link to="/contact">
          <Button
            mt={"5"}
            colorScheme="teal"
            borderRadius={"none"}
            variant="outline"
          >
            Contact Us
          </Button>
        </Link>
      </Box>
    </Stack>
  );
}

export default Product;
