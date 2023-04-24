import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import Typography from "typography";
// import sutroTheme from "typography-theme-sutro";
// const typography = new Typography(sutroTheme);
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const Link = styled.a`
  color: #0072c6;
  text-decoration: none;
  &:hover {
    color: #005fb3;
    text-decoration: underline;
  }
`;

function Sece() {
  return (
    <>
      <Navbar />

      <div className="card" style={{ margin: "20px" }}>
        <h3
          className="card-header "
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          HEAT ASPECTS OF ELECTRIC VEHICLE
        </h3>
        <div className="card-body">
          {/* <div className="container mt-3">
            <Typography
              style={{ backgroundColor: "#F2F2F2", textAlign: "justify" }}
            >
              The temperature of battery modules in electric vehicles (EVs) must
              be controlled adequately to remain within a specified range for
              optimum performance.
            </Typography>
          </div> */}
          <div className="container mt-3">
            <Typography
              style={{ backgroundColor: "#F2F2F2", textAlign: "justify" }}
            >
              The temperature of battery modules in electric vehicles (EVs) must
              be controlled adequately to remain within a specified range for
              optimum performance. The performance, lifespan, durability and
              cost of electric vehicles are highly dependent on the battery
              packs. Battery temperature is a crucial parameter for the battery
              performance. Most batteries can only charge or discharge
              efficiently and safely in a certain temperature range. High
              temperatures above the defined operating range can significantly
              reduce the lifetime and even damage the battery. Battery
              temperatures below the defined operating temperature range
              (especially below 0 °C) lead to a decrease in voltage and charge
              of the battery. In both cases, the performance and lifetime of the
              battery are reduced, resulting in higher costs and decreased
              reliability of the electric vehicles. It is therefore crucial to
              keep the battery modules within a defined temperature range. This
              requires an effective thermal management system.
            </Typography>
          </div>
          <div className="container mt-3">
            <Typography
              style={{ backgroundColor: "#F2F2F2", textAlign: "justify" }}
            >
              A good thermal management system must maintain the batteries in a
              defined temperature range, when the vehicles operate in both hot
              and cold climates. Most batteries generate a significant amount of
              heat during discharge, which must be dissipated by adequate
              cooling from the thermal management system. Also, heating is
              necessary when the vehicles operate in cold winter climates. The
              thermal management system should be able to maintain a uniform
              temperature among all battery cells in the entire battery pack.
              Previous studies have found that temperature gradients between
              modules reduce the overall battery pack capacity. Temperature
              uniformity within a battery pack is important to ensure all
              battery cells operate as close as possible within the defined
              temperature range, to maintain high performance and lifetime of
              the whole pack. Thus, good thermal management is crucial for
              reducing the life-cycle costs of EVs.
            </Typography>
          </div>
          <div className="container mt-3">
            <Typography
              style={{ backgroundColor: "#F2F2F2", textAlign: "justify" }}
            >
              When higher current is extracted from the Li-ion cells, heat is
              generated due to the ohmic law. Therefore, it is vital to design a
              successful thermal management system (TMS) to prevent excessive
              temperature increase and temperature excursion in the battery
              pack. During the phase change process, PCMs absorb heat and create
              a cooling effect. In the discharging (solidification) process,
              stored heat is released and it creates a heating effect
            </Typography>
          </div>
          <div className="container mt-3">
            <Typography
              style={{ backgroundColor: "#F2F2F2", textAlign: "justify" }}
            >
              Despite the small peripheral surface of the prismatic cell, the
              orthotropic property of Li-ion cells improves the planar heat
              transfer and effectiveness of the PCM around the cell. A numerical
              study is conducted using a finite volume-based method. The results
              show that the maximum temperature and temperature excursion in the
              cell are reduced when PCM is employed. The PCM with 12 mm
              thickness decreases the temperature by 3.0 K. Furthermore, the
              effect of the PCM on the cell temperature is more pronounced when
              the cooling system is under transient conditions. When a 3
              mm-thick PCM is employed for the Li-ion cell, the temperature
              distribution becomes about 10% more uniform which is an important
              result in thermal management systems in electric vehicles.
            </Typography>
          </div>

          <div className="container">
            <h4>Resources</h4>
            <ul>
              <li>
                <Link href="https://www.sciencedirect.com/science/article/pii/S0017931010004229">
                  Heat transfer in phase change materials for thermal management
                  of electric vehicle battery modules
                </Link>
              </li>
              <li>
                <Link href="https://www.sciencedirect.com/science/article/pii/S001793101400009X">
                  Heat transfer and thermal management with PCMs in a Li-ion
                  battery cell for electric vehicles
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Sece;
