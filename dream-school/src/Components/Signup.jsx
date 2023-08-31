import React, { useState } from "react";
import axios from "axios";

const uploadData = async (user) => {
    axios.post('http://127.0.0.1:8008/v1/api/signup', user)
        .then((res) => alert(res.data))
        .catch((err)=>alert(err.message))
}
export function Signup() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
        
    })
    const [show, setShow] = useState(false)
    const handleInput = (e) => {
        const { name, value } = e.target 
        setUser({...user,[name]:value})
    }
    

    const handleSign = (e) => {
        e.preventDefault()
           uploadData(user)
        setUser({
            name: "",
            email: "",
            password: ""
        })
       
    }
    

    
    return (
        <>
            <form onSubmit={handleSign} className="row g-3">
                <div className="col-12">
                    <label htmlFor="inputName4" className="form-label">Name</label>
                    <input placeholder="Name" type="text" className="form-control" id="inputName4"
                        onChange={handleInput} name="name" value={user.name} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input placeholder="abc@gmail.com" type="email" className="form-control" id="inputEmail4"
                        onChange={handleInput} name="email" value={user.email}                    />
                </div>
                <div className="col-12">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input placeholder="****" type={show ? "text" : "password"} className="form-control" id="inputPassword4"
                        onChange={handleInput} name="password" value={user.password} />
                    <label id="show" htmlFor="inputPassword4" className="form-label">Show Password
                        <input
                            type="checkbox" onChange={() => setShow(prev => !prev)} />
                    </label>
                </div>
                
                <div className="col-12">
                    <button type="submit" className="btn ">Sign Up</button>
                </div>
                <h6>Already Registered ? <a href="/login"><span style={{color:"yellow"}}>Log In</span></a></h6>

            </form>

        </>)
}