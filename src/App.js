import './App.css';
import React from 'react';
import PersistentDrawerLeft from './Components/searchnav/side_navbar';
import Classprops from './Components/Body_Component/index.js';


function App() {
  return (
    <div className="App1">
      <div className="App2">
        <PersistentDrawerLeft />
      </div>

      <div><Classprops /></div>
    </div>

  );
}
export default App;
