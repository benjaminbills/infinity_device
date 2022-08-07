import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Apparatus from "../../assets/images/apparatus-bg.png";
import Stapler from "../../assets/images/stapler.png";
import Circle from "../../assets/images/circle-bg.png";
import HeartBeat from "../../assets/images/heartbeat.png";
import One from "../../assets/images/01.png";
import Two from "../../assets/images/02.png";
import Three from "../../assets/images/03.png";
import { MapContainer } from 'react-leaflet/MapContainer'
import { Marker } from "react-leaflet/Marker";

import { Popup } from "react-leaflet/Popup";
import { TileLayer } from 'react-leaflet/TileLayer'
// import { useMap } from 'react-leaflet/hooks
import "./home.css";
function Home() {
  const [imageIndex, setImageIndex] = useState(0);
const position = [1.3107, 36.8250];

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: false,
    speed: 100,
    slidesToShow: 1,
    // centerMode: true,
    centerPadding: 0,
    autoplay: true,
    // beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="font-link">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center place-items-center mt-14">
        <div className="text-center md:text-left">
          <h1 className="md:text-6xl lg:text-7xl text-4xl font-normal">
            Better Pricing,
            <br />
            Guaranteed.
          </h1>
          <p className="my-6 text-sm">
            We journey with you everyday, each day a gift to us
          </p>
          <button className="btn rounded-3xl shadow-md">View Catalog</button>
        </div>
        <div className="image-section hidden md:block">
          <img className="circle" src={Apparatus} alt="" />
        </div>
      </div>

      <hr className="my-10 md:my-32 mx-auto" />

      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center place-items-center">
        <div className="text-center md:text-left ">
          <h6 className="text-md md:text-2xl lg:text-3xl">
            As your solution for manufacturer - direct medical services,
            equipment and consumables, our team is dedicated to helping you save
            money.
          </h6>
          <button className="btn rounded-3xl my-10 shadow-md">
            Get Started
          </button>
        </div>
        <div className="carousel-section">
          <Carousel
            autoPlay={true}
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            className="my-auto"
          >
            <div>
              <img src={Stapler} alt="" />{" "}
            </div>
            <div></div>
            <div></div>
          </Carousel>
        </div>
      </div>

      <div className="my-20">
        <div className="my-16">
          <p className="text-gray-400 text-sm">Our Simple Steps</p>
          <h6 className="text-3xl">How We Work</h6>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between">
          <div className="text-left mb-16">
            <div className="mb-6">
              <img src={One} alt="" />
            </div>
            <div className="">
              <p className="font-bold text-gray-500">Access Our Catalog</p>
              <p className="">
                Get access to our variety of
                <br /> services and devices that fit your needs.
              </p>
            </div>
          </div>
          <div className="text-left mb-16">
            <div className="mb-6">
              <img className="" src={Two} alt="" />
            </div>
            <div className="">
              <p className="font-bold text-gray-500">Contact Us</p>
              <p>
                Whether coming by our offices or using
                <br /> our website, we are more than ready to serve you.
              </p>
            </div>
          </div>
          <div className="mb-16">
            <div className="mb-6">
              <img src={Three} alt="" />
            </div>
            <div className="">
              <p className="font-bold text-gray-500">Buy From Us</p>
              <p>
                Our prices are very competitive
                <br /> despite not compromising on quality.
              </p>
            </div>
          </div>
        </div>

        <div className="question-section h-22 my-20">
          <div className="m-auto text-center p-20 md:p-32">
            <p>Got any questions?</p>
            <p className="my-6 md:text-2xl">+254-7431-56011</p>
            <p>and speak with a product specialist today.</p>
          </div>
        </div>
      </div>


      {/* <div>
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
          <TileLayer
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        ,
      </div> */}
      {/* <Stack
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
      </Box> */}
    </div>
  );
}

export default Home;
