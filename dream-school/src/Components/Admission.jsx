export function Admission() {
    return (
        <>
            <main>
                <section id="about" className="admission">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div
                                className="col-lg-6 order-1 order-lg-2"
                                data-aos="fade-left"
                                data-aos-delay={100}
                            >
                                <img src="https://img.freepik.com/free-photo/students-knowing-right-answer_329181-14271.jpg?w=740&t=st=1692902312~exp=1692902912~hmac=1c3dc1c56cf9ee8000be9d178576e54710c06f0adf61a9e05c1bc53eadd252ba" className="img-fluid" alt="sideimage" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                                <h3>
                                    <b style={{ color:"#03045a"}}>Information Regarding Admissions</b>
                                </h3>
                                <ul>
                                    <li>
                                        The age of admission to Class Nursery is Three (3) years plus as on date of admission..
                                    </li>
                                    <li>
                                          Parents must bring their child at the time of admission.

                                    </li>
                                    <li>
                                         Admission to classes depends upon vacancy available in the respective classes.
                                    </li>
                                </ul>
                                <p className="fst-italic">
                                    <span> <i className="bi bi-check-circle" /> <b>When admission is granted the following documents should be submitted –</b></span>
                                </p>
                                <ol>
                                    <li>Attested copy of Date of Birth Certificate issued by the competent authority</li>
                                    <li>Xerox copy of the last annual examination report card of the previous school (Not applicable to first admission case).</li>
                                    <li>Two recent stamp size photographs.</li>
                                    <li>Xerox copy of Baptism Certificate (only for Catholic students).</li>
                                    <li>The school reserves the right to reject any application and is not answerable to the parents for doing so.</li>
                                </ol>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        
        </>)
}