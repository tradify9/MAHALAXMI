import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    orderAmount: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container py-5">
      <div className="row shadow-lg bg-white rounded overflow-hidden">

        {/* Left Image */}
        <div className="col-md-6 p-0">
  <img
    src="https://img.freepik.com/free-photo/labor-day-celebration-with-portrait-laborer-work_23-2151755706.jpg?semt=ais_incoming&w=740&q=80"
    className="w-100 h-100"
    style={{ objectFit: "contain", backgroundColor: "#fcf9f9" }}
    alt="cement"
  />
</div>

        {/* Right Form */}
        <div className="col-md-6 p-5">
          <h2 className="mb-4 fw-bold">Contact Us</h2>

          {/* ✅ DIRECT FORM SUBMIT */}
          <form
            action="https://formsubmit.co/your-email@gmail.com"
            method="POST"
          >

            {/* Hidden fields (optional but pro) */}
            <input type="hidden" name="_subject" value="New Cement Order Lead" />
            <input type="hidden" name="_captcha" value="false" />

            <input
              type="text"
              name="name"
              className="form-control mb-3"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              className="form-control mb-3"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              className="form-control mb-3"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="state"
              className="form-control mb-3"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
            />

            {/* Dropdown */}
            <select
  name="orderAmount"
  className="form-select mb-3"
  value={formData.orderAmount}
  onChange={handleChange}
  required
>
  <option value="">Select Order</option>
  <option value="500">Order 500</option>
  <option value="1000">Order 1000</option>
  <option value="2000">Order 2000</option>
  <option value="5000">Order 5000</option>
</select>

            <textarea
              name="message"
              className="form-control mb-3"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button
  type="submit"
  className="btn w-100"
  style={{ backgroundColor: "#ff7a00", color: "#fff", border: "none" }}
>
  Submit Inquiry
</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;