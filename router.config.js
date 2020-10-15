import React, { Component } from 'react'
import Blog from './ReactPages/Blog'
import Comm from './ReactPages/Comm'
import Doc from './ReactPages/Doc'
import Tuto from './ReactPages/Tuto'
const routes=[
    {
        path:'/doc',
        component:Doc
    },
    {
        path:'/tuto',
        component:Tuto
    },
    {
        path:'/blog',
        component:Blog
    },
    {
        path:'/comm',
        component:Comm
    },
    // {
    //     path:'/doc',
    //     component:Doc
    // },
]
export default routes
