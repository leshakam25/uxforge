import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createTheme, ThemeProvider} from "@mui/material"
import {BrowserRouter} from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFD050'
        },
        secondary:{
            main: "#232536"
        },
        info:{
            main: "#592EA9"
        },
        grey:{
            main: "#4C4C4C"
        },
        warning:{
            main:"#6D6E76"
        }
    },
    typography: {
        fontFamily: "Comfortaa",

        // В макете subtitle1 - это "Display"
        subtitle1: {
            fontWeight: 800,
            fontSize: 56,
            lineHeight: "64px"
        },

        // В макете subtitle2 - это "Label"
        subtitle2: {
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px"
        },
        h1: {
            fontWeight: 800,
            fontSize: 48,
            lineHeight: "64px"
        },
        h2: {
            fontWeight: 800,
            fontSize: 36,
            lineHeight: "48px"
        },
        h3: {
            fontWeight: 800,
            fontSize: 28,
            lineHeight: "36px"
        },
        h4: {
            fontWeight: 800,
            fontSize: 24,
            lineHeight: "32px"
        },
        h5: {
            fontWeight: 800,
            fontSize: 20,
            lineHeight: "32px"
        },
        h6: {
            fontWeight: 800,
            fontSize: 16,
            lineHeight: "24px"
        },
        body1: {
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "28px"
        },
        body2: {
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px"
        },

    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
)
