import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { Contactus } from "./Components/Contactus";
import { About } from "./Components/About";
import { Admission } from "./Components/Admission";
import { Notice } from "./Components/Notice";
import { Gallery } from "./Components/Gallery";
import {  Signup } from "./Components/Signup";
import { Login } from "./Components/Login";
import { Payform } from "./Components/Payform";
import { Payment } from "./Components/Payment";



export function AllRoutes() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"/about"} element={<About />}></Route>
                <Route path={"/admission"} element={<Admission/>}></Route>
                <Route path={"/notice"} element={<Notice />}></Route>
                <Route path={"/contact_us"} element={<Contactus/>}></Route>
                <Route path={"/gallery"} element={<Gallery />}></Route>
                <Route path={"/payform"} element={<Payform />}></Route>
                <Route path={"/signup"} element={<Signup />}></Route>
                <Route path={"/login"} element={<Login />}></Route>
                <Route path={"/payment"} element={<Payment />}></Route>
            </Routes>
        </>)

}