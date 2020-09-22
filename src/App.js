import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {TodoInput} from './Components/TodoInput';
import {TodoList} from './Components/TodoList';
export class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
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
    const NewItem = {
      id: this.state.id,
      title: this.state.item
    }

    const UpdateItems = [...this.state.items, NewItem]

    this.setState({
      items: UpdateItems,
      id: uuidv4(),
      item: '',
      editItme: false
    })

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
