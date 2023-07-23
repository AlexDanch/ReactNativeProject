import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import FavoriteScreen from "../screens/FavoriteScreen"

const initialState = {
    favoriteElement: []
}

export const contentManagerSlice = createSlice({
    name: "favoriteElement",
    initialState,
    reducers: {
          addFavoriteElement: (state, action) => {
              let elementExist = false
              state.favoriteElement.forEach(element => {
                 if (element.id === action.payload) {
                   elementExist = true
                   return false
                 }
              })
              if (!elementExist) {
                state.favoriteElement.push(action.payload)
              }
          },

          deleteFavoriteElement: (state, action) => {   
              let count = -1
              state.favoriteElement.forEach(element => {
                 count++
                 if (element.id === action.payload.id) {
                    console.log(count)
                   state.favoriteElement.splice(count, 1)
                 }
              })
           }
        }   
})

export const { addFavoriteElement, deleteFavoriteElement } = contentManagerSlice.actions


export default contentManagerSlice.reducer