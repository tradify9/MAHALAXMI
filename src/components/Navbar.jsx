import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  // ✅ smooth scroll function
  const scrollToSection = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/"); // pehle home pe jao
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* TOP MARQUEE */}
      <div className="top-marquee">
        <marquee behavior="scroll" direction="left">
          Book Nontrade Cement Online From Direct Suppliers At Market Best Rate.
          Minimum 500 Bags | हम उचित रेट पर हर ब्रांड की नॉन ट्रेड सीमेंट
          डिस्काउंट रेट पर प्रदान करते हैं। संपर्क करें 📞 02245301957
        </marquee>
      </div>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top p-5">
        <div className="container">

          {/* BRAND */}
          <span
            className="navbar-brand"
            style={{ cursor: "pointer" }}
            onClick={() => scrollToSection("home")}
          >
            <span className="brand-text">
              Non Trade <span>Cement</span>
            </span>
          </span>

          {/* TOGGLER */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* MENU */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3 text-center">

              <li className="nav-item">
                <button className="nav-link btn" onClick={() => scrollToSection("home")}>
                  Home
                </button>
              </li>

              <li className="nav-item">
                <button className="nav-link btn" onClick={() => scrollToSection("about")}>
                  About Us
                </button>
              </li>

              <li className="nav-item">
                <button className="nav-link btn" onClick={() => scrollToSection("services")}>
                  Our Services
                </button>
              </li>

              {/* ✅ SINGLE CTA BUTTON */}
              <li className="nav-item">
                <Link to="/contect" className="nav-cta-btn">
                  Contect US
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;