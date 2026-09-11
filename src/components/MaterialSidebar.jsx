import React from 'react';
import {Link} from 'react-router-dom';

export default function MaterialSidebar(){
 return <aside>
  <h3>Office 2024</h3>
  <nav>
   <p><Link to="/word">Word 2024</Link></p>
   <p><Link to="/excel">Excel 2024</Link></p>
   <p><Link to="/powerpoint">PowerPoint 2024</Link></p>
   <p><Link to="/forms">Digital Forms</Link></p>
  </nav>
 </aside>
}
