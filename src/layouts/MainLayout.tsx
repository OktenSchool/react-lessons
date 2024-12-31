import {Outlet} from "react-router";
import {MenuConponent} from "../components/menu/MenuConponent.tsx";

export const MainLayout = () => {
    return <div>
        <MenuConponent/>
        <Outlet/>
    </div>
};
