import React, { Component } from 'react'
import List from '../components/List';
import Input from '../components/Input';

export default class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            //输入框里的值，初始值为空
            inpValue: '',
            //下面的todo列表
            todos: []
        }
    }

    componentDidMount() {
        let todo = localStorage.getItem('todos');
        if (todo) {
            this.setState({
                todos: JSON.parse(todo)
            })
        }
    }

    componentDidUpdate() {
        //每一次更新都缓存一次值
        localStorage.setItem(
            'todos',
            JSON.stringify(this.state.todos)
        )
    }

    handleChange = (e) => {
        this.setState({ inpValue: e.target.value })
    }

    //添加一项
    addTodo = () => {
        if (this.state.inpValue == '') {
            alert("Please do not fill in empty values!");
            return;
        } else {
            this.setState({
                todos: [
                    {
                        title: this.state.inpValue,
                        done: false
                    },
                    //使用拓展运算符将之前的todos放进来
                    ...this.state.todos
                ],
                inpValue: ''
            })
        }
    }

    //删除对应的一项
    delTodo = (idx) => {
        this.setState({
            //把除了这一项之外剩下的拿出来
            todos: this.state.todos.filter((item, index) => index != idx)
        })
    }

    //checkbox上点击对勾，已经完成；没有对勾，还未完成
    toggle = (idx) => {
        let newTodos = JSON.parse(JSON.stringify(this.state.todos));
        newTodos[idx].done = !newTodos[idx].done;
        this.setState({ todos: newTodos });
    }

    renderTodo = (done) => {
        return this.state.todos.map((item, index) => {
            if (item.done == done) {
                return (
                    <li>
                        <input
                            onClick={() => this.toggle(index)}
                            checked={done}
                            //使用checked来选择是否勾选对勾，为真的勾上，为假的不勾
                            type="checkbox"
                            readOnly={true}
                        />
                        <span dangerouslySetInnerHTML={{ __html: item.title }}></span>
                        <button onClick={() => this.delTodo(index)}>del</button>
                    </li>
                )
            }
        })
    }

    render() {
        //解构
        const { inpValue, todos } = this.state;

        //写两个数组以done的值来区分，done为false的数组处于“doing now”列；done为true的数组处于“already done”列
        let arrFalse = todos.filter(item => !item.done);
        let arrTrue = todos.filter(item => item.done);

        return <div>
            <label htmlFor="inp"><h2>TodoList </h2></label>
            <Input inpValue={inpValue} addTodo={this.addTodo} handleChange={this.handleChange} />
            <List arrFalse={arrFalse} arrTrue={arrTrue} renderTodo={this.renderTodo} todos={todos} delTodo={this.delTodo} toggle={this.toggle} />
        </div>
    }
}
