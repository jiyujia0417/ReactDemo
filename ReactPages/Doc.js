import React from 'react'
import { BrowserRouter as Router, Redirect, Route, NavLink, Switch } from 'react-router-dom'
import './doc.css'

const DocContent = (props) => {
    // console.log(props)
    return <h2>
        {props.match.params.type}
    </h2>
}
const Doc = () => {
    return <div className='doc'>
        <Router>
            <ol>
                <li><NavLink to='/doc/core'>核心概念</NavLink></li>
                <li><NavLink to='/doc/guide'>高级指引</NavLink></li>
                <li><NavLink to='/doc/api'>API</NavLink></li>
                <li><NavLink to='/doc/hooks'>HOOKS</NavLink></li>
            </ol>

            <div className='content'>
                <Route path='/doc/:type' component={DocContent} />
                <Redirect from='/doc' to='/doc/core'/>
            </div>
        </Router>
    </div>
}

export default Doc