import {createAsyncThunk} from "@reduxjs/toolkit";
import {userActions} from "../userSlice.tsx";

export const loadUsers = createAsyncThunk('userSlice/loadUsers',
    async (_, thunkAPI) => {
        console.log(_);

        try {

            const users = await fetch('https://jsonplaceholder.typicode.com/users')
                .then(value => value.json());

            thunkAPI.dispatch(userActions.changeLoadState(true))
            return thunkAPI.fulfillWithValue(users);

        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }


    })

export const loadUser = createAsyncThunk('userSlice/loadUser',
    async (id: number, thunkAPI) => {

        try {

            const user = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
                .then(value => value.json());


            return thunkAPI.fulfillWithValue(user);

        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error load user');
        }


    })
