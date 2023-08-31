export function About() {
    return (
        <>
            <>
                <main id="main">
                    {/* ======= Breadcrumbs ======= */}
                    <div className="breadcrumbs" data-aos="fade-in">
                        <div className="container">
                            <h2>About Us</h2>
                        </div>
                    </div>
                    {/* End Breadcrumbs */}
                    {/* ======= About Section ======= */}
                    <section id="about" className="about">
                        <div className="container" data-aos="fade-up">

                            <div className="row">


                                <div className="future_plan">
                                    <h3 className="mb-2">
                                        <b> OUR AIM</b>
                                    </h3>

                                    <p className="fst-italic">

                                        Convent School has been playing a crucial role in making the school an abode where the child can enjoy the facets of life and rhythm of living .Through all our activities, we aim at inspiring the child to assimilate constructive thinking so that vivacity and virtue co-exist in the storehouse of the mind of the child and hence build up a good personality. Academic excellence is not the only criterion of true education but development of a disciplined body and mind towards “serve the humanity” (our school motto) is what that is nurtured in this institution. The child is stimulated to develop curiosity and interest which in turn lead him towards experimentation, creativity and innovation. More than just acquiring knowledge the child must grow in manifestation of wisdom
                                    </p>
                                    <p>Thus, we believe that by imbibing all these attributes of life through our overall teaching –learning program, we shall be able to promote an all-round development of the child so that the child can grow up to be a good and acceptable citizen of the nation.</p>
                                </div>
                            </div>
                            <br />
                            <div className="future_plan">

                                <h3 className="mb-2"><b>OUR FUTURE PLAN</b></h3>
                                <p className="fst-italic">The school was established in the year 1999. The institution has been affiliated to the Council for the Indian School Certificate Examination in the year 2007. It will prepare its students for the ICSE (X) & ISE for the examination under by the council for the Indian School Certificate Examination, (New Delhi). And also for JEE & Medical entrance for regional & national level.</p>

                            </div>
                        </div>
                    </section>
                    {/* End About Section */}
                    {/* ======= Counts Section ======= */}

                    {/* End Counts Section */}
                    {/* ======= Testimonials Section ======= */}
                    <section id="testimonials" className="testimonials">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2>Thoughts</h2>
                                <p>Principal's Opinion</p>
                            </div>
                            <div
                                className="testimonials-slider swiper"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="testimonial-wrap">
                                            <div className="testimonial-item">
                                                <img
                                                    src="https://www.sctimes.com/gcdn/-mm-/4ceea8f0466951afd0661482fc12da0387c633a5/c=1-66-2001-1196/local/-/media/2015/05/21/StCloud/B9317394675Z.1_20150521142902_000_G0FAR9LUG.1-0.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp"
                                                    className="testimonial-img"
                                                    alt="principal"
                                                />
                                                <h3>Ronald Willium</h3>
                                                <h4>Principal</h4>
                                                <p>
                                                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                    All we hope that Convent Schoolis an institution where students are happy and where they are enjoy being part of a lively and positive institution.Convent school occupies a pride of place in the annals of school education of fostering and promoting innovative and qualitative education in India.
                                                    <br />
                                                    Remember that “Education is not only about academics, attitude and values are also important. We need to assess all of this”
                                                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End testimonial item */}

                                    {/* End testimonial item */}

                                    {/* End testimonial item */}

                                    {/* End testimonial item */}

                                    {/* End testimonial item */}
                                </div>
                                <div className="swiper-pagination" />
                            </div>
                        </div>
                    </section>
                    {/* End Testimonials Section */}
                </main>
                {/* End #main */}
            </>

        </>)
}