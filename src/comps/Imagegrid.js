import React from "react";
import Usefirestore from '../firebase/Usefirestore';

const Imagegrid=()=>{
    const{docs}=Usefirestore('images')
    console.log(docs);
    return(
        <div className='img-grid'>
            {docs && docs.map(doc =>(
                <div className='img-wrap' key={doc.id}>
                    <img src={doc.url} alt='upload pic'></img>
                </div>
            ))}
        </div>
    )
}
export default Imagegrid;
