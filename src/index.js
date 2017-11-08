import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PageOne from './components/page_one';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/page/one" component={PageOne} />
                <Route path="/" component={App} />
            </Switch>
        </div>
    </BrowserRouter>,
    

document.getElementById('root')
);

