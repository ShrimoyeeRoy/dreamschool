import React, { useState } from "react";
import axios from "axios";
const contactData = (user) => {
    axios.post("http://127.0.0.1:8008/v1/api/contactus", user)
        .then((res) => alert(res.data))
        .catch((err) => alert(err.message))

};

export const Contactus = () => {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    
    const handleInput = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    }
    const handleContact = (e) => {
        e.preventDefault();
        contactData(contact)
        setContact({
            name: "",
            email: "",
            subject: "",
            message: ""
        })
    }
    return (
        <>
            <>
                <main id="main">
                    {/* ======= Breadcrumbs ======= */}
                    <div className="breadcrumbs" data-aos="fade-in">
                        <div className="container">
                            <h2>Contact Us</h2>
                            <h3 style={{ color: "yellow" }}><b>WE'D LOVE TO HEAR FROM YOU</b></h3>
                        </div>
                    </div>
                    {/* End Breadcrumbs */}
                    {/* ======= Contact Section ======= */}
                    <section id="contact" className="contact">
                        <div data-aos="fade-up">
                            <iframe
                                style={{ border: 0, width: "100%", height: 350 }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7290.829258451303!2d88.73437572538718!3d26.516470348623695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e474ea49b5a271%3A0x9d604f1cfa4d8679!2sJalpaiguri%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sus!4v1629773359!5m2!1sen!2sus"
                                frameBorder={0}
                                allowFullScreen=""
                            />

                        </div>
                        <div className="container" data-aos="fade-up">
                            <div className="row mt-5">
                                <div className="col-lg-4">
                                    <div className="info">
                                        <h3 style={{ marginBottom: "2rem", padding: "0px" }}>REACH US THROUGH</h3>
                                        <div className="address">
                                            <i className="bi bi-geo-alt" />
                                            <h4>Location:</h4>
                                            <p>Asam More,
                                                Jalpaiguri,
                                                West Bengal
                                                pin-735101</p>
                                        </div>
                                        <div className="email">
                                            <i className="bi bi-envelope" />
                                            <h4>Email:</h4>
                                            <p>convent@gmail.com</p>
                                        </div>
                                        <div className="phone">
                                            <i className="bi bi-phone" />
                                            <h4>Call:</h4>
                                            <p>+918741236987</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 mt-5 mt-lg-0">
                                    <div className="send_message">
                                        <h6><b>SEND US A MESSAGE</b></h6>
                                        <p>FOR ANY QUERIES,
                                            FILL OUT THE FORM BELOW</p>
                                    </div>

                                    <form
                                        onSubmit={handleContact}
                                        action="forms/contact.php"
                                      
                                        className="php-email-form"
                                    >
                                        <div className="query_form">
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <input
                                                        type="text"
                                                        value={contact.name}
                                                        onChange={handleInput}
                                                        name="name"
                                                        className="form-control"
                                                        id="name"
                                                        placeholder="*Enter Your Name"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                                    <input
                                                        type="email"
                                                        value={contact.email}
                                                        onChange={handleInput}
                                                        className="form-control"
                                                        name="email"
                                                        id="email"
                                                        placeholder="*Enter Your Email"
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group mt-3">
                                                <input
                                                    type="text"
                                                    value={contact.subject}
                                                    onChange={handleInput}
                                                    className="form-control"
                                                    name="subject"
                                                    id="subject"
                                                    placeholder="Subject"
                                                    required=""
                                                />
                                            </div>
                                            <div className="form-group mt-3">
                                                <textarea
                                                    className="form-control"
                                                    name="message"
                                                    value={contact.message}
                                                    onChange={handleInput}
                                                    rows={5}
                                                    placeholder="Message"
                                                    required=""
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="my-3">
                                                <div className="loading">Loading</div>
                                                <div className="error-message" />
                                                <div className="sent-message">
                                                    Your message has been sent. Thank you!
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </section>
                    {/* End Contact Section */}
                </main>
                &lt;
            </>

        </>)
}


