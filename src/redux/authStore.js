import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import movieSlice from './movieSlice';
import gptSlice from './gptSlice';
import languageSlice from './languageSlice';

const store = configureStore({
    reducer:{
        auth: authSlice,
        movies:movieSlice,
        gpt:gptSlice,
        lang:languageSlice,
    }
})

export default store;