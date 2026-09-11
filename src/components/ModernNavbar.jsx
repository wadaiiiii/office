import React from 'react';

export default function ModernNavbar(){
 return <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px 40px',background:'#ffffff',position:'sticky',top:0}}>
  <h2 style={{color:'#0f6cbd'}}>Office 2024</h2>
  <div style={{display:'flex',gap:20}}>
   <a href='/'>Home</a>
   <a href='/word'>Word</a>
   <a href='/excel'>Excel</a>
   <a href='/powerpoint'>PowerPoint</a>
   <a href='/forms'>Forms</a>
  </div>
 </nav>
}