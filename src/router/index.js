import Demo from "@/views/demo"
import React from "react"
import { Navigate } from "react-router-dom"


const Home = React.lazy(()=>import("@/views/home"))
const NotFound = React.lazy(()=>import("@/components/not-found"))
const Detail = React.lazy(()=>import('@/views/detail'))
const Entire = React.lazy(()=>import('@/views/entire'))



const routes = [
    {
        path:'/',
        element:<Navigate to='/home'/>
    },
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/detail',
        element:<Detail/>
    },
    {
        path:'/entire',
        element:<Entire/>
    },
    {
        path:'*',
        element:<NotFound/>
    },
    {
        path:'/demo',
        element:<Demo/>
    },
]

export default routes