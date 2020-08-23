import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import ForgotPassword from '../pages/ForgotPassword'
import CreatePost from '../pages/CreatePost'

import Home from '../pages/Home'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />

    <Route path="/" exact component={Home} isPrivate />
    <Route path="/post/create" component={CreatePost} isPrivate />
  </Switch>
)

export default Routes
