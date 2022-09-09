import React, { Component } from 'react'

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [{id: 1, task: 'play cricket'}, {id: 2, task: 'do HW'}],
            currTask: ""
        } 
        
    }
    handleChange = (e)=>{
        // console.log(e.target.value);
        this.setState({
            currTask: e.target.value  
        })
    }
    handleSubmit = (e)=>{
        // console.log(e.target.value);
        this.setState({
            tasks: [...this.state.tasks, {task: this.state.currTask, id: this.state.tasks.length+1}]
        })  
    }
    handleDelete = (id)=>{
        let newArr = this.state.tasks.filter((taskObj)=>{
            return taskObj.id !== id;
        });
        this.setState({
            tasks: [...newArr]
        })
    }
  render() {
    console.log('render() called');
    // let _this = this;
    return (
        // jsx starts here
      <div>
        <input type="text" value={this.state.currTask} onChange={this.handleChange}></input>
        <button onClick={this.handleSubmit}>Submit</button>
        {
            // use when need to write JS in jsx

            this.state.tasks.map((taskObj) => {
                return (
                    <li key = {taskObj.id}>
                        <p>{taskObj.task}</p>
                        <button onClick={()=> this.handleDelete(taskObj.id)}>Delete</button>
                    </li>
                )
            })
        }
      </div>
    )
  }
}
