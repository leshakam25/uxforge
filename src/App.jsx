import './App.css'
import "normalize.css"
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/homepage/homepage.jsx";
import Header from "./shared/header/header.jsx";
import Footer from "./shared/footer/footer.jsx";
import Services from "./pages/services/services.jsx";


function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/homepage" element={<Homepage/>}/>
                <Route path="/services" element={<Services/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
