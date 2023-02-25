import React from "react";
import { FaDesktop, FaMobile, FaDatabase } from "react-icons/fa";

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="service">
              <div className="service-icon">
                <FaDesktop />
              </div>
              <div className="service-info">
                <h3>Web Development</h3>
                <p>
                  I can create responsive websites using modern web
                  technologies like HTML5, CSS3, JavaScript, and ReactJS, any many more.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service">
              <div className="service-icon">
                <FaMobile />
              </div>
              <div className="service-info">
                <h3>Mobile Development</h3>
                <p>
                  I can create cross-platform mobile apps using React Native, etc.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service">
              <div className="service-icon">
                <FaDatabase />
              </div>
              <div className="service-info">
                <h3>Database Management</h3>
                <p>
                  I can design and manage databases using SQL and NoSQL
                  technologies like MySQL and MongoDB, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
