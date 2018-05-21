import React, { Component } from 'react';
import TodoItem from './TodoItem.jsx';

class TodoList extends Component {

    render() {
        let todoList = this.props.todoList.map((todo, i) => {
            return <TodoItem key={i} todoItemText = {todo.text} 
            todoItemStatus = {todo.status} 
            checkBox = {this.props.checkBox} 
            id={todo.id}/> 
        })

        return (
            <ul className="list-group">
                {todoList}
            </ul>
        )
    }
}

export default TodoList;