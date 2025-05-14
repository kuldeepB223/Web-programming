import { Component } from "react";
 import '../node_modules/bootstrap/dist/css/bootstrap.css'
class Information extends Component {

    state = { users : []} 

     componentDidMount()
    {
        debugger;
        var helper = new XMLHttpRequest();
        helper.onreadystatechange =()=>{
            if(helper.readyState === 4 && 
                helper.status === 200
            )
            {
                
                debugger;
                var dataReceivedInString = helper.responseText;
                var dataInJSONFormat = JSON.parse(dataReceivedInString);
                var usersFromServer = dataInJSONFormat;
                this.setState({users: usersFromServer});
            }
        };
        helper.open("GET","http://localhost:3000/data.json")
        helper.send();
    }

    render() { 
        return (
        <div className="table-responsive">
            <table className="table table-bordered">
                <thead>
                    <th>User Id</th>
                    <th>Name</th>
                    <th>username</th>
                    <th>Email</th>
                    <th>Address</th>
                      
                </thead>

                <tbody>
                    {
                        this.state.users.map(user=>{
                        return    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.address.zipcode}</td>
                         </tr>
                        })       
                    }
                </tbody>
            </table>
        </div>
        );
    }
}
 
export default Information;