import React, { Component } from 'react';
import './App.css';
import TodoItems  from './Components/TodoItems/TodoItem';
import AddItem from './Components/AddItems/AddItem';

class App extends Component {
  state = {
    Items : [
      {id:1, name:"amine", age:25},
      {id:2, name:"hamza", age:23},
      {id:3, name:"mohamed", age:24}
    ]
  }

  deleteItem = (id) => {
   let items = this.state.Items.filter(item => {
      return item.id !== id;
    })
  this.setState({Items:items}) 

  /*let items = this.state.Items;
  let i = items.findIndex(item => item.id === id)
  items.splice(i,1)
  this.setState({Items:items})*/
  }

  addItem = (item) => {
    item.id =  Math.random();
    let items = this.state.Items;
    items.push(item);
    this.setState({Items:items})
  }

  render(){
    return (
      <div className="App">
        <h1>tudoList</h1>
        <TodoItems items={this.state.Items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem} test="testprops" />
      </div>
    );
  }
  
}

export default App;
