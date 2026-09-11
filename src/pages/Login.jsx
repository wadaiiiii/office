import {useState} from 'react';
import {useAuth} from '../auth/SupabaseAuth';

export default function Login(){
 const {login}=useAuth();
 const [name,setName]=useState('');
 return <div>
  <h1>Login Training Portal</h1>
  <input placeholder="Nama Peserta" value={name} onChange={e=>setName(e.target.value)}/>
  <button onClick={()=>login({name,role:'participant'})}>Masuk</button>
 </div>
}
