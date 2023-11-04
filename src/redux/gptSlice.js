import {createSlice} from '@reduxjs/toolkit'

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch:false,
    },
    reducers: {
        setGpt: (state) => {
            state.showGptSearch = !state.showGptSearch;
        }
    }
})




export const {setGpt} = gptSlice.actions

export default gptSlice.reducer