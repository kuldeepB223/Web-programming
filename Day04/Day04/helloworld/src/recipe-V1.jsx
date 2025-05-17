import { Component } from "react";
class Recipe extends Component
{
    state = {mealDetails : {title: "", 
                            picture: ""}};
    
    componentDidMount()
    {
        debugger;
        var helper = new  XMLHttpRequest();
        helper.onreadystatechange = ()=>{
            if(helper.readyState == 4 && helper.status == 200)
            {
                var recipeDataInJSONFormat = JSON.parse(helper.responseText);

                var mealName  = recipeDataInJSONFormat.meals[0].strMeal;
                var imageUrl = recipeDataInJSONFormat.meals[0].strMealThumb;

                this.setState({mealDetails : {title: mealName, 
                    picture: imageUrl}})
                debugger;
            }
        };
        helper.open("GET", "https://www.themealdb.com/api/json/v1/1/search.php?s=matar");
        helper.send();
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