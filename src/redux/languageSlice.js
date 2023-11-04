import {createSlice} from '@reduxjs/toolkit'

const langSlice = createSlice({
    name: 'lang',
    initialState: {
        language:'en',
    },
    reducers:{
        changeLang(state, action){
            state.language = action.payload
        }
    }
})

export const {changeLang} = langSlice.actions
export default langSlice.reducer