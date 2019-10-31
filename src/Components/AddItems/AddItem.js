import React, { Component } from 'react';
import './AddItem.css';

class AddItem extends Component {
    state = {
        name : "",
        age : ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value 
        })      
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state)
        console.log(this.state);
        
    }

    render(){
        return(
            <div>
                <p>{this.props.test}</p>
                <h2>2 - add Item</h2>
                <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Name" id="name" onChange={this.handleChange}/>
                <input type="number" placeholder="Age" id="age" onChange={this.handleChange}/>
                <input type="submit" value="Add" />
                </form>
            </div>
        );
    }
}

export default AddItem;