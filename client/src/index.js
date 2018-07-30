import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './reducers'
import thunkMiddleware from 'redux-thunk';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory' 

const history = createHistory()

const store=createStore(appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(
       applyMiddleware(
       thunkMiddleware,
       routerMiddleware(history)
      ))
)

ReactDOM.render(
    <Provider store= {store}>
        <ConnectedRouter history={history}>
           <App />
       </ConnectedRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
