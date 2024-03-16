import { useCallback, useEffect, useRef, useState } from "react"

function App() {

  const [length,setlength]= useState(8);
  const [isNumberAllowed , setisNumberAllowed] = useState(true);
  const [ischarAllowed , setischarAllowed] =useState(true);
  const [password , setpassword] =useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>
  {
    let pass="";
    let str="ABCDEFGHIJKLMNOPQSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if(isNumberAllowed) str+="0123456789";
    if(ischarAllowed) str+="!@#$%^&*+-_=[]{}~`";

    for (let i=0;i<length;i++)
    {
      let charind=Math.floor(Math.random() * str.length+1);
      pass+=str.charAt(charind);
    }
    setpassword(pass);
  }
  ,[ length, isNumberAllowed, ischarAllowed, setpassword]); //for optimization

  const copyToclipboard =useCallback( ()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  } , [password])
  
  useEffect( () =>{ 
    passwordGenerator();

  },[length, isNumberAllowed, ischarAllowed, passwordGenerator]);


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md
                      rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 ">    
        <h1 className="text-4xl text-center my-3">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
            type="text"
            placeholder="password"
            value={password}
            className="outline-none w-full py-1 px-3"
            readOnly
            ref={passwordRef}
          />
          <button onClick= {copyToclipboard}
                  className=" outline-none bg-blue-700 text-white 
                              px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range" 
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {setlength(e.target.value) }}
            />
            <label>Length :{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input 
            type="checkbox" 
            defaultChecked={isNumberAllowed}
            id="numberInput"
            className="cursor-pointer"
            onChange={
              ()=>{
                setisNumberAllowed( (prev) => !prev);
              }
            }
            />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input 
            type="checkbox" 
            defaultChecked={ischarAllowed}
            id="charInput"
            className="cursor-pointer"
            onChange={
              ()=>{
                setischarAllowed((prev) => !prev);
              }
            }
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
