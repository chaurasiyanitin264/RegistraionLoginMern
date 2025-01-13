import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Dashboard from "./pages/DashBoard";
import ResetPassword from "./pages/ResetPassword";
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />} >
                    <Route index element={<Home/>} />
                    <Route path="home" element={<Home/>} />
                    <Route path="registration" element={<Registration/>} />
                    <Route path="dashboard" element={<Dashboard/>} >
                    <Route path="repass" element={<ResetPassword/>} />
                    </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;