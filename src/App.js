import React, { memo, Suspense, useEffect } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'



import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import routes from './router'

const App = memo(() => {
  const location = useLocation()
  useEffect(()=>{
    // console.log(location)
    window.scrollTo(0,0)
  },[location.pathname])
  return (
    <div className='app'>
      <AppHeader/>
      <Suspense fallback={<h2>loading</h2>}>
      <div className='page'>
        {useRoutes(routes)}
      </div>
      </Suspense>
      <AppFooter/>
    </div>
  )
})

export default App
