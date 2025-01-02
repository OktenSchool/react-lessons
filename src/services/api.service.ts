import {IUsersResponse} from "../models/IUsersResponse.ts";

const url = 'https://dummyjson.com';

export const getUsers = async (page: string): Promise<IUsersResponse> => {
    const limit = 30;
    const skip = limit * (+page) - limit;
    const response = await fetch(url + '/users' + '?skip=' + skip)
        .then(value => value.json());

    return response;

}
