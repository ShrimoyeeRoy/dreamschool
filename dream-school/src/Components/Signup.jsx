import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router'

const uploadData = async (user) => {
    axios.post('http://127.0.0.1:8008/v1/api/signup', user)
        .then((res) => alert(res.data))
        .catch((err) => alert(err.message))
}
export function Signup() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""

    })

    const [show, setShow] = useState(false)

    const navigate = useNavigate()

    const handleInput = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }


    const handleSign = (e) => {
        e.preventDefault()
        uploadData(user)
        setUser({
            name: "",
            email: "",
            password: ""
        })
        setTimeout(() => {
            navigate("/login")
        }, 1200);

    }



    return (
        <>
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container borderbottom">
                    <h1>Sign Up</h1>
                </div>
            </div>
            
            <form onSubmit={handleSign} className="row g-3  mt-3">
                <div className="col-12">
                    <label htmlFor="inputName4" className="form-label">Name</label>
                    <input placeholder="Name" type="text" className="form-control" id="inputName4"
                        onChange={handleInput} name="name" value={user.name} required />
                </div>
                <div className="col-12">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input placeholder="abc@gmail.com" type="email" className="form-control" id="inputEmail4"
                        onChange={handleInput} name="email" value={user.email} required />
                </div>
                <div className="col-12">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input placeholder="****" type={show ? "text" : "password"} className="form-control" id="inputPassword4"
                        onChange={handleInput} name="password" value={user.password} required />
                    <input
                        type="checkbox" onChange={() => setShow((prev) => !prev)} />{" "}
                    <label id="logshow" htmlFor="inputPassword4" className="form-label" >Show Password

                    </label>
                </div>


                <input id="signup"
                    type="submit" value="Sign Up" className="btn submitbutton" />
                <h6>Already Registered ? <a href="/login"><span className="defaultText">Log In</span></a></h6>

            </form>


        </>)
}