import Home from './Home'
import Doc from './Doc'
import Tuto from './Tuto'
import Blog from './Blog';
import Comm from './Comm';
import Login from './Login';
import App from '../App'

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/doc',
        component: Doc,
        pri: true,
        // routes: [
        //     {
        //         path: '/doc/core',
        //         component: Core
        //     },
        //     {
        //         path: '/doc/api',
        //         component: Api
        //     },
        //     {
        //         path: '/doc/hooks',
        //         component: Hooks
        //     }
        // ]
    },
    {
        path: '/tuto',
        component: Tuto,
        pri: true
    },
    {
        path: '/blog',
        component: Blog,
    },
    {
        path: '/comm',
        component: Comm,
    },
    {
        path: '/login',
        component: Login,
    }
]

export default routes