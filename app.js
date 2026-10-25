const element=React.createElement("h1",{id:"first",className:"roshan", style:{backgroundColor:"blue",fontSize:"30px"}},"Hellow Coder Army");
const element2=React.createElement("h2",{id:"Second",className:"roshan", style:{backgroundColor:"blue",fontSize:"30px"}},"DeepAnush");

const div1=React.createElement('div',{},[element,element2]); 
const Reactroot=ReactDOM.createRoot(document.getElementById('root'));

// Reactroot.render(element); 
// Reactroot.render(element2); 

Reactroot.render(div1);

/*<div>
    <h1>Hellow coder army</h1>
    <h2>Maja aaya muje </h2>
</div>*/