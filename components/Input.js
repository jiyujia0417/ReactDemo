import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
            <div>
                <input
                    ref={inp => this.input = inp}
                    value={this.props.inpValue}
                    type="text"
                    onChange={this.props.handleChange}
                ></input>
                <button onClick={this.props.addTodo}>add</button>
            </div>
        )
    }
}
