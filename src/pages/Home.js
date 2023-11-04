import React from "react";

function Home() {
  return (
    <div>
      <section className="p-0 height-700 parallax-bg home-banner-img">
        <div className="container h-100">
          <div className="row justify-content-between align-items-center h-100">
            <div className="col-md-8 mb-7">
              <h4>JK TRAVEL WORLD</h4>
              <h1 className="display-4 font-weight-bold">
                Top Tour And Travel Agency In Ahmedabad.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-lg-n9 mt-sm-0 pb-0 z-index-9 booking-search">
        <div className="container ">
          <div className="row shadow border-radius-3">
            <div className="col-md-12 np">
              <div className="feature-box h-100">
                <div className="tab_container">
                  <input id="tab1" type="radio" name="tabs" /* checked */ />
                  <label htmlFor="tab1">
                    <i className="fas fa-utensils"></i>
                    <span>Hotels</span>
                  </label>
                  <input id="tab2" type="radio" name="tabs" />
                  <label htmlFor="tab2">
                    <i className="fas fa-helicopter"></i>
                    <span>Flights</span>
                  </label>
                  <input id="tab3" type="radio" name="tabs" />
                  <label htmlFor="tab3">
                    <i className="fas fa-car-side"></i>
                    <span>Cars</span>
                  </label>
                  <input id="tab4" type="radio" name="tabs" />
                  <label htmlFor="tab4">
                    <i className="fas fa-ship"></i>
                    <span>Cruises</span>
                  </label>
                  <input id="tab5" type="radio" name="tabs" />
                  <label htmlFor="tab5">
                    <i className="fas fa-route"></i>
                    <span>Tours</span>
                  </label>
                  <section id="content1" className="tab-content">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="fas fa-map-marker-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="City, Point of Interest or U.S. Zip Code"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="far fa-calendar-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            id="datepicker"
                            autoComplete="off"
                            placeholder="Check-in"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="far fa-calendar-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            id="datepicker-out"
                            autoComplete="off"
                            placeholder="Check-out"
                          />
                        </div>
                      </div>
                      <div className="col-lg-1 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          <select className="custom-select select-big">
                            <option /* selected="" */>Rooms</option>
                            <option value="location1">01</option>
                            <option value="location2">02</option>
                            <option value="location3">03</option>
                            <option value="location4">04</option>
                            <option value="location5">05</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-1 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          <select className="custom-select select-big">
                            <option /* selected="" */>Guests</option>
                            <option value="location1">01</option>
                            <option value="location2">02</option>
                            <option value="location3">03</option>
                            <option value="location4">04</option>
                            <option value="location5">05</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          <button
                            className="btn btn-primary btn-lg btn-grad"
                            type="submit"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section id="content2" className="tab-content">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="fas fa-map-marker-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="From : City, Airport, U.S. Zip"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="fas fa-map-marker-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="To : City, Airport, U.S. Zip"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="far fa-calendar-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            id="datepicker-1"
                            autoComplete="off"
                            placeholder="Departing"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="far fa-calendar-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            id="datepicker-2"
                            autoComplete="off"
                            placeholder="Returning"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          <button
                            className="btn btn-primary btn-lg btn-grad"
                            type="submit"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section id="content3" className="tab-content">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="fas fa-map-marker-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Pick-up Location"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="fas fa-map-marker-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Drop-off Location"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="far fa-calendar-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            id="datepicker-3"
                            autoComplete="off"
                            placeholder="Pick-up Date"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="far fa-calendar-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            id="datepicker-4"
                            autoComplete="off"
                            placeholder="Drop-ff Date"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          <button
                            className="btn btn-primary btn-lg btn-grad"
                            type="submit"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section id="content4" className="tab-content">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="fas fa-map-marker-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="enter a destination or hotel name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="far fa-calendar-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            id="datepicker-5"
                            autoComplete="off"
                            placeholder="Departure Date"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          <select className="custom-select select-big">
                            <option /* selected="" */>Cruise Length</option>
                            <option value="location1">1-2 Night</option>
                            <option value="location2">2-3 Night</option>
                            <option value="location3">3-4 Night</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          <select className="custom-select select-big">
                            <option /* selected="" */>Cruise Line</option>
                            <option value="location1">
                              Azamara Club Cruises
                            </option>
                            <option value="location2">Celebrity Cruises</option>
                            <option value="location3">Cruise & Maritime</option>
                            <option value="location4">Oceania Cruises</option>
                            <option value="location5">
                              Peter Deilmann Cruises
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          <button
                            className="btn btn-primary btn-lg btn-grad"
                            type="submit"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section id="content5" className="tab-content">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="fas fa-map-marker-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="From : City, Airport, U.S. Zip"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="fas fa-map-marker-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="To : City, Airport, U.S. Zip"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="far fa-calendar-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            id="datepicker-6"
                            autoComplete="off"
                            placeholder="Departing"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="far fa-calendar-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            id="datepicker-7"
                            autoComplete="off"
                            placeholder="Returning"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          <button
                            className="btn btn-primary btn-lg btn-grad"
                            type="submit"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service pt80 pb80 service-home">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8 mx-auto">
              <div className="title text-center"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mt-30">
              <div className="featureBox icon-grad h-100">
                <div className="feature-box-icon">
                  <i className="fas fa-route"></i>
                </div>
                <h3 className="feature-box-title">Best Travel Agent</h3>
                <p className="feature-box-desc">
                  Get best tour top travel packages in reasonable price all over
                  india. Customize your pacakge, get rental cars, book you rooms
                  and hotels.
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-30">
              <div className="featureBox icon-grad h-100">
                <div className="feature-box-icon">
                  <i className="fab fa-avianex"></i>
                </div>
                <h3 className="feature-box-title">Flight Bookings</h3>
                <p className="feature-box-desc">
                  The best flight booking is one that offers the most convenient
                  itinerary at the lowest price, with flexible cancellation and
                  change policies.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-30">
              <div className="featureBox icon-grad h-100">
                <div className="feature-box-icon">
                  <i className="fas fa-train"></i>
                </div>
                <h3 className="feature-box-title">Best Price Guarantee</h3>
                <p className="feature-box-desc">
                  We provide a seamless and hassle-free booking experience, with
                  competitive prices and excellent customer service.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
