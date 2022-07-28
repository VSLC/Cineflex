import InitialScreen from "./initialscreen/InitialScreen"
import SecondScreen from "./secondscreen/SecondScreen"
import ThirdScreen from "./thirdscreen/ThirdScreen"
import FourthScreen from "./fourthscreen/FourthScreen"
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