import {createStore} from 'redux';
import adminPanelReducer from './adminPanelReducer'


const store = createStore(adminPanelReducer,window.__REDUX_DEVTOOLS_EXTENSTION__ && window.__REDUX_DEVTOOLS_EXTENSTION__());


export default store;