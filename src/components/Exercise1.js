import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
        this.change=this.change.bind(this);
        this.alertText=this.alertText.bind(this);
    }

    change(e){
        let inputVal = e.target.value;
        let id = e.target.id;
        if(id==="name-input"){
            this.setState({name:inputVal})
        }
        else{
            this.setState({age:inputVal})
        }
    }

    alertText(){
        alert("Come in "+ this.state.name+", you’re " + this.state.age +"- that’s good enough");
    }
    render() {
        return (
            <div>
                <input id="name-input" value={this.state.name} onChange={this.change}/>
                <input id="age-input" value={this.state.age} onChange={this.change}/>
                <button onClick={this.alertText}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;