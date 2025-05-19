/**
 * @copyright 2025 Patrick Ma
 * @license Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useLenis } from "lenis/react";

const navItems = [
  { label: "Home", link: "#home" },
  { label: "About", link: "#about" },
  { label: "Work", link: "#work" },
  { label: "Reviews", link: "#reviews" },
  { label: "Contact", link: "#contact", className: "md:hidden" },
];

const Navbar = ({ navOpen }) => {
  const lenis = useLenis();
  const [activeIndex, setActiveIndex] = useState(0);
  const linkRefs = useRef([]);
  const activeBox = useRef();

  useEffect(() => {
    updateActiveBoxPosition(activeIndex);
    window.addEventListener("resize", () =>
      updateActiveBoxPosition(activeIndex)
    );
    return () =>
      window.removeEventListener("resize", () =>
        updateActiveBoxPosition(activeIndex)
      );
  }, [activeIndex]);

  const updateActiveBoxPosition = (index) => {
    const target = linkRefs.current[index];
    if (!target || !activeBox.current) return;

    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = target;
    Object.assign(activeBox.current.style, {
      top: `${offsetTop}px`,
      left: `${offsetLeft}px`,
      width: `${offsetWidth}px`,
      height: `${offsetHeight}px`,
    });
  };

  const handleClick = (e, index, target) => {
    e.preventDefault();
    setActiveIndex(index);
    lenis.scrollTo(target);
  };

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className }, index) => (
        <a
          key={index}
          href={link}
          ref={(el) => (linkRefs.current[index] = el)}
          className={`nav-link ${className || ""} ${
            index === activeIndex ? "active" : ""
          }`}
          onClick={(e) => handleClick(e, index, link)}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
