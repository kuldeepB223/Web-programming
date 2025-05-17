import { Component } from "react";

class Sample3 extends Component
{
    state = {Name : "KnowIT"}

    componentDidMount(){
        debugger;
    }

    componentDidUpdate()
    {
        debugger
    }

    DoChange = ()=>{
        this.setState( {Name : "ABC"}) //setState calls render internally
    }
    render()
    {
        debugger;
        return <>
                    <h1>Welcome To {this.state.Name}</h1>
                    <button onClick={this.DoChange}>Click Me</button>
                </>
    }
}

export default Sample3