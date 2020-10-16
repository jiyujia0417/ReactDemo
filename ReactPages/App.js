//App.js

import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
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
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>

        </div>
    </Router>
}

export default App