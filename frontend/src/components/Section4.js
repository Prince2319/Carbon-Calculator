import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo175 from "../image/logo175.png";
export default function Section4() {
  return (
    <>
      <div
        className="contactinfo mb-3"
        style={{ height: "360px", padding: "65px 0px" }}
      >
        <div className="row g-0">
          <div className="col-md-auto">
            <div className="card-body border-end border-dark">
              <h3 className="card-title">CONTACT</h3>
              <img
                style={{
                  width: "360px",
                  height: "100px",
                  marginBottom: "5px",
                  marginTop: "5px",
                }}
                src={logo175}
                alt=""
              />
              <p className="card-text">
                Indian Institute ofTechnology, Roorkee (Haridwar) &nbsp; &nbsp;
              </p>
              <div className="d-flex flex-column align-items-start">
                <div className="d-flex flex-row align-items-center">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p style={{ marginTop: "11px", marginLeft: "5px" }}>
                    <a href="mailto:registrar@iitr.ac.in">
                      registrar@iitr.ac.in
                    </a>
                  </p>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <FontAwesomeIcon icon={faPhone} />
                  <p style={{ marginTop: "11px", marginLeft: "5px" }}>
                    +91-1332-285311
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-body border-end border-dark mx-4">
              <h3 className="card-title mb-2">Explore &nbsp;</h3>
              <p className="card-text">Carbon Footprint</p>
              <p className="card-text">C-Emission Calculator</p>
              <p className="card-text">News and Events</p>
              <p className="card-text">Green Premium</p>
              <p className="card-text">Electric Vehicle</p>
              <p className="card-text">Government Initiatives</p>
            </div>
          </div>
          <div className="col-md-auto">
            <div className="card-body ">
              <Link className="nav-link active" aria-current="page" to="/team">
                Developed By:
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
