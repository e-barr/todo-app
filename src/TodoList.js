import React, { Component } from 'react'

class TodoList extends Component {
    componentDidUpdate() {
        this.props.inputElement.current.focus();
    }

    render() {
        return (
            <div className="todo-list-main">
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <input
                            placeholder="task"
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                        />
                        <button
                            type="submit"
                        >
                            add task
                        </button>
                        <button onClick={this.props.deleteAll}>delete all</button>
                    </form>

                </div>

            </div>
        )
    }
}

export default TodoList;