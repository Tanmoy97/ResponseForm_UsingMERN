import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './header';
import FormFour from './formFour';


class Routes extends Component {

  render(){
      return(
          <BrowserRouter>
              <Header/>
              <Switch>
                  
              <Route path="/formfour" component={FormFour} />
            
              </Switch>
          </BrowserRouter>
      )
  }
}

export default Routes;