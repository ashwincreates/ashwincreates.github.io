const experience = [
  {
    title: "Intern",
    company: "Enquero",
    subtitle: "Mar 2024 - June 2024",
    description: ["did XYZ", "blablabla"],
  },
  {
    title: "SDE",
    company: "Genpact",
    subtitle: "July 2024 - present",
    description: ["did XYZ", "blablabla"],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="min-h-[500px] px-6 md:ml-48 md:pr-24 space-y-20"
    >
      <h3 className="text-slate-300 font-display text-3xl md:text-4xl">
        Experience
      </h3>
      <ul className="text-slate-300 space-y-12 space-x-0 md:space-y-0 gap-12 md:flex">
        {experience.map((exp) => (
          <li
            key={exp.company}
            className="pl-8 relative after:absolute after:h-2 after:w-2 after:left-2 after:top-2  after:bg-slate-500 after:rotate-45"
          >
            <h4 className="font-display text-lg">{exp.company}</h4>
            <span className="text-xs text-slate-400">{exp.subtitle}</span>
            <h5 className="text-md text-slate-300">{exp.title}</h5>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
