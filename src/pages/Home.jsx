import React from 'react';
import MaterialCard from '../components/MaterialCard';

export default function Home(){
 const modules=[
  ['Microsoft Word 2024','Dokumen profesional, template, mail merge'],
  ['Microsoft Excel 2024','Formula, lookup, analisis data'],
  ['Microsoft PowerPoint 2024','Presentasi modern dan visual'],
  ['Microsoft Forms','Form digital dan workflow']
 ];
 return <main style={{padding:'40px',fontFamily:'Inter,Arial'}}>
  <section style={{padding:'60px',borderRadius:30,background:'#f3f8ff'}}>
   <h1 style={{fontSize:48}}>Mastering Office 2024</h1>
   <p style={{fontSize:20}}>Portal materi digital untuk menguasai Microsoft Office secara praktis dan profesional.</p>
   <button style={{padding:'14px 30px',borderRadius:20}}>Mulai Belajar</button>
  </section>
  <h2 style={{marginTop:40}}>Materi Utama</h2>
  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:20}}>
   {modules.map(m=><MaterialCard key={m[0]} title={m[0]} description={m[1]}/>) }
  </div>
 </main>
}