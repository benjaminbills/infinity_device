import logo from "./logo.svg";
import "./App.css";
import { Box, Button, ChakraProvider, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Box h="100vh" display={"flex"} flexDir="column">
          <Navbar />
          <Box pt={"4em"} color={"gray.600"}>
            {/* <Container maxW="container.xl"> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/product/:id" element={<Product />} />
            </Routes>
            {/* </Container> */}
          </Box>
          <Footer />
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
