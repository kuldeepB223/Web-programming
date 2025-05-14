import { useState } from "react";
import imgs from './logo.svg'
function App(){

    const[image, setimage] = useState(false);
 
    function hideimg(){
        setimage(!image);
    }
    return(
        <>
        <img hidden={image} src={imgs} height={200} width={200}></img>
        <input type="checkbox" onClick={hideimg} checked={!image}></input>
        </>
    )
}
export default App;