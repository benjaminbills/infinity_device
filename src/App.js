import "./App.css";
import { Box, Button, ChakraProvider, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Box h="100vh" p="5">
          <Container maxW="container.xl">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Container>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
