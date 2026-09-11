export default function LearningDashboard(){
  const modules=[
    {name:'Microsoft Word Mastery',progress:90},
    {name:'Microsoft Excel Productivity',progress:70},
    {name:'Digital Forms Creation',progress:50},
    {name:'Data Integration',progress:30}
  ];

  return <div>
    <h1>Mastering Office Tools</h1>
    <h2>Dashboard Peserta</h2>
    <p>Selamat datang di Portal Pelatihan Digital FK UNSULBAR</p>

    <section>
      <h3>Progress Keseluruhan</h3>
      <progress value="80" max="100" /> 80%
    </section>

    <section>
      <h3>Modul Pembelajaran</h3>
      {modules.map((m)=>(
        <div key={m.name} style={{margin:'15px 0'}}>
          <strong>{m.name}</strong><br/>
          <progress value={m.progress} max="100"/> {m.progress}%
        </div>
      ))}
    </section>

    <section>
      <h3>Statistik Peserta</h3>
      <p>Nilai Quiz: 85</p>
      <p>Status Sertifikat: Dalam Proses</p>
    </section>
  </div>
}
