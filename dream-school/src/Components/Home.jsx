export function Home() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://cdn.britannica.com/35/230835-050-3D93A72A/School-children-wearing-school-uniforms.jpg" className="d-block w-100" alt="first1" />
                        <div className="carousel-caption d-none d-md-block TopBarMarqueeText">
                            <h1 style={{ color: "#ffff00" }}>WELCOME TO CONVENT SCHOOL</h1>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.christinak12.org/cms/lib/DE50000539/Centricity/Domain/27/Marshall%20Elementary%20School.jpg" className="d-block w-100" alt="f2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 style={{ color: "#ffff00" }}>WELCOME TO CONVENT SCHOOL</h1>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.theconversation.com/files/431742/original/file-20211112-15-usg8m.jpg?ixlib=rb-1.1.0&rect=45%2C0%2C5119%2C3356&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" className="d-block w-100" alt="f3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 style={{ color: "#ffff00" }}>WELCOME TO CONVENT SCHOOL</h1>

                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/*======carousal end=====*}
            <main id="main">
                {/* ======= About Section ======= */}
            <main>
                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div
                                className="col-lg-6 order-1 order-lg-2"
                                data-aos="fade-left"
                                data-aos-delay={100}
                            >
                                <img src="https://media.gettyimages.com/id/157315388/photo/school-playground-with-four-square-court.jpg?s=612x612&w=gi&k=20&c=QSn5x_47mmugMdbD8WZno6ziYqXq9ImYOANK8qeOXn4=" className="img-fluid" alt="sideimage" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                                <h3>
                                    “We are what our thoughts have made us; so take care about what you think."
                                </h3>
                                <h6 style={{ marginLeft: "20rem" }}>- <b>Swami Vivekananda</b></h6>
                                <p className="fst-italic">
                                    <p>Convent School humbly dedicates itself to this act of awakening. Convent School (CS) is an English Medium Institution belonging to the Registered Society. The school was established in the year 1999.</p>
                                </p>
                                <ul>
                                    <li>
                                        <i className="bi bi-check-circle" />The school is open to all irrespective of religion, caste and community.
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle" />  Convent School recognizes that a pleasant, safe school environment supports student well being and promotes successful student education.

                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle" /> Our buildings and amenities have continued to expand as a result of a large range of subjects being offered to our students.


                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </section>
                {/* End About Section */}

                {/* ======= Why Us Section ======= */}
                <section id="why-us" className="why-us">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-4 d-flex align-items-stretch">
                                <div className="content">
                                    <h3>Why Choose Our School?</h3>
                                    <p>
                                        Choosing a school is a significant decision that can greatly impact your educational journey and future opportunities. When considering why to choose a particular school, it's important to evaluate several factors that make the institution unique and align with your academic, personal, and career goals. Here are some points to consider when explaining why someone might choose our school
                                    </p>
                                    <div className="text-center">
                                        <a href="/about" className="more-btn">
                                            Learn More <i className="bx bx-chevron-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-8 d-flex align-items-stretch"
                                data-aos="zoom-in"
                                data-aos-delay={100}
                            >
                                <div className="icon-boxes d-flex flex-column justify-content-center">
                                    <div className="row">
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="bx bx-receipt" />
                                                <h4>Strong Academic Programs</h4>
                                                <p>
                                                    Our school is renowned for its exceptional academic programs that provide a well-rounded and comprehensive education. Our faculty members are experts in their fields and are dedicated to fostering a dynamic and engaging learning environment.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="bx bx-cube-alt" />
                                                <h4>Cutting-edge Facilities</h4>
                                                <p>
                                                    Our state-of-the-art facilities are designed to enhance your learning experience. From modern classrooms and well-equipped laboratories to libraries stocked with extensive resources, you'll have access to everything you need to excel academically.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="bx bx-images" />
                                                <h4>Hands-on Learning Opportunities</h4>
                                                <p>
                                                    We believe in learning by doing. Our school provides numerous hands-on learning opportunities, including internships, research projects, and experiential learning programs, allowing you to apply classroom knowledge to real-world situations.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End .content*/}
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Why Us Section */}





                {/* ======= Counts Section ======= */}
                <section id="counts" className="counts section-bg">
                    <div className="container">
                        <div className="row counters">
                            <div className="col-lg-3 col-6 text-center">
                                <span
                                    data-purecounter-start={0}
                                    data-purecounter-end={1232}
                                    data-purecounter-duration={1}
                                    className="purecounter"
                                />
                                <p style={{ color: "blue" }}>Students</p>
                                <h1 style={{ color: "yellow" }}>1200</h1>
                            </div>
                            <div className="col-lg-3 col-6 text-center">
                                <span
                                    data-purecounter-start={0}
                                    data-purecounter-end={64}
                                    data-purecounter-duration={1}
                                    className="purecounter"
                                />
                                <p style={{ color: "blue" }}>Class</p>
                                <h1 style={{ color: "yellow" }}>12</h1>
                            </div>
                            <div className="col-lg-3 col-6 text-center">
                                <span
                                    data-purecounter-start={0}
                                    data-purecounter-end={42}
                                    data-purecounter-duration={1}
                                    className="purecounter"
                                />
                                <p style={{ color: "blue" }}>Events</p>
                                <h1 style={{ color: "yellow" }}>10</h1>
                            </div>
                            <div className="col-lg-3 col-6 text-center">
                                <span
                                    data-purecounter-start={0}
                                    data-purecounter-end={15}
                                    data-purecounter-duration={1}
                                    className="purecounter"
                                />
                                <p style={{ color: "blue" }}>Trainers</p>
                                <h1 style={{ color: "yellow" }}>14</h1>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Counts Section */}


                {/* ======= Features Section ======= */}

                {/* End Features Section */}




                {/* ======= Popular Courses Section ======= */}
                <section id="popular-courses" className="courses">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Courses</h2>
                            <p>Campus Life</p>
                        </div>
                        <div className="row" data-aos="zoom-in" data-aos-delay={100}>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <img
                                        src="https://d1ymz67w5raq8g.cloudfront.net/Pictures/480xAny/3/5/8/520358_f0254669students_pouring_sample_into_flask_in_laboratory_453957.jpg"
                                        className="img-fluid"
                                        alt="LIB"
                                    />

                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <img
                                        src="https://i.pinimg.com/1200x/c4/b6/f7/c4b6f7298c1c599f4ad7d2251d040d8b.jpg"
                                        className="img-fluid"
                                        alt="LIB"
                                    />

                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <img
                                        src="https://thearyanschool.com/wp-content/uploads/2022/11/Library-The-Aryan-School-Dehradun-1.jpg"
                                        className="img-fluid"
                                        alt="LIB"
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Popular Courses Section */}
                {/* ======= Trainers Section ======= */}
                <section id="trainers" className="trainers">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <p>Our Trainer</p>
                        </div>
                        <div className="row" data-aos="zoom-in" data-aos-delay={100}>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <img
                                        src="https://www.sctimes.com/gcdn/-mm-/4ceea8f0466951afd0661482fc12da0387c633a5/c=1-66-2001-1196/local/-/media/2015/05/21/StCloud/B9317394675Z.1_20150521142902_000_G0FAR9LUG.1-0.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp"
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <div className="member-content">
                                        <h4>William Anderson</h4>
                                        <span>M.SC(IT),COMPUTER SCIENCE</span>
                                        <p>
                                            (COMPUTER)
                                        </p>
                                        <div className="social">
                                            <a
                                                href="#1">
                                                <i className="bi bi-twitter" />
                                            </a>
                                            <a
                                                href="#2">
                                                <i className="bi bi-facebook" />
                                            </a>
                                            <a
                                                href="#3">
                                                <i className="bi bi-instagram" />
                                            </a>
                                            <a
                                                href="#4">
                                                <i className="bi bi-linkedin" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <img
                                        src="https://www.schoolnetindia.com/blog/wp-content/uploads/2022/05/What-are-the-Different-Types-of-Teacher-Training-Programs-960x540.jpg"
                                        className="img-fluid"
                                        alt="matht"
                                    />
                                    <div className="member-content">
                                        <h4>Sunita Sharma</h4>
                                        <span> B.TECH,CIVIL ENG</span>
                                        <p>
                                            (Math Teacher)
                                        </p>
                                        <div className="social">
                                            <a
                                                href="#1">
                                                <i className="bi bi-twitter" />
                                            </a>
                                            <a
                                                href="#2">
                                                <i className="bi bi-facebook" />
                                            </a>
                                            <a
                                                href="#3">
                                                <i className="bi bi-instagram" />
                                            </a>
                                            <a
                                                href="#4">
                                                <i className="bi bi-linkedin" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <img
                                        src="https://thelogicalindian.com/h-upload/2021/07/05/198685-untitled-design-53.jpg"
                                        className="img-fluid"
                                        alt="mt"
                                    />
                                    <div className="member-content">
                                        <h4>Tanisha Mitra</h4>
                                        <span>M.A,B.ED</span>
                                        <p>
                                            (English )
                                        </p>
                                        <div className="social">
                                            <a
                                                href="#1">
                                                <i className="bi bi-twitter" />
                                            </a>
                                            <a
                                                href="#2">
                                                <i className="bi bi-facebook" />
                                            </a>
                                            <a
                                                href="#3">
                                                <i className="bi bi-instagram" />
                                            </a>
                                            <a
                                                href="#4">
                                                <i className="bi bi-linkedin" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* End Trainers Section */}
            </main>






        </>)
}