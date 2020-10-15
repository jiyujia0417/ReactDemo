import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect, Route, NavLink, Switch } from 'react-router-dom'

const PrivateRoute = ({ component: Com, ...rest }) => {
    return (
        <Route {...rest} render={({ location }) => localStorage.getItem('userinfo') ? <Com /> : (<Redirect to={{ pathname: "/login", state: location }} />)} />
    )
}

export default PrivateRoute