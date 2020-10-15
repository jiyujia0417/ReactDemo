import React from 'react'
import { HashRouter as Router, Redirect, Route, NavLink, Switch } from 'react-router-dom'
import RouteWithSubRoutes from '../ReactComponents/RouteWithSubRoutes'
import './doc.css'

// const DocContent = (props) => {
//     // console.log(props)
//     return <h2>
//         {props.match.params.type}
//     </h2>
// }
const Doc = ({routes}) => {
    return <div className='doc'>
        <Router>
            <ol>
                <li><NavLink to='/doc/core'>核心概念</NavLink></li>
                <li><NavLink to='/doc/guide'>高级指引</NavLink></li>
                <li><NavLink to='/doc/api'>API</NavLink></li>
                <li><NavLink to='/doc/hooks'>HOOKS</NavLink></li>
            </ol>

            <div className='content'>
                <Redirect from='/doc' to='/doc/core'/>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route}/>
                ))}
                {/* <Route path='/doc/:type' component={DocContent} /> */}
                
            </div>
        </Router>
    </div>
}



export default Doc