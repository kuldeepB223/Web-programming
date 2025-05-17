import { useState } from "react";

function EmpBoard()
{
  const [emp, setEmp] = 
      useState({No :1, Name: "Mahesh", Address: "Pune"});
    
      const DoChange = ()=>{

        var copyOfEmp = {...emp};
        copyOfEmp.Name = "Nilesh";
        setEmp(copyOfEmp);

       //setEmp({No :1, Name: "Nilesh", Address: "Pune"})
     }

    return (<>
                <h1>Hi {emp.No}</h1>
                <h1>{emp.Name} from {emp.Address}</h1>
              
                <button onClick={DoChange}>Click Me</button>
               
            </>)
}

export default EmpBoard;