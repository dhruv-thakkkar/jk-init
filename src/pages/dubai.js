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
                window.location.origin + "/assets/images/dubai/dubai-banner.jpg"
              }
              alt="dubai"
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

      <section className="pt-5 pb-5 dubai-tour">
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
                <u>5 Nights - 6 Days Dubai Tour Itinerary</u>
              </h1>
            </div>
            <div className="col-4 mt-3">
              <a
                target="_blank"
                href="assets/downloads/dubai-2025-jktw-eng.pdf"
              >
                <i className="text-danger fa-solid fa-download fa-beat-fade">
                  &nbsp;
                </i>
                <span className="text-danger">Download Brochure</span>
              </a>
            </div>
          </div>

          <p>(Confirmed Departure from Ahmedabad)</p>
          <p>(Valid for July, August & September 2025)</p>

          <div className="row mt-5">
            <div className="col-md-12">
              <h4>Package Cost</h4>
            </div>

            <div className="col-md-12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Adult</th>
                    <th>Child with extra mattress</th>
                    <th>Child without mattress</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>₹67,999/- per person</td>
                    <td>₹65,999/- per person</td>
                    <td>₹57,999/- per person</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-12">
              <h4>Confirmed Departure Dates</h4>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Dates</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>July</td>
                    <td>17th, 24th July; </td>
                  </tr>
                  <tr>
                    <td>August</td>
                    <td>11th, 21st, 28th August</td>
                  </tr>            <tr>
                    <td>September</td>
                    <td>5th, 12th, 19th, 26th September</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <h4>✅ Tour Inclusions</h4>
              <ul class="list-group list-group-borderless list-group-icon-primary-bg border-bottom">
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Round-trip Economy Airfare from
                  Ahmedabad to Dubai & return
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>5 Nights Hotel Accommodation in
                  Dubai
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>UAE Tourist Visa (Normal)
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Dubai Airport Pick-up & Drop-off
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Daily Breakfast at Hotel
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Meals Included: 5 Breakfasts, 5
                  Dinners
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>All Transfers & Tours on SIC Basis
                  (Seat-in-Coach)
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h4>🏙 Sightseeing & Experiences</h4>
              <ul class="list-group list-group-borderless list-group-icon-primary-bg border-bottom">
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Marina Dhow Cruise with Dinner
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Half-Day Dubai City Tour with
                  photo stops
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Dubai Mall Visit + Evening
                  Fountain Show
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Burj Khalifa – 124th Floor
                  Observatory Ticket
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Desert Safari with Dune Bashing &
                  Dinner
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Full-Day Abu Dhabi City Tour
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Visit to Abu Dhabi Swaminarayan
                  Temple
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Tourism Dirham Charges Included
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <h4>❌ Exclusions</h4>
              <ul class="list-group list-group-borderless list-group-icon-primary-bg border-bottom">
                <li class="text-dark list-group-item">
                  <i class="fas fa-times"></i>Lunch
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-times"></i>Additional personal activities
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-times"></i>GST
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-times"></i>Any services not mentioned under
                  Inclusions
                </li>
              </ul>
            </div>


            <div className="col-md-6">
              <h4>📌 Cancellation Policy</h4>
              <ul class="list-group list-group-borderless list-group-icon-primary-bg border-bottom">
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>50% cancellation fee after booking
                  confirmation
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>100% cancellation fee if cancelled
                  within 30 days of departure
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Air Ticket worth ₹35,000 is
                  non-refundable
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <h4>✈ Before You Travel</h4>
              <ul class="list-group list-group-borderless list-group-icon-primary-bg border-bottom">
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Passport valid at least 6 months
                  from date of travel
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>UAE tourist visa printout included
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Travel insurance recommended
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Carry UAE Dirhams (AED)
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Pack modest, comfortable light
                  cotton clothes
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h4>🏨 Accommodation & Meals</h4>
              <ul class="list-group list-group-borderless list-group-icon-primary-bg border-bottom">
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Daily hotel breakfast included
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>5 dinners as per itinerary
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <h4>🚐 Transportation & Transfers</h4>
              <ul class="list-group list-group-borderless list-group-icon-primary-bg border-bottom">
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>All tours & airport transfers on
                  SIC (Seat-in-Coach)
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Be ready in hotel lobby 10-15 min
                  before pickup
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>No eating/drinking in public
                  vehicles
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h4>🕌 Culture & Etiquette</h4>
              <ul class="list-group list-group-borderless list-group-icon-primary-bg border-bottom">
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Modest clothing especially in
                  public/religious places
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Respect local customs & avoid
                  public displays of affection
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Ask permission before taking
                  photos of locals
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <h4>🛍 Shopping & Sightseeing</h4>
              <ul class="list-group list-group-borderless list-group-icon-primary-bg border-bottom">
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Dubai Mall & Fountain Show
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Popular souvenirs: dates,
                  perfumes, Arabic coffee, gold, textiles
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Bargaining in souks, not in malls
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h4>📱 Connectivity & Communication</h4>
              <ul class="list-group list-group-borderless list-group-icon-primary-bg">
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Tourist SIM cards available at
                  airport or malls
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Free Wi-Fi in most hotels & public
                  places
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <h4>☀ Weather & Health</h4>
              <ul class="list-group list-group-borderless list-group-icon-primary-bg">
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Hot & dry in September: stay
                  hydrated, use sunscreen
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Carry medication with
                  prescription; avoid banned substances
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h4>📌 Important Reminders</h4>
              <ul class="list-group list-group-borderless list-group-icon-primary-bg">
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Dubai is 1.5 hours behind IST
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Friday morning is holiday; limited
                  services
                </li>
                <li class="text-dark list-group-item">
                  <i class="fas fa-check"></i>Emergency Numbers: Police 999,
                  Ambulance 998, Fire 997
                </li>
              </ul>
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
