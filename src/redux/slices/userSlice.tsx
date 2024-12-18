import {IUser} from "../../models/IUser.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type UserSliceType = {
    users: IUser[],
    user: IUser | null,
    isLoaded: boolean
}

const userInitState: UserSliceType = {
    users: [],
    user: null,
    isLoaded: false
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: userInitState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload;
        }
    }

});

export const userActions= {
    ...userSlice.actions
}
