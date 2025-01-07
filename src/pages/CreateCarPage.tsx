import {useForm} from "react-hook-form";
import {ICar} from "../models/ICar.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../valiadtors/carValidator.ts";
import {saveCar} from "../services/car.service.api.ts";

export const CreateCarPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<ICar>({mode: 'all', resolver: joiResolver(carValidator)});
    const saveCarHandler = (data: ICar) => {
        saveCar(data);

    };
    return (
        <>

            <form onSubmit={handleSubmit(saveCarHandler)}>
                <div><input type="text" {...register('brand')}/>
                    <div>{errors.brand?.message}</div>
                </div>
                <div><input type="text" {...register('price')}/>
                    <div>{errors.price?.message}</div>
                </div>
                <div><input type="text" {...register('year')}/>
                    <div>{errors.year?.message}</div>
                </div>
                <button>save car</button>

            </form>

        </>
    );
};
