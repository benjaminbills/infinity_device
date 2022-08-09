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
import { MapContainer } from "react-leaflet/MapContainer";
import { Marker } from "react-leaflet/Marker";

import { Popup } from "react-leaflet/Popup";
import { TileLayer } from "react-leaflet/TileLayer";
// import { useMap } from 'react-leaflet/hooks
import "./home.css";
function Home() {
  const [imageIndex, setImageIndex] = useState(0);
  const position = [1.2921, 36.8219];

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

      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center place-items-center md:px-28">
        <div className="text-center md:text-left ">
          <h6 className="text-xl md:text-2xl lg:text-3xl">
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
            <p className="my-6 md:text-2xl text-gray-400 font-bold">+254-7431-56011</p>
            <p>and speak with a product specialist today.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="mb-12 md:mb-0">
          <p className="font-bold text-gray-500">Stay Updated</p>
          <form className="flex items-center" action="">
            <input
              className="my-7 w-3/4"
              type="email"
              name=""
              id=""
              placeholder="Enter email address"
            />
            <button type="submit">
              <svg
                className="w-6 h-6"
                fill="#71bbbc"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
          <p className="text-sm">
            Join our monthly newsletter for monthly updates
          </p>
        </div>

        <div className="mb-12 md:mb-0 text-center">
          <p className="font-bold text-gray-500">Social with Us</p>
          <p className="text-sm py-3">
            <a href="/">Facebook</a>
          </p>
          <p className="text-sm py-3">
            <a href="/">Twitter</a>
          </p>
          <p className="text-sm py-3">
            <a href="/">Instagram</a>
          </p>
        </div>
        <div>
          <MapContainer
            center={[-1.2862398, 36.8268042]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-1.2862398, 36.8268042]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default Home;
