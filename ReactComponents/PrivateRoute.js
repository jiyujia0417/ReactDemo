import React, { Component } from 'react'
import Login from '../ReactPages/Login'
import {BrowserRouter as Router,Redirect,Route,NavLink,Switch} from 'react-router-dom';

const PrivateRoute = ({ component: Com, ...rest }) => {
    return (
        <Route {...rest}
            render={(props) =>
                localStorage.getItem('userinfo')
                    ? <Com {...rest}
                    />
                    : (<Redirect to={{
                        pathname: "/login",
                        state: props.location
                    }} />)}
        />

    )
}

export default PrivateRoute