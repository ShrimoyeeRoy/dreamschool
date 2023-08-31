export function Navbar() {
    return (
        <>
            {/* ======= Header ======= */}
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto d-flex ">

                        <a href="/">CONVENT SCHOOL</a>
                    </h1>
                    {/* Uncomment below if you prefer to use an image logo */}

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li>
                                <a href="/">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>
                            <li>
                                <a href="/admission">Admission</a>
                            </li>

                            <li>
                                <a href="/notice">Notice</a>
                            </li>
                            <li>
                                <a href="/contact us">Contact us</a>
                            </li>
                            <li className="dropdown">
                                <a href="/gallery">
                                    <span>Gallery</span>
                                </a>

                            </li>
                            <li>
                                <a href="/payform">Payment</a>
                            </li>

                        </ul>
                        <button className="btn btn-ghost" type="button" data-bs-toggle="offcanvas"

                            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i style={{ color: "white" }} className="bi bi-list mobile-nav-toggle" /></button>

                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h5 id="offcanvasRightLabel">CONVENT SCHOOL</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ol style={{ listStyleType: "none" }} >
                                    <li data-bs-dismiss="offcanvas" className="menuoffcanvas"  >
                                        <a style={{ color: "black", padding: "5px", margin: "2px" }} href="/">
                                            Home
                                        </a>
                                    </li>
                                    <li data-bs-dismiss="offcanvas" className="menuoffcanvas" >
                                        <a style={{ color: "black" }} href="/about">About</a>
                                    </li>
                                    <li data-bs-dismiss="offcanvas" className="menuoffcanvas" >
                                        <a style={{ color: "black" }} href="/admission">Admission</a>
                                    </li>

                                    <li data-bs-dismiss="offcanvas" className="menuoffcanvas" >
                                        <a style={{ color: "black" }} href="/notice">Notice</a>
                                    </li>
                                    <li data-bs-dismiss="offcanvas" className="menuoffcanvas" >
                                        <a style={{ color: "black" }} href="/contact us">Contact us</a>
                                    </li>
                                    <li data-bs-dismiss="offcanvas" className="menuoffcanvas" >
                                        <a style={{ color: "black" }} href="/gallery">
                                            <span>Gallery</span>
                                        </a>

                                    </li>
                                    <li data-bs-dismiss="offcanvas" className="menuoffcanvas" >
                                        <a style={{ color: "black" }} href="/payform">Payment</a>
                                    </li>

                                </ol>
                            </div>
                        </div>

                    </nav>
                    {/* .navbar */}
                    <a href="/signup" className="get-started-btn">
                        Sign Up
                    </a>
                </div>
            </header>
            {/* End Header */}


        </>)
}