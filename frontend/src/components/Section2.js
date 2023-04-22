import React from "react";
import gp from "../image/greenpremium.jpg";
import cf from "../image/carbonfoot.jpg";
import ev from "../image/ev.jpg";
import ht from "../image/heataspects.jpg";
import ipt from "../image/impacts.jpg";
import initiative from "../image/initiative.jpg";
import { Link } from "react-router-dom";

export default function Section2() {
  return (
    <>
      <div className="container my-1">
        <div className="card-group1 row">
          <div
            className="card text-bg-dark col"
            style={{ position: "relative" }}
          >
            <img
              src={cf}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                opacity: 0.8,
              }}
              className="card-img img-fluid rounded-start"
              alt="..."
            />
            <div className="card-img-overlay">
              {/* <h3 className="card-title text-center text-black">Carbon Footprint</h3> */}
              <Link
                className="nav-link active"
                aria-current="page"
                to="/footprint"
                style={{ textShadow: "2px 2px #000" }}
              >
                <h3>Carbon Footprint</h3>
              </Link>
              <p
                className="card-text text-white"
                style={{ textShadow: "2px 2px #000" }}
              >
                “The Earth started to rebel when the carbon in the atmosphere
                began to swell.”
              </p>
              <p
                className="card-text text-white"
                style={{ textShadow: "2px 2px #000" }}
              >
                “A person or organization's garbage reflects their economic
                footprint.” “Count your footprints; carbon ones.”
              </p>
            </div>
          </div>
          <div
            className="card text-bg-dark col"
            style={{ position: "relative" }}
          >
            <img
              src={ipt}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                opacity: 0.8,
              }}
              className="card-img img-fluid rounded-start"
              alt="..."
            />
            <div className="card-img-overlay">
              {/* <h3 className="card-title text-center text-black">Impacts</h3> */}
              <Link
                className="nav-link active"
                aria-current="page"
                to="/impacts"
                style={{ textShadow: "2px 2px #000" }}
              >
                <h3>Impacts</h3>
              </Link>
              <p
                className="card-text text-white"
                style={{ textShadow: "2px 2px #000" }}
              >
                The negative effects that result from the release of carbon
                dioxide and other greenhouse gases{" "}
              </p>
            </div>
          </div>
          <div
            className="card text-bg-dark col"
            style={{ position: "relative" }}
          >
            <img
              src={gp}
              className="card-img img-fluid rounded-start"
              alt="..."
            />
            <div className="card-img-overlay">
              {/* <h3 className="card-title text-center text-black">Green Premium</h3> */}
              <Link
                className="nav-link active"
                aria-current="page"
                to="/gp"
                style={{ textShadow: "2px 2px #000" }}
              >
                <h3>Green Premium</h3>
              </Link>
              <p
                className="card-text text-white"
                style={{ textShadow: "2px 2px #000" }}
              >
                The additional cost of choosing a clean technology over one that
                emits more greenhouse gases.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card-group2 row">
          <div
            className="card text-bg-dark col"
            style={{ position: "relative" }}
          >
            <img
              src={ev}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                opacity: 0.8,
              }}
              className="card-img img-fluid rounded-start"
              alt="..."
            />
            <div className="card-img-overlay">
              {/* <h3 className="card-title text-center text-black">Electric Vehicle</h3> */}
              <Link
                className="nav-link active"
                aria-current="page"
                to="/ev"
                style={{ textShadow: "2px 2px #000" }}
              >
                <h3>Electric Vehicle</h3>
              </Link>
              <p
                className="card-text text-white"
                style={{ textShadow: "2px 2px #000" }}
              >
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div
            className="card text-bg-dark col"
            style={{ position: "relative" }}
          >
            <img
              src={ht}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                opacity: 0.8,
              }}
              className="card-img img-fluid rounded-start"
              alt="..."
            />
            <div className="card-img-overlay">
              {/* <h3 className="card-title text-decoration-underline text-center text-white">Heat aspects of EV</h3> */}
              <Link
                className="nav-link active"
                aria-current="page"
                to="/ht"
                style={{ textShadow: "2px 2px #000" }}
              >
                <h3>Heat aspects of EV</h3>
              </Link>
              <p
                className="card-text text-white"
                style={{ textShadow: "2px 2px #000" }}
              >
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>

          <div className="card text-bg-dark col">
            <img
              src={initiative}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                opacity: 0.8,
              }}
              className="card-img img-fluid rounded-start"
              alt="..."
            />
            <div className="card-img-overlay">
              {/* <h3 className="card-title text-decoration-underline text-center text-black">Initiative</h3> */}
              <Link
                className="nav-link active"
                aria-current="page"
                to="/initiatives"
                style={{ textShadow: "2px 2px #000" }}
              >
                <h3>Initiatives</h3>
              </Link>
              <p
                className="card-text text-white"
                style={{ textShadow: "2px 2px #000" }}
              >
                Some of the goverment Initiatives are Listed in this section
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
