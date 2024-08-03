
import Header from "./components/header";
import ListofItems from "./components/listofitems";


export default function Home() {
  return (
    <div className="bg-red-200 py-3.5 text-xl font-sans text-center text-fuchsia-400"> 
        <h1 className="rounded-sm font-extrabold text-4xl">
        TO DO
        </h1>
        <div className= "items-center h-10">
            <Header/>
            <ListofItems/>
            <main>
            
        </main>
        </div>
        </div>
    )
}


