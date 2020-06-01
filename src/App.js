import React from "react";

import GlobalStyle from "./styles/globalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <GlobalStyle />
            <div className="App">
                <Header />
                <Footer />
            </div>
        </>
    );
}

export default App;
