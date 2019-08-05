import {createStore} from 'redux';
import rootReducer from './reducer/main';

export default createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );