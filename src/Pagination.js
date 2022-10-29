import { useState } from "react";

export default function Pagination({data}){

    const [limit] = useState(10);
    const [page, setPage] = useState(1);

    const todos = data.slice(((page*limit)-limit), (page*limit))

    return (
        <>
            {
                todos.map((todo) => {
                    return (<p>{todo.id} - {todo.title}</p>)
                })
            }
        </>
    )
}