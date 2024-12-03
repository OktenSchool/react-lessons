import './App.css';
import {useEffect} from "react";
import {getUsers} from "./services/user.service.ts";

function App() {

    useEffect(() => {

        getUsers().then((users) => {
            console.log(users);
        })


    }, []);
    return (
        <>

        </>
    );
}

export default App
