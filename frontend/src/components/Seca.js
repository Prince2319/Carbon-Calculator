import React from "react";
import Navbar from "./Navbar";
import pic1 from "../image/carbonfootprintpic1.jpg";
import pic2 from "../image/carbonfootprintpic2.jpg";
import pic3 from "../image/carbonfootprintpic3.png";

// const styles = {
//   a: {
//     color: "#0072c6", // set the default link color
//     textDecoration: "none", // remove the underline
//     ":hover": {
//       color: "#005fb3", // set the color to a darker shade of blue on hover
//       textDecoration: "underline", // add an underline on hover
//     },
//   },
// };

import styled from "styled-components";

const Link = styled.a`
  color: #0072c6;
  text-decoration: none;
  &:hover {
    color: #005fb3;
    text-decoration: underline;
  }
`;
function Seca() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div>
          <h3>
            Carbon Footprint: Understanding and Reducing Your Environmental
            Impact{" "}
          </h3>
          <p>
            {" "}
            In recent years, there has been a growing concern about the impact
            of human activity on the environment. One key aspect of this impact
            is the carbon footprint, which is a measure of the greenhouse gases
            (primarily carbon dioxide) that are emitted as a result of human
            activity. In this article, we will understand what carbon footprint
            is, how it affects the environment, and what individuals and
            organizations can do to reduce it. Carbon footprint is a term used
            to describe the total amount of greenhouse gases (GHG) that are
            produced as a result of human activities, such as driving a car,
            heating a home, or running a business. These gases are primarily
            made up of carbon dioxide (CO2), but can also include other gases
            such as methane, nitrous oxide, and fluorinated gases.
          </p>
        </div>
        <div>
          <h3>MEASURING CARBON FOOTPRINT</h3>
          <p>
            Carbon footprint is usually measured in terms of carbon dioxide
            equivalent (CO2e), which takes into account the potency of other
            greenhouse gases such as methane and nitrous oxide. CO2 is the most
            abundant GHG and is responsible for about 76% of global emissions.
            Other greenhouse gases like methane and nitrous oxide, are much more
            potent than CO2, but they are present in much smaller{" "}
          </p>
          <div
            className="image-container d-flex"
            style={{ justifyContent: "space-between" }}
          >
            <img
              src={pic1}
              alt="Loading"
              style={{
                padding: "5px",
                height: "500px",
                width: "500px",
                border: "outset black 2px",
              }}
            />
            <img
              src={pic2}
              alt="Loading"
              style={{
                padding: "5px",
                height: "500px",
                width: "500px",
                border: "outset black 2px",
              }}
            />
          </div>
          <img
            src={pic3}
            alt="Loading"
            style={{
              padding: "5px",
              height: "500px",
              width: "500px",
              border: "outset black 2px",
            }}
          />
        </div>
        <div>
          <h3>HOW DOES CARBON FOOTPRINT AFFECT ENVIRONMENT?</h3>
          <p>
            An increased carbon footprint has significant impacts on the
            environment. Carbon footprint is a measure of the greenhouse gases,
            mainly carbon dioxide, that are released into the atmosphere by
            human activities such as transportation, energy consumption, and
            industrial production. Here are some of the ways an increased carbon
            footprint affects the environment:
          </p>
          <ol>
            <li>
              <h4>Climate Change:</h4>
              <p>
                Carbon emissions contribute to global warming, which leads to
                changes in weather patterns, rising sea levels, melting glaciers
                and ice caps, and changes in ecosystems and biodiversity.
                Climate change also leads to more frequent and severe natural
                disasters such as hurricanes, droughts, and floods.
              </p>
            </li>
            <li>
              <h4>Air Pollution: </h4>
              <p>
                Carbon emissions contribute to air pollution, which can have
                serious health impacts on individuals and communities. Exposure
                to air pollution can lead to respiratory illnesses such as
                asthma and lung cancer, and can also aggravate existing
                conditions such as heart disease.
              </p>
            </li>
            <li>
              <h4>Ocean Acidification: </h4>
              <p>
                As carbon emissions are absorbed by the oceans, they lead to
                ocean acidification. This process lowers the pH levels of
                seawater, making it more acidic. This has a significant impact
                on marine life, especially those with calcium carbonate shells
                or skeletons, which are vulnerable to dissolution in acidic
                waters.
              </p>
            </li>
            <li>
              <h4>Biodiversity Loss:</h4>
              <p>
                Changes in climate and ocean acidification have a significant
                impact on biodiversity. Changes in temperature and precipitation
                patterns can affect the distribution and survival of many
                species, while ocean acidification can affect the survival of
                marine life with calcium carbonate shells or skeletons.
              </p>
            </li>
          </ol>
          <p>
            In conclusion, an increased carbon footprint has far-reaching
            impacts on the environment, including climate change, air pollution,
            ocean acidification, biodiversity loss, and water scarcity. Reducing
            carbon emissions is essential to mitigate the impacts of climate
            change and ensure a sustainable future for the planet.
          </p>
        </div>
        <div>
          <h3> REDUCING CARBON FOOTPRINT</h3>
          <p>
            Reducing carbon footprint is an essential step towards mitigating
            the impacts of climate change. Here are some ways that individuals,
            businesses, and governments can reduce carbon emissions and create a
            more sustainable future:
          </p>
          <ol>
            <li>
              <h4>Use Energy More Efficiently (personal level):</h4>
              <p>
                One of the most effective ways to reduce carbon footprint is to
                use energy more efficiently. This can be done by improving the
                insulation of homes and buildings, using energy-efficient
                appliances, and switching to renewable energy sources such as
                solar or wind power. Simple changes such as turning off lights
                when leaving a room, using a programmable thermostat, and
                unplugging electronics when not in use can also help to reduce
                energy consumption.
              </p>
            </li>
            <li>
              <h4>Reduce Transportation Emissions:</h4>
              <p>
                Transportation is a major source of carbon emissions, so
                reducing the number of miles driven, using public
                transportation, or switching to electric or hybrid vehicles can
                help reduce carbon footprint. Walking or cycling for short
                distances, carpooling with co-workers or friends, and using
                teleconferencing instead of traveling for meetings can also help
                to reduce transportation emissions.
              </p>
            </li>
            <li>
              <h4>Adopt Sustainable Practices:</h4>
              <p>
                {" "}
                Adopting sustainable practices in agriculture, forestry, and
                industry can help reduce carbon emissions. This can include
                using regenerative farming techniques, reducing waste and
                emissions in manufacturing, and using sustainable materials in
                construction. For example, choosing to buy locally produced
                goods reduces the carbon emissions associated with
                transportation and supports the local economy.
              </p>
            </li>
            <li>
              <h4>Reduce Waste:</h4>
              <p>
                Reducing waste is another way to reduce carbon footprint. This
                can be done by reducing packaging, composting food waste, and
                recycling. Avoiding single-use products and choosing to reuse or
                repair items instead of buying new ones can also help to reduce
                waste and emissions.
              </p>
            </li>
            <li>
              <h4>Offset Carbon Emissions:</h4>
              <p>
                In some cases, it may not be possible to completely eliminate
                carbon emissions. In these cases, offsetting carbon emissions
                through programs such as planting trees or investing in
                renewable energy projects can help reduce overall carbon
                footprint. Individuals and businesses can also purchase carbon
                offsets to offset their emissions and support sustainable
                projects.
              </p>
            </li>
          </ol>
        </div>

        <div>
          <h4>Conclusion:</h4>
          <p>
            Reducing carbon footprint is a critical step towards mitigating the
            impacts of climate change. By adopting sustainable practices, using
            energy more efficiently, reducing waste, and offsetting emissions,
            individuals, businesses, and governments can work together to reduce
            carbon emissions and create a more sustainable future.
          </p>
        </div>

        <div>
          <h3>Resources</h3>
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
            <li>
              <Link href="https://www.statista.com/statistics/955980/india-distribution-of-ghg-emissions-by-sector/">
                Sectorwise GHG emission in india
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Seca;
