import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {userActions} from "../redux/slices/userSlice.tsx";

export const UserPage = () => {
    const {id} = useParams();

    const dispatch = useAppDispatch();
    const {userSlice: {user}} = useAppSelector(state => state);
    useEffect(() => {
        if (id) {
            dispatch(userActions.loadUser(+id));
        }
    }, [id]);


    return (
        <div>
            {user && <div>{user.name}</div>}
        </div>
    );
};
