import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Kachchh() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [nameErr, setNameError] = useState(false);
  const [phError, setPhError] = useState(false);
  const [emailMsg, setEmailMsg] = useState("");
  const handleSubmit = (event) => {
    let nmErr = true;
    let phErr = true;
    setEmailMsg("");
    event.preventDefault();
    if (!name || name.length <= 0 || name == null || name === undefined) {
      setNameError(true);
      nmErr = true;
    } else {
      nmErr = false;
      setNameError(false);
    }
    if (!phno || phno == null || phno === undefined || phno.length < 10) {
      setPhError(true);
      phErr = true;
    } else {
      phErr = false;
      setPhError(false);
    }
    if (!nmErr && !phErr) {
      emailjs
        .sendForm(
          "service_v9zn2ll",
          "template_39wtvxi",
          form.current,
          "jrkLYS4T7WvckjHGh"
        )
        .then(
          (result) => {
            setEmailMsg(
              "Successfully submitted Enquiry! A call is on its way to you."
            );
          },
          (error) => {
            setEmailMsg("Server Error. Pls Try After Sometime!");
          }
        )
        .finally(() => {
          setEmail("");
          setName("");
          setPhno("");
        });
    }
  };
  const nameChange = (e) => {
    setEmailMsg("");
    let name = e.target.value;
    setName(name);
    if (!name || name.length <= 0 || name == null || name === undefined) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };
  const emailChange = (e) => {
    setEmailMsg("");
    setEmail(e.target.value);
  };
  const phoneChange = (e) => {
    setEmailMsg("");
    let phNo = e.target.value;
    setPhno(phNo);
    if (!phNo || phNo == null || phNo === undefined || phNo.length < 10) {
      setPhError(true);
    } else {
      setPhError(false);
    }
  };

  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={
                window.location.origin +
                "/assets/images/rann-of-kachchh/rann-of-kachchh-jk-1.jpg"
              }
              alt="Rann-Of-kachchh"
            ></img>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={
                window.location.origin +
                "/assets/images/rann-of-kachchh/rann-of-kachchh-jk-2.jpg"
              }
              alt="Rann-Of-kachchh"
            ></img>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={
                window.location.origin +
                "/assets/images/rann-of-kachchh/rann-of-kachchh-jk-3.jpg"
              }
              alt="Rann-Of-kachchh"
            ></img>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <section
        style={{
          padding: "40px 0",
        }}
      >
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-10">
              <h1
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "300",
                  lineHeight: "1.2",
                }}
                className="font-weight-bold mb-3"
              >
                <u>Rann Utsav Package 2025-26</u>
              </h1>

              <div className="" style={{ overflow: "auto" }}>
                {/* Tariff Table */}
                <table
                  className="table table-striped table-bordered"
                  style={{ minWidth: "100px" }}
                >
                  <thead>
                    <tr>
                      <th
                        colSpan="12"
                        bgcolor="#f4f4f4"
                        height="44"
                        className="month-ttl"
                      >
                        <p className="text-center">
                          Tariff For Oct, Nov, Feb & March 2025-26 (Excluding
                          Full Moon & Diwali)
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td className="td-center" rowSpan="2">
                        Rates (INR) Per Person <br />
                        <strong>On Twin Sharing Basis</strong>
                      </td>
                      <td className="td-center">1 Night</td>
                      <td className="td-center">2 Nights</td>
                      <td className="td-center">3 Nights</td>
                      <td className="td-center">Extra Mattress (Per Night)</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Super Premium Tent</td>
                      <td>₹9,900</td>
                      <td>₹19,000</td>
                      <td>₹27,500</td>
                      <td>₹5,250</td>
                    </tr>
                    <tr>
                      <td>Premium Tent</td>
                      <td>₹8,900</td>
                      <td>₹17,000</td>
                      <td>₹25,000</td>
                      <td>₹5,250</td>
                    </tr>
                    <tr>
                      <td>Deluxe AC Swiss Cottage</td>
                      <td>₹7,900</td>
                      <td>₹15,500</td>
                      <td>₹22,000</td>
                      <td>₹5,250</td>
                    </tr>
                    <tr>
                      <td>Non-AC Swiss Cottage</td>
                      <td>₹5,900</td>
                      <td>₹11,500</td>
                      <td>₹16,000</td>
                      <td>₹4,250</td>
                    </tr>
                  </tbody>
                </table>

                {/* Additional Charges */}
                <table
                  className="table table-striped table-bordered"
                  style={{ minWidth: "100px" }}
                >
                  <thead>
                    <tr>
                      <th
                        colSpan="12"
                        bgcolor="#F4F4F4"
                        height="44"
                        className="month-ttl"
                      >
                        <p className="text-center">Additional Charges</p>
                      </th>
                    </tr>
                    <tr>
                      <td className="td-center">Category</td>
                      <td className="td-center">1 Night</td>
                      <td className="td-center">2 Nights</td>
                      <td className="td-center">3 Nights</td>
                      <td className="td-center">Extra Mattress (Per Night)</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Additional Tariff For Oct, Nov, Feb & Mar <br />
                        (Full Moon & Diwali: 23rd Oct to 26th Oct) | Dec & Jan
                        (Excl. Full Moon & Christmas)
                      </td>
                      <td>₹2,000</td>
                      <td>₹3,500</td>
                      <td>₹4,500</td>
                      <td>
                        ₹5,750 (Super Premium, Premium, Deluxe AC) <br />
                        ₹4,750 (Non-AC Swiss Cottage)
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Additional Tariff For Dec & Jan <br />
                        (19th Dec 2025 - 1st Jan 2026) & Full Moon (Dec & Jan)
                      </td>
                      <td>₹4,000</td>
                      <td>₹5,500</td>
                      <td>₹7,500</td>
                      <td>
                        ₹5,750 (Super Premium, Premium, Deluxe AC) <br />
                        ₹4,750 (Non-AC Swiss Cottage)
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Suites */}
                <table
                  className="table table-striped table-bordered"
                  style={{ minWidth: "100px" }}
                >
                  <thead>
                    <tr>
                      <th
                        colSpan="12"
                        bgcolor="#F4F4F4"
                        height="44"
                        className="month-ttl"
                      >
                        <p className="text-center">All Days</p>
                      </th>
                    </tr>
                    <tr>
                      <td className="td-center">Category</td>
                      <td className="td-center">1 Night</td>
                      <td className="td-center">2 Nights</td>
                      <td className="td-center">3 Nights</td>
                      <td className="td-center">Extra Mattress (Per Night)</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Darbari Suite (4 Pax)</td>
                      <td>₹70,000</td>
                      <td>₹140,000</td>
                      <td>₹210,000</td>
                      <td>₹7,750</td>
                    </tr>
                    <tr>
                      <td>Rajwadi Suite (2 Pax)</td>
                      <td>₹35,000</td>
                      <td>₹70,000</td>
                      <td>₹105,000</td>
                      <td>₹7,750</td>
                    </tr>
                  </tbody>
                </table>

                {/* Notes */}
                <p style={{ marginTop: "20px", fontSize: "14px" }}>
                  * All Rates are exclusive of taxes <br />
                  * Children below 6 years will be complimentary <br />* Rates
                  on single occupancy are 75% of double occupancy cost
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "50px 0", background: "#f8f9fa" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: "300",
                  lineHeight: "1.2",
                }}
                className=" font-weight-bold mb-5 text-warning"
              >
                Submit Your Enquiry Here...
              </h2>
              <div className="title">
                <form ref={form} onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="validationTooltip01">Name</label>
                      <input
                        name="name"
                        onChange={nameChange}
                        type="text"
                        className="form-control"
                        id="validationTooltip01"
                        placeholder="Enter Your Name Here"
                        value={name}
                      ></input>
                      {nameErr ? (
                        <p className="ml-2 text-danger">Name Is Required</p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="validationTooltip02">Phone Number</label>
                      <input
                        name="phno"
                        className="form-control"
                        placeholder="Enter Your Phone Number Here"
                        onChange={phoneChange}
                        value={phno}
                      ></input>
                      {phError ? (
                        <p className="ml-2 text-danger">Invalid Phone Number</p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="col-md-5 mb-3">
                      <label htmlFor="validationTooltip02">Email Address</label>
                      <input
                        name="email"
                        value={email}
                        type="email"
                        className="form-control"
                        id="validationTooltip01"
                        placeholder="Enter Your Email Here"
                        onChange={emailChange}
                      ></input>
                      <div className="valid-tooltip">Looks good!</div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="form-group">
                        <label htmlFor="validationTooltip01">
                          Est. Check-in Date
                        </label>
                        <input
                          name="date"
                          className="form-control"
                          type="text"
                          id="datepicker-8"
                          autoComplete="off"
                          placeholder="Check-in"
                        />
                      </div>
                    </div>
                    <div className="col-md-2 mb-3">
                      Adult
                      <select
                        name="adult"
                        className="custom-select select-big"
                        style={{ height: "40.4px" }}
                      >
                        <option defaultValue="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="8">9</option>
                        <option value="8">10</option>
                        <option value="8">Large Group</option>
                      </select>
                    </div>
                    <div className="col-md-2 mb-3">
                      Child
                      <select
                        name="child"
                        className="custom-select select-big"
                        style={{ height: "40.4px" }}
                      >
                        <option defaultValue="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="8">9</option>
                        <option value="8">10</option>
                        <option value="8">Large Group</option>
                      </select>
                    </div>
                  </div>
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Send"
                  />
                  {emailMsg ? (
                    <p className="text-success bold display-8">{emailMsg}</p>
                  ) : (
                    ""
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Kachchh;
