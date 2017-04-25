import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';

import {About} from './app/about.component';
import {App} from './app/app.component';
import {Blog} from './app/blog.component';
import {Code} from './app/code.component';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact={true} path="/" component={App}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/code" component={Code}/>
            <Route path="/about" component={About}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
