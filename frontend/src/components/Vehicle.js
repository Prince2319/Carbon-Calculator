import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Vehicle() {
  // const [first, setfirst] = useState(null)

  // const akshay= ()=>{
  //   setfirst = 10;
  // }
  const [comparableBattery, setComparableBattery] = useState(null);
  const [evValue, setEvValue] = useState(null);
  const [emissionfactor, setEmissionfactor] = useState();
  const [mielage, setMielage] = useState(null);

  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  const [print2, setPrint2] = useState(false);

  // const [data3w, setData3w] = useState(0)
  // const [data4w, setData4w] = useState(0)

  // const onChange = (e) => {
  //   setPrint(false);
  //    setComparableBattery({...comparableBattery, comparableBattery:e.target.value})
  //   // setEvValue(e.target.value2)
  //   // setMielage(e.target.mielage)
  //   // setMielage(e.target.value);
  //   // if(e.target.value === 2.5){
  //   //   setMielage(48)
  //   // }else if(e.target.value === 7.4){
  //   //   setMielage(27.5)
  //   // }else{
  //   //   setMielage(15)
  //   // }
  // };

  const onChange2 = (e) => {
    setPrint(false);

    setData(e.target.value);
  };

  const handleClick = () => {
    setPrint(true);
    setPrint2(true);
  };
  const handleClick2 = () => {
    setData(0);
    setEvValue(0);
    setComparableBattery(0);
    setMielage(0);
  };

  return (
    <>
      <Navbar />

      <div className="container my-5 border-top border-bottom border-start border-end border-dark">
        <div className="row">
          <div className="col-auto">
            <div className=" mb-3">
              <label htmlFor="inputPassword6" className="col-form-label">
                Vehicle Segment
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                // mielage={mielage} value2={evValue} value={comparableBattery}
                // onChange={onChange}
                style={{ width: "20vw" }}
              >
                <option selected value="0">
                  Select
                </option>
                <option value="">2W (Two-Wheeler)</option>
                <option value="">3W (Three-Wheeler)</option>
                <option value="">4W (Four-Wheeler)</option>
              </select>
              {/* value="2.5" value2="120"  value="7.4" value2="100"  value="45"  value2="250"  */}
            </div>
          </div>

          <div className="col-auto">
            <div className="mb-3">
              <label htmlFor="inputPassword6" className="col-form-label">
                Vechicle Fuel Type
                {/* {JSON.stringify(emissionfactor)} */}
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="type"
                value={emissionfactor}
                onChange={(e) => setEmissionfactor(e.target.value)}
                style={{ width: "20vw" }}
              >
                <option selected value="0">
                  Select
                </option>
                <option value="2.17">PETROL</option>
                <option value="2.7">DIESEL</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row g-5 align-items-center mb-3">
          <div className="col-auto">
            <label htmlFor="inputPassword6" className="col-form-label">
              Monthly Journey Distance
            </label>
          </div>
          <div className="col-auto">
            <div className="input-group">
              <div className="input-group-text">km</div>
              <input
                type="text"
                className="form-control"
                id="autoSizingInputGroup"
                placeholder=""
                value={data}
                onChange={onChange2}
              />
            </div>
          </div>
        </div>

        <div className="row g-5 align-items-center mb-3">
          <div className="col-auto">
            <label htmlFor="inputPassword6" className="col-form-label">
              Mileage
            </label>
          </div>
          <div className="col-auto">
            <div className="input-group">
              <div className="input-group-text">km/ltr</div>
              <input
                type="text"
                className="form-control"
                id="autoSizingInputGroup"
                placeholder=""
                value={mielage}
                onChange={(e) => {
                  setMielage(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <div className="row g-5 align-items-center mb-3">
          <div className="col-auto">
            <label htmlFor="inputPassword6" className="col-form-label">
              C-emission factor
            </label>
          </div>
          <div className="col-auto">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="autoSizingInputGroup"
                placeholder=""
                value={emissionfactor}
                // onChange={(e)=> {setMielage(emissionfactor)}}
              />
            </div>
          </div>
        </div>

        <div className="row g-5 align-items-center mb-3">
          <div className="col-auto">
            <label htmlFor="inputPassword6" className="col-form-label">
              Comparable EV Battery Capacity
            </label>
          </div>
          <div className="col-auto">
            <div className="input-group">
              <div className="input-group-text">kWh</div>
              <input
                type="text"
                className="form-control"
                id="autoSizingInputGroup"
                placeholder=""
                value={comparableBattery}
                onChange={(e) => {
                  setComparableBattery(e.target.value);
                }}
                // value={comparableBattery.comparableBattery}
              />
              {/* <h1>{comparableBattery}</h1> */}
            </div>
          </div>
        </div>

        <div className="row g-5 align-items-center mb-3">
          <div className="col-auto">
            <label htmlFor="inputPassword6" className="col-form-label">
              EV Range
              {/* {JSON.stringify(evValue)} */}
            </label>
          </div>
          <div className="col-auto">
            <label
              className="visually-hidden"
              htmlFor="autoSizingInputGroup"
            ></label>
            <div className="input-group">
              <div className="input-group-text">km</div>
              <input
                type="text"
                className="form-control"
                id="autoSizingInputGroup"
                placeholder=""
                value={evValue}
                onChange={(e) => {
                  setEvValue(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="text-center mb-3">
          <input
            className="btn btn-primary"
            type="submit"
            value="Calculate"
            onClick={handleClick}
          ></input>
        </div>
        <div className="text-center mb-3">
          <input
            className="btn btn-primary"
            type="submit"
            value="Reset"
            onClick={handleClick2}
          ></input>
        </div>
      </div>

      <div className="container mb-5 border-top border-bottom border-start border-end border-dark ">
        <h3 className="mt-3">Results</h3>

        <div className="col g-3 align-items-center">
          <div className="row-auto mb-3">
            CO2 emissions from conventional vehicle (kg of CO<sub>2 </sub>per
            month) &nbsp; : &nbsp;
            {print ? ((data / mielage) * emissionfactor).toFixed(3) : null}
          </div>

          <div className="row-auto mb-3">
            CO2 emissions due to electric vehicle (kg of CO<sub>2 </sub>per
            month) &nbsp;:&nbsp;
            {print
              ? ((data / evValue) * comparableBattery * 0.83).toFixed(3)
              : null}
          </div>

          <div className="row-auto mb-3">
            <h5>How much will you save?</h5>
            Monthly CO2 emissions savings by opting EV (kg of CO<sub>2 </sub>per
            month) &nbsp;:&nbsp;
            {print
              ? (
                  (data / mielage) * emissionfactor -
                  (data / evValue) * comparableBattery * 0.83
                ).toFixed(3)
              : null}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Vehicle;
