"use client"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compete from "../competition/page";
import Detail from "../CompDetail/page";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Compete />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
