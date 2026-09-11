import React from 'react';

export default function MaterialCard({title,desc,items}){
 return <article style={{background:'#fff',borderRadius:20,padding:24,boxShadow:'0 10px 30px rgba(0,0,0,.08)'}}>
  <h2>{title}</h2>
  <p>{desc}</p>
  <ul>{items?.map((x,i)=><li key={i}>{x}</li>)}</ul>
  <button style={{border:0,borderRadius:12,padding:'10px 18px',background:'#2563eb',color:'#fff'}}>Pelajari Materi</button>
 </article>
}
