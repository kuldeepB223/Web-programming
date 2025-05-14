import { Component } from "react";

class Info extends Component {

    state = { users : []} 

     componentDidMount()
    {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange =()=>{
            if(helper.readyState === 4 && 
                helper.status === 200
            )
            {
                
                //debugger;
                var dataReceivedInString = helper.responseText;
                var dataInJSONFormat = JSON.parse(dataReceivedInString);
                var usersFromServer = dataInJSONFormat.meals;
                this.setState({users: usersFromServer});
            }
        };
        helper.open("GET","https://www.themealdb.com/api/json/v1/1/search.php?s=pizza")
        helper.send();
    }

    render() { 
        return (
        <div>
            {
                this.state.users?.map(user=>{
                    return (
                        <div className="row">
                            <h1>Recipe Name: {user.strMeal}</h1>
                            <div className="col-md-4">
                                <img src="https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg" alt="Pizza" height="300" width="300"/>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    )
                })       
            }
        </div>
        );
    }
}
 
export default Info;