import React, { Component } from 'react';

class TodoItem extends Component {
    
    /*Check button when the item is complete*/

    disableBotton = (event) => {
        let todoItemStatus = event.target.checked;
        this.props.checkBox(this.props.id, todoItemStatus)
    }

    render() {
        let checked = this.props.todoItemStatus ? 'checked' : ''
        return (
            <form action="#">
                <p>
                    <label>
                        <input 
                            type="checkbox" 
                            value="check"
                            id="defaultCheck1" onChange={(event) => {this.disableBotton(event)}} checked={checked}/>
                        <span>{this.props.todoItemText}</span>
                    </label>
                </p>
            </form>
        )
    }
}
    
    
        export default TodoItem;
