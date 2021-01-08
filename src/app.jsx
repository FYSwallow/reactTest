import React from 'react'
// import {Button} from 'antd-mobile'
import Home from './views/home/index'
import Search from './views/search/index'
import Knowledge from './views/knowledge/index'
import Disease from './views/disease/index'
import Drug from './views/drug/index'
import List from './views/list/index'
import { HashRouter as Router, Switch, Redirect,Route } from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Home} exact></Route>
                <Route path='/search' component={Search}></Route>
                <Route path='/knowledge' component={Knowledge}></Route>
                <Route path='/disease' component={Disease}></Route>
                <Route path='/drug' component={Drug}></Route>
                <Route path='/list' component={List}></Route>
                <Redirect from="/*" to="/" />
            </Switch>
        </Router>
    )
}