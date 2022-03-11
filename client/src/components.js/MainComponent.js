import React from 'react'
import {Switch, Route, Redirect } from 'react-router-dom'


const MainComponent = () => {

  return (
    <div>
        <Switch>
            <Route path="/order" component={}/>
            <Route path="/orders" component={}/>
            <Redirect to='/home'/>
        </Switch>
        MainComponent
    </div>
  )
}

export default MainComponent
