import {IUser} from "../model/IUser.ts";
import axios from "axios";


// export const getUsers = async (): Promise<IUser[]> => {
//
//     return await fetch('https://jsonplaceholder.typicode.com/users')
//         .then(value => value.json());
//
//
// }


const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    // headers: {'Content-Type': 'application/json'}
});


export const getUsers = async (): Promise<IUser[]> => {
    const {data} = await axiosInstance.get<IUser[]>('/users');
    return data;
}

axiosInstance.interceptors.request.use((request) => {
    console.log(request);
    request.headers.set('Content-Type', 'application/json');
    return request;
})

