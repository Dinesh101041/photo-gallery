import React, {useEffect} from "react";
import Userstorage from '../hooks/Userstorage';


const ProgressBar = ({file,setfile})=>{
    const {url , progress} = Userstorage(file);
    console.log(progress,url)

    useEffect(() => {
        if(url){
            setfile(null);
        }
       
    }, [url,setfile])
    return(
        <div className='progressbar' style={{width:progress+'%'}}></div>
    )
}

export default ProgressBar;