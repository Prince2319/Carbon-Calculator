import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import impt from "../image/impactspic.jpg";
import cc from "../image/climate2.jpg";
import ocean from "../image/ocean.jpg";
import bio from "../image/biodiversity.jpg";
import disaster from "../image/disaster.jpg";
import health from "../image/health.jpg";
import eco from "../image/economic.jpg";
import "./Card.css";

function Secb() {
  return (
    <>
      <Navbar />
      {/* <div className="sec1">
        <img
          src={impt}
          className="img-fluid "
          alt="Responsive"
          style={{ height: "650px", width: "100vw" }}
        ></img>
        <h1
          className="position-absolute top-50  fw-bold text-light"
          style={{ marginLeft: "35px" }}
        >
          Impacts
        </h1>
      </div> */}

      <div className="sec1">
        <h2 style={{}}>IMPACTS</h2>
      </div>

      {/* <div className="sec1">
        <img style={{height: ""}} src={impt} alt="" />
      </div> */}

      {/* <div className=" card" style={{ width: "100vw" }}>
        <img src={impt} className=" card-img-top" alt="..." />
        <div className=" card-body">
          <h5 className=" card-title">Card title</h5>
          <p className=" card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className=" btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div> */}
      {/* <div className="card" style={{width: '75rem', marginLeft: '31px'}}>
        <img src={impt} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">IMPACTS</h3>
            <p className="card-text">Carbon emissions have a wide range of impacts on the environment and human health. Some of the most significant impacts are:</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Climate Change:</strong> The primary impact of carbon emissions is the contribution to global warming and climate change. Greenhouse gases like carbon dioxide trap heat in the atmosphere, leading to rising temperatures and changes in the Earth's climate.</li>
            <li className="list-group-item"><strong>Ocean Acidification:</strong> When carbon dioxide is released into the atmosphere, it dissolves in the ocean, lowering its pH and making it more acidic. This can have negative impacts on marine life, such as coral reefs and shellfish.</li>
            <li className="list-group-item"><strong>Health Impacts:</strong> Air pollution from carbon emissions can have serious health effects, including respiratory and cardiovascular disease, stroke, and lung cancer.</li>
            <li className="list-group-item"><strong>Natural Disasters:</strong> The changing climate brought on by carbon emissions can result in more frequent and severe natural disasters, such as hurricanes, droughts, and wildfires.</li>
            <li className="list-group-item"><strong>Biodiversity Loss:</strong> Rising temperatures and changes in the climate can cause species to migrate to new habitats, leading to declines in biodiversity.</li>
            <li className="list-group-item"><strong>Economic Impacts:</strong> The costs of mitigating and adapting to the impacts of carbon emissions can be significant, affecting not just the energy sector but also agriculture, water resources, and many others.</li>
          </ul>
        </div> */}

      <div className="container card-deck mt-2 mb-2">
        <div className="row">
          <div className="col-sm-4">
            {/* <div className="" style={{ width: "18rem" }}> */}
            <div className="card c2">
              <img className="card-image c-i2" src={cc} alt="Loading" />
              <div className="card-body c-b2">
                <h3 className="card-title c-t2">Climate Change</h3>
                <p className="card-text c-tt2">
                  Carbon emissions are the main driver of global warming, which
                  is causing significant changes to the Earth's climate
                  patterns. This includes rising temperatures, sea levels, and
                  changing precipitation patterns, which are leading to more
                  frequent and severe heatwaves, droughts, floods, and other
                  extreme weather events. Climate change also poses a risk to
                  food security, water availability, and human health
                </p>
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card c2">
              <img className="card-image c-i2" src={ocean} alt="Loading" />
              <div className="card-body c-b2">
                <h3 className="card-title c-t2">Ocean Acidification</h3>
                <p className="card-text c-tt2">
                  When carbon dioxide is released into the atmosphere, it
                  dissolves in the ocean, lowering its pH and making it more
                  acidic. This can have negative impacts on marine life, such as
                  coral reefs and shellfish. The increasing acidity of the ocean
                  can also lead to changes in the behavior and physiology of
                  marine organisms, affecting their ability to find food and
                  avoid predators. This can have complex and far-reaching
                  impacts on entire ecosystems, with potential consequences for
                  human food security and livelihoods.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card c2">
              <img className="card-image c-i2" src={health} alt="Loading" />
              <div className="card-body c-b2">
                <h3 className="card-title c-t2">Health Impacts </h3>
                <p className="card-text c-tt2">
                  Air pollution from carbon emissions can have serious health
                  effects, including respiratory and cardiovascular disease,
                  stroke, and lung cancer. In addition to respiratory and
                  cardiovascular problems, exposure to air pollution can also
                  increase the risk of certain cancers and neurological
                  disorders. Children, the elderly, and people with pre-existing
                  health conditions are especially vulnerable to the impacts of
                  air pollution.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="card c2">
              <img className="card-image c-i2" src={disaster} alt="Loading" />
              <div className="card-body c-b2">
                <h3 className="card-title c-t2">Natural Disasters</h3>
                <p className="card-text c-tt2">
                  Climate change is leading to more frequent and severe extreme
                  weather events like hurricanes, floods, and wildfires. These
                  disasters can cause significant damage to property and
                  infrastructure, as well as putting human lives at risk. In
                  addition to the immediate impacts, natural disasters can also
                  have long-term economic and social impacts on affected
                  communities. Vulnerable populations like low-income
                  communities and indigenous groups are often disproportionately
                  affected by natural disasters.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card c2">
              <img className="card-image c-i2" src={bio} alt="Loading" />
              <div className="card-body c-b2">
                <h3 className="card-title c-t2">Biodiversity Loss</h3>
                <p className="card-text c-tt2">
                  Climate change and other impacts of carbon emissions can lead
                  to the loss of biodiversity, as many species struggle to adapt
                  to changing conditions. This can have cascading effects
                  through ecosystems, leading to the collapse of certain
                  populations and the loss of important ecosystem services like
                  pollination and nutrient cycling. The loss of biodiversity can
                  lead to a decrease in the resilience and stability of
                  ecosystems, making them more vulnerable to further
                  disturbances like climate change or pollution.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card c2">
              <img className="card-image c-i2" src={eco} alt="Loading" />
              <div className="card-body c-b2">
                <h3 className="card-title c-t2">Economic Impacts</h3>
                <p className="card-text c-tt2">
                  Carbon emissions and their associated impacts can also have
                  significant economic impacts, including damage to
                  infrastructure and property, losses in agricultural
                  productivity, increased healthcare costs, and the cost of
                  mitigating and adapting to the impacts of climate change. At
                  the same time, transitioning to cleaner forms of energy and
                  reducing carbon emissions can also create economic
                  opportunities in areas like renewable energy and energy
                  efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="row">
        <div className="col-md-4 col-sm-6 grid-col grid-item small text-over-media image" style={{height:"240px"}}>
          div.cheme-grid-media
        </div>
      </div> */}
      <Footer />
    </>
  );
}

export default Secb;
