import { Box, HStack, Image, Spacer, Stack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.jpeg";
function Navbar() {
  return (
    <nav>
      <HStack>
        <Box>
          <Link to="/">
            <Image boxSize="30px" src={Logo} alt="infinity devices" />
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Link to="/">Home</Link>
        </Box>
        <Box>
          <Link to="/about">About</Link>
        </Box>
        <Box>
          <Link to="/catalog">Catalog</Link>
        </Box>
        <Box>
          <Link to="contact">Contact Us</Link>
        </Box>
      </HStack>
    </nav>
  );
}

export default Navbar;
