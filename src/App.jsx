import { useEffect, useState } from "react"
import { ThemeProvider } from "./context/Theme"
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'



function App() {
    const [themeMode,setThemeMode]=useState('light')

    const darkTheme = ()=>{
        setThemeMode('dark')
    }

    const lightTheme = () =>{
        setThemeMode('light')
    }

    useEffect(()=>{
        document.querySelector('html').classList.remove('light','dark')
        document.querySelector('html').classList.add(themeMode)
    },[themeMode])

    return (
        <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>

        <div className="w-full h-screen flex flex-wrap justify-center items-center flex-col ">
        <div >
          <ThemeBtn />
        </div >
        <div className="w-1/3 ">
          <Card />
        </div>
      </div>
        </ThemeProvider>
)
}

export default App