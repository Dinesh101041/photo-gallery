import React, {useState} from 'react';
import Imagegrid from './comps/Imagegrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import Uploadfrom from './comps/Uploadform';



function App() {
  const[selectedImg,setselectedImg]=useState(null);
  return (
    <div className="App">
      <Title/>
       <Uploadfrom/> 
      <Imagegrid setselectedImg={setselectedImg}/>
      {/* enlarge image if selected */}
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setselectedImg}/>}
    </div>
  );
}

export default App;
