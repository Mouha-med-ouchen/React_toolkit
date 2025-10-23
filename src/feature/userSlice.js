import {  createSlice } from "@reduxjs/toolkit";
const user = {
  name: undefined,
  age: undefined,
  country: undefined
}
 const userSlice = createSlice(
  {
    name: 'user',
    initialState: user,
    reducers: {
      resetUser: (state) => {
        state.name = undefined
        state.age = undefined
        state.country = undefined

        },
      updateUser: (state, action) => {
        const { name, country, age } = action.payload;

        state.name = name
        state.age = age
        state.country = country
      }
    }
  }
)
export const {resetUser,updateUser} = userSlice.actions
export default userSlice.reducer