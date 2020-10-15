import React from 'react';
import { BrowserRouter as Router, Redirect, Route, NavLink, Switch } from 'react-router-dom'
import Header from './Header';
import Home from './Home'
import Doc from './Doc';
import Tuto from './Tuto';
import Blog from './Blog';
import Comm from './Comm';
import Login from './Login';
import routes from './route.config';
import RouteWithSubRoutes from '../components/RouteWithSubRoutes'
// import PrivateRoute from './components/PrivateRoute'
// function PrivateRoute ({ component: Com, ...rest }) {
//     return (
//         <Route
//             {...rest}
//             render={({ location }) =>
//                 localStorage.getItem('userinfo') ? <Com /> : (<Redirect to={{ pathname: "/login", state: location }} />)
//             }
//         />
//     );
// }

function PrivateRoute({ component: Com, ...rest }) {
	return (
		<Route
			{ ...rest }
			render={ ({ location }) =>
				localStorage.getItem('userinfo')
					? <Com />
					: (
						<Redirect
							to={ {
								pathname: "/login",
								state: location
							} }
						/>
					)
			}
		/>
	);
}

const App = () => {
	return <Router>
		<Header />
		<Switch>
			{
				routes.map(({pri,...rest})=>{
					if(pri){
						return <PrivateRoute {...rest} />
					}
					return <Route {...rest} />
				})
			}
			<Route path='*' component={() => <div>404</div>} />
		</Switch>
	</Router>
}
// const App = () => {
// 	return <Router>
// 		<Header />
// 		<Switch>
// 			{
// 				routes.map(({ pri, ...rest }) => {
// 					if (pri) {
// 						return <PrivateRoute {...rest} />
// 					}
// 					return <Route {...rest} />
// 				})
// 			}
			
// 		</Switch>
// 	</Router>
// }

export default App