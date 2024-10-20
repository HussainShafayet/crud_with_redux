import {configureStore} from "@reduxjs/toolkit";
import postReducer from "./slice/postSlice";
import userReducer from "./slice/userSlice";

const store = configureStore({
    reducer:{
        post: postReducer,
        user: userReducer,
    }
});

export default store;