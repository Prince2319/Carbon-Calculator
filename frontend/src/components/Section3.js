import React from "react";
import quote1 from "../image/quoteek.jpg";
import quote2 from "../image/quotedo.jpg";

export default function Section3() {
  return (
    <>
      <div className="quote">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={quote1} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8 d-flex align-items-center">
              <div className="card-body ">
                {/* <h5 className="card-title">Card title</h5> */}
                <h5 className="card-text">
                  " If you really think that the environment is less important
                  than the economy, try holding your breath while you count your
                  money. "
                </h5>
                <p>
                  -- Guy McPherson, Scientist, Professor at
                  University of Arizona
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-8 d-flex align-items-center">
              <div className="card-body">
                {/* <h5 className="card-title">Card title</h5> */}
                <h5 className="card-text">
                  ” I have long understood that carbon emission is not only an
                  environmental issue - it is a humanitarian, health, economic,
                  and justice issue as well. ”
                </h5>
                <p>
                  -- Frances Beinecke, environmental activist and former
                  president of Natural Resources Defence Council, United States
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src={quote2}
                className="img-fluid rounded-start"
                alt="loading"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
