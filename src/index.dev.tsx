import 'preact/devtools';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter as BrowserRouter, Switch as Switch} from 'react-router-dom';
import './index.pcss';

import {App} from './app/app.component';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <App/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);