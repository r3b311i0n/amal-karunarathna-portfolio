import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter, Switch} from 'react-router-dom';
import './index.pcss';

import {App} from './app/app.component';

// todo: Add <noscript> tag.

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <App/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
