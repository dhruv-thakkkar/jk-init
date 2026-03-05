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
                "/assets/images/himachal/himachal-banner.jpg"
              }
              alt="himachal"
            ></img>
          </div>
        </div>
      </div>

      <section className="pt-5 pb-5 himachal-tour">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1
                style={{
                  fontSize: "2.0rem",
                  fontWeight: "300",
                  lineHeight: "1.2",
                }}
                className="font-weight-bold mb-3"
              >
                <u> 5 Nights - 6 Days Himachal Tour Itinerary</u>
              </h1>
            </div>
            <div className="col-4 mt-3">
              <a
                target="_blank"
                href="assets/downloads/himachal-2025-jktw-eng.pdf"
              >
                <i className="text-danger fa-solid fa-download fa-beat-fade">
                  &nbsp;
                </i>
                <span className="text-danger blink">Download Brochure</span>
              </a>
            </div>
          </div>

          <h4 className="mt-2"> Night Stay Details</h4>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Location</th>
                <th>Option 1</th>
                <th>Option 2</th>
                <th>Option 3</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Shimla (2N)</td>
                <td>Hotel Jain Resort</td>
                <td>Asia the Dawn</td>
                <td>Shimla Havens Resorts</td>
              </tr>
              <tr>
                <td>Manali (3N)</td>
                <td>Hotel Avenue</td>
                <td>Royal Park</td>
                <td>White Stone Resort</td>
              </tr>
            </tbody>
          </table>

          <h4 className="mt-5">Tour Package Cost (Per Person)</h4>

          <table className="table table-striped">
            <thead>
              <tr>
                <th>Category</th>
                <th>Option 1</th>
                <th>Option 2</th>
                <th>Option 3</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>If 1 Couple (One Room) Sedan</td>
                <td>₹ 20,500</td>
                <td>₹ 23,500</td>
                <td>₹ 29,500</td>
              </tr>
              <tr>
                <td>If 2 Couples (Two Room) Crysta</td>
                <td>₹ 18,500</td>
                <td>₹ 21,000</td>
                <td>₹ 27,500</td>
              </tr>
              <tr>
                <td>If 3 Couples (Three Room) Crysta</td>
                <td>₹ 16,000</td>
                <td>₹ 18,500</td>
                <td>₹ 24,500</td>
              </tr>
              <tr>
                <td>If 5 Couples (Five Room) Tempo</td>
                <td>₹ 15,500</td>
                <td>₹ 17,500</td>
                <td>₹ 24,500</td>
              </tr>
              <tr>
                <td>Extra Adult in Same Room</td>
                <td>₹ 8,500</td>
                <td>₹ 10,300</td>
                <td>₹ 13,500</td>
              </tr>
              <tr>
                <td>Extra Child with Mattress</td>
                <td>₹ 5,500</td>
                <td>₹ 7,500</td>
                <td>₹ 8,500</td>
              </tr>
              <tr>
                <td>Child below 5 years (without bed)</td>
                <td>Free</td>
                <td>Free</td>
                <td>Free</td>
              </tr>
            </tbody>
          </table>

          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                <h4>✅ Package Inclusions</h4>

                <ul class="mt-2 list-group list-group-borderless list-group-icon-primary-bg border-bottom">
                  <li class="text-dark list-group-item">
                    <i class="fas fa-check"></i>5 Nights / 6 Days Hotel
                    Accommodation as per option
                  </li>
                  <li class="text-dark list-group-item">
                    <i class="fas fa-check"></i>Daily Breakfast & Dinner (Total
                    5 Breakfasts & 5 Dinners in mentioned respective Hotels)
                  </li>
                  <li class="text-dark list-group-item">
                    <i class="fas fa-check"></i>Sightseeing & Transfers by
                    Private Vehicle
                  </li>
                  <li class="text-dark list-group-item">
                    <i class="fas fa-check"></i>Pick-up & Drop from Delhi or
                    Chandigarh
                  </li>
                </ul>
              </div>

              <div className="col-md-6">
                <h4>❌ Package Exclusions</h4>

                <ul class="mt-2 list-group list-group-borderless list-group-icon-primary-bg border-bottom">
                  <li class="text-dark list-group-item">
                    <i class="fas fa-times"></i>Airfare / Railway Tickets
                  </li>
                  <li class="text-dark list-group-item">
                    <i class="fas fa-times"></i>Lunch
                  </li>
                  <li class="text-dark list-group-item">
                    <i class="fas fa-times"></i>Jeep Ride & Pony at Kufri
                  </li>
                  <li class="text-dark list-group-item">
                    <i class="fas fa-times"></i>Cable Car for Jakhu Temple
                  </li>
                  <li class="text-dark list-group-item">
                    <i class="fas fa-times"></i>River Rafting in Kullu
                  </li>
                  <li class="text-dark list-group-item">
                    <i class="fas fa-times"></i>Rohtang Pass (Union Car charges)
                  </li>
                  <li class="text-dark list-group-item">
                    <i class="fas fa-times"></i>Any items not listed in
                    “Inclusions”
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM SECTION (UNCHANGED) */}

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
