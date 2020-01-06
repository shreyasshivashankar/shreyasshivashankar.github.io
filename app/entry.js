import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Index from './views/Index'
import Projects from './views/Projects';
import './static/css/main.scss'
import NotFound from './views/NotFound';

ReactDOM.render(<Router basename={BASE_PATH}>
  <Switch>
    <Route exact path="/" component={Index} />
    <Route path="/projects" component={Projects} />
    <Route component={NotFound} status={404} />
  </Switch>
</Router>,
  document.getElementById('root'),
);