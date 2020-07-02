import { createStore, compose } from 'redux'
import reducer from './reducer'

const devTools = 'production' !== process.env.NODE_ENV
    && typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;

const store = createStore(reducer, {}, compose(devTools));

export default store