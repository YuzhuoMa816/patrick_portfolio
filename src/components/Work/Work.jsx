/**
 * @copyright 2025 Patrick Ma
 * @license Apache-2.0
 */

import React from "react";
import WorkCard from "./WorkCard";
const works = [
  {
    imgSrc: "/Projects/Badgify_1.jpg",
    title: "Badgify ",
    tags: ["MVC", "Flutter", "Android", "Firebase"],
    projectLink: "https://github.com/YuzhuoMa816/Badgify/",
  },
  {
    imgSrc: "/Projects/HIT_ML_Training_PF.jpg",
    title: "ML Academy",
    tags: ["Python", "CV", "React", "Data Visualization", "AWS"],
    projectLink: "https://www.airohit.com/",
  },

  {
    imgSrc: "/Projects/MovieMuse.jpg",
    title: "MovieMuse",
    tags: ["React", "SPA"],
    projectLink: "https://github.com/YuzhuoMa816/Movie_library_Project.git/",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">My Portfolio Highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {" "}
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <WorkCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}{" "}
        </div>
      </div>
    </section>
  );
};

export default Work;
