import React, { Component } from 'react'

class TodoList extends Component {
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form>
                        <input placeholder="task" />
                        <button type="submit">add task</button>
                    </form>

                </div>

            </div>
        )
    }
}

export default TodoList;