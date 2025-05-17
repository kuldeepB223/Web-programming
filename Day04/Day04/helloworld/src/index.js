//import Demo from './demo';
// import Home from './home';
import ReactDOM from 'react-dom/client';
//import Test from './test';
//import Sample from './sample';
// import Sample2 from './sample2';
// import About from './about';
// import Sample3 from './sample3';
// import Recipe from './recipe-V2';
// import EmpBoard from './EmpBoard-v1';
// import EmpBoard from './EmpBoard-v3';

import DemoState from './DemoState';
import TestInputs from './TestInputs';
import Dashboard from './Dashboard';

//debugger;
console.log("Inside Index .JS ... Got the reference of Root DIV")
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Home/>);
// root.render(<Demo/>)
// root.render(<Test/>)
// root.render(<Sample/>)
// root.render(<Sample2/>)

// console.log("About Component Object is getting created now...")
// root.render(<Sample3/>)
// root.render(<Recipe/>)

// root.render(<TestInputs/>)
root.render(<Dashboard/>)
