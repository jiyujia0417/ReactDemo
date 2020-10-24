import React, { useState, useEffect } from 'react'
import todolist from './reducers'
import store from './store'

const App = () => {
    const [todos, setTodos] = useState(store.getState())

    useEffect(() => {
        store.subscribe(() => {
            setTodos(store.getState())
        })
    }, [])

    return <div>
        {todos.map(item => <li>{item}</li>)}
        <button onClick={() => {
            store.dispatch({
                type: 'ADD_TODO',
                value: '456'
            })
        }}>add</button>
    </div>
}

export default App
