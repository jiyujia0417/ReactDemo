//Login.js

import React, { Component } from 'react'

const Login = (props) => {
    const login = () => {
        localStorage.setItem('userinfo', 'tom')
        props.history.replace(props.location.state)
    }
    return (
        <div>
            <button onClick={login}>login</button>
        </div>
    )
}
export default Login
