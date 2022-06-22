import { configureStore } from "@reduxjs/toolkit";
import PostReducer from './Features/postSlice';

export default configureStore({
    reducer: {
        app: PostReducer
    }
});

