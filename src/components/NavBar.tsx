import { useState, useEffect } from "react";
import { BsList, BsXLg } from "react-icons/bs";

const NavBar: React.FC = () => {
  const [dropdownToggle, setDropdownToggle] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(window.scrollY);

  const handleToggle = (): void => {
    setDropdownToggle(!dropdownToggle);
  };

  useEffect(() => {
    const navbarScroll = () => {
      const navbar: HTMLElement | null = document.querySelector(".navbar");
      const navbarMenu: NodeListOf<Element> =
        document.querySelectorAll(".navbar-menu");
      const navbarIcon: HTMLElement | null =
        document.querySelector(".navbar-icon");
      const scrollY: number = window.scrollY;
      setScrollY(window.scrollY);

      if (navbar && navbarIcon) {
        if (scrollY > 0) {
          navbar.classList.remove("bg-[#1e1e28]/0");
          navbar.classList.add("bg-[#1e1e28]");
          navbarIcon.setAttribute("color", "#FFFFFF");

          navbarMenu.forEach((menu) => {
            menu.classList.remove("navbar-unscrolled");
            menu.classList.add("navbar-scrolled");
          });
        } else {
          navbar.classList.remove("bg-[#1e1e28]");
          navbar.classList.add("bg-[#1e1e28]/0");
          navbarIcon.setAttribute("color", "#000000");

          navbarMenu.forEach((menu) => {
            menu.classList.remove("navbar-scrolled");
            menu.classList.add("navbar-unscrolled");
          });
        }
      }
    };

    window.addEventListener("scroll", navbarScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", navbarScroll);
    };
  }, []);

  const buttonClassName = scrollY > 0 ? "white-icon" : "black-icon";

  return (
    <nav className="navbar flex w-[100%] h-[100px] justify-center items-center sticky top-0 z-10">
      <div className="flex justify-start ms-[5%]">
        <a
          href="/#Profile"
          className="navbar-menu navbar-unscrolled lg:text-2xl text-xl"
        >
          My Profile
        </a>
      </div>
      <ul className="lg:flex hidden flex-1 justify-end gap-[50px] mr-[5%]">
        <li>
          <a href="/#Aboutme" className="navbar-menu navbar-unscrolled">
            AboutMe
          </a>
        </li>
        <li>
          <a href="/#Skills" className="navbar-menu navbar-unscrolled">
            Skills
          </a>
        </li>
        <li>
          <a href="/#Project" className="navbar-menu navbar-unscrolled">
            Project
          </a>
        </li>
        <li>
          <a href="/#Contact" className="navbar-menu navbar-unscrolled">
            Contact
          </a>
        </li>
      </ul>
      <div className="lg:hidden flex flex-1 justify-end me-[10%] select-none">
        <button onClick={() => handleToggle()} className={buttonClassName}>
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
      smooth-transition select-none  ${
        dropdownToggle ? "right-0" : "-right-full"
      }`}
      >
        <ul className="flex flex-col top-[100px] gap-[40px] ">
          <li>
            <a href="/#Aboutme" className="navbar-scrolled">
              AboutMe
            </a>
          </li>
          <li>
            <a href="/#Skills" className="navbar-scrolled">
              Skills
            </a>
          </li>
          <li>
            <a href="/#Project" className="navbar-scrolled">
              Project
            </a>
          </li>
          <li>
            <a href="/#Contact" className="navbar-scrolled">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
