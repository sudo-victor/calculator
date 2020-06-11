import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import GlobalStyle from "./styles/globalStyle";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <div className="App">
                <Header />
                <Main />
                <Footer />
            </div>
        </Provider>
    );
}

export default App;
