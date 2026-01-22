import React from "react";
import "../pages/home.css";

const Home = () => {
    return (
        <>
            <section
                id="home"
                className="vh-100 d-flex align-items-center text-white hero-section"
            >
                <div className="container text-center">

                    <p className="text-uppercase fw-semibold text-warning mb-2">
                        Welcome to Non Trade Cement
                    </p>

                    <h1 className="fw-bold display-5">
                        BUY BULK NON TRADE CEMENT <span className="text-warning">@</span><br />
                        <span className="text-warning">DISCOUNT PRICE.</span>
                    </h1>

                    <p className="mt-3 mx-auto" style={{ maxWidth: "750px" }}>
                        You are here because you are looking for the best quality Non Trade Cement.
                        We supply bulk cements of the highest quality all across India.
                    </p>

                    <div className="d-flex justify-content-center gap-3 mt-4">
                        <a href="#contact" className="btn btn-warning btn-lg text-white px-4">
                            ORDER NOW
                        </a>

                        <a href="tel:+91XXXXXXXXXX" className="btn btn-outline-light btn-lg px-4">
                             CALL NOW
                        </a>
                    </div>

                </div>
            </section>


            <section id="about" className="py-5 about-section">
                <div className="container">
                    <div className="row align-items-center">

                        {/* LEFT IMAGE AREA */}
                        <div className="col-md-6 mb-4 mb-md-0">

                            <div className="about-image-wrapper">
                                <img
                                    src="https://myindianthings.com/cdn/shop/products/26_ae8cbe1c-0979-4b89-a0b3-9b7a9ed514c7_800x.jpg?v=1671143712"
                                    alt="Non Trade Cement"
                                    className="img-fluid main-about-image"
                                />
                            </div>

                            {/* BUTTONS */}
                            <div className="d-flex justify-content-center gap-3 mt-3">
                                <a
                                    href="https://wa.me/916291420704"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-success px-4"
                                >
                                    💬 WhatsApp
                                </a>

                                <a
                                    href="tel:+916291420704"
                                    className="btn btn-dark px-4"
                                >
                                     Call Now
                                </a>
                            </div>

                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="col-md-6">

                            <p className="text-warning fw-semibold mb-2">
                                About Us !
                            </p>

                            <h2 className="fw-bold mb-3">
                                Your Trusted Non-Trade Cement Supplier
                            </h2>

                            <p>
                                At <strong>Agency</strong>, we specialize in providing high-quality
                                non-trade cement at discounted rates for bulk orders. With years of
                                experience in the construction materials supply sector, we have
                                established ourselves as a reputable source for bulk cement orders
                                across India.
                            </p>

                            <h5 className="fw-bold mt-4">Our Commitment</h5>

                            <p>
                                We understand the unique needs of our customers, from large-scale
                                infrastructure projects to residential developments. Our commitment
                                is to deliver:
                            </p>

                            <ul className="about-list">
                                <li>
                                    <strong>Premium Quality:</strong> We source our cement directly from
                                    top manufacturers, ensuring you receive only the best products that
                                    meet and exceed industry standards.
                                </li>

                                <li>
                                    <strong>Competitive Pricing:</strong> By eliminating middlemen, we
                                    offer the most competitive rates for bulk orders, making us the
                                    go-to choice for cost-effective solutions.
                                </li>

                                <li>
                                    <strong>Efficient Delivery:</strong> Our streamlined supply chain
                                    and partnerships with leading logistics providers ensure timely
                                    deliveries, no matter your location.
                                </li>

                                <li>
                                    <strong>Variety of Options:</strong> We offer a wide range of cement
                                    types, including Ordinary Portland Cement (OPC 43 & OPC 53) and
                                    Portland Pozzolana Cement (PPC), to meet diverse project
                                    requirements.
                                </li>
                            </ul>

                        </div>

                    </div>
                </div>
            </section>



            <section id="why-choose-us" className="py-5 why-section">
                <div className="container">

                    <div className="row">

                        {/* WHY CHOOSE US */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <p className="text-warning fw-semibold mb-1">
                                Why Choose Us?
                            </p>

                            <h2 className="fw-bold mb-4">
                                Your Reliable Partner for Bulk Cement Supply
                            </h2>

                            <ul className="why-list">
                                <li>
                                    <strong>Bulk Order Specialists:</strong> We cater to customers
                                    requiring large quantities, typically over 1,000 bags, making us
                                    ideal for contractors and large-scale construction projects.
                                </li>

                                <li>
                                    <strong>Direct from Manufacturers:</strong> Our strong relationships
                                    with cement producers allow us to offer the best prices without
                                    compromising on quality.
                                </li>

                                <li>
                                    <strong>Customer-Centric Approach:</strong> We provide personalized
                                    service, adapting to your unique requirements for a smooth buying
                                    experience.
                                </li>

                                <li>
                                    <strong>Nationwide Coverage:</strong> From metropolitan cities to
                                    remote towns, we supply cement across every region of India.
                                </li>
                            </ul>
                        </div>

                        {/* OUR PROCESS */}
                        <div className="col-md-6">
                            <p className="text-warning fw-semibold mb-1">
                                Our Process
                            </p>

                            <h2 className="fw-bold mb-4">
                                Simple & Efficient Ordering
                            </h2>

                            <div className="process-step">
                                <span>01</span>
                                <div>
                                    <h6>Browse Our Products</h6>
                                    <p>Explore our wide range of non-trade cement options.</p>
                                </div>
                            </div>

                            <div className="process-step">
                                <span>02</span>
                                <div>
                                    <h6>Place Your Order</h6>
                                    <p>Use our user-friendly ordering system for a hassle-free process.</p>
                                </div>
                            </div>

                            <div className="process-step">
                                <span>03</span>
                                <div>
                                    <h6>Secure Payment</h6>
                                    <p>Multiple safe and secure payment options for peace of mind.</p>
                                </div>
                            </div>

                            <div className="process-step">
                                <span>04</span>
                                <div>
                                    <h6>Fast Delivery</h6>
                                    <p>We handle logistics and deliver directly to your site.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* FOOT NOTE */}
                    <div className="text-center mt-5">
                        <p className="fw-semibold">
                            At <strong>Company</strong>, we're not just selling cement — we're
                            building long-term partnerships. Let us be the foundation of your
                            construction success.
                        </p>
                    </div>

                </div>
            </section>





            <section id="call-action" className="py-5 call-section">
                <div className="container">
                    <div className="row justify-content-center text-center">

                        <div className="col-md-8">
                            <h2 className="fw-bold mb-3">
                                Wants Bulk Cement for Project? Book Non-Trade Cement by Call.
                            </h2>

                            <p className="mb-4">
                                Any Help We’re Always Here
                            </p>

                            <h3 className="fw-bold mb-4">
                                 +91-6291420704
                            </h3>

                            <div className="d-flex justify-content-center gap-3 flex-wrap">
                                <a
                                    href="tel:+916291420704"
                                    className="btn btn-warning btn-lg text-white px-4"
                                >
                                     Call Now
                                </a>

                                <a
                                    href="https://wa.me/916291420704"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-outline-light btn-lg px-4"
                                >
                                    💬 WhatsApp
                                </a>
                            </div>

                            <div className="mt-4">
                                <p className="mb-1 fw-semibold">+91-6291420704</p>
                                <p className="mb-0 fw-semibold">+91-62914207040</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>






            <section id="services" className="py-5 services-section">
                <div className="container">

                    {/* SECTION HEADING */}
                    <div className="text-center mb-5">
                        <p className="text-warning fw-semibold mb-1">Our Service</p>
                        <h2 className="fw-bold">Best Cementing Service</h2>
                    </div>

                    <div className="row g-4">

                        {/* SERVICE CARD */}
                        <div id="opc53" className="col-md-4">
                            <div className="service-card">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70Wb3y2ejg1caKTorOUI6f05yNhMt0slEzg&s" alt="OPC 53 Cement" />
                                <div className="service-content">
                                    <h5>OPC 53 Grade Cement</h5>
                                    <p>
                                        53 Grade Ordinary Portland Cement is known for its high strength
                                        and is widely used in heavy construction applications.
                                    </p>
                                    <a href="#contact" className="btn btn-warning text-white">
                                        Get Free Quote
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div id="opc43" className="col-md-4">
                            <div className="service-card">
                                <img src="https://s.alicdn.com/@sc04/kf/UTB8tqcIlJnJXKJkSaiyq6AhwXXaM/Portland-Cement-Grey-Color-Grade-43.jpg_300x300.jpg" alt="OPC 43 Cement" />
                                <div className="service-content">
                                    <h5>OPC 43 Grade Cement</h5>
                                    <p>
                                        OPC 43 Grade cement is suitable for general construction works
                                        with balanced strength and durability.
                                    </p>
                                    <a href="#contact" className="btn btn-warning text-white">
                                        Get Free Quote
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div id="opc33" className="col-md-4">
                            <div className="service-card">
                                <img src="https://tiimg.tistatic.com/fp/5/009/842/ordinary-portland-cement-opc--691.jpg" alt="OPC 33 Cement" />
                                <div className="service-content">
                                    <h5>OPC 33 Grade Cement</h5>
                                    <p>
                                        OPC 33 Grade Cement offers minimum compressive strength of
                                        33 MPa and is ideal for masonry works.
                                    </p>
                                    <a href="#contact" className="btn btn-warning text-white">
                                        Get Free Quote
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div id="psc" className="col-md-4">
                            <div className="service-card">
                                <img src="https://api.gharpedia.com/wp-content/uploads/2018/10/0301150001-01-Portland-Slag-Cement.jpg" alt="PSC Cement" />
                                <div className="service-content">
                                    <h5>PSC Cement</h5>
                                    <p>
                                        Portland Slag Cement improves durability and resistance to
                                        chemical attacks, suitable for marine works.
                                    </p>
                                    <a href="#contact" className="btn btn-warning text-white">
                                        Get Free Quote
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div id="ppc" className="col-md-4">
                            <div className="service-card">
                                <img src="https://www.cementl.com/wp-content/uploads/2025/06/what-is-ppc-cement.jpg" alt="PPC Cement" />
                                <div className="service-content">
                                    <h5>PPC Cement</h5>
                                    <p>
                                        PPC contains pozzolanic materials like fly ash, offering
                                        improved workability and long-term strength.
                                    </p>
                                    <a href="#contact" className="btn btn-warning text-white">
                                        Get Free Quote
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div id="" className="col-md-4">
                            <div className="service-card">
                                <img src="https://img500.exportersindia.com/product_images/bc-500/2022/11/11321199/rapid-hardening-cement-1669790820-6649041.jpeg" alt="Rapid Hardening Cement" />
                                <div className="service-content">
                                    <h5>Rapid Hardening Cement</h5>
                                    <p>
                                        Rapid Hardening Cement gains strength quickly and is ideal
                                        for road repairs and fast-track projects.
                                    </p>
                                    <a href="#contact" className="btn btn-warning text-white">
                                        Get Free Quote
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>






            <section id="faq" className="py-5 faq-section">
                <div className="container">

                    {/* SECTION HEADING */}
                    <div className="text-center mb-5">
                        <p className="text-warning fw-semibold mb-1">Our Faq's</p>
                        <h2 className="fw-bold">Important Questions</h2>
                    </div>

                    <div className="accordion accordion-flush" id="faqAccordion">

                        {/* FAQ 1 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq1"
                                >
                                    What is non trade cement used for?
                                </button>
                            </h2>
                            <div
                                id="faq1"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">
                                    Non-trade cement can be used in the construction of agricultural
                                    structures such as barns, silos, and other outbuildings.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 2 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq2"
                                >
                                    How many days can we stock cement?
                                </button>
                            </h2>
                            <div
                                id="faq2"
                                className="accordion-collapse collapse"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">
                                    Cement should be protected from moisture. Exposure to moisture
                                    initiates hydration, which makes proper storage essential even
                                    within the recommended 3-month period.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 3 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq3"
                                >
                                    Which Cement Is Long Lasting?
                                </button>
                            </h2>
                            <div
                                id="faq3"
                                className="accordion-collapse collapse"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">
                                    Blended cements such as Portland Pozzolana Cement (PPC),
                                    Portland Slag Cement (PSC), and Composite Cement (CC) offer
                                    enhanced durability and long-term performance.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 4 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq4"
                                >
                                    Industries We Serve?
                                </button>
                            </h2>
                            <div
                                id="faq4"
                                className="accordion-collapse collapse"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">
                                    Our non-trade cement supports infrastructure projects including
                                    highways, bridges, industrial facilities, and large-scale
                                    developments across India.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 5 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq5"
                                >
                                    Non Trade Cement: What Is It?
                                </button>
                            </h2>
                            <div
                                id="faq5"
                                className="accordion-collapse collapse"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">
                                    Non-trade cement is sold directly by manufacturers to customers.
                                    It offers better economic value compared to trade cement by
                                    reducing intermediary costs.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 6 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq6"
                                >
                                    What are blended cements?
                                </button>
                            </h2>
                            <div
                                id="faq6"
                                className="accordion-collapse collapse"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">
                                    Blended cements are hydraulic cements created by intergrinding
                                    or blending Portland cement with supplementary materials such
                                    as fly ash or slag.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 7 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq7"
                                >
                                    Is all Portland cement the same?
                                </button>
                            </h2>
                            <div
                                id="faq7"
                                className="accordion-collapse collapse"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">
                                    Although Portland cements follow standard specifications, they
                                    differ in composition and performance characteristics based on
                                    their intended applications.
                                </div>
                            </div>
                        </div>

                        {/* FAQ 8 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq8"
                                >
                                    Benefits Of Non Trade Cement?
                                </button>
                            </h2>
                            <div
                                id="faq8"
                                className="accordion-collapse collapse"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">
                                    Reduced Cost: Non-trade cement is generally more affordable than
                                    trade cement, making it ideal for projects with tight budgets.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section id="contact" className="py-5 hindi-cta-section">
                <div className="container">
                    <div className="row justify-content-center text-center">

                        <div className="col-md-8">
                            <h2 className="fw-bold mb-3">
                                नॉन-ट्रेड सीमेंट ऑनलाइन खरीदें
                            </h2>

                            <p className="mb-4">
                                सस्ते दामों पर बल्क ऑर्डर के लिए अभी कॉल करें
                            </p>

                            <h3 className="fw-bold mb-4">
                             Call Now : +91-6291420704
                            </h3>

                            <a
                                href="tel:+916291420704"
                                className="btn btn-warning btn-lg text-white px-4"
                            >
                                 अभी कॉल करें
                            </a>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;
