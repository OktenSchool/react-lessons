import {IUser} from "../model/IUser.ts";
import {urls} from "../constants/urls.ts";
import {IPost} from "../model/IPost.ts";


export const userService = {
    getUsers: async (): Promise<IUser[]> => {
        return await fetch(urls.users.allUsers)
            .then(value => value.json())

    },
    getUser: async (id: number) => {
        return await fetch(urls.users.byId(id))
            .then(value => value.json());

    }
}

export const postServices = {
    getALlPostsOfUserById: async (id: number): Promise<IPost[]> => {
        return await fetch(urls.posts.userPostsById(id))
            .then(value => value.json())


    }
}
