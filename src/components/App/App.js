import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { renderComponent } from './Helpers';
import Home from '../Home';
import Restaurants from '../Restaurants';
import PageNotFound from '../PageNotFound';

const App = props => (
  <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => renderComponent(<Home {...props} />)} />
          <Route path="/restaurants" render={props => renderComponent(<Restaurants {...props} />)} /> 
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
  </React.Fragment>
);

export default App;
