import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {commentActions} from "../redux/slices/CommentSlice.ts";
import {IComment} from "../models/IComment.ts";

export const CommentsPage = () => {

    const dispatch = useAppDispatch();
    const commenst = useAppSelector(state => state.commnetStoreSlice.comments);
    useEffect(() => {
        dispatch(commentActions.loadComments());
    }, []);
    return (
        <>
            {commenst.map((comment: IComment) => (<div key={comment.id}> {comment.name}</div>))}</>
    );
};
