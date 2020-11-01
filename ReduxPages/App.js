import React, { useState, useEffect } from 'react'
import store from './store'
// provider 提供整个状态的应用树
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import Todos from './Todos';
import Input from './Input'

// Redux：提供可预测的状态管理的容器
// 解决跨层级传递属性的问题
// action 是更新状态的唯一途径，就是一个普通的对象，一定包含一个type属性
// reducer是一个纯函数，没有副作用，有相同的输入，一定会有相同的输出
// store：连接action和reducer

const App = () => {
    //状态树，所有的状态都在里面保存
    return <Provider store={store}>
        {/* 如果又路由的话，把 Router 包进去，之后provider和router是最外面的组件 */}
        <Router>
            <Input />
            <Todos />
        </Router>
    </Provider>
}

export default App
