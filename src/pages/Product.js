import {
  Box,
  Button,
  Container,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import disposableBurstPolymer from "../assets/images/DisposableBurstClip.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link, useParams } from "react-router-dom";
import { Products } from "../Products";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    console.log(typeof id);
    const getProduct = Products.filter((product) => product.id === Number(id));
    setProduct({ ...Products.filter((product) => product.id === Number(id)) });
    console.log(product);
  }, [id]);
  const getProduct = Products.filter((product) => product.id === id);
  // console.log(getProduct);
  return (
    <Box>
      {product !== null ? (
        <Container maxW="container.xl">
          <Stack pt="10" w="100%" pb={"5"} flexDir={["column", "row", "row"]}>
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
                {/* {Products.filter((item) => item.id === Number(id)).map((item) => (
              <img src={item.images[0]} alt="disposableBurstPolymer" />
            ))} */}
                {product[0].images.map((image, i) => (
                  <img key={i} src={image} alt="disposableBurstPolymer" />
                ))}
              </Carousel>
            </Box>
            <Box
              pl={["0", "5"]}
              w={["100%", "50%", "50%"]}
              className="no-margin"
            >
              <Text fontSize={"xl"} as={"h1"}>
                {product[0].title}
              </Text>
              <Text fontSize={"l"}>Features</Text>
              <UnorderedList>
                {product[0].features.map((item, i) => (
                  <ListItem key={i}>{item}</ListItem>
                ))}
              </UnorderedList>
              <Text fontSize={"l"}>Benefits</Text>
              <UnorderedList>
                {product[0].benefits.map((item, i) => (
                  <ListItem key={i}>{item}</ListItem>
                ))}
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
          <hr />
          <Stack pt={"5"}>
            {product[0].nomenclature.map((item, i) => (
              <Image key={i} src={item} />
            ))}
          </Stack>
        </Container>
      ) : null}
    </Box>
  );
}

export default Product;
