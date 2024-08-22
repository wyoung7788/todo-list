
import Header from "../components/header";
import ListofItems from "../components/listofitems";
import Background from "../components/background";
import LogOut from "../components/logout";
export default function Home() {
  return (
        <div className="relative grid grid-cols-1  justify-center">
            <div className= "justify-right place-content-end">
            <LogOut/>
            </div>
            <Background/>
            <div className="relative z-10 bg-slate-400">
                <Header/>
            </div>
            <div className="relative z-10">
                <div className="text-center grid grid-cols-3 gap-4  bg-slate-50">
                <div>metrics
                    longest uncompleted todo:
                    current average:
                    graph 
                </div>
                <div className="justify-center">
                <ListofItems/>
                </div>
                <div>completed todos</div>
            </div>
            
            </div>
            </div>
        
    )
}


