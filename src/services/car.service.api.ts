import {ICar} from "../models/ICar.ts";
import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL;


const axiosInstance = axios.create({
    baseURL: baseUrl,


});

export const getAllCars = async (): Promise<ICar[]> => {
    const axiosResponse = await axiosInstance.get<ICar[]>('/cars');
    const cars = axiosResponse.data;
    return cars;
}

export const saveCar = async (car: ICar): Promise<void> => {

    try {
        const axiosResponse = await axiosInstance.post('/cars', car);

        console.log(axiosResponse);

    } catch (error) {
        console.log(error);
    }

}
