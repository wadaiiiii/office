import { useState } from 'react';

export default function RoleDashboard(){
 const [role] = useState('participant');

 const views={
  admin:'Admin Dashboard - Manage users, modules, reports',
  instructor:'Instructor Dashboard - Upload materials and quizzes',
  participant:'Participant Dashboard - Learn modules and track progress'
 };

 return (
  <div>
   <h1>{views[role]}</h1>
   <p>Current role: {role}</p>
  </div>
 );
}
