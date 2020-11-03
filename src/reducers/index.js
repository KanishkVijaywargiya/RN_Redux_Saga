import loadingReducers from './loadingReducers';
import imagesReducers from './imagesReducers';
import errorReducers from './errorReducers';
import pageReducers from './pageReducers';
import statsReducers from './statsReducers';

import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    isLoading: loadingReducers,
    images: imagesReducers,
    error: errorReducers,
    nextPage: pageReducers,
    imageStats: statsReducers
})

export default rootReducer;
