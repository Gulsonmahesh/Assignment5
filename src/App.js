import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Allproduct from './product/allproduct';
import Navigator from './product/naviagator';
import About from './product/about';


export default function App() {
  return (
    <Fragment>
      <div className="container">
        <BrowserRouter>
        <div>
          <Navigator />
          <Switch>
            <Route path="/" component={About} exact/>
            <Route path="/products" component={Allproduct} />
          </Switch>
        </div>
        </BrowserRouter>
      </div>
      </Fragment>
  )
}
