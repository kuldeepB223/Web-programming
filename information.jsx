import react, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
const Users =  ()=>{

    const [users,setUsers]= useState([]);

        let promise = new Promise((resolve, reject) => {
            let helper = new XMLHttpRequest();
            helper.onreadystatechange = () => {
                if (helper.readyState == 4 && helper.status == 200) {
                    let data = JSON.parse(helper.responseText);
                    resolve(data);
                    setUsers(data);
                }
            };
            helper.open("GET", "http://localhost:3000/data.json");
            helper.send();
      });

      promise.then((data) => {
        console.log("Wow!");
        console.log(data);
      });

    return (
        <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.zipcode}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
    )  
};
export default Users; 