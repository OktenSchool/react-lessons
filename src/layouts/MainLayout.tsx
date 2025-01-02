import './App.css';
import {Outlet} from "react-router";

function MainLayout() {


    return (
        <>
            main page
            <Outlet/>
        </>
    );
}

export default MainLayout
