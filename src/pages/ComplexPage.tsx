import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../redux/slices/UserSlice.ts";
import {postAction} from "../redux/slices/PostSlice.ts";
import {commentActions} from "../redux/slices/CommentSlice.ts";

export const ComplexPage = () => {

    const dispatch = useAppDispatch();
    const {commnetStoreSlice: {comments}, userStoreSlice: {users}, postStoreSlice: {posts}} = useAppSelector(state => state);

    useEffect(() => {
        if (!users.length) {
            dispatch(userActions.loadUsers());
        }
        if (!posts.length) {
            dispatch(postAction.loadPosts());
        }
        if (!comments.length) {
            dispatch(commentActions.loadComments());
        }


    }, [])
    return (
        <>


        </>
    );
};
