import {useEffect, useState} from "react";
import {ITodo} from "../models/ITodo.ts";
import {Todo} from "./todo/Todo.tsx";
import {getAllTodos} from "../services/api.serrvice.ts";

export const Todos = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {

        getAllTodos().then(({todos}) => setTodos(todos))
    }, []);
    return (
        <>
            {
                todos.map(todo => <Todo key={todo.id} item={todo}/>)
            }
        </>
    );
};
