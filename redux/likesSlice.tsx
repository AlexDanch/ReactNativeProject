import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    likedId: []
}

export const likedSlice = createSlice({
    name: "likes",
    initialState,
    reducers: {
          addLikedId: (state, action) => {
            let elementExist = state.likedId.includes(action.payload)
            if (!elementExist) {
                state.likedId.push(action.payload)
            }    
          },
          deleteLikedId: (state, action) => {
             state.likedId.forEach((id, index) => {
                 if (id === action.payload) {
                    state.likedId.splice(index, 1)
                 }
             })
        }
    }       
})

export const { addLikedId, deleteLikedId } = likedSlice.actions

export default likedSlice.reducer