import React from 'react'
import {BrowserRouter as Router,Switch} from 'react-router-dom';
import Header from './Header'
import routes from '../router.config'
import RouteWithSubRoutes from '../ReactComponents/RouteWithSubRoutes'

const App = () => {
    return <Router>
        <div>
            {/* 引入头部 */}
            <Header />

            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route}/>
                ))}
                {/* <Route exact path='/' component={Home} />
            <PrivateRoute path='/doc' component={Doc} />
            <PrivateRoute path='/tuto' component={Tuto} />
            <Route path='/blog' component={Blog} />
            <Route path='/comm' component={Comm} />
            <Route path='/login' component={Login} /> */}
            </Switch>
        </div>
    </Router>
}
export default App