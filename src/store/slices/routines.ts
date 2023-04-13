import { type Routine } from '@/models/Routine'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface RoutinesState {
  routines: Routine[]
}

const initialState: RoutinesState = {
  routines: []
}

export const routinesSlice = createSlice({
  name: 'routines',
  initialState,
  reducers: {
    addRoutine: (state, action: PayloadAction<Routine>) => {
      console.log('addRoutine payload', action.payload)
      state.routines = [action.payload, ...state.routines]
    }
  }
})

export const { addRoutine } = routinesSlice.actions

export default routinesSlice.reducer
