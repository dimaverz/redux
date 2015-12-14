import React from 'react';
//import Catalog from './catalog/app-catalog';
//import Cart from './cart/app-cart';
//import CatalogDetail from './product/app-catalogdetail';

import Page from './l_start/page';

import Dashboard from './l_start/dashboard';
import Template from './app-template';

import { Router, Route, IndexRoute } from 'react-router';
import { createHistory, useBasename } from 'history'

const history = useBasename(createHistory)({
  basename: '/'
})

export default () => {
    return (
        <Router history={history} >
            <Route path="/" component={ Template } >
                <IndexRoute component={ Dashboard }/>
                <Route path="page" component={ Page }/>
            </Route>
        </Router>
    );
};
