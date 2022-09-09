import React, { Component } from 'react'

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [{id: 1, task: 'play cricket'}, {id: 2, task: 'do HW'}]
            ,
            currTask: ""
        } 
        
    }

    handleChange = (e)=>{
        console.log(e.target.value);
        this.setState({
            currTask: e.target.value
        })
    }
  render() {
    console.log('render() called');
    return (
        // jsx starts here
      <div>
        <input type="text" value={this.state.currTask} onChange={this.handleChange}></input>
        <button>Sumbit</button>
        {
            // use when need to write JS in jsx

            this.state.tasks.map(function(taskObj) {
                return (
                    <li key = {taskObj.id}>
                        <p>{taskObj.task}</p>
                        <button>Delete</button>
                    </li>
                )
            })
        }
      </div>
    )
  }
}
