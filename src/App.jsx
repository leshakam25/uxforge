import './App.css'
import "normalize.css"
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/homepage/homepage.jsx";
import Header from "./shared/header/header.jsx";
import Footer from "./shared/footer/footer.jsx";
import Services from "./pages/services/services.jsx";
import Portfolio from "./pages/portfolio/portfolio.jsx";
import Contacts from "./pages/contacts/contacts.jsx";
import Prices from "./pages/prices/prices.jsx";
import Box from "@mui/material/Box";


function App() {

    return (
        <Box>
            <Header/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/homepage" element={<Homepage/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/prices" element={<Prices/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
            <Footer/>
        </Box>
    )
}

export default App
