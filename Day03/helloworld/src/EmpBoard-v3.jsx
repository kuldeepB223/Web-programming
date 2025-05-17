import { useState } from "react";

function EmpBoard()
{
  const [emps, setEmps] = 
      useState([
                {No :11, Name: "Yash", Address: "Pune"},
                {No :12, Name: "Sourabh", Address: "Pune"},
                {No :13, Name: "Suyog", Address: "Pune"}
              ]);
    
      const DoChange = ()=>{

        var copyOfEmps = [...emps];
        copyOfEmps.push( {No :0, Name: "NEW Name", Address: "NEW City"})
        setEmps(copyOfEmps);

       //setEmp({No :1, Name: "Nilesh", Address: "Pune"})
     }

    return (<>
              {
                emps.map(emp=>{
                  return <h1>{emp.No} | {emp.Name} | {emp.Address}</h1>
                })
              }

                <button onClick={DoChange}>Click Me</button>
               
            </>)
}

export default EmpBoard;