import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      {/* TOP MARQUEE */}
      <div className="top-marquee">
        <marquee behavior="scroll" direction="left">
          Book Nontrade Cement Online From Direct Suppliers At Market Best Rate.
          Minimum 500 Bags | हम उचित रेट पर हर ब्रांड की नॉन ट्रेड सीमेंट
          डिस्काउंट रेट पर प्रदान करते हैं। संपर्क करें 📞 +91-6291420704
        </marquee>
      </div>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top">
        <div className="container">

          {/* BRAND */}
          <a className="navbar-brand" href="#home">
            <span className="brand-text">
              MAHALAXMI CEMENT <span>PRODUCS</span>
            </span>
          </a>

          {/* TOGGLER (RIGHT SIDE) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* MENU */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3 text-center">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">About Us</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#services">Our Services</a>
              </li>

              <li className="nav-item">
                <a href="#contact" className="btn nav-cta-btn">
                  Get Free Quote
                </a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
