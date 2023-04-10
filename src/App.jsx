import './App.css'
import "normalize.css"
import Header from "./components/shared/header/header.jsx";
import {Route, Routes} from "react-router-dom";
import Homepage from "./components/pages/homepage/homepage.jsx";

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
