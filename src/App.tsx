import React, {useState} from 'react';
import Routers from "./router/index"
import LanguageProvider from "./lang";
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
