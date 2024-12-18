import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {userActions} from "../redux/slices/userSlice.tsx";

export const UsersPage = () => {

    const {isLoaded} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();


    return (
        <div>
            Users page {isLoaded.toString()}

            <button onClick={() => {
                setTimeout(() => {
                    dispatch(userActions.changeLoadState(true));
                },2000)
            }}>chane load state
            </button>


        </div>
    );
};
