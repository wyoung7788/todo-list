
import Header from "./components/header";
import ListofItems from "./components/listofitems";


export default function Home() {
  return (
   
        <div className= "items-center h-10">
            <Header/>
            <div className="pl-10 bg-slate-50">
            <ListofItems/>
            </div>
            <main>
            
        </main>
        </div>
    )
}


