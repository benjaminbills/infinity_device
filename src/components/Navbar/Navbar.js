import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jpeg";
import "./navbar.css"

function Navbar() {
  return (
    // <nav>
    //   <HStack>
    //     <Box>
    //       <Link to="/">
    //         <Image boxSize="30px" src={Logo} alt="infinity devices" />
    //       </Link>
    //     </Box>
    //     <Spacer />
    //     <Box>
    //       <Link to="/about">About</Link>
    //     </Box>
    //     <Box>
    //       <Link to="/">Home</Link>
    //     </Box>
    //     <Box>
    //       <Link to="contact">Contact</Link>
    //     </Box>
    //   </HStack>
    // </nav>

    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 font-link">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/">
          <img className="w-12" src={Logo} alt="infinity devices" />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            className="w-8 h-8"
            fill="black"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                class="nav-link block mx- px-6 py-2 rounded-full"
                aria-current="page"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="/"
                class="nav-link mx- block px-6 py-2 rounded-full"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a href="/" class="nav-link mx- block px-6 py-2 rounded-full">
                SERVICES
              </a>
            </li>
            <li>
              <a href="/" class="nav-link block mx- px-6 py-2 rounded-full">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
