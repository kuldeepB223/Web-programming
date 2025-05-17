import { useEffect, useState } from "react";

function DemoState() 
{
    const [name, setName] =  useState("abc");

    // useEffect(()=>{
    //     debugger;
    //     console.log("This is just like component did mount!")
    //     console.log("This gets called only once .. after first render!")
    // },[])//Array means dependencies & Empty array means no dependencies


     useEffect(()=>{
        debugger;
        console.log("This is just like component did update!")
        console.log("This code is called when 'name' changes...");
    },[name])//Array means dependencies 


    const Change = ()=>{
        debugger;
        setName("xyz");
    }


    debugger;
    return (<>
                <h1>{name}</h1>
                <button onClick={Change}>Click Me</button>
            </>);
}

export default DemoState;