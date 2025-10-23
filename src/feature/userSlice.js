import { createSlice } from "@reduxjs/toolkit";
const user = {
    name: null,
    age: null,
    country: null
}

export const userSlice = createSlice(
    {
        name: 'user',
        initialState: user,
    }
)