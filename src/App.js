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

  // Handle change
  handleChange = (e) => {
    this.setState({
      item: e.target.value
    });
  }

  // Handle submit
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }

    const UpdateItems = [...this.state.items, newItem]

    this.setState({
      items: UpdateItems,
      id: uuidv4(),
      item: '',
      editItme: false
    })

  }

  // Handle edit
  handleEdit = (id) => {
    const filterItem = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filterItem,
      item: selectedItem.title,
      editItme: true,
      id: id
    })
  }

  // Handle delete
  handleDelete = (id) => {
    const filterItem = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filterItem
    })
    console.log(`Handle delete ${id}`)
  }

  handleClearList = () => {
    this.setState({
      items: []
    })
  }
  
  render() {
    return (
      <>
        <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <TodoList items={this.state.items} handleDelete={this.handleDelete} handleEdit={this.handleEdit} handleClearList={this.handleClearList}/>
      </>
    )
  }
}


export default App;
