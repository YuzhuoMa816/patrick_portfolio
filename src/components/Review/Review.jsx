/**
 * @copyright 2025 Patrick Ma
 * @license Apache-2.0
 */

import ReviewCard from "./ReviewCard";
const reviews = [
  {
    content:
      "A highly dependable team member who played a key role in building our AI training platform. Demonstrated strong backend skills, clear communication, and delivered robust features",
    name: "Bing Wang",
    company: "HIT AI Research Co., Ltd",
  },
  {
    content:
      "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
    name: "Mari Robert",
    company: "CEO of InflaMed",
  },

  {
    content:
      "Impressive MVP delivery! The app ran smoothly and mirrored the final product with precision — a testament to thoughtful architecture and reliable execution.",
    name: "Larry Yu",
    company: "Sys Architecture in Recam",
  },
];
const Review = () => {
  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8">From My Team & Clients</h2>

        <div className="flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
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
