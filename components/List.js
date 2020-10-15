import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return <div>
            <h3>doing now: {this.props.arrFalse.length}</h3>
            <ul>{this.props.renderTodo(false)}</ul>
            <h3>already done: {this.props.arrTrue.length}</h3>
            <ul>{this.props.renderTodo(true)}</ul>
        </div>
    }
}


