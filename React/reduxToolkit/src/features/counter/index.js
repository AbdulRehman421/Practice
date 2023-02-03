import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
    name: 'counter',
    initialState: "abc",
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