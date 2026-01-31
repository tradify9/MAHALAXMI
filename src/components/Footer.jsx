import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
    <footer className="footer-section">
      <div className="container">
        <div className="row">

          {/* ABOUT */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>About Us</h5>
            <p>
              We are a well-known supplier in the cement industry and supply
              all brands of cement in bulk quantities at wholesale rates.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>Quick Links</h5>
            <ul>
              <li><i className="bi bi-house-door"></i> <a href="#home">Home</a></li>
              <li><i className="bi bi-info-circle"></i> <a href="#about">About Us</a></li>
              <li><i className="bi bi-briefcase"></i> <a href="#services">Our Services</a></li>
              <li><i className="bi bi-envelope"></i> <a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>Our Services</h5>
            <ul>
  <li>
    <i className="bi bi-check-circle"></i>
    <a href="#opc53">OPC 53 Grade Cement</a>
  </li>

  <li>
    <i className="bi bi-check-circle"></i>
    <a href="#opc43">OPC 43 Grade Cement</a>
  </li>

  <li>
    <i className="bi bi-check-circle"></i>
    <a href="#opc33">OPC 33 Grade Cement</a>
  </li>

  <li>
    <i className="bi bi-check-circle"></i>
    <a href="#psc">PSC Cement</a>
  </li>

  <li>
    <i className="bi bi-check-circle"></i>
    <a href="#ppc">PPC Cement</a>
  </li>
</ul>

          </div>

          {/* CONTACT */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>Get In Touch</h5>
            <p><i className="bi bi-geo-alt"></i> Bandra Kurla, Mumbai - 400001</p>
            <p><i className="bi bi-telephone"></i> 02245301957</p>
            <p><i className="bi bi-envelope-at"></i> order@nontradebalkcement.com</p>
            {/* <p><i className="bi bi-globe"></i> www.mahalaxmi.nontradebalkcement.com</p> */}
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom text-center">
          © {new Date().getFullYear()} Cement Non Trade Bulk. All Rights Reserved.
        </div>
      </div>
    </footer>




    </>
  );
};

export default Footer;
