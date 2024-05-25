import { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menuOpen from "../assets/menuOpen.png";
import menuClose from "../assets/menuClose.png";

export default function Navbar() {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <nav className="flex justify-between p-4 relative navbar">
      {" "}
      {/* Changed justify-around to justify-between */}
      <h1
        style={{
          background: "linear-gradient(300deg, red, black)",
        }}
        className="p-3 rounded-xl transition-all duration-150 ease-in-out transform hover:scale-105 cursor-pointer"
      >
        Zaina
      </h1>
      <img
        src={menuOpen}
        onClick={openMenu}
        alt="Open menu"
        className="object-cover w-20 h-13 nav-mob-open"
      />
      <ul ref={menuRef} className="flex gap-5 p-4 nav-menu">
        <img
          src={menuClose}
          onClick={closeMenu}
          alt="Close menu"
          className="object-cover w-20 h-6 nav-mob-close"
        />
        <li>
          <AnchorLink href="#home">
            <p
              className={`cursor-pointer ${
                menu === "home"
                  ? "border-b-2 border-red-500"
                  : "border-b-2 border-transparent"
              } transition-all duration-150`}
              onClick={() => setMenu("home")}
            >
              Home
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#about">
            <p
              className={`cursor-pointer ${
                menu === "about"
                  ? "border-b-2 border-red-500"
                  : "border-b-2 border-transparent"
              } transition-all duration-150`}
              onClick={() => setMenu("about")}
            >
              About Me
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#services">
            <p
              className={`cursor-pointer ${
                menu === "services"
                  ? "border-b-2 border-red-500"
                  : "border-b-2 border-transparent"
              } transition-all duration-150`}
              onClick={() => setMenu("services")}
            >
              Services
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#work">
            <p
              className={`cursor-pointer ${
                menu === "portfolio"
                  ? "border-b-2 border-red-500"
                  : "border-b-2 border-transparent"
              } transition-all duration-150`}
              onClick={() => setMenu("portfolio")}
            >
              Portfolio
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact">
            <p
              className={`cursor-pointer ${
                menu === "contact"
                  ? "border-b-2 border-red-500"
                  : "border-b-2 border-transparent"
              } transition-all duration-150`}
              onClick={() => setMenu("contact")}
            >
              Contact
            </p>
          </AnchorLink>
        </li>
      </ul>
      <div
        style={{
          background: "linear-gradient(300deg, red, black)",
        }}
        className="navContact transition-all duration-150 ease-in-out transform hover:scale-105 cursor-pointer rounded-xl text-center p-3"
      >
        <AnchorLink href="#contact">Connect with me</AnchorLink>
      </div>
    </nav>
  );
}
