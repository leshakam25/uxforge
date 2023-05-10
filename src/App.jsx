import './App.css'
import "normalize.css"
import {Route, Routes} from "react-router-dom";
import Homepage from "./modules/homepage/homepage.jsx";
import Header from "./shared/modules/header/header.jsx";
import Footer from "./shared/modules/footer/footer.jsx";
import Services from "./modules/services/services.jsx";
import Portfolio from "./modules/portfolio/portfolio.jsx";
import Contacts from "./modules/contacts/contacts.jsx";
import Prices from "./modules/prices/prices.jsx";
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
