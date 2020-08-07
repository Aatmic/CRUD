

import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';


import Login from '././components/Login/Login';
import Signup from '././components/Signup/Signup';

const Routes = () => (
  <BrowserRouter >
      <Switch>
       
          <Route path="/login" component={Login}/>
          <Route path="/Signup" component={Signup}/>
           </Switch>
  </BrowserRouter>
);

export default Routes;