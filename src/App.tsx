import React, {useState} from 'react';
import Routers from "./router/index"
import LanguageProvider from "./lang";
import  './assets/css/global.scss'
/* Define your translations */

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
