import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Features from './pages/features';

export default function Router() {
    return  (
    <Switch>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/features">
            <Features />
        </Route>
        <Route path="/" exact={true}>
            <Home />
        </Route>
  </Switch>
    );
}