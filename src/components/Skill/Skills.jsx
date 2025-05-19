/**
 * @copyright 2025 Patrick Ma
 * @license Apache-2.0
 */

import SkillCard from "./SkillCard";

const LanguageList = [
  {
    imgSrc: "/Skills/java.svg",
    label: "Java",
    desc: "3.5 yrs + ",
  },
  {
    imgSrc: "/Skills/python.svg",
    label: "Python",
    desc: "4 yrs + ",
  },
  {
    imgSrc: "/Skills/javascript.svg",
    label: "JavaScript",
    desc: "2 yrs + ",
  },
  {
    imgSrc: "/Skills/html5.svg",
    label: "HTML 5",
    desc: "1.5 yrs + ",
  },
  {
    imgSrc: "/Skills/css.svg",
    label: "CSS 3",
    desc: "1.5 yrs + ",
  },
];

const toolList = [
  {
    imgSrc: "/Skills/react.svg",
    label: "React",
    desc: "React",
  },

  {
    imgSrc: "/Skills/nodejs.svg",
    label: "Node.JS",
    desc: "Node",
  },

  {
    imgSrc: "/Skills/mysql.svg",
    label: "MySQL",
    desc: "SQL | ORM | MyBatis ",
  },

  {
    imgSrc: "/Skills/MongoDB.svg",
    label: "MongoDB",
    desc: "NoSQL ",
  },
  {
    imgSrc: "/Skills/spring.svg",
    label: "Sprintboot 2.0",
    desc: "Java Web Framework",
  },
  {
    imgSrc: "/Skills/flutter.svg",
    label: "Flutter",
    desc: "Cross Platform Application",
  },

  {
    imgSrc: "/Skills/aws.svg",
    label: "AWS",
    desc: "AWS EC2 | RDs | Lamda",
  },
  {
    imgSrc: "/Skills/firebase.svg",
    label: "Firebase",
    desc: "Authentication | Storage | Host ",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">My Technology Stack</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-fit">Coding Language</p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {LanguageList.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>

        <p className="text-zinc-400 mt-3 mb-8 max-w-fit">
          The Tools I used to create exceptional, high performing Website
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {toolList.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
