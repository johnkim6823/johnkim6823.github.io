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


ReactDOM.render(
  <About info={aboutInfo} />, 
  document.getElementById('about-root')
);

ReactDOM.render(
  <ProjectsList projects={projects} />, 
  document.getElementById('projects-root')
);


console.log('Portfolio loaded with React');
