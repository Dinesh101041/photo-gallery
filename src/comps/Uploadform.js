import React, {useState} from "react";
import Progress from "./Progress";

const Uploadform=()=>{

    // to save the file using hooks
    const  [file, setfile] = useState(null);
    // error setting
    const [error,seterror] =useState(null);

    // to allow only image type
    const types =['image/png','image/jpeg'];


    // the on change event when input button clicked
    const changeHandeler=(e)=>{
        // to get a files
        let selected = e.target.files[0];
        
        // assign the selected file to state and to validate type 
        if(selected && types.includes(selected.type)){
            setfile(selected);
            seterror('');
        }
        else{
            setfile(null);
            seterror('please select an image file(png or jpeg');
        }


    }

    return(
        // input from
       <form>
         <input type='file' onChange={changeHandeler}/>
         <div className="output">
             {/* calling erroe and file to dom */}
             {error && <div className='error'>{error}</div>}
             {/* calling file */}
             {file && <div> {file.name}</div>}
             {/* calling a progress  */}
             {file && <Progress file={file} setfile={setfile}/>}
         </div>
      </form>
    )
}

export default Uploadform;