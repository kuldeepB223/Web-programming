import { useState } from "react";

function App(){
    const[studentName,setStudentName]=useState([]);
    const[changeName,setChangeName]=useState([]);

    function addStudent(){
        let students=[...studentName];
        students.push(changeName);
        setStudentName(students);
    }

    function addName(e){
        setChangeName(e.target.value);
    }
    return (
        <div>
            <input type="text" onChange={addName}></input>
            <button onClick={addStudent}>Add Student</button>
            <ul>
                {studentName.map((s)=>{
                    return <li>{s}</li>;
                })}
            </ul>
        </div>
    );
}

export default App;