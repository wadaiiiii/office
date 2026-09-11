import React from 'react';

export default function Excel2024(){
 const chapters=[
 'Pengenalan Microsoft Excel 2024',
 'Workbook dan Worksheet',
 'Formula Dasar dan Fungsi IF',
 'Lookup Function (XLOOKUP)',
 'Pivot Table dan Analisis Data',
 'Membuat Dashboard Profesional'
 ];
 return <main>
  <h1>Microsoft Excel 2024</h1>
  <p>Materi pengolahan data, analisis, dan visualisasi menggunakan Excel 2024.</p>
  <h2>Materi Pembelajaran</h2>
  <ol>{chapters.map(c=><li key={c}>{c}</li>)}</ol>
 </main>
}
