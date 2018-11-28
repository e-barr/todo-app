import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList.js'

class App extends Component {
  state = {
    items: [],
    currentItem: { text: '', key: '' }
  }

  handleInput = event => {
    console.log('hello input')
  }

  addItem = event => {
    event.preventDefault()
    console.log('hello add item')
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
        />
      </div>
    );
  }
}

export default App;
