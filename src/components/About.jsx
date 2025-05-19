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
            I am an emerging full-stack developer with 3 years of industry
            experience and a strong academic background, including scholarships,
            project awards, and a distinction from the University of Melbourne.
            I have a proven track record of building full-stack SaaS web
            applications from the ground up to successful deployment, and
            contributing effectively to ongoing team projects. I consistently
            write clean, well-structured code across the full software
            development lifecycle (SDLC), and am recognised for strong
            communication, collaborative teamwork, and a willingness to embrace
            new challenges.
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
