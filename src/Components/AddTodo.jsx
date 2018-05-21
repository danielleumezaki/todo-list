import React, { Component } from 'react';

class AddTodo extends Component {

    /*Add constructor to set empty object in state*/
    constructor() {
        super()
        this.state ={ 
            newTodoList: {}
        }
    }

    /*Submit form*/
    addNEwButtonHandler = (event) => {
            
        if(this.refs.text.value === '') {
            alert('To do item is required!')
        } else {
            this.setState({ newTodoList:{
                text: this.refs.text.value,
                status: false,
                id: Math.floor(Math.random()*1000000000)
                }}, function(){
                    this.props.addTodoList(this.state.newTodoList);
                })
        }
        event.preventDefault();
        event.target.reset();  
     }
           
    render() {

        return(

        <div className="row">
            <form className="col s12" onSubmit={this.addNEwButtonHandler.bind(this)} name="formAdd">
                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Add a to do item" id="addtodo" type="text" className="validate" ref="text"/>
                    <br/><br/>
                        <input className="add" type="submit" value="ADD"/>
                    </div>
                </div>
            </form>
        </div>
        )
    }
}

export default AddTodo;