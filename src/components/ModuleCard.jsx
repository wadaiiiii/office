export default function ModuleCard({title,description,progress}){
 return <div style={{border:'1px solid #ddd',borderRadius:12,padding:20,margin:10}}>
  <h3>{title}</h3>
  <p>{description}</p>
  <progress value={progress} max="100" />
  <p>{progress}% selesai</p>
 </div>
}
