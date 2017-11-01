import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter, Switch} from 'react-router-dom';

import {App} from './app/app.component';
import './index.pcss';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <App/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
