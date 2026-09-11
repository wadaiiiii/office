import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LearningDashboard from './pages/LearningDashboard';
import AdminDashboard from './pages/AdminDashboard';

function Layout({children}){
 return <div style={{fontFamily:'Inter, Arial',padding:'24px'}}>
  <header>
   <h1>Mastering Office Tools & Digital Forms</h1>
   <p>Portal Pelatihan Digital FK UNSULBAR</p>
  </header>
  <nav style={{display:'flex',gap:'15px',marginBottom:'20px'}}>
   <Link to="/">Dashboard</Link>
   <Link to="/admin">Admin</Link>
  </nav>
  {children}
 </div>
}

export default function App(){
 return <BrowserRouter>
  <Layout>
   <Routes>
    <Route path="/" element={<LearningDashboard/>}/>
    <Route path="/admin" element={<AdminDashboard/>}/>
   </Routes>
  </Layout>
 </BrowserRouter>
}
