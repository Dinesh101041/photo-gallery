import React from "react";
import Usefirestore from '../firebase/Usefirestore';
import {motion} from 'framer-motion';

const Imagegrid=({setselectedImg})=>{
    const{docs}=Usefirestore('images')
    console.log(docs);
    return(
        <div className='img-grid'>
            {docs && docs.map(doc =>(
                <motion.div className='img-wrap' key={doc.id}
                layout
                whileHover={{opacity:1}}
                onClick={()=>setselectedImg(doc.url)}>
                    
                    <motion.img src={doc.url} alt='upload pic'
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:1}}
                    />
                </motion.div>
            ))}
        </div>
    )
}
export default Imagegrid;
