import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import CategoryTypeReducer from '../redux/Reducers/CategoryTypeReducer/CategoryTypeReducer';
const rootReducer = combineReducers({
    CategoryTypeReducer: CategoryTypeReducer
});
export default createStore(rootReducer,applyMiddleware(thunk));