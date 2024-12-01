import {FC, useEffect, useState} from "react";
import {IPost} from "../../model/IPost.ts";
import {postServices} from "../../services/api.service.ts";

type PostsTypeProps = {
    userId: string;
}
const PostsComponent: FC<PostsTypeProps> = ({userId}) => {


    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        if (userId) {
            console.log(userId, 'exists');
            postServices
                .getALlPostsOfUserById(+userId)
                .then(value => {
                    console.log(value);
                    setPosts(value);
                });

        }
    }, [userId]);
    return (
        <div>
            {
                posts.map(value => <div key={value.id}>{value.title}</div>)


            }
        </div>
    );
};

export default PostsComponent;
