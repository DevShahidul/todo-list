import React, { Component } from 'react';
//import uuid from 'uuid';
import {TodoInput} from './Components/TodoInput';
import {TodoList} from './Components/TodoList';
export class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: 'Wake Up'
      },
      {
        id: 2,
        title: "Make breackfirst"
      }
    ],
    item: '',
    editItme: false
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Handle Submit')
  }
  handleEdit = (id) => {
    console.log('Handle delete')
  }

  handleDelete = (id) => {
    console.log(`Handle delete ${id}`)
  }

  handleClearList = () => {
    console.log('Handle Clear')
  }
  
  render() {
    return (
      <>
        <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <TodoList item={this.state.items} handleDelete={this.handleDelete} handleEdit={this.handleEdit} handleClearList={this.handleClearList}/>
      </>
    )
  }
}


export default App;
