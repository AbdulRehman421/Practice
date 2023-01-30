import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: 20,
    reducers: {
        Add: (state) => {

            return state += 1
        },
        Sub: (state) => {
            return state -= 1
        },

    },
})


export const { Add, Sub } = counterSlice.actions

export default counterSlice.reducer