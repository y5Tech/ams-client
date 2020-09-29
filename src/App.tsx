import React from 'react';
import Routers from "./router/index"
import LanguageProvider from "./lang";
import  './assets/css/global.scss'



function App() {
    return (
        <>
            <LanguageProvider>
                <Routers/>
            </LanguageProvider>
        </>
    );
}

export default App
