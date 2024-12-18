import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {userActions} from "../redux/slices/userSlice.tsx";
import {useEffect} from "react";

export const UsersPage = () => {

    const {isLoaded, users} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers())

    }, []);


    return (
        <div>
            <br/>

            {
                isLoaded ? <>{users.map((user) => <div key={user.id}>{user.name}</div>)}</> : <div>loading</div>
            }

        </div>
    );
};
