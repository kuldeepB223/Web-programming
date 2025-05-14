import react, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
const Count =  ()=>{

    const [count,setCount]= useState(0);
     function increment(){
        setCount(count+1);
     }
     function decrement(){
        setCount(count-1);
     }

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={increment} className="btn btn-primary me-2"> Increase </button>  
            <button onClick={decrement} className="btn btn-danger"> Decrease </button>
        </div>
    )
    
};

export default Count; 