import React from 'react'
import Blog from './ReactPages/Blog'
import Comm from './ReactPages/Comm'
import Doc from './ReactPages/Doc'
import Tuto from './ReactPages/Tuto'
import Home from './ReactPages/Home'
import Login from './ReactPages/Login'

const Core = () =>{
    return <div>Core</div>
}

const Hooks = () =>{
    return <div>Hooks</div>
}

const Api = () =>{
    return <div>Api</div>
}

const Guide = () =>{
    return <div>Guide</div>
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
                path: '/doc/guide',
                component: Api
            },
            {
                path: '/doc/api',
                component: Hooks
            },
            {
                path: '/doc/hooks',
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