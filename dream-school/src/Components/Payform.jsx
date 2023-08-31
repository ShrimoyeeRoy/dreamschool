import React, { useState } from "react";
import axios from "axios";

const payformData =  (data) => {
    
        axios.post('http://127.0.0.1:8008/v1/api/payform',data)
            .then((res) => alert(res.data))
            .catch((err) => alert(err.message))
    }



const roll=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50"]


export const Payform=()=> {

    const [pay, setPay] = useState({
        name: "",
        email: "",
        mobileno: "",
        guardian: "",
        standard: "",
        roll: "",
        section: "",
        month: "",
        fees: ""
    });
    
    const handleInput = (e) => {
        const { name, value } = e.target;
        setPay({ ...pay, [name]: value })

    }
    console.log(pay);
    const handlePay = (e) => {
        e.preventDefault();
        payformData(pay)
        setPay({
            name: "",
            email: "",
            mobileno: "",
            guardian: "",
            standard: "",
            roll: "",
            section: "",
            month: "",
            fees: ""
        })
    }
    
    
    
    
    
    
return (
    <>
        <form onSubmit={handlePay} className="row g-3">
                <div className="col-12">
                    <label htmlFor="inputName4" className="form-label">Name</label>
                <input placeholder="Name" type="text" onChange={handleInput} name="name" value={pay.name} className="form-control" id="inputName4"
                         />
                </div>
                <div className="col-12">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input placeholder="abc@gmail.com" type="email" onChange={handleInput} name="email" value={pay.email} className="form-control" id="inputEmail4"
                         />
            </div>
            <div className="col-12">
                <label htmlFor="inputEmail4" className="form-label">Mobile No.</label>
                <input placeholder="1234" type="number" onChange={handleInput} name="mobileno" value={pay.mobileno} className="form-control" id="inputEmail4"
                />
            </div>
            <div className="col-12">
                <label htmlFor="inputName4" className="form-label">Guardian Name</label>
                <input placeholder="Name" type="text" onChange={handleInput} name="guardian" value={pay.guardian} className="form-control" id="inputName4"
                />
            </div>
            <div className="col-12">
                <label htmlFor="inputGender4">Roll</label>
                <select
                    type="input"
                    onChange={handleInput} name="roll" value={pay.roll}
                    className="form-control"
                    aria-label=".form-select-sm example"
                >
                    <option selected>Choose....</option>
                    {roll.map((el) => (
                        <option value={el}>{el}</option>
))}                    
                </select>
            </div>
            <div className="col-12">
                <label htmlFor="inputGender4">Section</label>
                <select
                    type="input"
                    onChange={handleInput} name="section" value={pay.section}
                    className="form-control"
                    aria-label=".form-select-sm example"
                >
                    <option selected>Choose....</option>
                    <option value="Male">A</option>
                    <option value="Female">B</option>
                    <option value="Other">C</option>
                </select>
            </div>
            <div className="col-12">
                <label htmlFor="inputGender4">Month</label>
                <select
                    type="input"
                    onChange={handleInput} name="month" value={pay.month}
                    className="form-control"
                    aria-label=".form-select-sm example"
                >
                    <option selected>Choose....</option>
                    <option value="">January</option>
                    <option value="">February</option>
                    <option value="">March</option>
                    <option value="">April</option>
                    <option value="">May</option>
                    <option value="">June</option>
                    <option value="">July</option>
                    <option value="">August</option>
                    <option value="">September</option>
                    <option value="">October</option>
                    <option value="">November</option>
                    <option value="">December</option>
                </select>
            </div>
            <div className="col-12">
                <label htmlFor="inputName4" className="form-label">Fees</label>
                <input placeholder="Name" type="number" onChange={handleInput} name="fees" value={pay.fees} className="form-control" id="inputName4"
                />
            </div>

                <div className="col-12">
                    <button type="submit" className="btn ">Submit</button>
                </div>
               

            </form>

        </>)
}
    
