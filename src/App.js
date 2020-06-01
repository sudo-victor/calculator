import React from "react";

import GlobalStyle from "./styles/globalStyle";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <GlobalStyle />
            <div className="App">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    );
}

export default App;
