import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Bhutan() {
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
    if (!name || name.length <= 0) {
      setNameError(true);
      nmErr = true;
    } else {
      nmErr = false;
      setNameError(false);
    }
    if (!phno || phno.length < 10) {
      setPhError(true);
      phErr = true;
    } else {
      phErr = false;
      setPhError(false);
    }
    if (!nmErr && !phErr) {
      emailjs
        .sendForm("service_v9zn2ll", "template_39wtvxi", form.current, "jrkLYS4T7WvckjHGh")
        .then(
          () => setEmailMsg("Successfully submitted Enquiry! A call is on its way to you."),
          () => setEmailMsg("Server Error. Please try after sometime!")
        )
        .finally(() => {
          setEmail("");
          setName("");
          setPhno("");
        });
    }
  };

  return (
    <div>
      {/* Banner */}
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={window.location.origin + "/assets/images/bhutan/bhutan-banner.jpg"}
              alt="bhutan"
            />
          </div>
        </div>
      </div>

      <section className="pt-5 pb-5 bhutan-tour">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1 className="font-weight-bold mb-3" style={{ fontSize: "2.0rem", fontWeight: "300" }}>
                <u>7 Nights - 8 Days Bhutan Delight Tour Itinerary</u>
              </h1>
            </div>
            <div className="col-4 mt-3">
              <a target="_blank" href="assets/downloads/bhutan-2025-jktw-eng.pdf">
                <i className="text-danger fa-solid fa-download fa-beat-fade">&nbsp;</i>
                <span className="text-danger">Download Brochure</span>
              </a>
            </div>
          </div>

          <p>(Confirmed Departure from Delhi)</p>
          <p>(Valid for August, September, October & November 2025)</p>

          <div className="row mt-5">
            <div className="col-md-12">
              <h4>Package Cost</h4>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Adult (Per Person)</th>
                    <th>Total for Couple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>₹59,450/-</td>
                    <td>₹1,18,900/-</td>
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
                  <tr><td>August</td><td>17th August</td></tr>
                  <tr><td>September</td><td>17th September</td></tr>
                  <tr><td>October</td><td>17th October</td></tr>
                  <tr><td>November</td><td>17th November</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Inclusions */}
          <div className="row mt-5">
            <div className="col-md-6">
              <h4>✅ Tour Inclusions</h4>
              <ul className="list-group list-group-borderless list-group-icon-primary-bg border-bottom">
                <li className="text-dark list-group-item"><i className="fas fa-check"></i>Air Tickets (Dynamic fare)</li>
                <li className="text-dark list-group-item"><i className="fas fa-check"></i>7 Nights accommodation at well-rated hotels</li>
                <li className="text-dark list-group-item"><i className="fas fa-check"></i>Daily Breakfast & Dinner</li>
                <li className="text-dark list-group-item"><i className="fas fa-check"></i>All Transfers & Sightseeing on private basis</li>
                <li className="text-dark list-group-item"><i className="fas fa-check"></i>Permit Fees & Hotel Taxes</li>
                <li className="text-dark list-group-item"><i className="fas fa-check"></i>Excursion to Tiger’s Nest Monastery & Chele La Pass</li>
                <li className="text-dark list-group-item"><i className="fas fa-check"></i>Guided sightseeing in Thimphu & Punakha</li>
              </ul>
            </div>
            {/* Exclusions */}
            <div className="col-md-6">
              <h4>❌ Exclusions</h4>
              <ul className="list-group list-group-borderless list-group-icon-primary-bg border-bottom">
                <li className="text-dark list-group-item"><i className="fas fa-times"></i>Personal expenses</li>
                <li className="text-dark list-group-item"><i className="fas fa-times"></i>Entry fees, camera charges</li>
                <li className="text-dark list-group-item"><i className="fas fa-times"></i>Room heater charges</li>
                <li className="text-dark list-group-item"><i className="fas fa-times"></i>Travel insurance</li>
                <li className="text-dark list-group-item"><i className="fas fa-times"></i>Services not mentioned in inclusions</li>
              </ul>
            </div>
          </div>

          {/* Sustainable Development Fee */}
          <div className="row mt-5">
            <div className="col-md-12">
              <h4>🌱 Sustainable Development Fee (SDF)</h4>
              <p>INR 1,200 per person per night for Indian nationals. Children (6–12 years): 50% concession; below 5 years exempt.</p>
            </div>
          </div>

          {/* Flight details */}
          <div className="row mt-5">
            <div className="col-md-12">
              <h4>✈ Flight Details</h4>
              <ul className="list-group list-group-borderless list-group-icon-primary-bg border-bottom">
                <li className="text-dark list-group-item"><i className="fas fa-plane"></i>Onward: Delhi ➝ Bagdogra (IndiGo 6E-2034, 07:30 AM – 09:30 AM)</li>
                <li className="text-dark list-group-item"><i className="fas fa-plane"></i>Return: Bagdogra ➝ Delhi (IndiGo 6E-2392, 05:10 PM – 07:20 PM)</li>
                <li className="text-dark list-group-item"><i className="fas fa-check"></i>Airfare included in price (dynamic, subject to availability)</li>
              </ul>
            </div>
          </div>

          {/* Cancellation policy */}
          <div className="row mt-5">
            <div className="col-md-12">
              <h4>📌 Cancellation Policy</h4>
              <ul className="list-group list-group-borderless list-group-icon-primary-bg border-bottom">
                <li className="text-dark list-group-item"><i className="fas fa-check"></i>30% cancellation – 45+ days before travel</li>
                <li className="text-dark list-group-item"><i className="fas fa-check"></i>75% cancellation – 20–44 days before travel</li>
                <li className="text-dark list-group-item"><i className="fas fa-check"></i>100% cancellation – 0–19 days before travel</li>
                <li className="text-dark list-group-item"><i className="fas fa-check"></i>Air Tickets are non-refundable</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section style={{ padding: "50px 0", background: "#f8f9fa" }}>
        <div className="container">
          <h2 className="font-weight-bold mb-5 text-warning">Submit Your Enquiry Here...</h2>
          <form ref={form} onSubmit={handleSubmit}>
            <div className="form-row">
              {/* form fields same as dubai */}
              {/* ... */}
            </div>
            <input className="btn btn-primary" type="submit" value="Send" />
            {emailMsg && <p className="text-success bold display-8">{emailMsg}</p>}
          </form>
        </div>
      </section>
    </div>
  );
}

export default Bhutan;
