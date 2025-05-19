/**
 * @copyright 2025 Patrick Ma
 * @license Apache-2.0
 */

import React from "react";
import ReviewCard from "./ReviewCard";
const reviews = [
  {
    content:
      "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
    name: "Sophia Ramirez",
    imgSrc: "/images/people-1.jpg",
    company: "PixelForge",
  },
  {
    content:
      "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
    name: "Sophia Ramirez",
    imgSrc: "/images/people-1.jpg",
    company: "PixelForge",
  },
  {
    content:
      "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
    name: "Sophia Ramirez",
    imgSrc: "/images/people-1.jpg",
    company: "PixelForge",
  },
];
const Review = () => {
  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8">From My Team & Clients</h2>

        <div className="flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
