import React, { Component } from 'react';

class Exercise2 extends Component {

constructor() {
    super()
    this.state = {
        name: "",
        fruit: ""
    }
    this.changeVal=this.changeVal.bind(this);
}

async changeVal(e){
    let inputVal= e.target.value;
    let id = e.target.id;
    if(id==="name-input"){
        this.setState({name:inputVal});
    }
    else{
       await this.setState({fruit:inputVal});
       console.log(this.state.name + " selected "+this.state.fruit);
    }
}
render() {
    return (
        <div>
            <input id="name-input" value={this.state.name} onChange={this.changeVal}/>
            <select id="select-input" onChange={this.changeVal}>  
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option></select>
        </div>
    );
}
}

export default Exercise2;