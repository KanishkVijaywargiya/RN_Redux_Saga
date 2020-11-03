import { all } from 'redux-saga/effects';
import imagesSaga from './imagesSaga';
import statsSaga from './statsSaga.js';

function* rootSaga() {
    yield all([imagesSaga(), statsSaga()])
}

export default rootSaga;

