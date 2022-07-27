import InitialScreen from "./InitialScreen"
import SecondScreen from "./SecondScreen"
import ThirdScreen from "./ThirdScreen"
import FourthScreen from "./FourthScreen"
import Header from "./Header"

import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<InitialScreen />} />
                    <Route path="/sessoes/:idFilme" element={<SecondScreen />} />
                    <Route path="/assentos/:idSessao" element={<ThirdScreen />} />
                    <Route path="/sucess" element={<FourthScreen />} />
                </Routes>

            </BrowserRouter>
        </>
    );
}

export default App