/**
 * @copyright 2025 Patrick Ma
 * @license Apache-2.0
 */

import { useState } from "react";
import Navbar from "./Navbar";

import { useLenis } from "lenis/react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const lenis = useLenis();

  const handleContactClick = (e) => {
    e.preventDefault();
    lenis.scrollTo("#contact", { duration: 1.2 });
  };
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div
        className="max-w-screen-2xl w-full mx-auto px-4 
      flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]"
      >
        <h1>
          <a href="/" className="logo">
            <img src="/logo.svg" width={40} height={40} alt="Patrick" />
          </a>
        </h1>

        <div className="md:flex md:justify-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <a
          href="#contact"
          onClick={handleContactClick}
          className="btn max-md:hidden md:justify-self-end"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
