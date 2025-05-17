import { Component } from "react";

class About extends Component
{
    state = {
             SR: 100,
             city : "Pune", 
             isActive : true,
             salary: undefined,
             emp : {No : 1, Name : "abc"},
             players : ["Virat", "Sachin", "MSD"]
            }
    constructor()
    {
        super();
        console.log("Constructor Called.")
    }
    componentDidMount()
    {
        console.log("componentDidMount Called.")
        debugger;
    }

    componentDidUpdate()
    {
        console.log("componentDidUpdate Called.")
        debugger;
    }

    render()
    {
        console.log("render Called.")
        debugger;
        return (<>
                    <h1>{this.state.SR}</h1>
                    <h1>{this.state.city}</h1>
                    <h1>{this.state.isActive}</h1>
                    <h1>{this.state.salary}</h1>
                    <h1>{this.state.players.map(player=>{
                        return <h3> -{player}</h3>
                    })}</h1>
                   <h1>Hi {this.state.emp.No}{this.state.emp.Name}</h1>
                </>)
    }
}

export default About