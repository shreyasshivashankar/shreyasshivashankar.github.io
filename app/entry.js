import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Index from './views/Index'
import './static/css/main.scss'

ReactDOM.render(<Router basename={BASE_PATH}>
  <Switch>
    <Route exact path="/" component={Index} />
    {/* Only useful in development mode */}
  </Switch>
</Router>,
  document.getElementById('root'),
);