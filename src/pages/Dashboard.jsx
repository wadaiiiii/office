import ModuleCard from '../components/ModuleCard';

export default function Dashboard(){
 const modules=[
  ['Microsoft Word Mastery','Template dokumen dan Mail Merge',80],
  ['Microsoft Excel Productivity','Formula, Lookup, Pivot Table',60],
  ['Digital Forms Creation','Form digital dan database',50],
  ['Data Integration','Workflow administrasi digital',30]
 ];
 return <main>
  <h1>Mastering Office Tools & Digital Forms</h1>
  <h2>Portal Pelatihan Digital FK UNSULBAR</h2>
  <p>Progress Workshop: 65%</p>
  {modules.map((m)=><ModuleCard key={m[0]} title={m[0]} description={m[1]} progress={m[2]}/>)}
 </main>
}
