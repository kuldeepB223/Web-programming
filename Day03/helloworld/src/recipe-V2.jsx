import axios from "axios";
import { Component } from "react";
class Recipe extends Component
{
    state = {mealDetails : {title: "", 
                            picture: ""}};
    
    componentDidMount()
    {
        debugger;
     
        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=matar").then((response)=>{
            var mealName  = response.data.meals[0].strMeal;
            var imageUrl = response.data.meals[0].strMealThumb;

            this.setState({mealDetails : {title: mealName, 
                picture: imageUrl}})
            debugger;
        })

     
    }


    render()
    {
        return <>
                <h1>{this.state.mealDetails.title}</h1>
                <hr></hr>
                <img src={this.state.mealDetails.picture} 
                     alt="Some Meal"></img>
               </>
    }

}
export default Recipe;