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
