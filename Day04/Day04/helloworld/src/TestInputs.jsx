import { useEffect, useState } from "react";

function TestInputs() 
{
    const [emp, setEmp] =  useState({Name : "", Address : ""});

    const Print = ()=>{
        console.log(emp);
    }

    const OnTextChange = (args)=>{
        console.log(args.target.name + " changed to ")
        console.log(args.target.value)

        var copyOfEmp  = {...emp};
        // copyOfEmp.Name = args.target.value;
        // copyOfEmp["Name"] = args.target.value;
        copyOfEmp[args.target.name] = args.target.value;

        console.log("Changing State....")
        setEmp(copyOfEmp);

       // debugger;

    }

    useEffect(()=>{
        console.log("Emp Changed!")
    }, [emp])

    console.log("rendering....")
    return (<>
                <h1>Name:</h1>
                <input type="text" value={emp.Name} name="Name"
                       onChange={OnTextChange}/>
                       {/* onChange = {()=>{OnTextChange(EVENT)}} */}

                <h1>Address:</h1>
                <input type="text" value={emp.Address} name="Address" onChange={OnTextChange}/>
                <br />
                <br />
                <button onClick={Print}>Click Me</button>
            </>);
}

export default TestInputs;