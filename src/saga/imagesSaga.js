import { takeEvery, take, call, put, select } from 'redux-saga/effects';

import { IMAGES } from '../constants';
import { fetchImages } from '../api';
import { loadImages, setError, setImages } from '../actions';

const getPage = state => state.nextPage

// workerSaga or handlerSaga
function* handleImagesLoad() {
    try {
        const page = yield select(getPage)
        console.log('page:', page);
        const images = yield call(fetchImages, page)
        yield put(setImages(images))
    } catch (e) {
        yield put(setError(e))
    }
}

// watcher saga
export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad)
}


