import React, { Component } from 'react'

export default class Inputcontainer extends Component {
    state={
        currTask:""
    }
    handleCurrTask = (e) => {
        let currValue=e.target.value;
        this.setState({
            currTask:currValue
        })
    }

    sendCurrTaskToParent = () => {
        this.props.addt(this.state.currTask);

        this.setState({

            currTask : ""
        })
    }
    render() {
        return (
            <div className="input-container">
                    <input type="text" value={this.state.currTask} onChange={this.handleCurrTask}/>
                    <button onClick={this.sendCurrTaskToParent}>sumit</button>
                </div>
        )
    }
}
