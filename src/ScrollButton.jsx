import React from "react";
import { useLenis } from "lenis/react";
import { ButtonOutline } from "./components/Button";

const ScrollButton = ({ href, label, icon, classes }) => {
  const lenis = useLenis();

  const handleClick = (e) => {
    e.preventDefault();
    if (lenis && href) {
      lenis.scrollTo(href);
    }
  };

  return (
    <ButtonOutline
      href={href}
      label={label}
      icon={icon}
      classes={classes}
      onClick={handleClick}
    />
  );
};

export default ScrollButton;
