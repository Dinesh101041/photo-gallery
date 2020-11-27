import {useState,useEffect} from 'react';
import {projetstorage} from '../firebase/config';


// hadnling file upload and reusable value
const usestorage = (file) =>{
    // progress of upload
    const  [progress, setprogress] = useState(0);
    // error on upload
    const  [error, seterror] = useState(null);
    // image url
    const  [url, seturl] = useState(null);

    useEffect(()=>{
        // storage the image reference
        const storageref = projetstorage.ref(file.name);
        // put file to varaible storageref to get reference and snap is to takee time of image upload
        storageref.put(file).on('state changed',(snap)=>{
            let percetage =(snap.bytesTransferred/snap.totalBytes)*100
            setprogress(percetage);
        },(err)=>{
            seterror(err);
        },async()=>{
            // url function
            const url = await storageref.getDownloadurl();
            seturl(url);
        })

    },[file])
    return{progress,url,error}
}

export default usestorage;