import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export const Login = () => {
    const navigate = useNavigate()
    const [luser, setLuser] = useState({
        email: "",
        password: ""
    })
    const [show, setShow] = useState(false)
    const handleInput = (e) => {
        const { name, value } = e.target;
        setLuser({ ...luser, [name]: value })
    }
    const handleSubmitLog = (e) => {
        e.preventDefault()
        logFunc(luser)
    }

    const logFunc = async (data) => {
        try {
            let res = await axios.post("http://127.0.0.1:8008/v1/api/login", data)
            alert(res.data.message)
            localStorage.setItem("Token", (res.data.User))
            setTimeout(() => {
                navigate("/")
            }, 1000)
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>

            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container borderbottom">
                    <h2>Log In</h2>
                </div>
            </div>
            <form className="row g-3 mt-3" onSubmit={handleSubmitLog}>
                <div className="col-12">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input
                        onChange={handleInput} name="email" value={luser.email}
                        placeholder="abc@gmail.com" type="email" className="form-control" id="inputEmail4" required />
                </div>
                <div className="col-12">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input onChange={handleInput} name="password" value={luser.password} placeholder="****" minLength={8} type={show ? "text" : "password"} className="form-control" id="inputPassword4" required />
                    <input
                        type="checkbox" onChange={() => setShow((prev) => !prev)} />{" "}
                    <label id="logshow" htmlFor="inputPassword4" className="form-label" >Show Password

                    </label>
                </div>
                <input id="login"
                    type="submit" value="Log In" className="btn submitbutton " />
                <h6> Don't have an account? <a href="/signup"><span className="defaultText">Sign Up</span></a></h6>


            </form>
        </>)
}