/**
 * @copyright 2025 Patrick Ma
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: "Project done",
    number: 6,
  },
  {
    label: "Years of coding experience",
    number: 5,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p
            className="text-zinc-300 mb-4 md:mb-8
          md-text-xl md:max-w-7xl"
          >
            Full-stack developer with 2 years of industry experience across
            frontend, backend, API integration, production support, and
            deployment workflows. Experienced in building and maintaining
            SaaS-style web applications. <br /> <br />I also have hands-on
            experience with DevOps and operational practices, including CI/CD
            pipelines, controlled releases, troubleshooting production issues,
            and supporting reliable system operations. <br /> <br /> I am
            recognised for writing clean, maintainable code, strong
            communication, collaborative teamwork, and the ability to adapt
            quickly across development, support, and operational
            environments.{" "}
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-red-600 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img
              src="/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-10 md:h-10"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
