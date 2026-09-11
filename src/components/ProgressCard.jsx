export default function ProgressCard({title, value, detail}) {
  return (
    <div className="progress-card">
      <h3>{title}</h3>
      <div className="progress-value">{value}%</div>
      <p>{detail}</p>
      <div className="progress-bar">
        <span style={{width:`${value}%`}}></span>
      </div>
    </div>
  );
}
