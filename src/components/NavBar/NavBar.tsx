"use client";
import "../NavBar/NavBar.css";
import { useState, useEffect } from "react";
import { BsList, BsXLg } from "react-icons/bs";

export default function NavBar() {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => {
    setDropdownToggle((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const buttonColor = isScrolled ? "white" : "black";
  const navbarBg = isScrolled ? "bg-[#1e1e28]" : "bg-[#1e1e28]/0";
  const menuClass = isScrolled ? "navbar-scrolled" : "navbar-unscrolled";

  return (
    <nav
      className={`navbar flex top-0 h-[100px] w-full justify-between items-center ${navbarBg}`}
    >
      <a
        href="/#Profile"
        className={`navbar-menu lg:text-2xl text-xl ${menuClass}`}
      >
        My Profile
      </a>
      <ul className="lg:flex hidden gap-[50px]">
        <li>
          <a href="/#Aboutme" className={`navbar-menu ${menuClass}`}>
            AboutMe
          </a>
        </li>
        <li>
          <a href="/#Skills" className={`navbar-menu ${menuClass}`}>
            Skills
          </a>
        </li>
        <li>
          <a href="/#Project" className={`navbar-menu ${menuClass}`}>
            Project
          </a>
        </li>
        <li>
          <a href="/#Contact" className={`navbar-menu ${menuClass}`}>
            Contact
          </a>
        </li>
      </ul>

      <div className="lg:hidden flex flex-1 justify-end me-[10%] select-none">
        <button onClick={() => handleToggle()} style={{ color: buttonColor }}>
          {dropdownToggle ? (
            <BsXLg size={30} className="navbar-icon" />
          ) : (
            <BsList size={30} className="navbar-icon" />
          )}
        </button>
      </div>
      {/* Slide Menu */}
      <div
        className={`lg:hidden flex absolute justify-center items-center p-5 
      w-full h-[50vh] top-[100px] bg-[#20202a] bg-opacity-50 backdrop-blur-sm 
      transition-all duration-400 ease-in-out select-none  ${
        dropdownToggle ? "right-0" : "-right-full"
      }`}
      >
        <ul className="flex flex-col top-[100px] gap-[40px] ">
          <li>
            <a href="/#Aboutme" className={`${menuClass}`}>
              AboutMe
            </a>
          </li>
          <li>
            <a href="/#Skills" className={`${menuClass}`}>
              Skills
            </a>
          </li>
          <li>
            <a href="/#Project" className={`${menuClass}`}>
              Project
            </a>
          </li>
          <li>
            <a href="/#Contact" className={`${menuClass}`}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
