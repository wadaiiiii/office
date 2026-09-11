export default function AdminDashboard(){
  const stats=[
    {label:'Total Peserta',value:'125'},
    {label:'Completion Rate',value:'82%'},
    {label:'Rata-rata Nilai',value:'87'}
  ];

  const modules=[
    ['Microsoft Word','90%'],
    ['Microsoft Excel','75%'],
    ['Digital Forms','60%'],
    ['Data Integration','45%']
  ];

  return (
    <div>
      <h1>Admin Analytics Dashboard</h1>
      <p>Monitoring Pelatihan Mastering Office Tools FK UNSULBAR</p>

      <div style={{display:'grid',gap:'16px'}}>
        {stats.map(item=>(
          <div key={item.label} style={{border:'1px solid #ddd',padding:'16px'}}>
            <h3>{item.label}</h3>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>

      <h2 style={{marginTop:'24px'}}>Module Completion</h2>
      {modules.map(module=>(
        <div key={module[0]}>
          <p>{module[0]} - {module[1]}</p>
          <progress value={parseInt(module[1])} max="100" />
        </div>
      ))}
    </div>
  );
}
