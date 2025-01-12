import {commentsActions, postActions, useAppDispatch, useAppSelector, userActions} from "../redux/store.ts";
import {useEffect} from "react";

export const ComplexPage = () => {

    const dispatch = useAppDispatch();
    const selector = useAppSelector(state => state);
    useEffect(() => {
        if (!selector.userStoreSlice.users.length) {
            dispatch(userActions.loadUsers());
        }
        if (!selector.postStoreSlice.posts.length) {
            dispatch(postActions.loadPosts());
        }
        if (!selector.commentStoreSlice.comments.length) {
            dispatch(commentsActions.loadComments());
        }


    }, [])
    return (
        <>

            {
                selector.userStoreSlice.users.map(user => (<div>{user.name}</div>))
            }
        </>
    );
};
