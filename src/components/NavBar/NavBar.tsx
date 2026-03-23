"use client";
import "../NavBar/NavBar.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BsList, BsXLg } from "react-icons/bs";

type Props = React.HTMLAttributes<HTMLElement>;

const NavBar = ({ className, ...rest }: Props) => {
  const [open, setOpen] = useState(false);
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menu = [
    { label: "AboutMe", href: "#Aboutme" },
    { label: "Skills", href: "#Skills" },
    { label: "Project", href: "#Project" },
    { label: "Contact", href: "#Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const buttonColor = isScrolled ? "white" : "black";
  const navbarBg = isScrolled
    ? "bg-[#1e1e28]/80 backdrop-blur-md"
    : "bg-[#1e1e28]/0";
  const menuClass = isScrolled ? "navbar-scrolled" : "navbar-unscrolled";

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[100px] flex items-center justify-between px-6 ${navbarBg} ${className}`}
      {...rest}
    >
      <Link
        href="/#Profile"
        className={`navbar-menu lg:text-2xl text-xl ${menuClass}`}
      >
        My Profile
      </Link>

      <ul className="hidden lg:flex gap-10">
        {menu.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={`navbar-menu ${menuClass}`}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden text-white"
        aria-label="Toggle menu"
      >
        {open ? <BsXLg size={28} /> : <BsList size={28} />}
      </button>

      <div
        className={`lg:hidden fixed top-[100px] left-0 w-full h-[50vh] flex flex-col items-center justify-center gap-10 bg-[#20202a]/90 backdrop-blur-md transition-all duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="text-lg"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
export default NavBar;
