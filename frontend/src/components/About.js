import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styled from "styled-components";

const Link = styled.a`
  color: #0072c6;
  text-decoration: none;
  &:hover {
    color: #005fb3;
    text-decoration: underline;
  }
`;

function About() {
  return (
    <>
      <Navbar />
      <div className="card" style={{ margin: "20px" }}>
        <h3
          className="card-header "
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          ABOUT
        </h3>
        <div className="container card-body">
          {/* Theory about us */}

          <h5 className="card-title">Carbon Emmission</h5>
          <div className="card-text" style={{ textAlign: "justify" }}>
            <div style={{ backgroundColor: "#F2F2F2" }}>
              <p>
                Energy is one of the keys supporting economic development and
                playing an essential in our daily life. It is the sector that
                contributes significantly to various sustainability issues, such
                as GHG (Greenhouse Gases) emissions, air pollutants, water use
                and poverty. At the same time, the energy sector has prevalent
                room for improvement and is the target solution in various
                sustainability-related policies.
                <br />
              </p>
            </div>
            <div style={{ backgroundColor: "#F2F2F2" }}>
              <p>
                <br />
                As nations bind together to tackle global climate change, one of
                the urgent needs is the energy sector's transition from
                fossil-fuel reliant to a more sustainable carbon-free solution.
                Recent progress shows that advancement in energy efficiency
                modelling of components and energy systems has greatly
                facilitated the development of more complex and efficient energy
                systems. The scope of energy system modelling can be based on
                temporal, spatial and technical resolutions. The emergence of
                novel materials such as MXene, metal-organic framework and
                flexible phase change materials have shown promising energy
                conversion efficiency. The integration of the internet of things
                (IoT) with an energy storage system and renewable energy
                supplies has led to the development of a smart energy system
                that effectively connects the power producer and end-users,
                thereby allowing more efficient management of energy flow and
                consumption. The future smart energy system has been redefined
                to include all energy sectors via a cross-sectoral integration
                approach, paving the way for the greater utilization of
                renewable energy.
                <br />
              </p>
            </div>
            <br />
            {/* Tables  */}
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Energy</th>
                  <th scope="col">EROI</th>
                  <th scope="col">LCOE[USD/MWh]</th>
                  <th scope="col">Carbon Footprint [kg/MWh]</th>
                  <th scope="col">Water Footprint [L/MWh]</th>
                  <th scope="col">NOx [kg/MWh]</th>
                  <th scope="col">SO2 [kg/MWh]</th>
                  <th scope="col">
                    Land use/biodiversity losses [acres/GWh/y]
                  </th>
                  <th scope="col">Risk [death rate/TWh]</th>
                  <th scope="col">End of Life Management - reclamation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Fossil Fuel (Coal)</th>
                  <td>10.7–39.1</td>
                  <td>65-159 (45 in average)</td>
                  <td>855</td>
                  <td>2220</td>
                  <td>2.1</td>
                  <td>3.365</td>
                  <td>11.11 (once)</td>
                  <td>24.62</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
            <br />
            <div style={{ backgroundColor: "#F2F2F2" }}>
              <p>
                <br />
                In the thermal sector, the development of 4th generation
                district heating (4GDH) is envisioned to meet the demand for
                more energy-efficient buildings and integrate district heating
                and renewable energy sources into a smart energy system. The
                4GDH system is defined as a smart thermal grid that integrates
                the supply of heat to low-energy buildings with low grid losses,
                utilizing low-temperature heat sources that is integrated into
                the operation of smart energy systems, by considering the
                planning, cost and incentive structures to ensure the
                sustainability of the systems.
                <br />
              </p>
            </div>
            <div style={{ backgroundColor: "#F2F2F2" }}>
              <p>
                <br />
                Substantial changes in population size, age structure, and
                urbanization are expected in many parts of the world this
                century. Although such changes can affect energy use and
                greenhouse gas emissions, emissions scenario analyses have
                either left them out or treated them in a fragmentary or overly
                simplified manner. We carry out a comprehensive assessment of
                the implications of demographic change for global emissions of
                carbon dioxide. Using an energy–economic growth model that
                accounts for a range of demographic dynamics, we show that
                slowing population growth could provide 16–29% of the emissions
                reductions suggested to be necessary by 2050 to avoid dangerous
                climate change. We also find that aging and urbanization can
                substantially influence emissions in particular world regions.
                <br />
              </p>
            </div>
            <div style={{ backgroundColor: "#F2F2F2" }}>
              <p>
                <br />
                Statistical analyses of historical data suggest that population
                growth has been one driver of emissions growth over the past
                several decades and that urbanization, aging, and changes in
                household size can also affect energy use and emissions.
                Demographers expect major changes in these dimensions of
                populations over the coming decades. Global population could
                grow by more than 3 billion by mid-century, with most of that
                difference accounted for by growing urban populations.
              </p>
            </div>
            <div style={{ backgroundColor: "#F2F2F2" }}>
              <p>
                <br />
                More recently, a large emissions scenario literature has
                developed that informs a wide range of climate change analysis
                and related policy discussions. Model sophistication and scope
                has increased substantially over time. Scenarios typically span
                timescales of decades to centuries, include emissions of
                multiple gases and aerosols from a range of sectors, including
                land use, and consider a wide range of emissions drivers.
                <br />
              </p>
            </div>

            <div container>
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link href="https://www.sciencedirect.com/science/article/pii/S0360544221030504">
                    Post COVID-19 ENERGY sustainability and carbon emissions
                    neutrality
                  </Link>
                </li>
                <li>
                  <Link href="https://www.pnas.org/doi/full/10.1073/pnas.1004581107">
                    Global demographic trends and future carbon emissions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
