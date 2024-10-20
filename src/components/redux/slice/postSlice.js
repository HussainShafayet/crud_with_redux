import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    isLoading: false,
    posts: [],
    error: null,
    post: null,
}

export const getAllPosts = createAsyncThunk("post/getAllPosts", async ()=>{
    const res = await axios.get("https://dummyjson.com/posts");
    //console.log(res, 'res');
    return res.data.posts;
})

//get single post
export const getPost = createAsyncThunk("post/getPost", async (id)=>{
    const res = await axios.get(`https://dummyjson.com/posts/${id}`);
    //console.log(res, 'res');
    return res.data;
})
//sigle post delete
export const postDelete = createAsyncThunk("post/postDelete", async (id)=>{
    await axios.delete(`https://dummyjson.com/posts/${id}`);
    return id;
})

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{

        //all post get
        builder.addCase(getAllPosts.pending, (state, action)=>{
            state.isLoading = true;
        });
        builder.addCase(getAllPosts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.posts = action.payload;
            state.error = null;
        })
        builder.addCase(getAllPosts.rejected, (state, action)=>{
            state.isLoading = false;
            state.posts = [];
            state.error = action.payload.message;
        })


        //view post
        builder.addCase(getPost.pending, (state, action)=>{
            state.isLoading = true;
        })
        builder.addCase(getPost.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.post = action.payload;
            state.error = null;
        })
        builder.addCase(getPost.rejected, (state, action)=>{
            state.isLoading = false;
            state.post = {};
            state.error = action.error.message;
        })


        //delete post
        builder.addCase(postDelete.pending, (state, action)=>{
            state.isLoading = true;
        })
        builder.addCase(postDelete.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.posts = state.posts.filter((post)=> post.id !== action.payload);
            state.error = null;
        })
        builder.addCase(postDelete.rejected, (state, action)=>{
            state.isLoading = false;
            state.post = null;
            state.error = action.error.message;
        })
    }
})

export default postSlice.reducer;