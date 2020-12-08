import React, { lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import './App.css';
import Navigator from './product/naviagator';
import About from './product/about';
import ErrorWrapper from './ErrorWrapper';

export default function App() {
  return (
    <ErrorWrapper>
      <div className="container">
        <Router>
        <Suspense fallback={<div>Loading</div>}>
        <div>
          <Navigator />
          <Switch>
            <Route path="/" component={About} exact/>
            <Route path="/products" component={lazy(()=> import ('./product/allproduct'))} />
          </Switch>
        </div>
        </Suspense>
        </Router>
      </div>
      </ErrorWrapper>
  )
}
