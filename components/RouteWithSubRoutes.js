import React from 'react';
import PrivateRoute from './PrivateRoute';
import { BrowserRouter as Router, Redirect, Route, NavLink, Switch } from 'react-router-dom'

const RouteWithSubRoutes = (route) => {
	console.log(route.component)
	if(route.component){
		return (
			<Route path={route.path} render={props => { return <route.component {...props} routes={route.routes} /> }} />
		)
	}
	
}

export default RouteWithSubRoutes