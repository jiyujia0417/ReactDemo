import React, { Component } from 'react'

const PrivateRoute = (route) => {
    return (
        route.map((i, route) => {
            return <Route path={route.path} component={route.component}/>
        })
    )
}

export default PrivateRoute