'use client'
import React, {useState} from "react";
import connectToDB from "@/libs/mongodb";
import { PlusCircleIcon, PencilIcon} from "@heroicons/react/24/outline";


type ToDoItem = {
    id: number;
    value: string;
    completed: boolean;
};

const App = () => {
    connectToDB();

    const [list, setList] = useState<ToDoItem[]>([]);
    const [todo, setToDo] = useState<string>(''); // item in the textbox
    const [edit, setEdit] = useState<boolean>(false);
    const [newToDo, setNewToDo] = useState<string>('');
    const [editId, setEditId] = useState<number | null>(null);

    let editMode = {};
    let viewMode = {};
    if (edit && editId !== null){
        viewMode = {display: 'none'};
    } else{
        editMode = {display: 'none'};
    }

    const updateToDo = (value: string) => {
        setToDo(value);
    };
    const handleAdd = () => {
        if (todo.trim() !== "") {
            const newToDoItem: ToDoItem = {
                id: Math.random(),
                value: todo,
                completed: false
            };
            setList([...list, newToDoItem]);
            setToDo(''); // clear input
        }
    };
    const handleEdit = (id: number, value: string) => {
        //set edit to true if it is false otherwise turn off edit
        setEdit(true);
        setEditId(id);
        setNewToDo(value);
    };
    const setnewToDo = () => {
        const updatedList = list.map((e) => {
            if (e.id === editId) {
                return { ...e, value: newToDo };
            }
            return e;
        });
        setList(updatedList);
        setEdit(false);
        setEditId(null);
        setNewToDo('');
    };

    const handleDelete = (id: number) => {
        const filter = list.filter((e) => e.id !== id);
        setList(filter);
    }

    const handleCompleted = (id: number) => {
        const updatedList = list.map((e) => {
            if (e.id === id) {
                return { ...e, completed: !e.completed };
            }
            return e;
        });
        setList(updatedList);
    };
        
    return(
        <div className="place-content-center">
            <span className="inline-grid grid-cols-2 gap-4">
            <span>
            <input 
                placeholder="Add new to-do..."
                className="text-slate-700"
                value={todo}
                onChange={(e)=>updateToDo(e.target.value)}
            />
            </span>
            <span>
            <PlusCircleIcon className="size-6" type="button" onClick={handleAdd}/>
            </span>
            </span>
            <div className="list-container place-content-center w-20 ">
                <ul>
                    {list.length > 0? (
                    list.map((e) => (
                    <li key ={e.id} className="text-slate-500 flex-auto items-center">
                    {edit && editId === e.id ? (
                        <>
                        <input 
                            type="text"
                            className="text-blue-500
                            flex-auto
                            sticky-top-10"
                            value = {newToDo}
                            onChange={(e)=>
                            setNewToDo(e.target.value)}
                            style = {editMode}
                            />
                        <button type="button" onClick={setnewToDo}>Save Change</button>
                        </>
                        ):(
                            <>
                            <span className={`pl-3 ${e.completed? 'line-through':''}`}style={viewMode}>{e.value}</span>
                            <PencilIcon 
                                className="h-5 w-5 cursor-pointer" 
                                type="button" 
                                onClick={()=>handleEdit(e.id, e.value)}
                            />
                            <button type="button" onClick={() => handleDelete(e.id)}>Delete</button>
                            <button type="button" onClick={() => handleCompleted(e.id)}>
                                {e.completed ? 'Undo' : 'Complete'}
                            </button>
                            </>
                        )}
                        </li>
                    ))
                ) : (
                    <div className="text-center h-dvh ">
                    <p> List Empty</p>
                    </div>
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
