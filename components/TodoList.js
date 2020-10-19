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

    componentDidUpdate(preProps, preState) {
        //判断现在状态的todos和之前渲染的todos是否相同，如果相同就补三更新。如果不同才缓存本地
        //实现输入框输入的时候不更新，只有点击添加的时候本地才进行缓存
        if (preState.todos !== this.state.todos) {
            console.log(123);
            //每一次更新都缓存一次值
            localStorage.setItem(
                'todos',
                JSON.stringify(this.state.todos)
            )
        }
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

    render() {
        return <div>
            <label htmlFor="inp"><h2>TodoList </h2></label>
            <Input inpValue={this.state.inpValue} addTodo={this.addTodo} handleChange={this.handleChange} />
            <List todos={this.state.todos} delTodo={this.delTodo} toggle={this.toggle} />
        </div>
    }
}
