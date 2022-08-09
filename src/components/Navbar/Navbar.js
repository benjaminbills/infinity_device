import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jpeg";
import "./navbar.css";

function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/">
              <img className="w-12" src={Logo} alt="infinity devices" />
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => setNavbarOpen(!navbarOpen)}
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
          </div>
          <div
            className={
              "lg:flex flex-grow items-center ml-auto" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
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
                <a href="/" class="nav-link mx- block px-6 py-2 rounded-full">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="/" class="nav-link mx- block px-6 py-2 rounded-full">
                  SERVICES
                </a>
              </li>
              <li>
                <a href="/" class="nav-link mx- block px-6 py-2 rounded-full">
                  CATALOG
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
    </>
  );
}

export default Navbar;
