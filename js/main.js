const awards = [
  { year: 2025, date: '2025.3', desc: 'detail', org: 'detail' },
  { year: 2024, date: '2024.3', desc: 'detail', org: 'detail' },
  { year: 2023, date: '2023.3', desc: 'detail', org: 'detail' },
  { year: 2022, date: '2022.3', desc: 'detail', org: 'detail' },
  { year: 2021, date: '2021.3', desc: 'detail', org: 'detail' },
  { year: 2020, date: '2020.3', desc: 'detail', org: 'detail' },
  { year: 2018, date: '2018.3', desc: 'detail', org: 'detail' },
  { year: 2017, date: '2017.3', desc: '1번', org: 'Baekseok University' }
];

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
  <AwardsList awards={awards} />,
  document.getElementById('awards-root')
);

console.log('Portfolio loaded with React');
