import React, { Component } from 'react'

export default class List extends Component {
    //最好放在list组件里
    renderTodo = (done) => {

        return this.props.todos.map((item, index) => {
            if (item.done == done) {
                return (
                    <li>
                        <input
                            onClick={() => this.props.toggle(index)}
                            checked={done}
                            //使用checked来选择是否勾选对勾，为真的勾上，为假的不勾
                            type="checkbox"
                            readOnly={true}
                        />
                        <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
                        <button onClick={() => this.props.delTodo(index)}>del</button>
                    </li>
                )
            }
        })
    }

    render() {
        //解构
        const { todos } = this.props;
        //写两个数组以done的值来区分，done为false的数组处于“doing now”列；done为true的数组处于“already done”列
        let arrFalse = todos.filter(item => !item.done);
        let arrTrue = todos.filter(item => item.done);
        return <div>
            <h3>doing now: {arrFalse.length}</h3>
            <ul>{this.renderTodo(false)}</ul>
            <h3>already done: {arrTrue.length}</h3>
            <ul>{this.renderTodo(true)}</ul>
        </div>
    }
}


