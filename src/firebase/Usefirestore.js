import {useState,useEffect} from 'react';
import {projectfirestore} from '../firebase/config';

// collecttion is images from firebase
const Usefirestore = (collection)=>{
    const[docs,setDocs] = useState([]);

    useEffect(()=>{
       const unsub = projectfirestore.collection(collection)
        // oreder the image in descending order
        .orderBy('createdAt','desc')
        .onSnapshot(snap=>{
            // get the images in array 
            let document=[];
            snap.forEach(doc =>{
                document.push({...doc.data(),id: doc.id});
            });
            setDocs(document);

        });
        return()=>unsub();
    },[collection])

    return{docs};
}

export default Usefirestore;