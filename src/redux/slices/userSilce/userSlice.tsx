import {IUser} from "../../models/IUser.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loadUser, loadUsers} from "./asyncThunk/user.async.actions.ts";


type UserSliceType = {
    users: IUser[],
    user: IUser | null,
    isLoaded: boolean,
    message: string | undefined;
}

const userInitState: UserSliceType = {
    users: [],
    user: null,
    isLoaded: false,
    message: ''
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: userInitState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload;
        },

    },
    extraReducers: (builder) =>
        builder
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                // state.isLoaded = true;
            })
            .addCase(loadUsers.rejected, (state, action: PayloadAction<string>) => {
                state.message = action.payload;

            })
            .addCase(loadUser.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.user = action.payload
            })

});

export const userActions = {
    ...userSlice.actions, loadUsers, loadUser
}
