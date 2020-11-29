import {useState,useEffect} from 'react';
import {projetstorage,projectfirestore,timestamp} from '../firebase/config';


// hadnling file upload and reusable value
const Userstorage = (file) =>{
    // progress of upload
    const  [progress, setprogress] = useState(0);
    // error on upload
    const  [error, seterror] = useState(null);
    // image url
    const  [url, seturl] = useState(null);

    useEffect(()=>{
        // storage the image reference
        const storageref = projetstorage.ref(file.name);
        // geting images from firestore collection
        const collectionref = projectfirestore.collection('images');

        // put file to varaible storageref to get reference and snap is to takee time of image upload
        storageref.put(file).on('state_changed',(snap)=>{
            let percetage =(snap.bytesTransferred/snap.totalBytes)*100
            setprogress(percetage);
        },(err)=>{
            seterror(err);
        },async ()=>{
            // url function
            const url = await storageref.getDownloadURL();
            // geeting image from collection also with time createdAt
            const createdAt = timestamp();
            collectionref.add({url,createdAt})
            seturl(url);
        })

    },[file]);
    return{progress,url,error}
}

export default Userstorage;