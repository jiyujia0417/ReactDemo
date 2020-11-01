import React, { useState, useEffect } from 'react'
import store from './store'
// provider 提供整个状态的应用树
import {Provider} from 'react-redux'

// Redux：提供可预测的状态管理的容器
// 解决跨层级传递属性的问题

const App = () => {
    const [todos, setTodos] = useState(store.getState())

    useEffect(() => {
        store.subscribe(() => {
            setTodos(store.getState())
        })
    }, [])

    return <div>
        {todos.map((item, index) => <li key={index}>{item}</li>)}
        <button onClick={() => {
            store.dispatch({
                type: 'ADD_TODO',
                value: '456'
            })
        }}>add</button>
    </div>
}

export default App
