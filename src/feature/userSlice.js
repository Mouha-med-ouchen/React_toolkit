import { createSlice } from "@reduxjs/toolkit";
const user = {
    name: 'mohamed',
    age: 24,
    country: 'MA'
}

export const userSlice = createSlice(
    {
        name: 'user',
        initialState: user,
        reducers: {
            user: {
                
            }
        }
    }
)