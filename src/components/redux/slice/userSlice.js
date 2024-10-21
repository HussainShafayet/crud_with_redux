import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading : false,
    users: [],
    error: null,
}

export const getAllUsers = createAsyncThunk("user/getAllUsers", async ()=>{
    const res = await axios.get('https://dummyjson.com/users');
    console.log('all users res', res);
    return res.data.users;
})

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getAllUsers.pending, (state)=>{
            state.isLoading = true;
        });
        builder.addCase(getAllUsers.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.users = action.payload;
            state.error = null;
        });
        builder.addCase(getAllUsers.rejected, (state, action)=>{
            state.isLoading = false;
            state.users = [];
            state.error = action.payload;
        });
    }
});

export default userSlice.reducer;