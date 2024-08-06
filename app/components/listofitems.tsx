'use client'
import React, {useState} from "react";
import connectToDB from "@/libs/mongodb";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/16/solid";

const App = () => {
    connectToDB();
    const [list, setList] = useState([]);
    const [todo, setToDo] = useState(''); // item in the textbox
    const [edit, setEdit] = useState(false);
    const [newToDo, setnewToDo] = useState('');
    const [editId, setEditId] = useState(null);

    let editMode = {};
    let viewMode = {};
    if (edit){
        viewMode.display = 'none';
    } else{
        editMode.display = 'none';
    }

    const updateToDo = (value) => {
        setToDo(value);
    };
    const handleAdd = () => {
        if (todo.trim() !== "") {
            const newToDoItem = {
                id: Math.random(),
                value: todo,
            };
            setList([...list, newToDoItem]);
            setToDo(''); // clear input
        }
    };
    const handleEdit = (id, value) => {
        //set edit to true if it is false otherwise turn off edit
        setEdit(true)
        setEditId(id);
        setNewToDo(value);
    };
    const setNewToDo = () => {
        const updatedList = list.map((item) =>
            item.id === editId ? {...item, value: newToDo} : item
        );
        setList(updatedList);
        setEdit(false);
        setEditId(null);
        setnewToDo('');
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
                    {list.length > 0? (
                    list.map((item) => (
                    <li key ={item.id} className="flex items-center">
                    {edit ? (
                        <>
                        <input 
                            type="text"
                            className="text-blue-500
                            flex-auto
                            sticky-top-10 {styles.textInput}"
                            value = {newToDo}
                            onChange={(e)=>
                            setnewToDo(e.target.value)}
                            style = {editMode}
                            />
                        <button type="button" onClick={setnewToDo}>Save Change</button>
                        </>
                        ):(
                            <>
                            <span className="pl-3"style={viewMode}>{item.value}</span>
                            <PencilSquareIcon 
                                className="size-5" 
                                type="button" 
                                onClick={()=>handleEdit(item.id, item.value)}
                            />
                            </>
                        )}
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
