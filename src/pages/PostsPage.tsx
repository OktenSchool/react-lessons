import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {postAction} from "../redux/slices/PostSlice.ts";

export const PostsPage = () => {

    const dispatch = useAppDispatch();
    const posts = useAppSelector(state => state.postStoreSlice.posts);
    useEffect(() => {
        dispatch(postAction.loadPosts())
    },[]);
    return (
        <>
            {posts.map((post) => (<div key={post.id}>{post.title}</div>))}

        </>
    );
};
