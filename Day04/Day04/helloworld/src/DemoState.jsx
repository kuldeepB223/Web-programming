import { useEffect, useState } from "react";

function DemoState() 
{
    const [name, setName] =  useState("abc");
    const [address, setAddress] =  useState("pune");

    useEffect(()=>{
        debugger;
        console.log("This is just like component did mount!")
        console.log("This gets called only once .. after first render!")
    },[])//Array means dependencies & Empty array means no dependencies


    useEffect(()=>{
        debugger;
        console.log(" component did update! This code is called when 'name' changes...");
    },[name])//Array means dependencies 

    useEffect(()=>{
        debugger;
        console.log(" component did update! This code is called when 'address' changes...");
    },[address])//Array means dependencies 

    useEffect(()=>{
        debugger;
        console.log(" component did update! This code is called when name OR address changes...");
    },[name,address])//Array means dependencies 


    const Change1 = ()=>{
        debugger;
        setName("xyz");
    }


    const Change2 = ()=>{
        debugger;
        setAddress("Mumbai");
    }


    debugger;
    return (<>
                <h1>{name}</h1>
                <h1>{address}</h1>
                <button onClick={Change1}>Click Me 1</button>
                <button onClick={Change2}>Click Me 2</button>
            </>);
}

export default DemoState;