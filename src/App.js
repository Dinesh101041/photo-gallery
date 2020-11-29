import React from 'react';
import Imagegrid from './comps/Imagegrid';
import Title from './comps/Title';
import Uploadfrom from './comps/Uploadform';



function App() {
  return (
    <div className="App">
      <Title/>
       <Uploadfrom/> 
      <Imagegrid/>

    </div>
  );
}

export default App;
