import './App.css';
import {Outlet} from "react-router";
import {useEffect} from "react";
import {getAllCars} from "./services/car.service.api.ts";

function App() {

    useEffect(() => {
        getAllCars().then(value => console.log(value))
    }, []);

    return (
        <>
            <Outlet/>
        </>
    );
}

export default App
