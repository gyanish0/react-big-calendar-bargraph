import { createSlice } from '@reduxjs/toolkit'
import dummyData from '../data/dummyData'

const initialState = {
    data: dummyData,
    selectedDate: null
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setSelectedDate(state, action) {
            state.selectedDate = action.payload
        },
        clearSelectedDate(state) {
            state.selectedDate = null
        }
    }
})

export const { setSelectedDate, clearSelectedDate } = dataSlice.actions
export default dataSlice.reducer
