import React, {useEffect} from "react";
import Userstorage from '../hooks/Userstorage';
import {motion} from 'framer-motion';


const ProgressBar = ({file,setfile})=>{
    const {url , progress} = Userstorage(file);
    console.log(progress,url)

    useEffect(() => {
        if(url){
            setfile(null);
        }
       
    }, [url,setfile])
    return(
        <motion.div className='progressbar' 
            initial={{width:0}}
            animate={{width:progress+'%'}}

        ></motion.div>
    )
}

export default ProgressBar;