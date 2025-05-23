/**
 * @copyright 2025 Patrick Ma
 * @license Apache-2.0
 */

import { ButtonPrimary } from "./Button";
import { useLenis } from "lenis/react";
import React from "react";

const sitemap = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact me", href: "#contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/YuzhuoMa816",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yuzhuo-ma-patrick",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ma_yuzhuo/",
  },
];

const Footer = () => {
  const lenis = useLenis();

  const handleClick = (e, href) => {
    e.preventDefault();
    if (lenis && href) {
      lenis.scrollTo(href);
    }
  };

  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Let's work together!
            </h2>

            <ButtonPrimary
              href="mailto:yuzhuo.ma816@gmail.com"
              label="Start project"
              icon="chevron_right"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      onClick={(e) => handleClick(e, href)}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/">
            <img src="/logo.svg" width={40} height={40} alt="Logo" />
          </a>
          <p className="text-zinc-500 text-sm">
            &copy; 2025 <span className="text-zinc-200">Patrick Ma</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
