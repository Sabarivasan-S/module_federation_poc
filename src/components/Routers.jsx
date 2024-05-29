import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OnboardingPage from './OnboardingPage';
import GetProperties from './GetProperties';
import Orders from './Orders';
import {Switch, useRouteMatch} from 'react-router-dom';

export default function Routers() {
  const {path} = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/onboarding`} component={OnboardingPage}/>
      <Route path={`${path}/get-properties`} component={GetProperties}/>
      <Route path={`${path}/orders`} component={Orders}/>
    </Switch>
  )
}
