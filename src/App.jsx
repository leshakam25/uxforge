import './App.css'
import "normalize.css"
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/homepage/homepage.jsx";
import Header from "./shared/header/header.jsx";


function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/homepage" element={<Homepage/>}/>
            </Routes>
        </>
    )
}

export default App
