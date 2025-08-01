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

          <p>(Pickup & Drop: Delhi or Chandigarh)</p>
          <p>(Valid for July, August & September)</p>
          <p>Destination Covered: : Shimla (2N) – Manali (3N)</p>

          <div className="row mt-5">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6 ">
                  <h4>Day 01: Delhi/Chandigarh - Shimla (Approx 8-9 hrs)</h4>

                  <ul class="list-group list-group-borderless list-group-icon-primary-bg border-bottom">
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>Pickup from Delhi/Chandigarh
                      by Private Vehicle
                    </li>
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>Drive to Shimla via scenic
                      hills and valleys
                    </li>
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>Optional visit: Pinjore Garden
                      or Timber Trail (own cost)
                    </li>
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>Arrive Shimla in the evening,
                      check-in at hotel
                    </li>
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>Dinner and overnight stay in
                      Shimla
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h4>Day 02: Shimla - Kufri Excursion & Local Sightseeing</h4>

                  <ul class="list-group list-group-borderless list-group-icon-primary-bg border-bottom">
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>Breakfast at hotel
                    </li>
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>
                      Proceed to Kufri: horse riding, yak riding, adventure park
                      (own cost)
                    </li>
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>
                      Visit Himalayan Nature Park, Green Valley View, Mahasu
                      Peak (Jeep/Pony ride at own cost)
                    </li>
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>
                      Return to Shimla for local sightseeing: Mall Road, Ridge,
                      Christ Church, Lakkar Bazaar, Scandal Point, Jakhu Temple
                      by cable car (ticket not included)
                    </li>
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>Dinner and overnight stay in
                      Shimla
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-md-6">
                  <h4>Day 03: Shimla – Kullu – Manali (Approx 8 hrs)</h4>
                  <ul class="list-group list-group-borderless list-group-icon-primary-bg border-bottom">
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>Breakfast & checkout
                    </li>
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>Drive to Manali via Kullu
                      Valley, Sundernagar Lake, Pandoh Dam
                    </li>
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>Optional river rafting or
                      paragliding in Kullu (own cost)
                    </li>
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>Visit Kullu Shawl Factory
                    </li>
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>Evening arrival in Manali,
                      check-in at hotel
                    </li>
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>Dinner and overnight stay in
                      Manali
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h4>
                    Day 04: Manali – Solang Valley / Rohtang Pass Excursion
                  </h4>
                  <ul class="list-group list-group-borderless list-group-icon-primary-bg border-bottom">
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>Early breakfast
                    </li>
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>Visit Solang Valley – snow
                      activities, skiing, ropeway, zipline (own cost)
                    </li>
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>Return to hotel
                    </li>
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>Dinner and overnight stay in
                      Manali
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-md-6">
                  <h4>Day 05: Manali to Rohtang Pass Local Sightseeing</h4>
                  <ul class="list-group list-group-borderless list-group-icon-primary-bg">
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>Breakfast at hotel
                    </li>
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>Visit Rohtang Pass (subject to
                      permit and weather): by Union Taxi (cost not included)
                    </li>
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>Enjoy snow-capped peaks,
                      glaciers, Himalayan views
                    </li>
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>Dinner and overnight stay in
                      Manali
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h4>Day 06: Manali – Chandigarh/Delhi Drop</h4>
                  <ul class="list-group list-group-borderless list-group-icon-primary-bg">
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>Early breakfast and check-out
                    </li>
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>Drive back to Delhi/Chandigarh
                      with fond memories
                    </li>
                    <li class="text-dark list-group-item">
                      <i class="fas fa-check"></i>Tour ends with a smile 😊
                    </li>
                  </ul>
                </div>
              </div>

              <h4 className="mt-5"> Night Stay Details</h4>
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
                    <td>Hotel Seven Hills</td>
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
                    <td>₹ 20,200</td>
                    <td>₹ 23,800</td>
                    <td>₹ 29,000</td>
                  </tr>
                  <tr>
                    <td>If 2 Couples (Two Room) Crysta</td>
                    <td>₹ 18,500</td>
                    <td>₹ 22,100</td>
                    <td>₹ 27,300</td>
                  </tr>
                  <tr>
                    <td>If 3 Couples (Three Room) Crysta</td>
                    <td>₹ 14,600</td>
                    <td>₹ 18,200</td>
                    <td>₹ 23,400</td>
                  </tr>
                  <tr>
                    <td>If 5 Couples (Five Room) Tempo</td>
                    <td>₹ 14,200</td>
                    <td>₹ 17,800</td>
                    <td>₹ 23,000</td>
                  </tr>
                  <tr>
                    <td>Extra Adult in Same Room</td>
                    <td>₹ 6,900</td>
                    <td>₹ 9,700</td>
                    <td>₹ 13,600</td>
                  </tr>
                  <tr>
                    <td>Extra Child with Mattress</td>
                    <td>₹ 5,700</td>
                    <td>₹ 7,700</td>
                    <td>₹ 11,100</td>
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
                        <i class="fas fa-check"></i>Daily Breakfast & Dinner
                        (Total 5 Breakfasts & 5 Dinners)
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
                        <i class="fas fa-times"></i>Rohtang Pass (Union Car
                        charges)
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
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <h4>✅ Packing Essentials</h4>
              <ul class="list-group list-group-borderless list-group-icon-primary-bg border-bottom border-bottom">
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Warm Clothes: Carry jackets,
                  sweaters, gloves, caps
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Comfortable Footwear for walking &
                  sightseeing (Kufri, Mall Roads, Solang Valley)
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Rain Protection: Umbrella or
                  raincoat (June–Sept)
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Medication: Cold, fever, altitude
                  & motion sickness medicines
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Skincare: Sunscreen, moisturizer,
                  lip balm
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h4>🛣 Travel & Transport</h4>
              <ul class="list-group list-group-borderless list-group-icon-primary-bg border-bottom border-bottom">
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Start Early to avoid traffic on
                  hill roads
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Snacks & Water for long drives
                  (Shimla to Manali)
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Music & Charger: Download music,
                  carry charger/power bank
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <h4>🏞 Sightseeing Tips</h4>
              <ul class="list-group list-group-borderless list-group-icon-primary-bg border-bottom">
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Jakhu Temple (Shimla): Cable car
                  or walk; beware of monkeys
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Kufri & Solang Valley: Warm layers
                  & sunglasses; optional rides & skiing
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Rohtang Pass: Needs permit & union
                  taxi (not included)
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Manali Local Tour: Hadimba Temple,
                  Vashisht Hot Spring, Mall Road (walkable)
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h4>🏨 Hotel & Food Tips</h4>
              <ul class="list-group list-group-borderless list-group-icon-primary-bg border-bottom">
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Check Heaters: Usually chargeable
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Dinner Timings: Mostly till 9:30
                  PM
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Local Cuisine: Try Himachali food
                  at local dhabas & cafes
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <h4>💡 General Tips</h4>
              <ul class="list-group list-group-borderless list-group-icon-primary-bg border-bottom">
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Carry government-issued ID
                  (original + photocopy)
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Altitude Care: Stay hydrated &
                  avoid overexertion on Day 1
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>ATMs: Carry some cash for remote
                  areas like Sissu, Kufri
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Mobile Network: Jio & BSNL better;
                  Airtel/Vi may be weak
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Shopping: Shawls, woollens,
                  handmade items at local markets
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h4>⚠ Safety Reminders</h4>
              <ul class="list-group list-group-borderless list-group-icon-primary-bg border-bottom">
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Avoid risky adventure activities
                  in poor weather
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Follow local guide instructions at
                  snow points & valleys
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Check daily weather forecasts
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Do not litter – keep the Himalayas
                  clean
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <h4>🚗 Transportation Policy</h4>
              <ul class="list-group list-group-borderless list-group-icon-primary-bg ">
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Private vehicle for sightseeing &
                  transfers (point-to-point)
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Vehicle available till 8:00 PM;
                  extra charge after
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>Driver allowance ₹300 after 8:00
                  PM; ₹500 after 10:00 PM
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>AC won’t work in hilly areas
                  (technical & safety)
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>For safety, do not ask driver to
                  speed on hill roads
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h4>📄 Tour Package Cancellation Policy</h4>
              <ul class="list-group list-group-borderless list-group-icon-primary-bg">
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>10% charge if cancelled ≥ 30 days
                  before travel
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>25% charge if cancelled 20–29 days
                  before travel
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>50% charge if cancelled 15–19 days
                  before travel
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>100% charge if cancelled within 14
                  days before travel
                </li>
                <li class="list-group-item text-dark">
                  <i class="fas fa-check"></i>No refund for unused services;
                  subject to hotel policy
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
