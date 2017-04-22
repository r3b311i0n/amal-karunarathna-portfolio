import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {About} from './app/about.component';
import {App} from './app/app.component';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact={true} path="/" component={App}/>
            <Route path="/about" component={About}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
