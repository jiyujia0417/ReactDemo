// router.config.js

import React from 'react'
import Blog from './ReactPages/Blog'
import Comm from './ReactPages/Comm'
import Doc from './ReactPages/Doc'
import Tuto from './ReactPages/Tuto'
import Home from './ReactPages/Home'
import Login from './ReactPages/Login'

const Core = () =>{
    return <h2>Core</h2>
}

const Hooks = () =>{
    return <h2>Hooks</h2>
}

const Api = () =>{
    return <h2>Api</h2>
}

const Guide = () =>{
    return <h2>Guide</h2>
}

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/doc',
        component: Doc,
        pri: true,
        routes: [
            {
                path: '/doc/core',
                component: Core
            },
            {
                path: '/doc/api',
                component: Api
            },
            {
                path: '/doc/hooks',
                component: Hooks
            },
            {
                path: '/doc/guide',
                component: Guide
            }
        ]
    },
    {
        path: '/tuto',
        component: Tuto,
        pri:true
    },
    {
        path: '/blog',
        component: Blog
    },
    {
        path: '/comm',
        component: Comm
    },
    {
        path:'/login',
        component:Login
    }

];

export default routes