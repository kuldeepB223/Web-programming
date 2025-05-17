function GoTo(pageName) {
    // debugger;
    var refToRootDiv = document.getElementById("root");

    if (pageName == "home") {
      refToRootDiv.innerHTML = Home();
    } else if (pageName == "about") {
      refToRootDiv.innerHTML = About();
    } else if (pageName == "contact") {

      ////When contact is a function component!
      //refToRootDiv.innerHTML = Contact();

      ////When contact is a class component!
      var obj = new Contact();
      refToRootDiv.innerHTML = obj.render();
    }
  }

  function Home()
{
    return `<h1>Welcome Home</h1>`;
}

////Below is more like function component in React
// function Contact()
// {
//     return `<h1>Contact Us Here..</h1>`;
// }


////Below is more like class component in React
class Contact
{
    render(){
        return `<h1>Contact Us Here..</h1>`;
    }
}
function About()
{
    return `<h1>This is about us!</h1>`;
}
