/**
 * @copyright 2025 Patrick Ma
 * @license Apache-2.0
 */

import React from "react";
import { useLenis } from "lenis/react";
/**
 *  Components
 */
import { ButtonPrimary, ButtonOutline } from "./Button";
import ScrollButton from "../ScrollButton";
const Hero = () => {
  const lenis = useLenis();

  const handleScrollClick = (e, href) => {
    e.preventDefault();
    if (lenis && href) {
      lenis.scrollTo(href);
    }
  };

  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2  lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/Patrick_Photo.jpeg"
                width={40}
                height={40}
                alt=""
                className="img-cover"
              />
            </figure>

            <div
              className="flex items-center gap-1.5 text-zinc-400 
            text-sm tracking-wide"
            >
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Availiable for work
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Website for future
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary
              href="/resume.pdf"
              label="Download CV"
              icon="download"
              download={true}
            />
            <ButtonOutline
              href="#about"
              label="Scroll Down"
              icon="arrow_downward"
              onClick={(e) => handleScrollClick(e, "#about")}
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure
            className="w-full max-w-[480px] ml-auto 
          bg-gradient-to-t from-red-600 via-25%
           to-65% rounded-[60px] overflow-hidden"
          >
            <img
              src="/Patrick_photo_banner.png"
              alt="Patrick Ma photo"
              width={655}
              height={800}
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
