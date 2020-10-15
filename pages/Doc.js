//Doc.js

import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import RouteWithSubRoutes from '../components/RouteWithSubRoutes';
import './doc.css'
import routes from './route.config';

const DocContent = (props) => {
    return <h2>{props.match.params.type}</h2>
}

const Doc = (props) => {
    console.log(props)
    return (
        <div className='doc'>
            <Router>
                <ol>
                    <li><NavLink to='/doc/core'>核心概念</NavLink></li>
                    <li><NavLink to='/doc/guide'>高级指引</NavLink></li>
                    <li><NavLink to='/doc/api'>API</NavLink></li>
                    <li><NavLink to='/doc/hooks'>HOOKS</NavLink></li>
                </ol>
                <div className="content">
                    {/* <Switch>
                        {routes.map((route,i)=>{
                            return <RouteWithSubRoutes key={i} {...route}/>
                        })}
                    </Switch> */}
                    <Route path='/doc/:type' component={DocContent}></Route>
                </div>
            </Router>
        </div>
    )
}

export default Doc