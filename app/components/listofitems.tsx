'use client'
import React, {useState} from "react";
import connectToDB from "@/libs/mongodb";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const App = () => {
    connectToDB();
    const [list, setList] = useState([]);
    const [todo, setToDo] = useState(''); // item in the textbox

    const updateToDo = (value) => {
        setToDo(value);
    };

    const handleAdd = () => {
        if (todo !== "" && todo !=" ") {
            const newToDo = {
                id: Math.random(),
                value: todo,
            };
            setList([...list, newToDo]);
            setToDo(''); // clear input
        }
    };
    return(
        
        <div className="form-container">
            <input 
                placeholder="Add new to-do..."
                className="text-slate-700"
                value={todo}
                onChange={(item)=>updateToDo(item.target.value)}
            />
            <PlusCircleIcon className="size-6" type="button" onClick={handleAdd}/>
            <div className="list-container place-content-center w-20 ">
                <ul>
                    {list.length>0?(
                    list.map((item, index) => (
                    <li key={index} className="
                        text-blue-500 bg-slate-300 
                        flex-auto
                        sticky-top-10
                    ">
                        {item.value}
                    </li>
                ))
                ) : (
                    <p> List Empty</p>
                )}
                </ul>
                </div>
                <div>
           <p>{list.length} items left</p>
            </div>
        </div>
    );
};
export default App;
