import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Chardham() {
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
                "/assets/images/chardham/chardham-banner.jpg"
              }
              alt="Chardham Yatra"
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
                <u>Chardham Yatra Package 2024-25</u>
              </h1>
              <div className="" style={{ overflow: "auto" }}>
                <table
                  className="table table-striped table-bordered"
                  style={{ minWidth: "100px" }}
                >
                  <thead>
                    <tr>
                      <th
                        className="month-ttl"
                        colSpan="12"
                        bgcolor="#f4f4f4"
                        height="44"
                      >
                        <h1 className="text-center">
                          {" "}
                          Daily Departure from May 2025
                        </h1>
                      </th>
                    </tr>
                    <tr>
                      <td className="td-center" rowSpan="2">
                        <strong>Rates (INR) Per Person </strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="td-color"><strong>4 sharing room</strong></td>
                      <td className="td-color"><strong>3 sharing room</strong></td>
                      <td className="td-color"><strong>2 sharing room</strong></td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-title="Category"><strong>Haridwar To Haridwar</strong></td>
                      <td>₹29,499</td>
                      <td>₹31,499</td>
                      <td>₹33,499</td>
                    </tr>
                    <tr>
                      <td data-title="Category"><strong>Delhi To Delhi</strong></td>
                      <td>₹31,499</td>
                      <td>₹33,499</td>
                      <td>₹35,499</td>
                    </tr>
                    <tr>
                      <td data-title="Category"><strong>Ahmedabad</strong><br/>
                      (With 3AC Rajdhani train both sides ticket)
                      </td>
                      <td>₹35,199</td>
                      <td>₹37,199</td>
                      <td>₹39,199</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <p class="text-center"><strong>Note: Including Breakfast & Lunch</strong></p>
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
export default Chardham;
