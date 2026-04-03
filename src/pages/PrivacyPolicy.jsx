import React from "react";
import "../pages/home.css";

const PrivacyPolicy = () => {
  return (
    <>
      <section id="privacy-policy" className="py-5 privacy-section">
        <div className="container">
          <div className="privacy-content">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <h2 className="text-center mb-5">Privacy Policy</h2>
                
                <p className="lead text-center mb-5">
                  At Cement Non Trade Bulk, we are committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, and safeguard your information.
                </p>

                <div className="privacy-updated">
                  <strong>Last Updated:</strong> {new Date().getFullYear()} | 
                  Bandra Kurla, Mumbai - 400001
                </div>

                <h3>1. Information We Collect</h3>
                <p>We collect information to provide better services and improve your experience:</p>
                <ul>
                  <li><strong>Contact Information:</strong> Name, phone number, email, and address when you place orders or contact us.</li>
                  <li><strong>Order Details:</strong> Cement type, quantity, delivery location for processing bulk orders.</li>
                  <li><strong>Usage Data:</strong> Website analytics (IP address, browser type, pages visited) via Google Analytics.</li>
                  <li><strong>Cookies:</strong> Small data files to enhance functionality and track preferences.</li>
                </ul>

                <h3>2. How We Use Your Information</h3>
                <ul>
                  <li>Process and deliver cement orders efficiently</li>
                  <li>Communicate order status, updates, and promotional offers</li>
                  <li>Improve website functionality and user experience</li>
                  <li>Verify customer identity for bulk transactions</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>

                <h3>3. Information Sharing</h3>
                <p>We do not sell your personal data. We share information only when necessary:</p>
                <ul>
                  <li>With logistics partners for delivery</li>
                  <li>Payment processors for transactions</li>
                  <li>Legal authorities if required by law</li>
                </ul>

                <h3>4. Cookies & Tracking</h3>
                <p>We use essential cookies for site functionality. You can manage cookies through your browser settings. Third-party cookies from Google Analytics help us understand usage patterns.</p>

                <h3>5. Data Security</h3>
                <p>We implement industry-standard security measures including SSL encryption, secure servers, and access controls to protect your data from unauthorized access.</p>

                <h3>6. Your Rights</h3>
                <ul>
                  <li><strong>Access:</strong> Request copy of your data</li>
                  <li><strong>Rectification:</strong> Correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request data removal (subject to legal obligations)</li>
                  <li><strong>Withdraw Consent:</strong> Opt-out of marketing communications</li>
                </ul>

                <h3>7. Changes to This Policy</h3>
                <p>We may update this policy. Significant changes will be posted here with updated date. Continued use constitutes acceptance.</p>

                <h3>8. Contact Us</h3>
                <div className="row text-center">
                  <div className="col-md-6">
                    <p><i className="bi bi-telephone text-warning"></i> 02245301985</p>
                  </div>
                  <div className="col-md-6">
                    <p><i className="bi bi-envelope text-warning"></i> order@nontradebalkcement.com</p>
                  </div>
                </div>

                <div className="text-center mt-5">
                  <p className="fw-bold text-muted">Thank you for trusting Cement Non Trade Bulk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
