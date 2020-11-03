import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import rootSaga from '../saga';
import loggerMiddleware from 'redux-logger';
import createSagaMiddleware from 'redux-saga';


const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        applyMiddleware(loggerMiddleware, sagaMiddleware)
    )
    sagaMiddleware.run(rootSaga)
    return store
}


export default configureStore;