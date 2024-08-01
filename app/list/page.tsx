import { BsPencilSquare } from "react-icons/bs";
import SearchBar from "../components/searchbar";
import AddItem from "../components/additem";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import ListofItems from "../components/listofitems";
import Header from "../components/header";

export default function List(){
    return(
        <div className= "items-center h-10">
            <Header/>
        <div className="text-center ">To-Do's for Today
            <BsPencilSquare className="h-10 w-10" /> 
            <div className="col-span-1">
            <PlusCircleIcon className="h-10"/>
            <SearchBar/>
            </div>
            <ListofItems/>
        </div>
        </div>
    )
}