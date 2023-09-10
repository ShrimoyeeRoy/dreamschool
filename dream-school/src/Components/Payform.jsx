import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const payformData = (data) => {

    axios.post('http://127.0.0.1:8008/v1/api/payform', data)
        .then((res) => alert(res.data))
        .catch((err) => alert(err.message))
}



const roll = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50"]


export const Payform = () => {

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
    const navigate = useNavigate()
    const handleInput = (e) => {
        const { name, value } = e.target;
        setPay({ ...pay, [name]: value })

    }
    console.log(pay);
    const handlePay = (e) => {
        e.preventDefault();
        payformData(pay)
        //console.log(pay)
        setPay({
            name: "",
            email: "",
            mobileno: "",
            guardian: "",
            standard: "",
            roll: "",
            section: "",
            month: "",
            fees: ''
        })
        setTimeout(() => {
            navigate("/payment")
        }, 1200);
    }

    let standard = []
    for (let i = 1; i <= 12; i++) {
        standard.push(i)
    }
    return (
        <>
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container borderbottom ">
                    <h2>Payment</h2>

                </div>
            </div>


            <div className="form-wrapper">


                <form onSubmit={handlePay} className="row g-3 ">
                    <div className="col-12">
                        <h5>| Please fill the form to proceed with your payment procedure |</h5>
                        <hr />
                    </div>
                    <div className="col-12">
                        <label htmlFor="payname" className="form-label">Name</label>
                        <input placeholder="Name" type="text" className="form-control" id="payname"
                            name="name" onChange={handleInput} value={pay.name} required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="payemail" className="form-label">Email</label>
                        <input placeholder="abc@gmail.com" type="email" className="form-control" id="payemail"
                            onChange={handleInput} name="email" value={pay.email} required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="paynumber" className="form-label">Mobile No.</label>
                        <input placeholder="Enter Your Mobile No." type="number" className="form-control" id="paynumber"
                            onChange={handleInput} name="mobileno" value={pay.mobileno} required />
                    </div>

                    <div className="col-12">
                        <label htmlFor="inputPassword4" className="form-label">Standard</label>

                        <select placeholder="1234" type="number" className="form-control" onChange={handleInput} name="standard" value={pay.standard} className="form-control" id="standard" required >
                            <option disabled selected>Choose...</option>
                            {standard.map((el) => (
                                <option value={el}>{el}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-12">
                        <label htmlFor="guardian" className="form-label">Guardian Name</label>
                        <input placeholder="Name" type="text" className="form-control" onChange={handleInput} name="guardian" value={pay.guardian} id="guardian" required
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="roll">Roll</label>
                        <select
                            type="number"
                            onChange={handleInput} name="roll" value={pay.roll}
                            className="form-control"
                            aria-label=".form-select-sm example" required
                        >
                            <option disabled selected>Choose....</option>
                            {roll.map((el) => (
                                <option value={el}>{el}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-12">
                        <label htmlFor="section">Section</label>
                        <select
                            type="text"
                            onChange={handleInput} name="section" value={pay.section}
                            className="form-control"
                            aria-label=".form-select-sm example" required
                        >
                            <option disabled selected>Choose....</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <label htmlFor="month">Month</label>
                        <select
                            type="text"
                            onChange={handleInput} name="month" value={pay.month}
                            className="form-control"
                            aria-label=".form-select-sm example" required
                        >
                            <option disabled selected>Choose....</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="Marc">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="june">June</option>
                            <option value="july">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="october">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <label htmlFor="fees" className="form-label">Fees</label>
                        <input placeholder="Name" className="form-control" type="number" onChange={handleInput} name="fees" value={(pay.fees = pay.standard * 500)} id="fees" required
                        />
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn ">Submit</button>
                    </div>

                </form>
            </div>

        </>)
}

