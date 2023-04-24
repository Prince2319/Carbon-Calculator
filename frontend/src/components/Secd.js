import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import { MDBChart, MDBCol } from 'mdb-react-ui-kit';
// import {MDBTypography  } from 'mdb-react-ui-kit';
// import { Bar } from "react-chartjs-2";
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

function Secd() {
  return (
    <>
      <Navbar />
      <div className="card" style={{ margin: "20px" }}>
        <h3
          className="card-header "
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          ELECTRIC VEHICLE
        </h3>
        <div className="card-body">
          <div className="container mt-3">
            <Typography variant="h5" style={{ backgroundColor: "#F2EFE9" }}>
              INTRODUCTION
            </Typography>
            <Typography
              style={{ backgroundColor: "#F2EFE9", textAlign: "justify" }}
            >
              India is steadily moving up on the path of development. However,
              this development has some apparent side effects. One of the major
              concerns of the country at this hour is the ever-increasing
              emissions from the millions of vehicles that run on the country’s
              roads each day. In India, almost 27% of the total pollution is
              caused by vehicles. Air pollution is highest due to vehicles. ICEs
              release particulate matter which is a serious challenge in India.
            </Typography>
          </div>

          <div className="container mt-3">
            <Typography variant="h5" style={{ backgroundColor: "#C4F6D9" }}>
              Overview of EVs in India
            </Typography>
            <Typography
              style={{ backgroundColor: "#C4F6D9", textAlign: "justify" }}
            >
              India's first electric car was Reva by Mahindra. It was introduced
              in 2001 but it could sell a few units after its launch. In 2010,
              Toyota began the Prius hybrid model, followed by the Camry hybrid
              in 2013. Electric buses and hybrid vehicles have been commenced as
              a pilot proposal in a few cities like Mumbai, Bangalore and Delhi.
              There is a vision for 100% EVs by 2030.
            </Typography>
          </div>

          <div className="container mt-3">
            <Typography variant="h5" style={{ backgroundColor: "#E3E9EA" }}>
              Advantages of EVs over ICE
            </Typography>
            <Typography
              style={{ backgroundColor: "#E3E9EA", textAlign: "justify" }}
            >
              <ul>
                <li>
                  Low operational costs: Petrol rates are Rs. 100 per litre
                  while using 5 to 8 Rs. per kWh
                </li>
                <li> No Carbon Emissions.</li>
                <li>
                  Three motors can give 30 power configurations in 3-Wheelers to
                  support everyone’s needs.
                </li>
                <li>Less moving parts means no vibrations.</li>
                <li>
                  {" "}
                  No maintenance costs and saving on lubricants and oils.
                </li>
                <li>Reduced friction losses.</li>
                <li>
                  {" "}
                  EVs are more energy efficient. In ICEs, 16/100 units of fuel
                  consumed result in propulsion. In the case of EVs, 85/100
                  units of electricity are used for driving.
                </li>
                <li>
                  An electric vehicle is very quiet and smooth. The motor RPM
                  can be changed easily so no need for a gearbox or clutch
                  system. No bump or jolt in transmission.
                </li>
                <li>
                  {" "}
                  Electric vehicles are much lighter than ICE. This decrease
                  brake wear and increases pick-up especially on an uphill
                  drive. This is a benefit for goods vehicles.
                </li>
              </ul>
            </Typography>
          </div>

          <div className="container">
            <Typography variant="h5" style={{ backgroundColor: "#F6E5F9" }}>
              Consumer Perspective on EVs
            </Typography>
            <Typography
              style={{ backgroundColor: "#F6E5F9", textAlign: "justify" }}
            >
              Consumers like the idea of Electric Vehicles as that reduces fuel
              costs. However, due to a series of drawbacks of using EVs, they
              are more inclined towards a hybrid car.
            </Typography>
          </div>

          <div className="container mt-3">
            <Typography variant="h5" style={{ backgroundColor: "#B5D5D6" }}>
              Challanges in the use of EVs
            </Typography>
            <Typography
              style={{ backgroundColor: "#B5D5D6", textAlign: "justify" }}
            >
              <ol>
                <li>
                  <h5>High Capital Cost</h5>
                  <div className="body">
                    <p>
                      The heart of EVs is the battery and it does not come
                      cheap. It accounts for 30% to 40% of the cost of the
                      vehicle. Although the costs are going down each year,
                      still the amount is significant. From the above data, one
                      can infer that the battery capacity of vehicles. Typically
                      electric scooters/rickshaws run on 48V to 60V lithium-ion
                      battery packs with an average capacity between 1.2 to 2.5
                      kWh. They give a range of 50 to 80 km in a single charge.
                      On the other hand, a 4 wheeler requires a battery of 30
                      kWh to 35 KWh to give a range of 300 to 400 km. Thus, we
                      can say that long-distance road trips are difficult with
                      these batteries. The Tesla Model S and Model X uses a
                      minimum 100 kWh battery. They easily give a range up to
                      500 to 600 km. At the moment the average cost of a
                      lithium-ion battery pack is about $140 per kilowatt-hour
                    </p>
                  </div>
                </li>
                <li>
                  <h5>Battery Charging Constraints</h5>
                  <div className="body">
                    <p>
                      The Life of the battery is measured in several charging
                      and discharging cycles. In addition, the battery charge
                      should lie between 5% to 80%. If the charge falls down 5%
                      value, the life of electrodes depletes. If the charge
                      exceeds 80%, there will be a spill. Moreover, fast
                      charging reduces battery life. The battery needs to be
                      charged at a slow rate at temperature conditions of 25 °𝐶
                      𝑡𝑜 40 °𝐶 . The temperatures in India easily go to above
                      40℃. Hence, an efficient Battery Thermal Management System
                      is required.
                    </p>
                  </div>
                </li>
                <li>
                  <h5>Indirect Pollution by Batteries</h5>
                  <div className="body">
                    <p>
                      A Li-ion battery is used in an EV because Li-ion batteries
                      power density is much high than any type ofother
                      conventional battery. Also, their weight/ power ratio is
                      high and they are safer than other batteries. India isn’t
                      a leading producer of Lithium hence, the raw material has
                      to be imported. In addition, lithium mining leads to a
                      huge amount of pollution.
                    </p>
                  </div>
                </li>
                <li>
                  <h5>Lack of Infrastructure</h5>
                  <div className="body">
                    <p>
                      ICE requires petrol or diesel. There are over 80,000
                      petrol pumps in India. These infrastructures were built
                      over a long time. Switching to electric vehicles will
                      require a similar infrastructure for battery charging. The
                      catch is battery charging can take hours. Fast charging
                      still requires an hour while super-fast charging will take
                      15 minutes. As compared to refuelling this is a lot of
                      time. Hence, a small space like a petrol station can never
                      tend to the needs of everyone.
                    </p>
                  </div>
                </li>
                <li>
                  <h5>Heat Dissipation and Insulation</h5>
                  <div className="body">
                    <p>
                      Batteries have two types of power: Peak Power and Average
                      Power. Average power is always less than peak power. In
                      any case, we cannot run the battery at peak power for more
                      than a few minutes. Running the battery at peak power
                      causes a huge amount of heat generation which can be
                      lethal. Hence, the battery always has to run on average
                      power. Having a huge battery also requires good insulation
                      which isolates the electric system to avoid shocks. This
                      further constraint the size of the battery that can be
                      used.
                    </p>
                  </div>
                </li>
              </ol>
            </Typography>
          </div>

          <div className="container">
            <Typography variant="h5" style={{ backgroundColor: "#FFF8CC" }}>
              CONCLUSION
            </Typography>
            <Typography
              style={{ backgroundColor: "#FFF8CC", textAlign: "justify" }}
            >
              Indian automotive industry has become a favourable investment
              destination by global auto industry major manufacturers.
              Currently. India is the second main manufacturer of two-wheelers,
              fifth major commercial vehicle manufacturer in the world. It is
              the fourth chief passenger car market in Asia and the largest
              motorcycle manufacture hence the opportunities for electric
              vehicles are very large. By studying the facts one can conclude
              that it’s obvious that internal combustion engine vehicles will
              lose the battle against electric vehicles. In recent times,
              demographic factors like increasing purchasingpower, new
              environmentally friendly vehicle launches, flourishing exports and
              easy finance accessibility have resulted in increased automobile
              sale volumes. If people are provided with better options than ICEs
              then the sales of EVs will boom.
            </Typography>
          </div>

          <div container>
            <h4>Resources</h4>
            <ul>
              <li>
                <Link href="https://ourworldindata.org/co2-emissions">
                  Global GHG emission data
                </Link>
              </li>
              <li>
                <Link href="https://ourworldindata.org/co2-emissions">
                  Per capita CO<sub>2</sub> emission in year 2021
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

export default Secd;
