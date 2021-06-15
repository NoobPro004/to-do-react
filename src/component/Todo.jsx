import React, { Component } from 'react'
// react snippets
// rcc
import Inputcontainer from './Inputcontainer'
import TaskList from './TaskList'
export default class Todo extends Component {
    // render -> static ui define
    // identify different variables taht
    // can change throughout the life time -> state
    // rewrite render using those state variables
    // event listener to change the state
    state={
        taskList:[]
    }

deleteTask = (id) => {
   let filteredtask= this.state.taskList.filter(function(task){
        return task.id !== id;
    })
    this.setState({
       taskList : filteredtask
    })
}



addTask = (currentTask) => {
    // let currTask=this.state.currTask;
    // let tempArr=[];
    // // for(let i=0;i<this.state.taskList.length;i++){
    // //     tempArr.push(this.state.taskList[i]);
    // // }
    // tempArr.push(currTask);
    let tempArr=[...this.state.taskList,{task:currentTask,id:this.state.taskList.length}];
    this.setState({
        taskList:tempArr
    })
}
    render() {
        return (
            <div>
                <Inputcontainer addt={this.addTask}></Inputcontainer>
                <TaskList tl={this.state.taskList} dl={this.deleteTask}></TaskList>
            </div>

        )
    }
}
