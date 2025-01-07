import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import App from "./App.tsx";
import {CarsPage} from "./pages/CarsPage.tsx";
import {CreateCarPage} from "./pages/CreateCarPage.tsx";


const routes = createBrowserRouter([{
    path: "/", element: <App/>, children: [
        {
            path: 'cars', element: <CarsPage/>
        },
        {
            path: 'cars/create', element: <CreateCarPage/>
        }
    ]
}]);
createRoot(document.getElementById('root')!).render(<RouterProvider router={routes}/>);
