//Login.js

import React from 'react'

const Login = (props) => {
    console.log(props);
    const login = () => {
        localStorage.setItem('userinfo', 'lili')
        props.history.replace(props.location.state)
    }
    return (
        <div>
            <button onClick={login}>login</button>
        </div>
    )
}
export default Login
