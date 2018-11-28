import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList.js'
import TodoItems from './TodoItems.js'

class App extends Component {
  state = {
    items: [],
    currentItem: { text: '', key: '' }
  }

  deleteItem = key => {
    const updatedItems = this.state.items.filter(item => item.key !== key)
    this.setState({
      items: updatedItems
    })
  }

  handleInput = event => {
    const itemText = event.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem
    })
  }

  addItem = event => {
    event.preventDefault()
    const newItem = this.state.currentItem

    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' }
      })
    }
  }

  deleteAll = event => {
    this.setState({
      items: [],
      currentItem: { text: '', key: '' }
    })
  }

  inputElement = React.createRef();

  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
          deleteAll={this.deleteAll}
        />
        <TodoItems 
          entries={this.state.items}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
