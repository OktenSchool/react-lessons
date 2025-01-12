import {configureStore, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../models/IUser.ts";
import {IPost} from "../models/IPost.ts";
import {IComment} from "../models/IComment.ts";
import {useDispatch, useSelector} from "react-redux";

type UserSliceType = {
    users: IUser[]
};
type PostSliceType = {
    posts: IPost[];
};
type CommentSliceType = {
    comments: IComment[];
};

const initialStateUserSlice: UserSliceType = {users: []};
const initialStatePostSlice: PostSliceType = {posts: []};
const initialStateCommentSlice: CommentSliceType = {comments: []};

const loadUsers = createAsyncThunk("loadUsers", async (_, thunkAPI) => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    return thunkAPI.fulfillWithValue(users);


});
const loadPosts = createAsyncThunk("loadPosts", async (_, thunkAPI) => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());

    thunkAPI.fulfillWithValue(posts);


});
const loadComments = createAsyncThunk("loadComments", async (_, thunkAPI) => {
    const comments = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    thunkAPI.fulfillWithValue(comments);

});

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialStateUserSlice,
    reducers: {},
    extraReducers: builder => builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        state.users = action.payload;
    })
});
export const userActions = {
    ...userSlice.actions, loadUsers
}

const postSlice = createSlice({
    name: 'postSlice',
    initialState: initialStatePostSlice,
    reducers: {}
});
export const postActions = {...postSlice.actions, loadPosts}
const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: initialStateCommentSlice,
    reducers: {}
});
export const commentsActions = {...commentSlice.actions, loadComments}


export const store = configureStore({
    reducer: {
        userStoreSlice: userSlice.reducer,
        postStoreSlice: postSlice.reducer,
        commentStoreSlice: commentSlice.reducer,
    }
});


export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();
