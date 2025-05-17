import { useState } from "react";

function EmpBoard()
{
    // state = {name : "Mahesh"} //Had it been a Class component!

    const [name, setName] = useState("Mahesh");
    const [address, setAddress] = useState("Pune");

    const DoChange = ()=>{

         //Had it been a Class component!
         //this.setState({name : "Nilesh"}); 
         //which will then call render
    
         setName("Nilesh")
      }

      const DoChange2 = ()=>{
        setAddress("Mumbai")
     }

    return (<>
                <h1>Hi {name}</h1>
                <h1>from {address}</h1>
                <button onClick={DoChange}>Click Me 1</button>
                <button onClick={DoChange2}>Click Me 2</button>
            </>)
}

export default EmpBoard;