// PrivateRoute.js

import React from 'react'
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Com, ...rest }) => {
    return (
        <Route {...rest}
            render={(props) =>
                localStorage.getItem('userinfo')
                    ? <Com {...rest} />
                    : (<Redirect to={{
                        pathname: "/login",
                        state: props.location
                    }} />)
            }
        />
    )
}

export default PrivateRoute