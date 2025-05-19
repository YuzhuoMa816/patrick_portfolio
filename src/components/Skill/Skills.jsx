/**
 * @copyright 2025 Patrick Ma
 * @license Apache-2.0
 */

import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/Skills/nodejs.svg",
    label: "Node.JS",
    desc: "Node.JS",
  },
  {
    imgSrc: "/Skills/spring.svg",
    label: "Spring Boot 2.0",
    desc: "Spring Boot 2.0",
  },
  {
    imgSrc: "/Skills/firebase.svg",
    label: "Firebase",
    desc: "Firebase",
  },
  {
    imgSrc: "/Skills/react.svg",
    label: "React",
    desc: "React",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">My Technology Stack</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-fit">
          The Tools I used to create exceptional, high performing Website
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
