const awards = [
  { year: 2025, date: '2025.3', desc: 'detail', org: 'detail' },
  { year: 2024, date: '2024.3', desc: 'detail', org: 'detail' },
  { year: 2023, date: '2023.3', desc: 'detail', org: 'detail' },
  { year: 2022, date: '2022.3', desc: 'detail', org: 'detail' },
  { year: 2021, date: '2021.3', desc: 'detail', org: 'detail' },
  { year: 2020, date: '2020.3', desc: 'detail', org: 'detail' },
  { year: 2018, date: '2018.3', desc: 'detail', org: 'detail' },
  { year: 2017, date: '2017.3', desc: '1번', org: 'Baekseok University' },
  { year: 2017, date: '2017.3', desc: '2번', org: 'Baekseok University' },
  { year: 2017, date: '2017.9', desc: '3번', org: 'Baekseok University' }
];

const aboutInfo = [
  'Information coming soon...'
];

const projects = [
  { title: 'Project 1', desc: 'Details coming soon...' }
];

function About({ info }) {
  return (
    <>
      {info.map((t, i) => (
        <p key={i}>{t}</p>
      ))}
    </>
  );
}

function ProjectsList({ projects }) {
  return (
    <>
      {projects.map((p, i) => (
        <div className="project" key={i}>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </>
  );
}

function AwardsList({ awards }) {
  return (
    <>
      {awards.map((a, i) => (
        <div className="award-entry" key={i}>
          <div className="award-year">{a.year}<small>{a.date}</small></div>
          <div className="award-desc">{a.desc}</div>
          <div className="award-org">{a.org}</div>
        </div>
      ))}
    </>
  );
}

ReactDOM.render(
  <About info={aboutInfo} />, 
  document.getElementById('about-root')
);

ReactDOM.render(
  <ProjectsList projects={projects} />, 
  document.getElementById('projects-root')
);

ReactDOM.render(
  <AwardsList awards={awards} />,
  document.getElementById('awards-root')
);

console.log('Portfolio loaded with React');
