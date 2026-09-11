import React from 'react';
import materials from './data/materials';

export default function App(){
 return <main style={{fontFamily:'Inter, Arial',padding:'40px',maxWidth:'1100px',margin:'auto'}}>
  <h1>Mastering Office 2024</h1>
  <h2>Portal Materi Digital Fakultas Kedokteran UNSULBAR</h2>
  <p>Website materi pembelajaran Microsoft Office 2024 untuk mendukung peningkatan kompetensi digital tenaga kependidikan.</p>
  <hr/>
  {materials.map(item=><article key={item.id} style={{border:'1px solid #ddd',padding:'20px',borderRadius:'12px',margin:'15px 0'}}>
   <h2>{item.title}</h2>
   <p>{item.description}</p>
   <ul>{item.topics.map(t=><li key={t}>{t}</li>)}</ul>
  </article>)}
 </main>
}
