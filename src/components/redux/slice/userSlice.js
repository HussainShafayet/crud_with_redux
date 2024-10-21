import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading : false,
    users: [],
    error: null,
    user: null,
}


// get all users
export const getAllUsers = createAsyncThunk("user/getAllUsers", async ()=>{
    const res = await axios.get('https://dummyjson.com/users');
    console.log('all users res', res);
    return res.data.users;
})

// get single user
export const getUser = createAsyncThunk("user/geUser", async (userId)=>{
    const res = await axios.get(`https://dummyjson.com/users/${userId}`);
    console.log('user res', res);
    return res.data;
})

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        //get all users
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
        // single user
        builder.addCase(getUser.pending, (state)=>{
            state.isLoading = true;
        });
        builder.addCase(getUser.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.user = action.payload;
            state.error = null;
        });
        builder.addCase(getUser.rejected, (state, action)=>{
            state.isLoading = false;
            state.user = null;
            state.error = action.payload;
        });
    }
});

export default userSlice.reducer;