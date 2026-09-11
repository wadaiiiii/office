import {useState} from 'react';
import {useAuth} from './AuthProvider';

export default function Login(){
 const {login}=useAuth();
 const [name,setName]=useState('');
 return <div>
 <h1>Login Pelatihan</h1>
 <input placeholder="Nama Peserta" onChange={e=>setName(e.target.value)}/>
 <button onClick={()=>login({name,role:'participant'})}>Masuk</button>
 </div>
}
