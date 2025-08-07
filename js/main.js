const aboutInfo = [
  "I am a <strong>Master's student in Computer Science and Engineering</strong> at Korea University, working under Professor Heonchang Yu in the <strong>Distributed and Cloud Computing Lab</strong>. My research journey began with embedded systems and IoT applications during my undergraduate years at Baekseok University, where I developed multi-sensor situational awareness systems for vulnerable populations.",
  
  "My current research focuses on <strong>optimizing task offloading in Mobile Edge Computing (MEC) environments</strong> through meta-reinforcement learning. I developed <strong>ReSACO</strong>, a framework that combines the Reptile algorithm with Soft Actor-Critic to achieve rapid adaptation in dynamic edge-cloud systems, <strong>reducing service time by up to 16%</strong> and <strong>failure rates by over 95%</strong> compared to conventional deep reinforcement learning methods.",
  
  "Throughout my academic journey, I have explored various aspects of distributed computing, from ensuring <strong>data integrity in video processing systems</strong> using PKI and blockchain concepts, to <strong>optimizing container performance in heterogeneous CPU architectures</strong>. My work on Singularity containers in Intel Raptor Lake environments demonstrated how proper resource allocation can significantly improve HPC workload performance.",
  
  "I am passionate about <strong>bridging the gap between theoretical advances and practical edge computing solutions</strong>. My experience spans from low-level embedded programming with Raspberry Pi and Arduino to high-level system design using Kubernetes and Docker. As a teaching assistant and research mentor, I enjoy sharing knowledge and guiding students through complex technical concepts.",
  
  "My goal is to contribute to the <strong>next generation of edge computing systems</strong> that can efficiently handle the increasing demands of IoT devices and latency-sensitive applications, making distributed computing more accessible and efficient for real-world deployments."
];

// About 컴포넌트 수정 (HTML 렌더링 지원)
function About({ info }) {
  return (
    <>
      {info.map((t, i) => (
        <p key={i} dangerouslySetInnerHTML={{ __html: t }}></p>
      ))}
    </>
  );
}

// 나머지 코드는 그대로 유지
const projects = [
  { title: 'Project 1', desc: 'Details coming soon...' }
];

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
