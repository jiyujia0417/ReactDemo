import React from 'react'
import { BrowserRouter as Router, Redirect, Route, NavLink, Switch } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Doc from './Doc'
import Tuto from './Tuto'
import Blog from './Blog'
import Comm from './Comm'
import routes from '../router.config'
import PrivateRoute from '../ReactComponents/PrivateRoute'
import Login from './Login'

const App = () => {
    return <Router>
        {/* 引入头部导航栏 */}
        <Header />

        <Switch>
            <Route exact path='/' component={Home} />
            <PrivateRoute path='/doc' component={Doc} />
            <PrivateRoute path='/tuto' component={Tuto} />
            <Route path='/blog' component={Blog} />
            <Route path='/comm' component={Comm} />
            <Route path='/login' component={Login} />
        </Switch>

    </Router>
}
export default App