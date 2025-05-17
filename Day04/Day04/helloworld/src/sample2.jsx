import { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
class Sample2 extends Component 
{
    state = { users : []} 
  
    componentDidMount()
    {
        debugger;
        var helper = new XMLHttpRequest();
        helper.onreadystatechange =()=>{
            if(helper.readyState == 4 && 
                helper.status == 200
            )
            {
                
                debugger;
                var dataReceivedInString = helper.responseText;
                var dataInJSONFormat = JSON.parse(dataReceivedInString);
                var usersFromServer = dataInJSONFormat.data;
                this.setState({users: usersFromServer});
            }
        };
        //helper.open("GET","https://reqres.in/api/users");
        helper.open("GET","http://localhost:3000/mydata.json")
        helper.send();
    }

    render() 
    { 
        
        debugger;
        return (<div className="table-responsive">
                     <table className="table table-bordered">
                        <thead>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email </th>
                            <th>Photo</th>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(user=>{
                                    return    <tr>
                                                <td>{user.id}</td>
                                                <td>{user.first_name}</td>
                                                <td>{user.last_name}</td>
                                                <td>{user.email}</td>
                                                <td>
                                                    <img className="img-responsive" src={user.avatar} alt={user.first_name}></img>
                                                </td>
                                              </tr>
                                })       
                            }
                        </tbody>
                    </table>
                 </div>);
    }
}
 
export default Sample2;