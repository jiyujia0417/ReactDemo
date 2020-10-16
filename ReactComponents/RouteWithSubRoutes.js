// RouteWithSubRoutes.js

import React from 'react'
import PrivateRoute from './PrivateRoute'
import { Route } from 'react-router-dom';

const RouteWithSubRoutes = (route) => {
    console.log(route)
    if (route.pri === true) {
        return <PrivateRoute path={route.path} {...route} />
    }

    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    )
}

export default RouteWithSubRoutes