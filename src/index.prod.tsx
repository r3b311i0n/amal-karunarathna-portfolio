import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter, Switch} from 'react-router-dom';

import {App} from './app/app.component';
import './index.pcss';

// Register Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(() => {
        addEventListener('install', (event: any) => {
            event.waitUntil(
                caches.open('v1').then((cache) => {
                    return cache.addAll([
                        'bundle.js',
                        'styles.css',
                    ]);
                })
            );
        });
    });
}

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <App/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
