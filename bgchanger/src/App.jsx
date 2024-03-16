import { useState } from "react"

function App() {
  
  const [color,setcolor] = useState("Olive");
  return (
    <>
      <div 
      className="w-full h-screen duration-200" 
      style={{backgroundColor:color}}>
          <div
            className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">             
            <div
              className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
              <button onClick={()=> setcolor("red")}
                className ="outline-none px-4 py-1 rounded-3xl shadow-lg"
                style ={{backgroundColor : "red"}}>
                  Red
              </button>
              <button onClick={()=> setcolor("green")}
                className ="outline-none px-4 py-1 rounded-3xl shadow-lg"
                style ={{backgroundColor : "green"}}>
                  Green
              </button>
              <button onClick={()=> setcolor("blue")}
                className ="outline-none px-4 py-1 rounded-3xl shadow-lg"
                style ={{backgroundColor : "blue"}}>
                  Blue
              </button>
              <button onClick={()=> setcolor("Olive")}
                className ="outline-none px-4 py-1 rounded-3xl shadow-lg"
                style ={{backgroundColor : "Olive"}}>
                  Olive
              </button>
              <button onClick={()=> setcolor("grey")}
                className ="outline-none px-4 py-1 rounded-3xl shadow-lg"
                style ={{backgroundColor : "grey"}}>
                  Grey
              </button>
              <button onClick={()=> setcolor("Yellow")}
                className ="outline-none px-4 py-1 rounded-3xl shadow-lg"
                style ={{backgroundColor : "Yellow"}}>
                  Yellow
              </button>
              <button onClick={()=> setcolor("pink")}
                className ="outline-none px-4 py-1 rounded-3xl shadow-lg"
                style ={{backgroundColor : "pink"}}>
                  Pink
              </button>
            </div>
          </div>
      </div>
    </>
  );
}

export default App
