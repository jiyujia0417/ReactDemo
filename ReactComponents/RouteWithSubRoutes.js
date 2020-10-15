import React from 'react'
import { HashRouter as Router, Redirect, Route, NavLink, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

const RouteWithSubRoutes = (route) => {
    console.log(route)
    console.log(route.path)
    console.log(route.component)
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    )

    // console.log('使用：RouteWithSubRoutes');
    // if (pri === true) {
    //     console.log('use 权限路由');
    //     return <PrivateRoute {...rest} />
    // } else {
    //     console.log('use 普通路由');
    //     return (
    //         <Route {...rest} />
    //     )
    // }
}

export default RouteWithSubRoutes