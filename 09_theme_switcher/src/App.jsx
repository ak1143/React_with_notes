import { useEffect, useState } from 'react'
import './App.css'
import { ThemeContextProvider } from './context/Theme'
import ThemeBtn from './Components/Themebtn';
import Card from './Components/Card'

function App() {

    const [themeMode,SetThemeMode]=useState("light");

    const darkMode=()=>{
        SetThemeMode("dark");
    }

    const lightMode=()=>{
        SetThemeMode("light");
    }

    useEffect(()=>{
        document.querySelector('html').classList.remove("light","dark");
        document.querySelector('html').classList.add(themeMode);
    },[themeMode]);

    return (
        <ThemeContextProvider value= {{themeMode,darkMode,lightMode}} >

            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>
                    <div className="w-full max-w-sm mx-auto">
                        <Card />
                    </div>
                </div>
            </div>

        </ThemeContextProvider>
    )
  }

export default App
