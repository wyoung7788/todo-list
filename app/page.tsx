
import Header from "./components/header";
import ListofItems from "./components/listofitems";


export default function Home() {
  return (
        <div className="grid grid-cols-1 justify-center">
            <div className= "justify-center">
                <Header/>
            </div>
            <div>
                <div className="text-center h-dvh grid grid-cols-3 gap-4  bg-slate-50">
                <div>
                    1
                </div>
                <div className="justify-center">
                <ListofItems/>
                </div>
                <div>
                    3
                </div>
            </div>
            </div>
            </div>
        
    )
}


