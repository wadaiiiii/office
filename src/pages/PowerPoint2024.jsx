import React from 'react';

export default function PowerPoint2024(){
 const chapters=[
 'Pengenalan PowerPoint 2024',
 'Membangun Struktur Presentasi',
 'Desain Slide Modern',
 'SmartArt dan Visualisasi',
 'Animasi dan Transisi',
 'Presenter View dan Teknik Presentasi'
 ];
 return <main>
  <h1>Microsoft PowerPoint 2024</h1>
  <p>Materi membuat presentasi profesional, komunikatif, dan menarik.</p>
  <h2>Materi Pembelajaran</h2>
  <ol>{chapters.map(c=><li key={c}>{c}</li>)}</ol>
 </main>
}
