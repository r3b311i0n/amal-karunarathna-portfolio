import {createBrowserHistory} from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Route, Router} from 'react-router';

import {App} from './app/app.component';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Route path="/" component={App}/>
    </Router>,
    document.getElementById('root')
);
