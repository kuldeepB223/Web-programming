import axios from "axios";
import { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function Dashboard() 
{
    const [emps, setEmps]  = useState([]);
    const[emp, setEmp] = useState({No : 0, Name: "", Address: ""});
    const [searchText, setSearchText] = useState("");

    const Search =(args)=>{
        setSearchText(args.target.value);
    }

    const OnTextChange = (args)=>{
        console.log(args.target.name + " - changed to - " + args.target.value);
        var copyOfEmp = {...emp};
        copyOfEmp[args.target.name] = args.target.value;
        setEmp(copyOfEmp);
    }

    const Add = ()=>{
        console.log(emp);
        axios.post("http://localhost:9898/emps",emp).then((response)=>{
          //  debugger;
            if(response.data.affectedRows>0)
            {
                console.log("Record Added!");
                setEmp({No : 0, Name: "", Address: ""});
                getData();
            }
        });
    }

    const Update = ()=>{
        console.log(emp);
        var url = "http://localhost:9898/emps/"+emp.No;
        axios.put(url,emp).then((response)=>{
          //  debugger;
            if(response.data.affectedRows>0)
            {
                console.log("Record Updated!");
                setEmp({No : 0, Name: "", Address: ""});
                getData();
            }
        });
    }

    const Delete = (No)=>{
        var url = "http://localhost:9898/emps/"+ No;
        axios.delete(url).then((response)=>{
          //  debugger;
            if(response.data.affectedRows>0)
            {
                console.log("Record Deleted!");
                setEmp({No : 0, Name: "", Address: ""});
                getData();
            }
        });
    }

    const Edit = (No)=>{
        debugger;
       var result =  emps.filter((emp)=>{return emp.No == No;});
       //filter returns an array based on the condition given
       //since our condition is emp.No == No; which is based on primary key
       //we will always get one record after the filter but in form of array
       //result[0] is that record
       setEmp(result[0]);
    }

    const getData = ()=>{
        axios.get("http://localhost:9898/emps").then((response)=>{
            setEmps(response.data);
        });
    }

    useEffect(()=>{
        debugger;
        //component did mount
        getData();
    }, []);

    return (<>
               <div className="container">
                    <center><h1>Dashboard</h1></center>
                    <hr></hr>
                     <center>
                     <div className="table-responsive">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td>Name:</td>
                                        <td>
                                            <input type="text" name="Name" value={emp.Name} onChange={OnTextChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Address:</td>
                                        <td>
                                            <input type="text" name="Address" value={emp.Address}  onChange={OnTextChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                           <button onClick={Add}>Add Record</button> | 
                                           <button onClick={Update}>Update Record</button> | 
                                      
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                     </center>
                    <hr></hr>
                        <center>
                           <b>Search by city:</b> <input type="text"
                                                   value={searchText}
                                                   onChange={Search}/>
                        </center>
                    <hr></hr>
                    
                    <div className="table-responsive">
                        <table className="table table-borderd">
                            <thead>
                                <th>No</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </thead>
                            <tbody>
                                {
                                    emps.map(emp=>{
                                      if(searchText!="")
                                      {
                                           if(emp.Address.toLowerCase().includes(searchText.toLowerCase()))
                                            {
                                                return (<tr>
                                                    <td>{emp.No}</td>
                                                    <td>{emp.Name}</td>
                                                    <td>{emp.Address}</td>
                                                    <td>
                                                        <button className="btn btn-warning" onClick={()=>{
                                                            Edit(emp.No)
                                                        }}>Edit</button>
                                                    </td>

                                                    <td>
                                                    <button className="btn btn-danger" onClick={()=>{
                                                            Delete(emp.No)
                                                        }}>Delete</button>
                                                    </td>
                                                </tr>);
                                            } 
                                      }
                                      else
                                      {
                                        return (<tr>
                                            <td>{emp.No}</td>
                                            <td>{emp.Name}</td>
                                            <td>{emp.Address}</td>
                                            <td>
                                                <button className="btn btn-warning" onClick={()=>{
                                                    Edit(emp.No)
                                                }}>Edit</button>
                                            </td>

                                            <td>
                                            <button className="btn btn-danger" onClick={()=>{
                                                    Delete(emp.No)
                                                }}>Delete</button>
                                            </td>
                                        </tr>);
                                      }
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
               </div>
                
            </>);
}

export default Dashboard;